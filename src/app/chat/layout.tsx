"use client";
import Image from "next/image";
import { useChatStore } from "@/store/chatStore";
import { useEffect, useState } from "react";
import Sidebar from "@/components/chatbot/sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { display } = useChatStore();
  const [, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("Display", display);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar overlay on mobile, persistent on desktop */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content Area: static, with desktop margin */}
      <div
        className={`flex-1 flex flex-col w-full transition-all duration-300
          ${sidebarOpen ? "md:ml-64" : ""}`}
      >
        <header className="flex items-center justify-end p-8 z-10">
          <Image
            src="/chatbot/sidebar-toggler.svg"
            alt="Toggle Sidebar"
            width={24}
            height={24}
            className="cursor-pointer mr-4"
            onClick={() => setSidebarOpen((o) => !o)}
          />
          {display && (
            <>
              <Image
                src="/chatbot/share.svg"
                width={20}
                height={20}
                alt="share"
                className="mr-4"
              />
              <Image
                src="/chatbot/elipsis.svg"
                width={20}
                height={20}
                alt="more"
                className="mr-4"
              />
            </>
          )}
          <Image
            src="/chatbot/pfp.png"
            alt="Profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </header>

        <main className="w-full flex-1 flex items-center justify-center bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
