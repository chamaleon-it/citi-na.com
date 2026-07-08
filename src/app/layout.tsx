import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MaintenancePage from "./maintenance/page";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

// >>> TOGGLE MAINTENANCE MODE HERE <<<
// Set to true to show the maintenance page globally. 
// Set to false to make all pages visible as normal.
const IS_MAINTENANCE_MODE = true;

export const metadata: Metadata = {
  title: IS_MAINTENANCE_MODE
    ? "System Maintenance | Citi Nexus"
    : {
        default: "Citi Nexus Agency | Connecting Talent. Building Successful Careers.",
        template: "%s | Citi Nexus Agency",
      },
  description: IS_MAINTENANCE_MODE
    ? "Our website is undergoing scheduled maintenance and optimization. We will be back online shortly."
    : "Citi Nexus Agency is a premium international recruitment and staffing partner. We connect top talent with leading employers across diverse industries.",
  keywords: ["recruitment agency", "staffing solutions", "executive search", "talent acquisition", "permanent placement", "contract staffing", "career solutions"],
  openGraph: {
    title: IS_MAINTENANCE_MODE ? "System Maintenance | Citi Nexus" : "Citi Nexus Agency | Premium Recruitment Solutions",
    description: IS_MAINTENANCE_MODE
      ? "Our website is undergoing scheduled maintenance and optimization. We will be back online shortly."
      : "Citi Nexus Agency is a trusted recruitment and staffing partner dedicated to connecting talented professionals with outstanding employers.",
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
        {IS_MAINTENANCE_MODE ? <MaintenancePage /> : children}
      </body>
    </html>
  );
}

