"use client";
import ChatInput from "@/components/personalization/chatbot/chatInput";
import { useChatStore } from "@/store/chatStore";
import { useEffect } from "react";

export default function ChatPage() {
  const { prompt, responses, setDisplay } = useChatStore();
  // run once on mount
  useEffect(() => {
    setDisplay(true);
  }, [setDisplay]);

  return (
    <div className="flex flex-col flex-1">
      {/* 1) Messages pane (scrollable) */}
      <div className="flex-1 overflow-y-scroll scrollbar-none px-4 py-6">
        {/* User prompt */}
        <div className="mb-4 flex justify-end">
          <div className="bg-[#E4DFFF] p-3 rounded-lg max-w-[75%]">
            {prompt}
          </div>
        </div>

        {/* AI & user responses */}
        {responses.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.from === "user" ? "bg-[#E4DFFF]" : "bg-white shadow"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 2) Input bar (sticky within the chat column) */}
      <div className="fixed flex bottom-10 z-50 w-full max-w-5xl mx-auto px-4">
        <ChatInput display={false} />
      </div>
    </div>
  );
}
