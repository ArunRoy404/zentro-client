import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animation.css"
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/provider/AuthProvider";
import LenisScroll from "@/provider/LenisScroll";
import NextThemeProvider from "@/provider/NextThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zentro - Real Estate Platform",
  description: "Discover, buy, rent, or invest in properties across the country with Zentro. Trusted by buyers, sellers, and renters.",
  icons: {
    icon: "/logo/logoWhite.svg",
  },
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zentro - Real Estate Platform',
      },
    ],
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <NextThemeProvider>
            <LenisScroll />
            <Toaster />
            <Navbar />
            {children}
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
