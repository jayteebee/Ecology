/** @type {import('next').NextConfig} */

const nextConfig = {
  
  images: {
    domains: ['https://www.thermalvisionecology.co.uk'],
  },
  openGraph: {
    images: [
      {
        url: "https://www.thermalvisionecology.co.uk/public/images/TVElogo.jpg",
        width: 800,
        height: 600,
        alt: 'Thermal Vision Ecology Logo',
      },
    ],
  },
}


module.exports = nextConfig
