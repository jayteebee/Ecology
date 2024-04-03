import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import linkedIn from "../../public/images/LinkedIn.png";
import logo from "../../assets/TVElogo.jpg";



export default function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: "gray", color: "white"}}>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="TVR">
                <Image
                    src={logo}
                    alt="Stopwatch"
                    width={200}
                    priority
                  />
                </Link>
              </div>
              <div className="text-white-400">Thermal Vision Ecology is a division of Thermal Vision Research Ltd (08661370), a platinum partner and premium distributor for Teledyne FLIR, the leading global manufacturer of thermal imaging cameras.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">



            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
              <Link href="https://www.linkedin.com/in/andrew-r-milner/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-black-100 hover:bg-green-300 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">               
               <Image
                    src={linkedIn}
                    alt="Stopwatch"
                    className="rounded-full"
                  />
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-white-400 text-sm mr-4">&copy; 2024 Thermal Vision Research. All Rights Reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
