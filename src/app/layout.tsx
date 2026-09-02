import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreProvider } from "@/components/store-provider";

export const metadata: Metadata = {
  title: "Hyper Professional Tattoo Assortment",
  description: "A static HPTA storefront demo aligned to the Vlad Blad reference structure."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var targets = [
                  'data-immersive-translate-page-theme',
                  'data-new-gr-c-s-check-loaded',
                  'data-gr-ext-installed',
                  'cz-shortcut-listen'
                ];

                function strip(node) {
                  if (!node || !node.removeAttribute) return;
                  for (var i = 0; i < targets.length; i += 1) {
                    node.removeAttribute(targets[i]);
                  }
                }

                strip(document.documentElement);
                strip(document.body);
              })();
            `
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
