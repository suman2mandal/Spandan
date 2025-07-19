import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import TopNavBar from "@/components/basic-component/topNavBar";
import Providers from '@/redux/providers'; // ✅ Import the wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spandan | Be the voice for voiceless",
  description: "Spandan - An animal welfare NGO. Be the voice for voiceless."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers> {/* ✅ Wrap with Redux Provider wrapper */}
            <TopNavBar />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
