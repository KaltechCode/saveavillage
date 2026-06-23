import type { Metadata } from "next";
import { Manrope, Quicksand, Caveat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Save a Village",
  description: "Save a Village",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${quicksand.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
