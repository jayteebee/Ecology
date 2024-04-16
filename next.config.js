/** @type {import('next').NextConfig} */
import tveLogo from "./assets/TVElogo.jpg"

const nextConfig = {
  
  images: {
    domains: ['www.thermalvisionecology.com'],
  },
  openGraph: {
    images: [
      {
        url: {tveLogo},
        width: 800,
        height: 600,
        alt: 'Thermal Vision Ecology Logo',
      },
    ],
  },
}


module.exports = nextConfig
