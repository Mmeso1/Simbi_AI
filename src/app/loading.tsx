"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loadingText, setLoadingText] = useState("Loading");

  // Animate the loading text with dots
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Loading...") return "Loading";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#F9F8FF]">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-12 relative">
          <Image
            src="/images/hero.svg"
            alt="Simbi Character"
            width={150}
            height={150}
            className="animate-bounce"
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#7A5FFF] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#501EE3] text-xl font-medium">{loadingText}</p>
        </div>
      </div>
    </div>
  );
}
