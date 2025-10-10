import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animation.css"
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/provider/AuthProvider";
import LenisScroll from "@/provider/LenisScroll";
import NextThemeProvider from "@/provider/NextThemeProvider";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";

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
          <TanstackQueryProvider>
            <NextThemeProvider>
              <LenisScroll />
              <Toaster />
              <Navbar />
              <div className="pt-16 md:pt-17">
                {children}
              </div>
            </NextThemeProvider>
          </TanstackQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
