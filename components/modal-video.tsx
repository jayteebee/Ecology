'use client'

// import { useRef, useEffect } from 'react';

// interface VideoProps {
//   video: string;
//   mobileVideo: string;
// }

// export default function AutoPlayVideo({
//   video,
// }: VideoProps) {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     // Ensure the video plays as soon as the component mounts
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <div className="w-full h-full flex justify-center items-center relative">
//       <video
//         ref={videoRef}
//         src={video}
//         // type="video/mp4"
//         autoPlay
//         muted
//         loop
//         className="w-full h-3/4 object-cover"
//       >
//         Your browser does not support the video tag.
//       </video>
//     </div>

//   );
// }

// Add useState to the existing imports
import { useRef, useEffect, useState } from 'react';

interface VideoProps {
  video: string;
  mobileVideo: string;
}

export default function AutoPlayVideo({
  video,
  mobileVideo,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // State to hold the current video source
  const [currentVideo, setCurrentVideo] = useState(video);

  useEffect(() => {
    // Function to update the video source based on screen width
    const updateVideoSource = () => {
      // Assuming 768px as the breakpoint for mobile devices
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCurrentVideo(mobileVideo);
      } else {
        setCurrentVideo(video);
      }
    };

    // Call the function initially and also on window resize
    updateVideoSource();
    window.addEventListener('resize', updateVideoSource);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', updateVideoSource);
  }, [video, mobileVideo]);

  useEffect(() => {
    // Ensure the video plays as soon as the component mounts or the source changes
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <video
        ref={videoRef}
        src={currentVideo} // Use the currentVideo state
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
