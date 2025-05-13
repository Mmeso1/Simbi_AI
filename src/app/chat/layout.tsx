"use client";
import Image from "next/image";
import Link from "next/link";
import { useChatStore } from "@/store/chatStore";
import { useState } from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { display } = useChatStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#1F125C] text-white overflow-auto z-50 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex-shrink-0`}
      >
        <div className="p-5">
          {/* Top bar */}
          <div className="flex items-center justify-between mt-4">
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <Image
                src="/chatbot/sidebar-toggler.svg"
                alt="Sidebar Toggler"
                width={24}
                height={24}
              />
            </button>
            <div className="flex items-center gap-4">
              <Image src="/chatbot/search.svg" alt="Search" width={24} height={24} />
              <Image src="/chatbot/edit.svg" alt="Edit" width={24} height={24} />
            </div>
          </div>

          {/* Logo */}
          <div className="my-8">
            <Image src="/chatbot/headerIcon.svg" alt="Logo" width={150} height={150} />
          </div>

          {/* Menu */}
          <div className="space-y-5">
            <button className="flex items-center gap-4 w-full text-left text-sm">
              <Image src="/chatbot/explore.svg" alt="Explore" width={22} height={22} />
              <span>Explore Simbi</span>
            </button>
            <button className="flex items-center gap-4 w-full text-left text-sm">
              <Image src="/chatbot/library.svg" alt="Library" width={22} height={22} />
              <span>Library</span>
            </button>
            <Link
              href="/study-plans"
              className="flex items-center gap-4 w-full text-left text-sm"
            >
              <span>Back to study plan</span>
            </Link>
          </div>

          {/* Chat History */}
          <div className="mt-24">
            <h2 className="font-semibold mb-4">Today</h2>
            <Link
              href="/"
              className="bg-[#4C417D] p-4 block w-full text-sm"
            >
              Introduction
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-4 md:px-12">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
            <Image src="/chatbot/sidebar-toggler.svg" alt="Toggle" width={24} height={24} />
          </button>
          <div className="flex items-center gap-4 ml-auto">
            {display && (
              <>
                <Image src="/chatbot/share.svg" alt="Share" width={20} height={20} />
                <Image src="/chatbot/elipsis.svg" alt="More" width={20} height={20} />
              </>
            )}
            <Image
              src="/chatbot/pfp.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-12 py-6 bg-white flex flex-col items-center justify-center text-center">
          <h2 className="text-xl text-[#B4A7FF]">Talk to</h2>
          <h1 className="text-3xl font-bold text-[#5B3FF0] mb-6">SIMBI</h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { label: "Search", icon: "/chatbot/search.svg" },
              { label: "Create", icon: "/chatbot/image1.svg" },
              { label: "Generate", icon: "/chatbot/image1.svg" },
              { label: "Write", icon: "/chatbot/menu.svg" },
              { label: "Code", icon: "/chatbot/code.svg" },
            ].map((btn) => (
              <button
                key={btn.label}
                className="flex items-center gap-2 px-4 py-2 border border-[#B4A7FF] rounded-full text-[#5B3FF0] text-sm"
              >
                <Image src={btn.icon} alt={btn.label} width={18} height={18} />
                {btn.label}
              </button>
            ))}
          </div>

          {/* Avatar & Input */}
          <div className="w-full max-w-xl">
            <div className="flex items-end mb-4   ">
              <Image
                src="/chatbot/sit.svg"
                alt="Character"
                width={80}
                height={80}
                className="mr-4"
              />
              <div className="flex-1 relative border border-[#B4A7FF] rounded-xl p-1 flex items-center justify-between ">
                <input
                  type="text"
                  placeholder="Ask anything"
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                />
                <div className="flex items-center gap-3 ml-4">
                  <Image src="/chatbot/plus.svg" alt="Plus" width={24} height={24} />
                  <Image src="/chatbot/microphone.svg" alt="Mic" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
