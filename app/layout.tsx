import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { GoogleTagManager } from "@next/third-parties/google"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Thermal Vision Ecology",
  description: "View The Ecology Kit here.",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId="GTM-TK53DNXC" />

      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
