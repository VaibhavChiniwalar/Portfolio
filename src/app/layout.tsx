import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import { StructuredData } from "@/components/seo/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/VaibhavChiniwalar"),
  title: {
    template: `%s | ${portfolioData.name}`,
    default: `${portfolioData.name} - ${portfolioData.role}`,
  },
  description: portfolioData.about,
  keywords: [
    "Java Developer",
    "Core Java",
    "Java EE",
    "Spring Boot",
    "Full Stack Web Development",
    "Hibernate",
    "Portfolio",
    "Next.js Portfolio",
    "Vaibhav Chiniwalar",
  ],
  authors: [{ name: portfolioData.name, url: "https://github.com/VaibhavChiniwalar" }],
  creator: portfolioData.name,
  publisher: portfolioData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/VaibhavChiniwalar",
    title: `${portfolioData.name} - ${portfolioData.role}`,
    description: portfolioData.about,
    siteName: `${portfolioData.name} Portfolio`,
    images: [
      {
        url: "/images/Myimage.jpg",
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} - ${portfolioData.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} - ${portfolioData.role}`,
    description: portfolioData.about,
    creator: "@VaibhavChiniwalar",
    images: ["/images/Myimage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icons/icon copy.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icons/icon copy.png",
    shortcut: "/icons/icon copy.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
      </body>
    </html>
  );
}
