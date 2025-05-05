"use client";
import Image from "next/image";
import '@/app/globals.css';
import React from "react";

export default function Home() {
  return (
    <main className="bg-[#F5F4FC] text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Simbi Logo" width={100} height={75} />
        </div>
        <button className="text-sm">Language</button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="flex flex-row">
          <div className="flex w-2/5">
            <Image src="/images/hero.png" alt="Simbi Character" width={250} height={250} className="mx-auto" />
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-semibold mt-4">Meet Simbi!<br />Your AI Study Buddy.</h1>
            <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
              Simbi helps you plan, stay motivated and learn effectively with a touch of personality
            </p>
            <div className="mt-4 space-x-2">
              <button className="bg-[#6046FF] text-white px-4 py-2 rounded-md text-sm">Get Started</button>
              <button className="text-sm border px-4 py-2 rounded-md">I Have an Account</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-rows-1 md:grid-cols-4 gap-10 px-6 py-12">
        {[
          {
            title: "Smart Study",
            image: "/images/frame1.png",
            description: "Plan your studies with personalized guidance from Simbi."
          },
          {
            title: "Accountability",
            image: "/images/frame2.png",
            description: "Stay on track with reminders and motivational nudges."
          },
          {
            title: "Resources",
            image: "/images/frame3.png",
            description: "Get access to curated learning materials."
          },
          {
            title: "Rewards",
            image: "/images/frame4.png",
            description: "Earn crypto and NFTs for reaching your study goals."
          }
        ].map(({ title, image, description }, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-4 text-center">
            <Image src={image} alt={title} width={300} height={150} className="mx-auto" />
            <h3 className="font-semibold mt-2">{title}</h3>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          </div>
        ))}
      </section>


      {/* Simbi is here for */}
      <section className="bg-white py-12 px-6 text-center flex flex-row">
        <div className="flex w-1/2">
          <Image src="/images/simbi-2.png" alt="Simbi Character" width={200} height={200} className="mx-auto content-end" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mt-4">Simbi is here for</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 max-w-md mx-auto text-left">
            <li>Self-learners & exam preppers who want structure</li>
            <li>Procrastinators who need a motivational kick</li>
            <li>High school & university students tired of falling behind</li>
            <li>All-learners blazing their own educational path</li>
          </ul>
        </div>
      </section>

      {/* Why Simbi Works */}
      <section className="bg-[#EDEBFB] py-12 px-6 text-center">
        <h2 className="text-xl font-semibold">Why Simbi works</h2>
        <div className="grid grid-rows-1 md:grid-cols-4 gap-6 mt-8">
          {[
          {
            title: "All That Understands You",
            image: "/images/group1.png",
            description: "Personalized plans, custom quizzes, and supports that adapts to how you learn."
          },
          {
            title: "'A Study Buddy With Real Personality",
            image: "/images/group2.png",
            description: "SIMBI cheers when you win, roasts when you slack, and makes studying fun."
          },
          {
            title: "'Web3 Rewards",
            image: "/images/group3.png",
            description: "Earn tokens, unlock NFTs and join study groups where crypto meets accountability."
          },
          {
            title: "Everywhere You Want",
            image: "/images/group4.png",
            description: "On your laptop, on your phone, on your telegram. SIMBI's got your back."
          }
          ].map(({ title, image, description }, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow text-sm">
              <Image src={image} alt={title} width={32} height={32} className="mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
        
      </section>

      {/* Real talk */}
      <section className="text-center px-6 py-12">
        <h2 className="text-lg font-semibold">Real talk from Simbi</h2>
        <div className="bg-white rounded-md shadow p-6 mt-4 max-w-md mx-auto">
          <p className="text-sm text-gray-700">"You missed your flashcards again? Your rewards are screaming for mercy. Open the app before I start grading your day."</p>
          <p className="mt-2 font-bold text-purple-800">- Simbi</p>
        </div>
        <Image src="/simbi-3.png" alt="Simbi character" width={100} height={100} className="mx-auto mt-6" />
        <button className="bg-[#6046FF] text-white px-4 py-2 rounded-md mt-4 text-sm">Get Started in 60 Seconds</button>
      </section>

      {/* Getting Started Steps */}
      <section className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
          {[
            'Create your free account',
            'Tell Simbi what you’re studying',
            'Get a personalized plan with built-in accountability',
            'Use the Telegram Bot for on-the-go support',
            'Earn crypto rewards and unlock custom NFT badges',
          ].map((step, i) => (
            <div key={i} className="bg-[#F7F6FD] p-4 rounded-lg shadow">
              <p><span className="font-bold">{i + 1}.</span> {step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-12">
        <h2 className="text-xl font-semibold">Study Smarter. Stay on track. Get Roasted (lovingly)</h2>
        <p className="text-sm mt-2">Sign up and get acquainted with Simbi!</p>
        <div className="mt-4 space-x-2">
          <button className="bg-[#6046FF] text-white px-4 py-2 rounded-md text-sm">Get Started</button>
          <button className="text-sm border px-4 py-2 rounded-md">I Have an Account</button>
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
            <button className="bg-[#6046FF] text-white px-4 py-2 rounded-md text-sm">Get Started</button>
            <button className="block mt-2 text-sm border px-4 py-2 rounded-md">I Have an Account</button>
          </div>
        </div>
      </footer>
    </main>
  );
}