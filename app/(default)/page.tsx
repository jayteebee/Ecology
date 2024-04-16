export const metadata = {
  title: "Thermal Vision Ecology",
  description:
    "Learn more about The Ecology Kit, provided by Thermal Vision Ecology",
    image: "../../assets/TVElogo.jpg",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";
import ModalVideo from "@/components/modal-video";
import Testimonials from "@/components/testimonials";
import Calendar from "@/components/Calendar";

import Maps from "../../components/Maps";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>

      <Hero />
      <div>
        <ModalVideo
          video="/videos/video.mp4"
          mobileVideo="/videos/mobileVideo.mp4"
        />
      </div>

      <div id="features">
        <Features />
      </div>
      <div id="3drender">
        <Zigzag />
      </div>
      {/* <Testimonials /> */}
      <div id="calendar">
        <Calendar />
      </div>
      <div id="gallery">
      <Gallery  />
      </div>
      <div id="maps">
        <Maps />
      </div>
    </>
  );
}
