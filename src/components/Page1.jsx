// File: Page1.jsx

import React, { useEffect, useState, useRef } from 'react';

const Page1 = () => {
  const [fadeOut, setFadeOut] = useState(false);       // image fade out
  const [fadeInVideo, setFadeInVideo] = useState(false); // video fade in
  const [showImage, setShowImage] = useState(true);    // control image mount
  const videoRef = useRef(null);

  useEffect(() => {
    // Start image fade out at 0.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 500);

    // Start video fade in at 3.5s (last second)
    const videoFadeInTimer = setTimeout(() => {
      setFadeInVideo(true);
      if (videoRef.current) {
        videoRef.current.play(); // start video playback
      }
    }, 2000);

    // Remove image after fade out completes (4.5s)
    const removeImageTimer = setTimeout(() => {
      setShowImage(false);
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(videoFadeInTimer);
      clearTimeout(removeImageTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Image fade-out */}
      {showImage && (
        <img
          src="/alfapage1.jpg"
          alt="Splash"
          className={`
            w-full h-full object-cover absolute top-0 left-0
            transition-opacity duration-[4000ms] ease-in-out
            ${fadeOut ? 'opacity-0' : 'opacity-100'}
          `}
        />
      )}

      {/* Video fade-in and autoplay */}
      <video
        ref={videoRef}
        src="/alfavid.mp4"
        muted
        loop
        playsInline
        className={`
          w-full h-full object-cover absolute top-0 left-0
          transition-opacity duration-[2000ms] ease-in-out
          ${fadeInVideo ? 'opacity-100' : 'opacity-0'}
        `}
        preload="auto"
      />
    </div>
  );
};

export default Page1;
