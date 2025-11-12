import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { AOSInit } from "@/components/shared/AOSInit";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ar Studio",
  description:
    "Desenvolvimento de sites, sistemas web e APIs personalizados para pequenas e médias empresas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
