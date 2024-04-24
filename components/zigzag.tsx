import Image from "next/image";

import FeatImage01 from "@/public/images/a700PNG.png";
import FeatImage02 from "@/public/images/Hire.png";
import camCollage from "@/public/images/camCollage.png";
import distances from "@/public/images/distances.png";

import frStudio from "@/public/images/frstudio-ezgif.com-webp-to-png-converter.png";
import { ZIGZAG_HEADER, ZIGZAG_ITEM_CONTENT } from "@/public/content/content";
import Link from "next/link";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-xl font-semibold py-1 px-3 m-2 text-white bg-green-300 rounded-full mb-4"
                            style={{
                              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)' 
                            }}
            >
              {ZIGZAG_HEADER.INTRO}
            </div>
          </div>
          {/* Section header */}
          {/* 
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">The Ecology Package</div>
            <h1 className="h2 mb-4">{ZIGZAG_HEADER.HEADER}</h1>
            <p className="text-xl text-black-400">{ZIGZAG_HEADER.SUBHEADER}</p>
          </div>

          <div style={{position: "relative", paddingTop: "56.25%", height: 0, overflow: "hidden"}}>
  <iframe src="https://lumalabs.ai/embed/3ef325de-03c5-4a38-9e6d-d5025537c4a6?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", paddingBottom: "10vh"}} title="luma embed" allowFullScreen></iframe>
</div> */}

          {/* Item */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <h1 className="font-architects-daughter text-3xl text-green-200 mb-2">{ZIGZAG_ITEM_CONTENT[0].INTRO}</h1> */}
                  <h3 className="h3 mb-3 text-center"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {ZIGZAG_ITEM_CONTENT[0].TITLE}
                  </h3>
                  <p className="text-xl text-black-400 mb-4 text-center">
                    {ZIGZAG_ITEM_CONTENT[0].TEXT}
                  </p>
                  <ul className="text-lg text-black-400 -mb-2">
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[0].BULLET_ONE}</span>
                    </li>
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[0].BULLET_TWO}</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[0].BULLET_THREE}</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[0].BULLET_FOUR}</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[0].BULLET_FIVE}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Image */}

              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 pt-8"
                data-aos="fade-up"
              >
                <Image
                  src={FeatImage01}
                  width={740}
                  height={450}
                  alt="Features 01"
                  className="mx-auto"
                />
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-green-200 mb-2">{ZIGZAG_ITEM_CONTENT[1].INTRO}</div> */}
                  <h3 className="h3 mb-3 text-center"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {ZIGZAG_ITEM_CONTENT[1].TITLE}
                  </h3>
                  <p className="text-xl text-black-400 mb-4 text-center">
                    {ZIGZAG_ITEM_CONTENT[1].TEXT}
                  </p>
                  <div className="text-center">
                    <Link
                      className="text-xl text-blue-500 hover:underline mb-4 text-center"
                      href="mailto:jethro@thermalvisionresearch.co.uk"
                    >
                      enquiries@thermalvisionecology.co.uk
                    </Link>
                  </div>

                  {/* <ul className="text-lg text-black-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[1].BULLET_ONE}</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[1].BULLET_TWO}</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[1].BULLET_THREE}</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* Image */}

              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 pt-8"
                data-aos="fade-up"
              >
                <Image
                  className="mx-auto"
                  src={FeatImage02}
                  width={740}
                  height={450}
                  alt="Features 02"
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-green-200 mb-2">{ZIGZAG_ITEM_CONTENT[2].INTRO}</div> */}
                  <h3 className="h3 mb-3 text-center"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {ZIGZAG_ITEM_CONTENT[2].TITLE}
                  </h3>
                  <p className="text-xl text-black-400 mb-4 text-center">
                    {ZIGZAG_ITEM_CONTENT[2].TEXT}
                  </p>
                  <div className="text-center">
                    <Link
                      className="text-xl text-blue-500 hover:underline mb-4 text-center"
                      href="mailto:jethro@thermalvisionresearch.co.uk"
                    >
                      enquiries@thermalvisionecology.co.uk
                    </Link>
                  </div>

                  {/* <ul className="text-lg text-black-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[2].BULLET_ONE}</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[2].BULLET_TWO}</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[2].BULLET_THREE}.</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* Image */}

              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 pt-8"
                data-aos="fade-up"
              >
                <Image
                  className="mx-auto"
                  src={camCollage}
                  width={740}
                  height={450}
                  alt="Features 03"
                />
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-start">
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-green-200 mb-2">{ZIGZAG_ITEM_CONTENT[1].INTRO}</div> */}
                  <h3 className="h3 mb-3 text-center"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {ZIGZAG_ITEM_CONTENT[3].TITLE}
                  </h3>
                  <p className="text-xl text-black-400 mb-4 text-center">
                    {ZIGZAG_ITEM_CONTENT[3].TEXT}
                  </p>
                  <ul className="text-lg text-black-400 -mb-2 items-start">
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[3].BULLET_ONE}</span>
                    </li>
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[3].BULLET_TWO}</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[3].BULLET_THREE}</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[3].BULLET_FOUR}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Image */}

              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 pt-8"
                data-aos="fade-up"
              >
                <Image
                  className="mx-auto"
                  src={frStudio}
                  width={740}
                  height={450}
                  alt="Features 02"
                />
              </div>
            </div>
{/**5th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-green-200 mb-2">{ZIGZAG_ITEM_CONTENT[1].INTRO}</div> */}
                  <h3 className="h3 mb-3 text-center"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {ZIGZAG_ITEM_CONTENT[4].TITLE}
                  </h3>
                  <p className="text-xl text-black-400 mb-4 text-center">
                    {ZIGZAG_ITEM_CONTENT[4].TEXT}
                  </p>
                  <ul className="text-lg text-black-400 -mb-2 items-start">
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[4].BULLET_ONE}</span>
                    </li>
                    <li className="flex items-start mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-1.5"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{ZIGZAG_ITEM_CONTENT[4].BULLET_TWO}</span>
                    </li>


                  </ul>
                </div>
              </div>
              {/* Image */}

              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 pt-8"
                data-aos="fade-up"
              >
                <Image
                  className="mx-auto"
                  src={distances}
                  width={740}
                  height={450}
                  alt="Features 02"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
