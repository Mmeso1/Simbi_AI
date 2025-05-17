"use client";
import ChatInput from "@/components/chatbot/chatInput";
import { useChatStore } from "@/store/chatStore";
import { useEffect, useLayoutEffect, useRef } from "react";
import { getChatMessages } from "@/api/chat";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";
import MarkdownRenderer from "@/components/chatbot/markdownRenderer";

export default function ChatPage() {
  const { prompt, responses, setDisplay, setChatId, addResponse, clearChat } =
    useChatStore();
  const params = useParams();
  const chatId = params?.id ?? "";

  // This ref ensures we only initialize once, even under StrictMode
  const initializedRef = useRef(false);

  useEffect(() => {
    setDisplay(true);

    // Only run our init logic once
    if (initializedRef.current) return;
    initializedRef.current = true;

    clearChat();

    if (!chatId) {
      return;
    }

    // Existing chat: set ID and load history
    setChatId(chatId as string);
    getChatMessages(chatId as string)
      .then((data) => {
        if (data.success) {
          data.messages.forEach((m) =>
            addResponse({
              from: m.role === "user" ? "user" : "assistant",
              text: m.content,
            })
          );
        }
      })
      .catch((err) => {
        console.error("Failed to load messages:", err);
        toast.error("Failed to load messages");
      });
  }, [chatId, setDisplay, clearChat, setChatId, addResponse]);

  // ref to the bottom “sentinel”
  const bottomRef = useRef<HTMLDivElement>(null);

  // after each new response, scroll so bottomRef is in view
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses.length]);

  return (
    <div className="flex flex-col h-screen mx-20 md:mx-40">
      {/* 1) Messages pane */}
      <div className="flex-1 overflow-y-auto scrollbar-none px-4 py-6 pt-28">
        {prompt && (
          <div className="mb-4 flex justify-end">
            <div className="bg-[#E4DFFF] p-3 rounded-lg max-w-[75%]">
              {prompt}
            </div>
          </div>
        )}

        {responses.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 flex text-sm ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.from === "user" ? "bg-[#E4DFFF]" : "bg-white shadow"
              }`}
            >
              {msg.from === "assistant" ? (
                <MarkdownRenderer content={msg.text} />
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}

        {/* Bottom sentinel */}
        <div ref={bottomRef} />
      </div>

      {/* 2) Sticky Input Bar */}
      <div className="sticky bottom-5 inset-x-0 bg-white px-4">
        <div className="w-full max-w-6xl mx-auto">
          <ChatInput display={false} />
        </div>
      </div>
    </div>
  );
}
