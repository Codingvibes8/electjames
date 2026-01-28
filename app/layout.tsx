import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electric James | Trusted Electrician in North West London (NW2)",
  description: "Good honest reliable electrician based in Cricklewood, NW2. Fully qualified (18th edition) and Part P certified. NAPIT approved. Serving North West London with air conditioning, EV charging, EICR certificates, and more.",
  keywords: "electrician NW2, Cricklewood electrician, North West London electrician, NAPIT approved, Part P certified, EICR certificates, EV charger installation, air conditioning installation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
