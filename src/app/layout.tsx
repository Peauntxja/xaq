import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreProvider } from "@/components/store-provider";

export const metadata: Metadata = {
  title: "Hyper Professional Tattoo Assortment",
  description: "A static demo store rebuilt from reference site research with mock data and full page structure."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
