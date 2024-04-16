/** @type {import('next').NextConfig} */

const nextConfig = {
  
  images: {
    domains: ['www.thermalvisionecology.com'],
  },
  openGraph: {
    images: [
      {
        url: "https://www.thermalvisionecology.com/assets/TVElogo.jpg",
        width: 800,
        height: 600,
        alt: 'Thermal Vision Ecology Logo',
      },
    ],
  },
}


module.exports = nextConfig
