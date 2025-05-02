'use client';
import Image from 'next/image';
import { Button } from '@/components/telegram/Button';
import { Baloo_Thambi_2 } from 'next/font/google';

import React from 'react'

const TelegramConnect = () => {
  return (
    <section className="w-full max-w-[500px] mx-auto p-6 sm:p-8 rounded-[30px] linear-gradient bg-[#957FFF] relative shadow-xl overflow-hidden border border-gray-200 bg-[#957FFF]">
      
      {/* Background pattern inside the box only */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/DashboardIcons/teleg.png') ] bg-cover" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <Image
          src="/DashboardIcons/tele.png"
          alt=""
          width={120}
          height={120}
          className="mb-5"
        />

        <h2 className="text-lg sm:text-xl font-semibold text-black mb-2">
          Connect to <span className="text-blue-700 font-bold">TELEGRAM</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-700 mb-6">
          Earn $SIMBI tokens, unlock NFT badges, and sync your study progress.
        </p>

        <Button onClick={() => alert('Connecting to Telegram...')}>Continue</Button>
      </div>
    </section>
  );
};

export default TelegramConnect