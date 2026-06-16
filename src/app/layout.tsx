import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Coding Ferpa | Além do código",
  description: "Comunidade de tecnologia para jovens em Fernandópolis",
  metadataBase: new URL("https://codingferpa.org"),
  openGraph: {
    title: "Coding Ferpa | Além do código",
    description: "Comunidade de tecnologia para jovens em Fernandópolis",
    url: "https://codingferpa.org",
    siteName: "Coding Ferpa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Coding Ferpa — Comunidade de tecnologia em Fernandópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding Ferpa | Além do código",
    description: "Comunidade de tecnologia para jovens em Fernandópolis",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: [{ url: "/assets/icon.png", sizes: "16x16", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} ${poppins.className} flex flex-col min-h-screen font-body`}
      >
        <Header />
        <main className="flex-grow pt-[var(--header-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
