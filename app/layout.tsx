import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Market",
  description: "Generated by Tehseen Afzal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
