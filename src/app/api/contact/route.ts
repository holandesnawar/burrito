import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO ?? "info@burrito-azteca.nl";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
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
