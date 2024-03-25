"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import TVELogo from "../../assets/TVElogo.jpg";
import Image from "next/image";



export default function Header() {
  // Function to scroll to a specific section
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.getElementById(sectionId);
  
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="absolute w-full z-30">
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-end justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Image src={TVELogo} width="250" height="250" alt="logo" />
          </div>

          {/* Navigation menu for larger screens */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <p
                  onClick={(e) => scrollToSection(e, "maps")}
                  className="font-medium text-purple-600 hover:text-purple-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Maps
                </p>
              </li>

              <li>
                <p
                  onClick={(e) => scrollToSection(e, "features")}
                  className="font-medium text-purple-600 hover:text-purple-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Features
                </p>
              </li>

              <li>
                <p
                  onClick={(e) => scrollToSection(e, "3drender")}
                  className="font-medium text-purple-600 hover:text-purple-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  3D Render
                </p>
              </li>
              {/* Add more list items here as needed */}
            </ul>
          </nav>

          {/* MobileMenu component here */}
        </div>
      </div>
    </header>
  );
}
