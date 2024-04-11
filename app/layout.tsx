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

const LinkedInScript = () => (
  <>
    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
      _linkedin_partner_id = "1939596";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `}} />
    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
      (function(l) {
        if (!l) {
          window.lintrk = function(a, b) { window.lintrk.q.push([a, b]); };
          window.lintrk.q = [];
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript"; b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    `}} />
    <noscript>
      <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=1939596&fmt=gif" />
    </noscript>
  </>
);


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

        <LinkedInScript />
      </body>
    </html>
  );
}
