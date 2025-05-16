"use client";
import React from "react";

import Image from "next/image";


export default function ConnectPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#b194f7] to-[#f7c59f] rounded-[30px] overflow-hidden p-4">
      {/* Absolute Telegram Icons */}
      {[
        { top: '10%', left: '10%' },
        { top: '-15%', right: '40%' },
        { top: '5%', right: '3%' },
        { bottom: '25%', left: '-5%' },
        { bottom: '20%', right: '-1%' },
      ].map((pos, i) => (
        <Image
          key={i}
          src="/DashboardIcons/teleg.png"
          alt="Telegram icon"
          width={170}
          height={150}
          className="absolute animate-pulse"
          style={{ ...pos }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center z-10 max-w-md">
        <Image
          src="/DashboardIcons/tele.png"
          alt="Simbi character"
          width={162.5}
          height={288.96832275390625}
          className="mx-auto mb-6"
        />
        <h2 className="text-xl sm:text-2xl font-semibold text-black">
          Connect to <span className="text-blue-700 font-bold">TELEGRAM</span>
        </h2>
        <p className="text-sm text-gray-800 mt-2 leading-relaxed">
          Transform every study milestone into value.<br />
          Earn <strong>$SIMBI tokens</strong>, unlock exclusive NFT badges by crushing quizzes, 
          connect your wallet and swap your study wins for cool prizes.
        </p>
        <button className="mt-6 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg text-sm font-medium">
          Continue
        </button>
      </div>
    </div>
  );
}
