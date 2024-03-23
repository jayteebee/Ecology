"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import TVELogo from "../../assets/TVElogo.jpg";
import Image from "next/image";

export default function Header() {
  // In your Header component
  const scrollToMaps = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const mapsSection = document.getElementById("maps");

    if (mapsSection) {
      mapsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}

            <Image src={TVELogo} width="200" height="200" alt="logo" />
          </div>

          {/* <nav className="hidden md:flex md:grow">

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-black-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>  */}

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#maps"
                  onClick={scrollToMaps}
                  className="font-medium text-purple-600 hover:text-purple-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Maps
                </a>
              </li>
            </ul>
          </nav>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
