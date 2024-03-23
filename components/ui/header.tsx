"use client";

// import Link from "next/link";
// import MobileMenu from "./mobile-menu";
// import TVELogo from "../../assets/TVElogo.jpg";
// import Image from "next/image";

// export default function Header() {

//   // In your Header component
//   const scrollToMaps = (link) => {
//     e.preventDefault(); // Prevent default anchor behavior
//     const mapsSection = document.getElementById(link);

//     if (mapsSection) {
//       mapsSection.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <header className="absolute w-full z-30">
//       <div className="max-w-6xl px-4 sm:px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Site branding */}
//           <div className="shrink-0 mr-4">
//             {/* Logo */}

//             <Image src={TVELogo} width="200" height="200" alt="logo" />
//           </div>

//           {/* <nav className="hidden md:flex md:grow">

//             <ul className="flex grow justify-end flex-wrap items-center">
//               <li>
//                 <Link
//                   href="/signin"
//                   className="font-medium text-purple-600 hover:text-black-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
//                 >
//                   Sign in
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
//                   Sign up
//                 </Link>
//               </li>
//             </ul>
//           </nav>  */}

//           <nav className="hidden md:flex md:grow">
//             <ul className="flex grow justify-end flex-wrap items-center">
//               <li>
//                 <a
//                   href="#maps"
//                   onClick={() => scrollToMaps("maps")}
//                   className="font-medium text-purple-600 hover:text-purple-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
//                 >
//                   Maps
//                 </a>
//               </li>

//               <li>
//                 <p
//                   onClick={() => scrollToMaps("features")}
//                   className="font-medium text-purple-600 hover:text-purple-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
//                 >
//                   Features
//                 </p>
//               </li>
//             </ul>
//           </nav>

//           {/* <MobileMenu /> */}
//         </div>
//       </div>
//     </header>
//   );
// }



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
      <div className="max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Image src={TVELogo} width="200" height="200" alt="logo" />
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
