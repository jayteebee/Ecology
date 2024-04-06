"use client";

// import { useRef, useEffect, useState } from "react";

// interface VideoProps {
//   video: string;
//   mobileVideo: string;
// }

// export default function AutoPlayVideo({ video, mobileVideo }: VideoProps) {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const [currentVideo, setCurrentVideo] = useState(video);

//   useEffect(() => {

//     const updateVideoSource = () => {

//       const screenWidth = window.innerWidth;
//       if (screenWidth < 768) {
//         setCurrentVideo(mobileVideo);
//       } else {
//         setCurrentVideo(video);
//       }
//     };


//     updateVideoSource();
//     window.addEventListener("resize", updateVideoSource);


//     return () => window.removeEventListener("resize", updateVideoSource);
//   }, [video, mobileVideo]);

//   useEffect(() => {

//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, [currentVideo]);

//   return (
//     <div className="w-full h-full flex justify-center items-center relative">
//       <video
//         ref={videoRef}
//         src={currentVideo} 
//         // autoPlay
//         muted
//         loop
//         className="w-full h-3/4 object-cover"
//         playsInline
//       >
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

import { useRef, useEffect, useState } from "react";

interface VideoProps {
  video: string;
  mobileVideo: string;
}

export default function AutoPlayVideo({ video, mobileVideo }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(video);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true); 
  }, [])

  // for changing video source based on screen width
  useEffect(() => {
    const updateVideoSource = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCurrentVideo(mobileVideo);
      } else {
        setCurrentVideo(video);
      }
      // setIsLoading(true); 
    };

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, [video, mobileVideo]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Ensure to reload the video when source changes
    }
  }, [currentVideo]);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {isLoading && (
        <div className="absolute spinner" />
      )}

      <video
        ref={videoRef}
        src={currentVideo}
        muted
        loop
        className="w-full h-3/4 object-cover"
        playsInline
        onPlay={() => setIsLoading(false)} // Hide spinner when video starts playing
        onLoadedMetadata={() => videoRef.current?.play()} // Auto-play when metadata is loaded
      >
        Your browser does not support the video tag.
      </video>

      <style jsx>{`
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid #fff;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
