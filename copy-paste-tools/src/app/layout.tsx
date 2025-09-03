import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CopyPaste Tools - Free Text Generators, Emojis & Symbols",
  description: "Free tools for generating love messages, apology texts, emoji collections, aesthetic symbols, and salary calculators. Copy and paste instantly - no registration required.",
  keywords: [
    "copy and paste", "text generator", "emoji collection", "aesthetic symbols", 
    "love messages", "apology messages", "salary calculator", "free tools",
    "i love you copy paste", "sorry copy paste", "heart emojis", "Unicode symbols"
  ],
  authors: [{ name: "CopyPaste Tools" }],
  creator: "CopyPaste Tools",
  publisher: "CopyPaste Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://copypaste-tools.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CopyPaste Tools - Free Text Generators & Copy Paste Tools",
    description: "Free tools for generating love messages, emojis, symbols and more. Copy and paste instantly.",
    url: 'https://copypaste-tools.com',
    siteName: 'CopyPaste Tools',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CopyPaste Tools - Free Text Generators',
    description: 'Free tools for generating love messages, emojis, symbols and more.',
    creator: '@copypastetools',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
