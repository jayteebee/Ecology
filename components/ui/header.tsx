"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import TVELogo from "../../assets/TVElogo.jpg";
import Image from "next/image";
import callUsIcon from "../../public/images/callUsIcon.png"


export default function Header() {
  // Function to scroll to a specific section
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.getElementById(sectionId);
  
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to open phone dialler with pre-populated number
  const callUs = () => {
    window.location.href = 'tel:07948725229';
  };

  return (
    <header className="absolute w-full z-30">
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-end h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}

            <div className="hidden md:block">
              <Image src={TVELogo} width="250" height="250" alt="logo" />
            </div>
            <div className="md:hidden absolute top-1 left-1">
              <Image src={TVELogo} width="120" height="120" alt="logo" />
            </div>
            {/* <Image src={TVELogo} width="250" height="250" alt="logo" /> */}
          </div>

          <div className="md:hidden">
            <button onClick={callUs} className="text-green-100 hover:text-green-300 hover:underline px-4 py-4 flex items-center transition duration-150 ease-in-out cursor-pointer">
              <Image src={callUsIcon} width="30" height="30" alt="call us icon" />
              Call Us!
            </button>
          </div>
          {/* Navigation menu for larger screens */}
          <nav className=" md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <p
                  onClick={(e) => scrollToSection(e, "calendar")}
                  className="font-medium text-green-100 hover:text-blue-500 hover:underline px-2 py-5 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Send Enquiry
                </p>
              </li>

              <li className="hidden md:block">
                <p
                  onClick={(e) => scrollToSection(e, "features")}
                  className="font-medium text-green-100 hover:text-blue-500 hover:underline px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Features
                </p>
              </li>

              {/* <li>
                <p
                  onClick={(e) => scrollToSection(e, "3drender")}
                  className="font-medium text-green-100 hover:text-blue-500 hover:underline px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  3D Render
                </p>
              </li> */}

            </ul>
          </nav>

          {/* MobileMenu component here */}


        </div>
      </div>
    </header>
  );
}
