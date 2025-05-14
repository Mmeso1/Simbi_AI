"use client";
import Image from "next/image";
import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
import { roboto } from "@/lib/fonts";
import Testimonials from "@/components/testimonials/testimony";
import { steps, testimonies } from "@/data/homepageData";
import LanguageDropdown from '@/components/Languagedropdown';
import useAuthStore from "@/store/authStore";

export default function Home() {
  const { user } = useAuthStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check both user state and token presence
    const hasToken =
      document.cookie.includes("accessToken=") ||
      localStorage.getItem("accessToken");
    setIsLoggedIn(!!user || !!hasToken);
  }, [user]);

  return (
    <main className="bg-[#FDFDFF] text-[#1E1E2F">
      {/* Header */}
      {/* Desktop-Only View */}
      <div className="hidden lg:block">
        <header className="flex justify-between items-center px-30 py-8 bg-white">
          <div className="flex items-ceimport Link from 'next/link';nter space-x-2">
            <Image src="/delly.svg" alt="Simbi Logo" width={155} height={50} />
          </div>
          <div className="text-base font-medium"><LanguageDropdown /></div>
        </header>
      </div>

      {/* Header */}
      {/* Tablet & Mobile-Only View */}
      <header className="lg:hidden flex justify-between items-center px-6 md:px-16 py-4 bg-white space-x-3">
        <div className="flex items-center space-x-2">
          <Image  className="w-25 h-auto md:w-15" src="/delly.svg" alt="Simbi Logo" width={100} height={20} />
        </div>
        <div className="text-base font-medium "><LanguageDropdown /></div>
      </header>

      {/* Hero Section */}
      {/* Desktop-Only View */}
      <section className="hidden lg:flex flex-col justify-center bg-[#E9E8FF] h-[78vh] text-center">
        <div className="flex flex-row justify-center items-center gap-24">
          <div className="">
            <Image
              src="/images/hero.svg"
              alt="Simbi Character"
              width={250}
              height={250}
              className="mx-auto "
            />
          </div>

          <div className="flex flex-col justify-center mb-6">
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
              {!isLoggedIn ? (
                <>
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
                </>
              ) : (
                <Link href="/dashboard" className="w-full">
                  <button className="bg-[#7A5FFF] text-white p-3.5 text-sm w-full cursor-pointer">
                    Go to Dashboard
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Hero Section */}
      {/* Tablet & Mobile-Only View */}
      <section className="block lg:hidden flex flex-col items-center justify-between bg-[#E9E8FF] min-h-[100vh] px-6 pt-16 pb-10 text-center">
          <div className="max-w-md w-full">
       <h1 className="text-3xl font-extrabold text-[#1F1F1F] leading-tight">
      Meet Simbi!
      <br />
      Your Ai Study Buddy.
    </h1>
    <p className="mt-4 text-base text-[#6B7280] leading-relaxed">
      Simbi helps you plan, stay motivated and learn<br />
      effectively with a touch of personality
    </p>

    <div className="mt-10 w-full flex flex-col gap-3">
      {!isLoggedIn ? (
        <>
          <Link href="/auth/signup" className="w-full">
            <button className="bg-[#7A5FFF] text-white font-semibold text-base py-3.5 w-full rounded-lg">
              Get Started
            </button>
          </Link>
          <Link href="/auth/signin" className="w-full">
            <button className="text-[#7A5FFF] border border-[#7A5FFF] font-semibold text-base py-3.5 w-full rounded-lg">
              Have an Account
            </button>
          </Link>
        </>
      ) : (
        <Link href="/dashboard" className="w-full">
          <button className="bg-[#7A5FFF] text-white text-base font-semibold py-3.5 w-full rounded-lg">
            Go to Dashboard
          </button>
        </Link>
      )}
    </div>
  </div>

  {/* Simbi Character at Bottom */}
  <Image
    src="/images/hero.svg"
    alt="Simbi Character"
    width={200}
    height={200}
    className="mt-12"
  />
</section>


      {/* Features */}
      {/* Desktop-Only View */}
      <section className="hidden lg:block px-10 py-18 my-28">
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


      {/* Features */}
      {/* Tablet & Mobile-Only View */}
      <section className="block lg:hidden px-4 py-12 space-y-10">
  {[
    {
      title: "Smart Study",
      image: "/images/frame1.svg",
      description: "Build your smart study plans based on your goals.",
    },
    {
      title: "Accountability",
      image: "/images/frame2.svg",
      description: "Stay accountable with animated reactions and witty push notifications.",
    },
    {
      title: "Quizzes",
      image: "/images/frame3.svg",
      description: "Get support with personalized quizzes, explanations and resources.",
    },
    {
      title: "Rewards",
      image: "/images/frame4.svg",
      description: "Earn rewards through a web 3 Telegram bot. Yes you can study to earn!",
    },
  ].map(({ title, image, description }, i) => (
    <div
      key={i}
      className="bg-white border border-[#C1BCFF] shadow-md rounded-xl w-full max-w-[320px] mx-auto px-4 py-5"
    >
      <Image
        src={image}
        alt={title}
        width={280}
        height={180}
        className="mx-auto object-contain"
      />
      <h3 className="font-bold text-base mt-6 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  ))}
</section>


      
      {/* Simbi is here for */}
      <section className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 hidden md:flex">
        <div className="md:w-1/2">
          <Image src="/images/simbi-2.svg" alt="Simbi Character" width={250} height={300} className="mx-auto" />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-medium">Simbi is here for</h2>
          <ul className="mt-4 space-y-4 text-lg md:text-2xl text-[#6B7280]">
            <li>Self-learners & exam preppers who want structure</li>
            <li>Procrastinators who need a motivational kick</li>
            <li>High school & university students tired of falling behind</li>
            <li>All-learners blazing their own educational path</li>
          </ul>
        </div>
      </section>


      

      {/* Why Simbi Works */}
      {/* Desktop-Only View */}
      <section className="hidden lg:block bg-[#E4DFFF] py-36 px-16 text-center">
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

      {/* Why Simbi Works */}
      {/* Tablet & Mobile-Only View */}
      <section className="block lg:hidden bg-[#E4DFFF] py-16 px-6 md:px-10 text-center">
  <h2 className="text-3xl md:text-4xl font-semibold">Why Simbi works</h2>
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-10">
    {[
      {
        title: "AI That Understands You",
        image: "/images/group1.svg",
        description:
          "Personalized plans, custom quizzes, and support that adapts to how you learn.",
        textColor: "#7A5FFF",
      },
      {
        title: "A Study Buddy With Real Personality",
        image: "/images/group2.svg",
        description:
          "SIMBI cheers when you win, roasts when you slack, and makes studying fun.",
        textColor: "#16A349",
      },
      {
        title: "Web3 Rewards",
        image: "/images/group3.svg",
        description:
          "Earn tokens, unlock NFTs, and join study groups where crypto meets accountability.",
        textColor: "#FF5A5F",
      },
      {
        title: "Everywhere You Want",
        image: "/images/group4.svg",
        description:
          "On your laptop. On your phone. In your Telegram. SIMBI’s got your back.",
        textColor: "#F99D07",
      },
    ].map(({ title, image, description, textColor }, i) => (
      <div
        key={i}
        className="bg-white max-w-[320px] mx-auto p-5 rounded-2xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform"
      >
        <Image
          src={image}
          alt={title}
          width={50}
          height={50}
          className="mb-4"
        />
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: textColor }}
        >
          {title}
        </h3>
        <p className="text-sm text-black font-normal leading-relaxed">
          {description}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Real talk */}
      {/* Desktop-Only View */}
      <div className="hidden lg:block">
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
      </div>

      {/* Real talk */}
      {/* Tablet & Mobile-Only View */}
      <section className="block lg:hidden flex flex-col lg:flex-row justify-center items-center px-6 py-20 gap-10">
        <h2 className="text-4xl font-medium max-w-sm">Real talk from Simbi</h2>
        <div className="bg-white rounded-xl shadow-lg max-w-xl py-8 px-6">
          <Image src="/images/quote.svg" alt="Quote" width={20} height={20} />
          <div className="flex items-center gap-6 mt-4">
            <p className="text-base md:text-lg text-gray-700">
              You missed your flashcards again? Your <br /> neurons are screaming for
              mercy. Open the <br /> app before I start erasing your GPA.
            </p>
            <Image src="/images/simbi-3.svg" alt="Simbi Character" width={100} height={100} />
          </div>
          <p className={`mt-4 font-black text-xl ${roboto.className}`}>Simbi, <span className="poppins font-normal text-xs leading-[150%]">your future best frenemy!</span></p>
        </div>
      </section>

      {/* Getting Started Steps */}
      {/* Desktop-Only View */}
      <section className="hidden lg:block pt-12 pb-18 bg-[#E4DFFF]">
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

      {/* Tablet & Mobile-Only View */}
<section className="block lg:hidden pt-12 pb-20 bg-[#E4DFFF] px-4">
  <div className="text-center">
    <Image
      src="/images/simbi-head.svg"
      alt="Simbi character"
      width={100}
      height={100}
      className="mx-auto"
    />
    <button className="-mt-2 bg-[#7A5FFF] text-white w-full py-3 rounded-xl text-base font-medium">
      Get Started in 60 Seconds
    </button>
    <div className="mt-8">
      <Image
        src="/images/map-group.svg"
        alt="Path"
        width={600}
        height={200}
        className="w-full max-w-full h-auto mx-auto"
      />
    </div>
  </div>

  <div className="mt-12 grid grid-cols-3 gap-4">
    {steps.map((item, i) => (
      <div
        key={i}
        className="bg-[#F7F6FD] px-4 py-5 rounded-2xl border border-[#1E1E2F] shadow-md"
      >
        <p
          style={{ color: item.color }}
          className="font-light text-[14px] leading-snug text-center"
        >
          <span className="font-medium">{i + 1}.</span> {item.text}
        </p>
      </div>
    ))}
  </div>
</section>



      {/* Final CTA */}
      {/* Desktop-Only View */}
      <section className="hidden lg:block w-3/4 mx-auto text-center my-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-10 pb-30">
          {testimonies.map((item, i) => (
            <Testimonials
              key={i}
              name={item.name}
              title={item.title}
              text={item.text}
              color={item.color}
            />
          ))}
        </div>

        <div className="mt-30">
          <h2 className="text-[#1E1E2F] text-center font-poppins text-[48px] font-medium leading-[60px] tracking-[-1.44px]">
            Study Smarter. Stay on track. Get <br /> Roasted (lovingly)
          </h2>
          <p className="mt-3 text-[#6B7280] text-center font-poppins text-[24px] font-normal leading-[32px] tracking-[-0.72px]">
            Sign up and get acquainted with Simbi!
          </p>
          <div className="mt-18 space-x-2 mx-auto">
            <Link href="/auth/signup">
              <button className="bg-[#7A5FFF] text-white px-14 py-3 rounded-1 text-sm w-10">
                Get Started
              </button>
            </Link>
            <Link href="/auth/signin">
              <button className="text-sm text-[#7A5FFF] border border-[#7A5FFF] px-14 py-3 rounded-1 w-10">
                I Have an Account
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Tablet & Mobile-Only View */}
      <section className="block lg:hidden w-full max-w-6xl mx-auto text-center my-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonies.map((item, i) => (
            <Testimonials key={i} {...item} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-[#1E1E2F] text-3xl md:text-5xl font-medium leading-tight">
            Study Smarter. Stay on track. Get <br className="hidden md:block" /> Roasted (lovingly)
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg md:text-2xl">
            Sign up and get acquainted with Simbi!
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <Link href="/auth/signup">
              <button className="bg-[#7A5FFF] text-white px-10 py-3 rounded-md text-sm">Get Started</button>
            </Link>
            <Link href="/auth/signin">
              <button className="text-sm text-[#7A5FFF] border border-[#7A5FFF] px-10 py-3 rounded-md">I Have an Account</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Desktop-Only View */}
      <footer className="hidden lg:block bg-[#EDEBFB] p-30 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="Simbi Logo"
              width={24}
              height={24}
              className="w-56 h-auto"
            />
          </div>

          <div className="flex gap-54 text-left">
            <div>
              <p className="font-normal text-black text-base mb-4">Company</p>
              <ul className="text-base text-[#525252] space-y-4">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <p className="font-normal text-black text-base mb-4">Resources</p>
              <ul className="text-base text-[#525252] space-y-4">
                <li>Blog</li>
                <li>Help Centers</li>
                <li>Tutorials</li>
              </ul>
            </div>
            <div>
              <p className="font-normal text-black text-base mb-4">Connect</p>
              <div className="flex items-center space-x-2">
                <Image
                  src="images/twitter.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />

                <Image
                  src="images/linkedin.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />

                <Image
                  src="images/facebook.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>


      {/* Footer */}
      {/* Tablet & Mobile-Only View */}
      <footer className="block lg:hidden bg-[#EDEBFB] py-10 px-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <Image src="/logo.svg" alt="Simbi Logo" width={155} height={50} className="w-56" />

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p className="font-normal text-black text-base mb-4">Company</p>
              <ul className="text-base text-[#525252] space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <p className="font-normal text-black text-base mb-4">Resources</p>
              <ul className="text-base text-[#525252] space-y-2">
                <li>Blog</li>
                <li>Help Centers</li>
                <li>Tutorials</li>
              </ul>
            </div>
            <div>
              <p className="font-normal text-black text-base mb-4">Connect</p>
              <div className="flex items-center space-x-4">
                <Image src="images/twitter.svg" alt="twitter" width={20} height={20} />
                <Image src="images/linkedin.svg" alt="linkedin" width={20} height={20} />
                <Image src="images/facebook.svg" alt="facebook" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
