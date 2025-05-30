// components/ProgressBar.tsx
"use client";
import Image from "next/image";
import React from "react";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export default function ProgressBar({ progress, className }: ProgressBarProps) {
  const fill = `${Math.min(Math.max(progress, 0), 100)}%`;

  return (
    <div
      className={`relative mx-auto h-3.5 mt-10 mb-20 md:my-0 bg-[#1F125C] rounded-full border-2 border-white ${className}`}
      style={{ "--fill": fill } as React.CSSProperties}
    >
      {/* Inner fill */}
      <div
        className="absolute left-[2px] top-1/2 transform -translate-y-1/2 bg-[#957FFF] h-1.5 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: fill }}
      />

      {/* Tip image */}
      <Image
        src="/progress-tip.svg"
        alt="progress tip"
        className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out w-8 h-auto"
        style={{ left: `calc(${fill} - 0.5rem)` }}
        width={32}
        height={32}
      />
    </div>
  );
}
