"use client";

import { useState } from "react";
import Image from "next/image";

export default function Zara() {
  const [src, setSrc] = useState("/zara.webp");

  const handleClick = () => {
    setSrc("/zara-wink.webp"); // Switch to wink image
    setTimeout(() => setSrc("/zara.webp"), 500); // Revert to original after 500ms
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Image
        className="dark:invert placeholder:duration-300"
        src={src}
        alt="Das My Cat"
        width={400}
        height={400}
        priority
      />
    </div>
  );
}