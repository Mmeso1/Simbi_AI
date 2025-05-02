import Image from "next/image";
import Link from "next/link";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-[250px] bg-[#1F125C] p-5 text-white">
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
              <img src="/chatbot/explore.svg" alt="explore icon" />
              <span>Explore Simbi</span>
            </button>
            <button className="cursor-pointer flex items-center gap-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5FFF] text-left text-sm w-full">
              <img src="/chatbot/library.svg" alt="library icon" />
              <span>Library</span>
            </button>
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
      <div className="flex flex-col flex-1 pt-12 px-12">
        {/* Header */}
        <header className="h-[60px] p-4 flex items-center justify-between">
          <img
            src="/chatbot/pfp.png"
            alt="Profile"
            className="rounded-[50%] w-15 h-15 object-cover ml-auto"
          />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-white">{children}</main>
      </div>
    </div>
  );
}
