"use client";
import Image from "next/image";
import Link from "next/link";
import { useChatStore } from "@/store/chatStore";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { display } = useChatStore();

  return (
    <div className="flex h-screen">
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
            <button className="cursor-pointer flex items-center gap-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF] text-left text-sm w-full">
              <Image
                src="/chatbot/explore.svg"
                alt="explore icon"
                width={22}
                height={22}
              />
              <span>Explore Simbi</span>
            </button>
            <button className="cursor-pointer flex items-center gap-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF] text-left text-sm w-full">
              <Image
                src="/chatbot/library.svg"
                alt="library icon"
                width={22}
                height={22}
              />
              <span>Library</span>
            </button>
            <Link
              href={"/"}
              className="cursor-pointer flex items-center gap-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF] text-left text-sm w-full"
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
      <div className=" ml-[250px] flex flex-col flex-1 pt-12 px-12 ">
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
              src="/chatbot/pfp.jpg"
              alt="Profile"
              width={40}
              height={40}
              className={`rounded-full ${
                display ? "w-5 h-5 md:w-10 md:h-10" : "w-15 h-15"
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
