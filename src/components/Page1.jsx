// File: Page1.jsx

import React, { useEffect, useState } from 'react';

const Page1 = () => {
  // Controls fade animation
  const [fadeOut, setFadeOut] = useState(false);
  // Controls image visibility (removes from DOM after fade)
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    // Start fade out after 0.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 500);

    // Remove image after fade duration (4s + 0.5s delay)
    const removeTimer = setTimeout(() => {
      setShowImage(false);
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    // Fullscreen black background
    <div className="fixed inset-0 bg-black z-50">
      {showImage && (
        <img
          src="/alfapage1.jpg" // Replace with your actual image in public folder
          alt="Splash"
          className={`
            w-full h-full object-cover absolute top-0 left-0
            transition-opacity duration-[4000ms] ease-in-out
            ${fadeOut ? 'opacity-0' : 'opacity-100'}
          `}
        />
      )}
    </div>
  );
};

export default Page1;
