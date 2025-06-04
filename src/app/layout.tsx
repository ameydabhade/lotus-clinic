import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lotus Dental Care & Implant Centre | Best Dentist in Kalyan West",
  description: "Dr. Apurva Chaudhari - Expert Implantologist with 8+ years experience. Dental implants, braces, smile makeovers, and advanced dental care in Kalyan West. Book appointment: +91 70202 10426",
  keywords: "dentist kalyan, dental clinic kalyan west, dr apurva chaudhari, dental implants, braces, smile makeover, teeth whitening, painless dentistry, best dentist kalyan",
  authors: [{ name: "Dr. Apurva Chaudhari" }],
  creator: "Lotus Dental Care & Implant Centre",
  publisher: "Lotus Dental Care & Implant Centre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lotusdentalcare.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lotus Dental Care & Implant Centre | Best Dentist in Kalyan",
    description: "Expert Implantologist Dr. Apurva Chaudhari with 8+ years experience. Advanced dental care in Kalyan West.",
    url: 'https://lotusdentalcare.in',
    siteName: "Lotus Dental Care & Implant Centre",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Lotus Dental Care & Implant Centre",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lotus Dental Care & Implant Centre",
    description: "Expert dental care with 8+ years experience in Kalyan West",
    images: ['/og-image.jpg'],
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
        <MetaPixel />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
