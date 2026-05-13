import type { NextConfig } from "next";

const securityHeaders = [
  // Impide que la web sea embebida en iframes de terceros (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // El navegador no debe adivinar tipos MIME.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Solo enviar el origin como referrer en cross-origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Apaga APIs sensibles que no usamos.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // HSTS: solo HTTPS en futuras visitas (Vercel sirve HTTPS).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
