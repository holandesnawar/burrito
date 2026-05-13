import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO ?? "info@burrito-azteca.nl";

// Rate limit: 5 envíos por IP cada 10 minutos (en memoria por instancia).
// Sirve como mitigación básica contra spam; para algo robusto usar Vercel KV.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQ = 5;
const rateMap = new Map<string, { count: number; resetAt: number }>();

function getIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQ) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  const ip = getIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Inténtalo de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  let body: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message } = body;
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Validación básica: longitudes razonables y email con @
  if (
    firstName.length > 100 ||
    lastName.length > 100 ||
    email.length > 200 ||
    (phone && phone.length > 50) ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Campos demasiado largos" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  const safe = (v: string) =>
    v.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ] as string,
    );

  const html = `
    <p>Nuevo mensaje de contacto.</p>
    <p><strong>Nombre:</strong> ${safe(firstName)}</p>
    <p><strong>Apellidos:</strong> ${safe(lastName)}</p>
    <p><strong>Email:</strong> ${safe(email)}</p>
    <p><strong>Telefono:</strong> ${phone ? safe(phone) : "-"}</p>
    <p><strong>Mensaje:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${safe(message)}</pre>
  `;

  const text = [
    "Nuevo mensaje de contacto.",
    "",
    `Nombre: ${firstName}`,
    `Apellidos: ${lastName}`,
    `Email: ${email}`,
    `Telefono: ${phone || "-"}`,
    `Mensaje: ${message}`,
  ].join("\n");

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "Burrito Azteca <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: TO_EMAIL,
    replyTo: email,
    subject: "Mensaje de Contacto",
    html,
    text,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
