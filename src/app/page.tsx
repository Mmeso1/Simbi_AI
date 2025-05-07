"use client";
import Image from "next/image";
import "@/app/globals.css";
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { roboto } from "@/lib/fonts";

export default function Home() {
  const steps = [
    { text: "Create your free account", color: "#7A5FFF" },
    { text: "Tell Simbi what you’re studying", color: "#16A349" },
    {
      text: "Get a personalized plan with built-in accountability",
      color: "#FF5A5F",
    },
    { text: "Use the Telegram Bot for on-the-go support", color: "#F99D07" },
    {
      text: "Earn crypto rewards and unlock custom NFT badges",
      color: "#6046FF",
    },
    { text: "Ace your academic goals", color: "#0099FF" },
  ];

  return (
    <main className="bg-[#FDFDFF] text-[#1E1E2F">
      {/* Header */}
      <header className="flex justify-between items-center px-30 py-8 bg-white">
        <div className="flex items-ceimport Link from 'next/link';nter space-x-2">
          <Image src="/logo.svg" alt="Simbi Logo" width={155} height={50} />
        </div>
        <div className="w-[343px] border border-[#C9C0D4] rounded-xl p-3 flex items-center justify-between">
          <button className="text-base font-medium">Language</button>
          <IoIosArrowDown className="text-[#202024]" size={20} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center bg-[#E9E8FF] h-[78vh] text-center">
        <div className="flex flex-row justify-center items-center gap-24">
          <div className="">
            <Image
              src="/images/hero.svg"
              alt="Simbi Character"
              width={250}
              height={250}
              className="mx-auto"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-normal leading-[60px]">
              Meet Simbi!
              <br />
              Your AI Study Buddy.
            </h1>
            <p className="mt-2 text-2xl text-[#6B7280] mx-auto leading-[32px]">
              Simbi helps you plan, stay motivated and <br />
              learn effectively with a touch of personality
            </p>
            <div className="mt-14 flex flex-col justify-center items-center">
              <Link href="/auth/signup" className="w-full">
                <button className="bg-[#7A5FFF] text-white p-3.5 text-sm w-full cursor-pointer">
                  Get Started
                </button>
              </Link>
              <Link href="/auth/signin" className="w-full mt-3">
                <button className="text-sm text-[#7A5FFF] border border-[#7A5FFF] p-3.5 rounded-md w-full cursor-pointer">
                  I Have an Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-18 my-28">
        <div className="grid grid-rows-1 md:grid-cols-4 gap-10 h-96">
          {[
            {
              title: "Smart Study",
              image: "/images/frame1.svg",
              description:
                "Plan your studies with personalized guidance from Simbi.",
            },
            {
              title: "Accountability",
              image: "/images/frame2.svg",
              description:
                "Stay on track with reminders and motivational nudges.",
            },
            {
              title: "Resources",
              image: "/images/frame3.svg",
              description: "Get access to curated learning materials.",
            },
            {
              title: "Rewards",
              image: "/images/frame4.svg",
              description:
                "Earn crypto and NFTs for reaching your study goals.",
            },
          ].map(({ title, image, description }, i) => (
            <div
              key={i}
              className="bg-white border-[0.88px] border-[#C1BCFF] shadow-[0_19px_86.9px_0_#957FFF87] rounded-4xl overflow-hidden text-center transform transition-transform duration-300 ease-out
         hover:scale-105"
            >
              <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
              <h3 className="font-medium text-[28px] text-left mt-4 px-4">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 text-left px-4">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Simbi is here for */}
      <section className="bg-white py-16 px-6 mr-20 text-center flex justify-end items-center">
        <div className="flex w-1/2">
          <Image
            src="/images/simbi-2.svg"
            alt="Simbi Character"
            width={250}
            height={300}
            className="mx-auto h-auto"
          />
        </div>
        <div className="flex flex-col justify-center text-left gap-4">
          <h2 className="text-5xl font-medium mt-4">Simbi is here for</h2>
          <ul className="mt-4 space-y-5 font-light text-3xl text-[#6B7280] max-w-md mx-auto">
            <li className="leading-[31px]">
              Self-learners & exam preppers who want structure
            </li>
            <li className="leading-[31px]">
              Procrastinators who need a motivational kick
            </li>
            <li className="leading-[31px]">
              High school & university students tired of falling behind
            </li>
            <li className="leading-[31px]">
              All-learners blazing their own educational path
            </li>
          </ul>
        </div>
      </section>

      {/* Why Simbi Works */}
      <section className="bg-[#E4DFFF] py-36 px-16 text-center">
        <h2 className="text-5xl font-medium">Why Simbi works</h2>
        <div className="grid grid-rows-1 md:grid-cols-4 gap-6 mt-20 px-20 group">
          {[
            {
              title: "All That Understands You",
              image: "/images/group1.svg",
              description:
                "Personalized plans, custom quizzes, and supports that adapts to how you learn.",
              textColor: "#7A5FFF",
            },
            {
              title: "'A Study Buddy With Real Personality",
              image: "/images/group2.svg",
              description:
                "SIMBI cheers when you win, roasts when you slack, and makes studying fun.",
              textColor: "#16A349",
            },
            {
              title: "'Web3 Rewards",
              image: "/images/group3.svg",
              description:
                "Earn tokens, unlock NFTs and join study groups where crypto meets accountability.",
              textColor: "#FF5A5F",
            },
            {
              title: "Everywhere You Want",
              image: "/images/group4.svg",
              description:
                "On your laptop, on your phone, on your telegram. SIMBI's got your back.",
              textColor: "#F99D07",
            },
          ].map(({ title, image, description, textColor }, i) => (
            <div
              key={i}
              className="bg-white rounded-4xl p-4 py-8 shadow flex flex-col items-center gap-5
        transform transition-transform duration-700 ease-out
        group-hover:scale-95 hover:scale-105"
            >
              <Image
                src={image}
                alt={title}
                width={32}
                height={67}
                className="mx-auto mb-2 w-18 h-auto"
              />
              <h3
                className="text-2xl font-normal min-h-[3rem]"
                style={{ color: textColor }}
              >
                {title}
              </h3>
              <p className="text-xl text-black font-light">{description}</p>
            </div>
          ))}
          <></>
        </div>
      </section>

      {/* Real talk */}
      <section className="flex justify-center items-center px-6 py-32 gap-10">
        <h2 className="text-5xl font-medium max-w-1/6">Real talk from Simbi</h2>
        <div className="bg-white rounded-xl shadow-[0_19px_50px_0_#957FFF87] max-w-[745px] py-8 px-9 ">
          <Image
            src="/images/quote.svg"
            alt="Quote"
            width={100}
            height={100}
            className="w-10"
          />
          <div className="inner-sect flex items-center gap-6">
            <p className="text-lg text-gray-700 ">
              You missed your flashcards again? Your neurons are screaming for
              mercy. Open the app before I start erasing your GPA.
            </p>
            <Image
              src="/images/simbi-3.svg"
              alt="Simbi Character"
              width={100}
              height={100}
              className="mx-auto mt-4"
            />
          </div>

          <p
            className={`mt-2 font-black text-[28px] leading-[100%] ${roboto.className}`}
          >
            Simbi,{" "}
            <span className="poppins font-normal text-xs leading-[150%]">
              your best frenemy!
            </span>
          </p>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-12 bg-[#E4DFFF]">
        <div className="flex flex-col items-center text-center relative my-20 px-6">
          <Image
            src="/images/simbi-head.svg"
            alt="Simbi character"
            width={100}
            height={100}
            className="mx-auto mt-6 w-54 h-auto"
          />
          <button className="absolute top-50 bg-[#7A5FFF] text-white px-4 py-2 rounded-md text-[32px] w-3/4 h-auto">
            Get Started in 60 Seconds
          </button>
        </div>
        <div className="relative w-full">
          {/* Path background */}
          <Image
            src="/images/map-group.svg"
            alt="Path"
            width={600}
            height={200}
            className="w-full"
          />

          <div className="absolute bottom-68 left-22 animate-float">
            <div className="relative">
              <Image
                src="/images/stand-1.svg"
                alt="Stand"
                width={100}
                height={100}
                className="w-42 h-auto"
              />
              <Image
                src="/images/head-1.svg"
                alt="Stand"
                width={100}
                height={100}
                className="absolute top-10 left-8"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-18 mx-48 text-left text-sm">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-[#F7F6FD] px-6 py-7 rounded-2xl border border-[#1E1E2F] shadow-[10px_11px_28.9px_0_rgba(149,127,255,0.61)]"
            >
              <p style={{ color: item.color }} className="font-light text-2xl">
                <span>{i + 1}.</span> {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-12">
        <h2 className="text-xl font-semibold">
          Study Smarter. Stay on track. Get Roasted (lovingly)
        </h2>
        <p className="text-sm mt-2">Sign up and get acquainted with Simbi!</p>
        <div className="mt-4 space-x-2">
          <Link href="/auth/signup">
            <button className="bg-[#6046FF] text-white px-4 py-2 rounded-md text-sm">
              Get Started
            </button>
          </Link>
          <Link href="/auth/signin">
            <button className="text-sm border px-4 py-2 rounded-md">
              I Have an Account
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EDEBFB] px-6 py-12 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Simbi Logo" width={24} height={24} />
              <span className="font-semibold">SIMBI</span>
            </div>
            <p className="mt-2">© Simbi Inc. 2025. We love our users!</p>
          </div>

          <div className="flex space-x-12 text-left">
            <div>
              <p className="font-semibold">Mobile App</p>
              <ul>
                <li>Features</li>
                <li>How it works</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Community</p>
              <ul>
                <li>For Friends</li>
                <li>Live rooms</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Company</p>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <button className="bg-[#6046FF] text-white px-4 py-2 rounded-md text-sm">
              Get Started
            </button>
            <button className="block mt-2 text-sm border px-4 py-2 rounded-md">
              I Have an Account
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
