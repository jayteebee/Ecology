"use client";

import { useRef, useEffect, useState } from "react";

interface VideoProps {
  video: string;
  mobileVideo: string;
}

export default function AutoPlayVideo({ video, mobileVideo }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentVideo, setCurrentVideo] = useState(video);

  useEffect(() => {

    const updateVideoSource = () => {

      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCurrentVideo(mobileVideo);
      } else {
        setCurrentVideo(video);
      }
    };


    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);


    return () => window.removeEventListener("resize", updateVideoSource);
  }, [video, mobileVideo]);

  useEffect(() => {

    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <video
        ref={videoRef}
        src={currentVideo} 
        autoPlay
        muted
        loop
        className="w-full h-3/4 object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
