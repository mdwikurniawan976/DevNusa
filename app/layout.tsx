import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // tambahkan sesuai kebutuhan
  display: "swap",
});


export const metadata: Metadata = {
  title: "DevNusa",
  description: "Jasa aplikasi & website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
