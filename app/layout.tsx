import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar8 } from "@/components/navbar8";
import { Footer2 } from "@/components/footer2";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stuartmontgomery.com"),
  title: {
    default: "Stuart Montgomery — Hand-Painted Murals & Artwork, Co. Meath",
    template: "%s | Stuart Montgomery",
  },
  description:
    "Professional mural artist based in County Meath, Ireland. Hand-painted murals for homes, creches, restaurants and commercial spaces. Over 20 years experience.",
  openGraph: {
    siteName: "Stuart Montgomery",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background`}
    >
      
      <body className="min-h-full flex flex-col bg-background"><Navbar8/>{children}<Footer2/></body>
    </html>
  );
}
