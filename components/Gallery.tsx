"use client"
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import kitOne from "../public/kit/kitOne.jpeg";
import kitTwo from "../public/kit/kitTwo.jpeg";
import kitThree from "../public/kit/kitThree.jpeg";
import kitFour from "../public/kit/kitFour.jpeg";
import kitFive from "../public/kit/kitFive.jpeg";
import kitSix from "../public/kit/kitSix.jpeg";


/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  // Dummy data for images array
  const dummyImages = [
    {
      id: 1,
      src: kitOne,
      alt: "Kit 1",
    },
    {
      id: 2,
      src: kitTwo,
      alt: "Image 2",
    },
    {
      id: 3,
      src: kitThree,
      alt: "Image 3",
    },
    {
        id: 4,
        src: kitFour,
        alt: "Image 4",
      },
      {
        id: 5,
        src: kitFive,
        alt: "Image 5",
      },
      {
        id: 6,
        src: kitSix,
        alt: "Image 6",
      },
  ];

  // Use dummyImages if images prop is not provided
  images = images || dummyImages;

  return (
    <div className="relative">
      <h2 className="h2 mb-6 text-center"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >Gallery
      </h2>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[75vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div key={image.id} className="w-full h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="contain"
                    className="animate-fadeIn"
                    
                  />
                </div>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
