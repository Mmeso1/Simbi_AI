"use client";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useHistoryStore } from "@/store/chatHistory";
import { getAllChats } from "@/api/chat";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// Helper to categorize date labels
function getDateLabel(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays === 7) return "A Week ago";
  if (diffDays < 30) return `${diffDays} days ago`;
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleString(undefined, { month: "long" });
  }
  return date.toLocaleString(undefined, { month: "long", year: "numeric" });
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const { chats, setChats } = useHistoryStore();
  const params = useParams();
  const currentId = params.id;

  useEffect(() => {
    getAllChats()
      .then((data) => {
        if (data.success) setChats(data.chats);
      })
      .catch((err) => {
        console.error("Failed to load chats:", err);
        toast.error("Failed to load chats");
      });
  }, [setChats]);

  // Sort chats descending by updatedAt
  const sorted = [...chats].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Group by date label
  const grouped: Record<string, typeof sorted> = {};
  sorted.forEach((chat) => {
    const label = getDateLabel(chat.updatedAt);
    if (!grouped[label]) grouped[label] = [];
    grouped[label].push(chat);
  });

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-8 left-8 z-50 cursor-pointer"
        >
          <Image
            src="/chatbot/mobile-toggler.svg"
            alt="Open Sidebar"
            width={24}
            height={24}
          />
        </button>
      )}

      <aside
        className={
          `fixed top-0 left-0 z-50 h-screen w-64 bg-[#1F125C] p-5 text-white overflow-auto
          transform transition-transform duration-300 ` +
          (open ? "translate-x-0" : "-translate-x-full")
        }
      >
        {/* Close bar */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setOpen(false)}>
            <Image
              src="/chatbot/sidebar-toggler.svg"
              alt="Close Sidebar"
              width={24}
              height={24}
            />
          </button>
          <div className="flex items-center gap-4">
            <Image
              src="/chatbot/search.svg"
              alt="Search"
              width={24}
              height={24}
            />
            <Link href="/chat">
              <Image
                src="/chatbot/edit.svg"
                alt="Edit"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        <section className="my-8 space-y-5">
          <Image
            src="/chatbot/headerIcon.svg"
            alt="header icon"
            width={150}
            height={150}
          />

          <div className="space-y-5">
            <button className="flex items-center gap-7 text-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF]">
              <Image
                src="/chatbot/explore.svg"
                alt="Explore"
                width={22}
                height={22}
              />
              <span>Explore Simbi</span>
            </button>
            <button className="flex items-center gap-7 text-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF]">
              <Image
                src="/chatbot/library.svg"
                alt="Library"
                width={22}
                height={22}
              />
              <span>Library</span>
            </button>
            <Link
              href="/dashboard"
              className="flex items-center gap-7 text-sm w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF]"
            >
              <span>Back to dashboard</span>
            </Link>
          </div>
        </section>

        <div className="mt-6 space-y-6">
          {Object.entries(grouped).map(([label, chatsInGroup]) => (
            <div key={label}>
              <h2 className="text-xs font-semibold uppercase text-gray-400 mb-2">
                {label}
              </h2>
              <div className="space-y-2">
                {chatsInGroup.map((chat) => (
                  <Link
                    key={chat.id}
                    href={`/chat/${chat.id}`}
                    className={`block p-3 rounded truncate ${
                      chat.id === currentId
                        ? "bg-[#5B4B9A] font-semibold"
                        : "bg-[#4C417D] hover:bg-[#5B4B9A]"
                    }`}
                  >
                    <div className="text-base font-medium truncate">
                      {chat.title}
                    </div>
                    {/* <div className="text-xs text-gray-300">
                      {new Date(chat.updatedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div> */}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
