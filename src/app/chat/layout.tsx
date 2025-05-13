"use client";
import Image from "next/image";
import Link from "next/link";
import { useChatStore } from "@/store/chatStore";
import { useEffect, useState } from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { display } = useChatStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-between px-4 pt-6 pb-4">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <Image
            src="/chatbot/sidebar-toggler.svg"
            alt="Sidebar Toggler"
            width={24}
            height={24}
          />
          <Image
            src="/chatbot/pfp.png"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>

        {/* Centered Welcome */}
        <div className="flex flex-col items-center text-center mt-8">
          <h2 className="text-xl text-[#B3A4FF] font-light">Talk to</h2>
          <h1 className="text-3xl font-extrabold text-[#5D2FFF] mt-1">SIMBI</h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <ActionButton icon="/chatbot/search.svg" label="Search" />
            <ActionButton icon="/chatbot/image1.svg" label="Create" />
            <ActionButton icon="/chatbot/image1.svg" label="Generate" />
            <ActionButton icon="/chatbot/menu.svg" label="Write" />
            <ActionButton icon="/chatbot/code.svg" label="Code" />
          </div>
        </div>

        {/* Character Avatar */}
        <div className="mt-8">
          <Image
            src="/chatbot/sit.svg"
            alt="Avatar"
            width={100}
            height={100}
          />
        </div>

        {/* Input Area */}
        <div className="w-full mt-4">
          <div className="border border-[#B3A4FF] rounded-2xl px-4 py-2 flex items-center gap-3">
            <Image
              src="/chatbot/plus.svg"
              alt="Plus"
              width={24}
              height={24}
              className="opacity-60"
            />
            <input
              type="text"
              placeholder="Ask anything"
              className="flex-1 border-none outline-none text-gray-600 placeholder-gray-400 bg-transparent"
            />
            <Image
              src="/chatbot/microphone.svg"
              alt="Mic"
              width={24}
              height={24}
              className="opacity-60"
            />
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout (unchanged)
  return (
    <div className="flex h-screen md:flex-row">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 
          h-screen w-[250px] 
          bg-[#1F125C] p-5 text-white 
          overflow-auto"
      >
        <div className="top-bar flex items-center justify-between mt-4">
          <Image
            src="/chatbot/sidebar-toggler.svg"
            alt="Sidebar Toggler"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/chatbot/search.svg"
              alt="Chatbot"
              className="cursor-pointer"
              width={24}
              height={24}
            />
            <Image
              src="/chatbot/edit.svg"
              alt="Another Image"
              className="cursor-pointer"
              width={24}
              height={24}
            />
          </div>
        </div>
        <section className="my-8 space-y-5">
          <Image
            src="/chatbot/headerIcon.svg"
            alt="header icon"
            width={150}
            height={150}
          />

          <div className="menu-options space-y-5">
            <button className="cursor-pointer flex items-center gap-7 text-left text-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF]">
              <Image
                src="/chatbot/explore.svg"
                alt="explore icon"
                width={22}
                height={22}
              />
              <span>Explore Simbi</span>
            </button>
            <button className="cursor-pointer flex items-center gap-7 text-left text-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF]">
              <Image
                src="/chatbot/library.svg"
                alt="library icon"
                width={22}
                height={22}
              />
              <span>Library</span>
            </button>
            <Link
              href={"/study-plans"}
              className="cursor-pointer flex items-center gap-7 text-left text-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF]"
            >
              <span>Back to study plan</span>
            </Link>
          </div>
        </section>

        <section className="chat-history mt-24">
          <div className="chat-history-item">
            <h2 className="chat-day font-semibold mb-4">Today</h2>
            <Link
              href={"/"}
              className="flex chat-title bg-[#4C417D] p-4 w-full cursor-pointer"
            >
              Introduction
            </Link>
          </div>
        </section>
      </aside>

      {/* Main Area */}
      <div className="ml-[250px] flex flex-col flex-1 pt-12 px-12">
        {/* Header */}
        <header className="h-[60px] p-4 flex items-center">
          <div className="flex items-center gap-4 ml-auto">
            {display && (
              <>
                <Image
                  src="/chatbot/share.svg"
                  width={20}
                  height={20}
                  alt="share icon"
                />
                <Image
                  src="/chatbot/elipsis.svg"
                  width={20}
                  height={20}
                  alt="elipsis"
                />
              </>
            )}
            <Image
              src="/chatbot/pfp.png"
              alt="Profile"
              width={40}
              height={40}
              className={`rounded-full ${
                display ? "w-10 h-10" : "w-15 h-15"
              } object-cover`}
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 flex items-center bg-white">{children}</main>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="border border-[#B3A4FF] text-[#5D2FFF] px-4 py-2 rounded-full text-sm flex items-center gap-2 font-medium">
      <Image src={icon} alt={label} width={18} height={18} />
      {label}
    </button>
  );
}
