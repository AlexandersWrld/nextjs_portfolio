import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { Freckle_Face } from 'next/font/google';
import { Climate_Crisis } from 'next/font/google';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const freckleFace = Freckle_Face({
  subsets: ['latin'],
  weight: '400',  // Freckle Face only comes in one weight
  variable: '--font-freckle-face',
});


const climateCrisis = Climate_Crisis({
  weight: '400', // Specify the weights you need
  subsets: ['latin'],     // Specify the subsets you need
  variable: '--font-climate-crisis',
});


export const metadata: Metadata = {
  title: {
    default: "Alexander Boyd",
    template: "%s | Alexander Boyd",
  },
  description: "Challenging the AI status quo with radical honesty and evidence-based disruption",
  authors: [{ name: "Alexander Boyd" }],
  keywords: ["AI consultancy", "digital transformation", "disruptive innovation"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={freckleFace.variable} suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
