// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ✅ Metadata: pastikan ditulis dengan benar
export const metadata: Metadata = {
  title: "Devnusa - Jasa Website & Aplikasi",
  description: "Devnusa melayani pembuatan website, aplikasi mobile, dan desktop untuk UMKM dan instansi.",
  verification: {
    google: "ELN297p-nq5UOs9VPnf8Q1ComtRkejafxmvJa2ebiLg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
