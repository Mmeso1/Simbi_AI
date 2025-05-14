"use client";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {/* Toggle button (only when closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-8 left-8 z-50"
        >
          <Image
            src="/chatbot/mobile-toggler.svg"
            alt="Open Sidebar"
            width={24}
            height={24}
          />
        </button>
      )}

      {/* Sidebar drawer */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-[#1F125C] p-5 text-white overflow-auto
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setOpen(false)}>
            <Image
              src="/chatbot/sidebar-toggler.svg"
              alt="Close Sidebar"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
          <div className="flex items-center gap-4">
            <Image
              src="/chatbot/search.svg"
              alt="Search"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/chatbot/edit.svg"
              alt="Edit"
              width={24}
              height={24}
              className="cursor-pointer"
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

        <nav className="space-y-5">{/* …buttons and links */}</nav>
        <div className="mt-24">
          <h2 className="font-semibold mb-4">Today</h2>
          <Link href="/" className="block bg-[#4C417D] p-4 rounded">
            Introduction
          </Link>
        </div>
      </aside>
    </>
  );
}
