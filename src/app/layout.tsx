import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Snehatheeram | St. Camillus Care Home, Aluva",
  description: "Official website of Snehatheeram St. Camillus Care Home in Aluva, Kerala. Managed by Sneha Charitable Trust under the Camillian Order, providing holistic elderly care, PLHIV care, outreach palliative programs, and counseling services.",
  keywords: ["Snehatheeram", "Camillians India", "St. Camillus Care Home", "Aluva Care Home", "Elderly Care Kerala", "PLHIV Support Kerala", "Sneha Charitable Trust", "Ministers of the Infirm"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body style={{ paddingTop: "var(--header-height)" }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

