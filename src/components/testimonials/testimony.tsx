import Image from "next/image";
import React from "react";

export type Testimony = {
  name: string;
  title: string;
  text: string;
  color: string;
};

export default function Testimonials({ name, title, text, color }: Testimony) {
  return (
    <div className="relative">
      {/* Background SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 332 339"
        className="w-full h-auto"
      >
        <path
          d="M0.235352 71.3409V253.511C0.235352 274.968 15.7134 293.295 36.8673 296.886L280.602 338.263C307.458 342.822 331.961 322.128 331.961 294.888V44.1875C331.961 17.9606 309.16 -2.44128 283.094 0.462579L39.3595 27.616C17.0844 30.0976 0.235352 48.928 0.235352 71.3409Z"
          fill="#E9E8FF"
        />
      </svg>
      {/* Testimony cards overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-7">
        <div className="relative flex flex-col items-center justify-center text-center">
          <h1 className="text-[#3C3C3C] text-[24px] font-bold leading-none">
            {name}
          </h1>
          <p className="text-gray-500 text-[12px] font-normal leading-none leading-trim mt-1">
            {title}
          </p>
          <Image
            src="/images/stars.svg"
            alt="stars"
            width={100}
            height={100}
            className="w-24 h-auto my-3"
          />
          <p className="text-gray-500 text-center text-[14px] font-normal leading-normal">
            {text}
          </p>
        </div>
        <div className="absolute top-28 -left-8">
          <Image
            src="/images/white-quote.svg"
            alt="white quote"
            width={10}
            height={10}
            className="w-16 h-16 p-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
      {/* Testimony text */}{" "}
    </div>
  );
}
