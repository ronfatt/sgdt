import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SGDT — Next-Generation Web3 Digital Ecosystem",
  description:
    "SGDT integrates digital assets, computing power, token burn, ecosystem rewards, and global community networks to build a sustainable, self-growing Web3 digital economy.",
  keywords: [
    "SGDT",
    "Web3",
    "Blockchain",
    "Computing Power",
    "Token Burn",
    "Digital Ecosystem",
    "DeFi",
    "FinTech",
  ],
  openGraph: {
    title: "SGDT — Next-Generation Web3 Digital Ecosystem",
    description:
      "Integrating computing power, token burn, and global community networks into a sustainable Web3 digital economy.",
    url: "https://sgdt.io",
    siteName: "SGDT Protocol",
    images: [
      {
        url: "/images/logo-sgdt-large.png",
        width: 1200,
        height: 630,
        alt: "SGDT Digital Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#D6A63C]/30 selection:text-[#FFE09A]">
        {children}
      </body>
    </html>
  );
}
