'use client'


import { useRef, useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import { Button } from './Button';

interface VideoProps {
  video: string;
}

export default function AutoPlayVideo({
  video,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure the video plays as soon as the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <video
        ref={videoRef}
        src={video}
        // type="video/mp4"
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
