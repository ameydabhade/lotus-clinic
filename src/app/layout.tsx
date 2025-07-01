import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Purnata's Dental & Cosmetic Care | Best Dentist in Pune",
  description: "Dr. Purnata Manohar - Expert Cosmetic Dentist with 10+ years experience. Digital Smile Designing, cosmetic dentistry, and advanced dental care in Pune. Book appointment: +91 77688 21234",
  keywords: "dentist pune, dental clinic koregaon park, viman nagar, dr purnata manohar, digital smile designing, cosmetic dentistry, dental implants, teeth whitening, painless dentistry, best dentist pune",
  authors: [{ name: "Dr. Purnata Manohar" }],
  creator: "Dr. Purnata's Dental & Cosmetic Care",
  publisher: "Dr. Purnata's Dental & Cosmetic Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drpurnatadentalcare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Purnata's Dental & Cosmetic Care | Best Dentist in Pune",
    description: "Expert Cosmetic Dentist Dr. Purnata Manohar with 10+ years experience. Advanced dental care in Pune.",
    url: 'https://drpurnatadentalcare.com',
    siteName: "Dr. Purnata's Dental & Cosmetic Care",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero.png',
        alt: "Dr. Purnata's Dental & Cosmetic Care",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Purnata's Dental & Cosmetic Care",
    description: "Expert dental & cosmetic care with 10+ years experience in Pune",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
