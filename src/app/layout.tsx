import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Yared Tour & Travel | Responsible & Community-Based Tours Ethiopia",
  description: "Experience authentic, community-based, and eco-conscious travel across Ethiopia since 2004. Dual offices in Addis Ababa and the Netherlands. Travelife Sustainability Partner.",
  keywords: [
    "Ethiopia tours", 
    "Lalibela rock hewn churches", 
    "Danakil Depression volcano tour", 
    "Omo Valley cultural tour", 
    "Simien mountains trekking", 
    "Bale mountains wolf safari", 
    "responsible tourism Ethiopia", 
    "Travelife partner tour operator"
  ],
  openGraph: {
    title: "Yared Tour & Travel | Responsible & Community-Based Tours Ethiopia",
    description: "Designing immersive, sustainable journeys across Ethiopia since 2004. Dual offices in Addis Ababa and the Netherlands.",
    url: "https://www.yaredtour.com",
    siteName: "Yared Tour & Travel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#181A1B] antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
