import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const display = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "HPTA — Hyper Professional Tattoo Assortment",
  description: "Professional tattoo machines by HPTA. Brand catalog and inquiry."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="bg-ink-950 font-sans text-stone-100 antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
