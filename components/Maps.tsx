import React from "react";
import { MAP_HEADER } from "@/public/content/content";
import Link from "next/link";

const Maps: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mb-6 mt-6">
      <h2 className="h2 mb-6"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >{MAP_HEADER.HEADER}</h2>
      {/* <p className="text-xl">{MAP_HEADER.INTRO}</p> */}
      <p className="text-xl text-center mb-2">{MAP_HEADER.INTRO.split(".")[0].trim()}.</p>
      <p className="text-xl text-center">{MAP_HEADER.INTRO.split(".")[1].trim()}.</p>
      <p className="text-xl pt-4 text-center">{MAP_HEADER.INTRO.split(".")[2].trim()}</p>
      <div className="text-center">
        <Link
          className="text-xl text-blue-500 hover:underline mb-4 text-center"
          href="mailto:info@thermalvisionresearch.co.uk"
        >
          info@thermalvisionresearch.co.uk
        </Link>
      <p className="text-xl">07907 054 716</p>
      </div>


      <div className="flex justify-center gap-5 flex-wrap w-full mt-8">
        <div className="text-center">
          <h2 className="h2 mb-4"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >{MAP_HEADER.TRAIN}</h2>
          <iframe
            title="By Train"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39727.07729024622!2d-2.543228!3d51.514274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48719048d3523e8d%3A0x915c1ab91ecb9ff4!2sBristol%20Parkway!5e0!3m2!1sen!2suk!4v1711012653290!5m2!1sen!2suk"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="text-center">
          <h2 className="h2 mb-4"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >{MAP_HEADER.CAR}</h2>
          <iframe
            title="By Car"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1240.660681062971!2d-2.569779!3d51.54400600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487191102927a8cd%3A0x6c5da47db2a5bedb!2s2530%20Aztec%20West!5e0!3m2!1sen!2suk!4v1711012296741!5m2!1sen!2suk"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;
