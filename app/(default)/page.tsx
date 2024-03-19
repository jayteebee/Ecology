export const metadata = {
  title: 'Ecology',
  description: 'More information about our ecology package',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import ModalVideo from '@/components/modal-video'
import Testimonials from '@/components/testimonials'
import VideoThumb from '@/public/images/hero-image-01.jpg'

export default function Home() {
  return (
    <>
      <Hero />
      <div >
              <ModalVideo
            // thumb={VideoThumb}
            // thumbWidth={1024}
            // thumbHeight={576}
            // thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            // videoWidth={1920}
            // videoHeight={1080} 
            />
      </div>

      <Features />
      <Zigzag />
      <Testimonials />

    </>
  )
}
