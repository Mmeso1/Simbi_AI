"use client";
import ChatInput from "@/components/chatbot/chatInput";
import { useChatStore } from "@/store/chatStore";
import { useEffect, useLayoutEffect, useRef } from "react";
import { getChatMessages } from "@/api/chat";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";
export default function ChatPage() {
  const { prompt, responses, setDisplay, setChatId, addResponse, clearChat } =
    useChatStore();
  const params = useParams();
  const chatId = params.id;

  // show the input when this page mounts
  useEffect(() => {
    setDisplay(true);
    clearChat();
    setChatId(chatId as string);

    // fetch existing messages
    getChatMessages(chatId as string)
      .then((data) => {
        if (data.success) {
          console.log(data);
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
  }, [chatId, setDisplay, setChatId, addResponse, clearChat]);

  // ref to the bottom “sentinel”
  const bottomRef = useRef<HTMLDivElement>(null);

  // after each new response, scroll so bottomRef is in view
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses.length]);

  return (
    <div className="flex flex-col h-screen mx-20 md:mx-40">
      {/* 1) Messages pane */}
      <div className="flex-1 overflow-y-auto scrollbar-none px-4 py-6">
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
              {msg.text}
            </div>
          </div>
        ))}

        {/* Bottom sentinel */}
        <div ref={bottomRef} />
      </div>

      {/* 2) Sticky Input Bar */}
      <div className="sticky bottom-5 inset-x-0 bg-white px-4 z-50">
        <div className="w-full max-w-6xl mx-auto">
          <ChatInput display={false} />
        </div>
      </div>
    </div>
  );
}
