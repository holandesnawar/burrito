import type { Metadata } from "next";
import { Salsa, Inter } from "next/font/google";
import "./globals.css";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burrito Azteca — De Mexicaan van Kampen",
  description:
    "Authentieke Mexicaanse keuken in het hart van Kampen. Burritos, quesadillas, fajitas en meer. Reserveer of bestel online.",
  metadataBase: new URL("https://burrito-azteca.nl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${salsa.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-light text-ink">
        {children}
      </body>
    </html>
  );
}
