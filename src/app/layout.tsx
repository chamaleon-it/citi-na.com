import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Citi Nexus Agency | Connecting Talent. Building Successful Careers.",
    template: "%s | Citi Nexus Agency",
  },
  description: "Citi Nexus Agency is a premium international recruitment and staffing partner. We connect top talent with leading employers across diverse industries.",
  keywords: ["recruitment agency", "staffing solutions", "executive search", "talent acquisition", "permanent placement", "contract staffing", "career solutions"],
  openGraph: {
    title: "Citi Nexus Agency | Premium Recruitment Solutions",
    description: "Citi Nexus Agency is a trusted recruitment and staffing partner dedicated to connecting talented professionals with outstanding employers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-charcoal-dark selection:bg-emerald-primary/10 selection:text-emerald-primary">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
