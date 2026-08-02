import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: {
    default: "Inspire Educational Academy | Government Recognised Education",
    template: "%s | Inspire Educational Academy",
  },
  description:
    "Complete SSC or Intermediate in just 3 months. Government recognised education programs. NAAC A++ accredited. Online & offline classes. Trusted by 4000+ students.",
  keywords: [
    "SSC",
    "Intermediate",
    "TOSS",
    "NIOS",
    "BOSSE",
    "Degree",
    "PG",
    "Education",
    "Open Schooling",
    "Distance Education",
    "Hyderabad",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Inspire Educational Academy",
    title: "Inspire Educational Academy | Government Recognised Education",
    description:
      "Complete SSC or Intermediate in just 3 months. Government recognised education programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className="font-inter bg-white text-gray-900 antialiased">
        <ScrollProgress />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          async
        />
      </body>
    </html>
  );
}
