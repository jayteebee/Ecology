

export const metadata = {
  title: 'Ecology',
  description: 'More information about our ecology package',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import ModalVideo from '@/components/modal-video'
import Testimonials from '@/components/testimonials'

import Maps from '../../components/Maps'
import { useRef } from 'react'

export default function Home() {



  return (
    <>
      <Hero />
      <div>
              <ModalVideo
            video="/videos/video.mp4"

            />
      </div>

<div id='features'>
      <Features />
</div>
<div id='3drender'>
      <Zigzag />
</div>
      <Testimonials />
      <div id='maps'><Maps /></div>
    </>
  )
}
