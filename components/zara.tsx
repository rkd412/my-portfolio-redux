"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Zara() {
  const [src, setSrc] = useState("/zara.webp");

  const handleClick = () => {
    setSrc("/zara-wink.webp"); // Switch to wink image
    setTimeout(() => setSrc("/zara.webp"), 500); // Revert to original after 500ms
  };

  // Trigger the animation once on page load
  useEffect(() => {
    setSrc("/zara-wink.webp"); // Change to wink image
    setTimeout(() => setSrc("/zara.webp"), 500); // Revert after 500ms
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
