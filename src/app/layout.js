import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UtilityVerse | Fast, Local Online Productivity Tools",
  description: "A professional collection of clean, secure, and instant browser-local tools. JSON Formatter, QR Generator, Password Generator, EMI & GST Calculators, Age Calculator, and Word Counter. 100% private.",
  openGraph: {
    title: "UtilityVerse | Online Tools Collection",
    description: "Fast, secure, and private browser-local utility tools.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50/30 text-zinc-900 font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
