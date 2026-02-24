import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Script from "next/script";
import FooterSection from "@/components/FooterSection";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Many Apartment",
  description: "Welcome to Many Apartment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop />
        {children}
        <FooterSection />
      </body>
      <Script src="js/jquery-3.3.1.min.js"></Script>
      <Script src="js/jquery.magnific-popup.min.js"></Script>
      <Script src="js/jquery.nice-select.min.js"></Script>
      <Script src="js/jquery-ui.min.js"></Script>
      <Script src="js/jquery.slicknav.js"></Script>
      <Script src="js/owl.carousel.min.js"></Script>
      <Script src="js/main.js"></Script>
    </html>


  );
}
