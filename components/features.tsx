import stopWatch from "../public/images/stopwatch.png";
import neverMissAThing from "../public/images/neverMissAThing.png";
import support from "../public/images/support.png";
import flexibility from "../public/images/flexibility.png";
import bctCompliant from "../public/images/bctCompliant.png";
import enhancedDetection from "../public/images/enhancedDetection.png";

import styles from "../app/css/styles/Features.module.css";

import Image from "next/image";
import {
  FEATURES_HEADER,
  FEATURES_ITEM_CONTENT,
  TESTIMONIAL_ITEM_CONTENT
} from "../public/content/content";
import BookACallButton from "./BookACallButton";

export default function Features() {
  return (
    <div>
      <div
        className="bg-red-600 text-white text-center py-4 w-full flex items-center justify-center md:py-6"
        style={{ height: "100%" }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl">
          {FEATURES_HEADER.BANNER}
        </h1>
      </div>


 <div className="flex items-center justify-center flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
  <div>
    <div className="relative inline-flex flex-col mb-4">
      <Image className="rounded-full" src={TESTIMONIAL_ITEM_CONTENT[3].IMAGE} width={111} height={111} alt="Testimonial 01" />
    </div>

  </div>
  <div className="w-full md:w-1/3 mx-auto text-center">
    <blockquote className="text-lg text-black-400 grow inline-block"><span className="text-6xl text-green-300 pt-2" style={{ fontFamily: "Georgia", verticalAlign: 'center'  }}>"</span>{TESTIMONIAL_ITEM_CONTENT[3].TEXT}<span className="text-7xl text-green-300 px-2" style={{ fontFamily: "Times New Roman", verticalAlign: 'top'  }}>"</span></blockquote>

  </div>

  <div className="text-black-700 font-medium mt-6 pt-5 border-t border-gray-700 w-full md:w-1/3 mx-auto text-center">
    <cite className="text-black-200 not-italic">{TESTIMONIAL_ITEM_CONTENT[3].NAME}</cite> - <a className="text-green-300 hover:text-black-200 transition duration-150 ease-in-out" href="#0">{TESTIMONIAL_ITEM_CONTENT[3].COMPANY}</a>
  </div>
</div>




      <div className="block md:hidden">
        <BookACallButton />
      </div>

      <section className={styles.overlayContent}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">{FEATURES_HEADER.HEADER}</h2>
              {/* <p className="text-xl">
                {FEATURES_HEADER.SUBHEADER}
              </p> */}
            </div>

            {/* Items */}
            <div
              className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
              data-aos-id-blocks
            >
              {/* 1st item */}

              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  className="w-16 h-16 mb-4 rounded-full bg-green-300 flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={stopWatch}
                    alt="Stopwatch"
                    className="rounded-full"
                  />
                </div>
                <h4
                  className="h4 mb-2"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {FEATURES_ITEM_CONTENT[0].TITLE}
                </h4>
                <p className="text-lg text-center">
                  {FEATURES_ITEM_CONTENT[0].TEXT}
                </p>
              </div>

              {/* 2nd item */}

              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  className="w-16 h-16 mb-4 rounded-full bg-green-300 flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={neverMissAThing}
                    alt="Never Miss A Thing"
                    className="rounded-full shadow-3xl"
                  />
                </div>
                <h4
                  className="h4 mb-2"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {FEATURES_ITEM_CONTENT[1].TITLE}
                </h4>
                <p className="text-lg text-center">
                  {FEATURES_ITEM_CONTENT[1].TEXT}
                </p>
              </div>

              {/* 3rd item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  className="w-16 h-16 mb-4 rounded-full bg-green-300 flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={enhancedDetection}
                    alt="enhanced Detection"
                    className="rounded-full"
                  />
                </div>
                <h4
                  className="h4 mb-2"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {FEATURES_ITEM_CONTENT[2].TITLE}
                </h4>
                <p className="text-lg text-center">
                  {FEATURES_ITEM_CONTENT[2].TEXT}
                </p>
              </div>

              {/* 4th item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  className="w-16 h-16 mb-4 rounded-full bg-green-300 flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={bctCompliant}
                    alt="bct Compliant"
                    className="rounded-full"
                  />
                </div>
                <h4
                  className="h4 mb-2"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {FEATURES_ITEM_CONTENT[3].TITLE}
                </h4>
                <p className="text-lg text-center">
                  {FEATURES_ITEM_CONTENT[3].TEXT}
                </p>
              </div>

              {/* 5th item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  className="w-16 h-16 mb-4 rounded-full bg-green-300 flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={flexibility}
                    alt="flexibility"
                    className="rounded-full"
                  />
                </div>
                <h4
                  className="h4 mb-2 text-center"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {FEATURES_ITEM_CONTENT[4].TITLE}
                </h4>
                <p className="text-lg text-center">
                  {FEATURES_ITEM_CONTENT[4].TEXT}
                </p>
              </div>

              {/* 6th item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div
                  className="w-16 h-16 mb-4 rounded-full bg-green-300 flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image src={support} alt="support" className="rounded-full" />
                </div>
                <h4
                  className="h4 mb-2"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {FEATURES_ITEM_CONTENT[5].TITLE}
                </h4>
                <p className="text-lg text-center">
                  {FEATURES_ITEM_CONTENT[5].TEXT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookACallButton />
    </div>
  );
}
