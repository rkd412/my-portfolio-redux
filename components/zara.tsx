"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Zara() {
  const [src, setSrc] = useState("/zara.webp");

  const handleClick = () => {
    setSrc("/zara-wink.webp"); // Switch to wink image
    setTimeout(() => setSrc("/zara.webp"), 500); // Revert to original after 500ms
  };

  // Trigger the animation once, 1 second after page load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc("/zara-wink.webp"); // Change to wink image
      setTimeout(() => setSrc("/zara.webp"), 500); // Revert after 500ms
    }, 1000); // Delay start by 1000ms (1 second)

    return () => clearTimeout(timeout); // Cleanup in case of unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Image
      className="dark:invert placeholder:duration-300 cursor-pointer"
      src={src}
      alt="My cat Zarathustra Davis"
      width={200}
      height={200}
      priority
      onClick={handleClick}
    />
  );
}
