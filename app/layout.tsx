import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "House of Sirena",
  description:
    "House of Sirena is a luxury beauty house inspired by the quiet strength of the ocean, creating thoughtfully crafted collections that celebrate individuality through timeless beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.variable} ${cormorant.variable}`}>

        <ScrollToTop />

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}