"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useChatStore } from "@/store/chatStore";
import { sendPrompt } from "@/api/chat";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

interface ChatInputProps {
  display?: boolean;
}

export default function ChatInput({ display }: ChatInputProps) {
  const bubbleOptions = ["Search", "Generate", "Create"];
  const [isMobile, setIsMobile] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatId = useChatStore((s) => s.chatId);
  const setChatId = useChatStore((s) => s.setChatId);
  const addResponse = useChatStore((s) => s.addResponse);

  const { listening, toggle } = useSpeechRecognition((transcript) => {
    setInputValue((prev) => prev + transcript);
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const router = useRouter();

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    setIsLoading(true);

    try {
      const payload = { content: inputValue, chatId: chatId || "" };
      const { chat, userMessage, aiMessage } = await sendPrompt(payload);

      if (!chatId) setChatId(chat.id);

      addResponse({ from: "user", text: userMessage.content });
      addResponse({ from: "assistant", text: aiMessage.content });

      setInputValue("");
      return chat;
    } catch (err) {
      console.error(err);
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onClickSend = async () => {
    const chat = await handleSend();
    if (chat) router.push(`/chat/${chat.id}`);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      {/* Centered Welcome - Top Content */}
      {isMobile && display && (
        <div className="flex flex-col items-center text-center mt-8">
          <h2 className="text-[27px] text-[#B3A4FF] font-light">Talk to</h2>
          <h1 className="text-4xl font-extrabold text-[#5D2FFF] mt-1">SIMBI</h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-14">
            <ActionButton icon="/chatbot/search.svg" label="Search" />
            <ActionButton icon="/chatbot/image1.svg" label="Create" />
            <ActionButton icon="/chatbot/image1.svg" label="Generate" />
            <ActionButton icon="/chatbot/menu.svg" label="Write" />
            <ActionButton icon="/chatbot/code.svg" label="Code" />
          </div>
        </div>
      )}

      {/* Input Bar - Bottom Content */}
      <div
        className={`w-full max-w-6xl px-4 mx-auto mt-auto mb-${
          display ? "10" : "0"
        }`}
      >
        <div
          className={`relative flex flex-col justify-center mx-auto w-full md:w-4/5 lg:w-3/4
          ${display ? "h-[250px]" : "h-[150px]"} 
          bg-white border border-[#7A5FFF] rounded-2xl px-6`}
        >
          <textarea
            placeholder="Ask anything"
            onChange={handleInputChange}
            value={inputValue}
            disabled={isLoading}
            className={`my-6 text-[rgba(30,30,47,0.84)] text-base font-normal focus:outline-none resize-none w-full max-h-40 overflow-y-auto bg-transparent placeholder:text-base ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            rows={1}
          />

          {/* Bubbles */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="flex items-center -mr-2 p-2 rounded-[50%] border-2 border-[#7A5FFF] text-[#7A5FFF]">
                <Image
                  src="/chatbot/add.svg"
                  alt="Plus"
                  width={25}
                  height={25}
                />
              </button>

              {bubbleOptions.map((option, index) => (
                <button
                  key={index}
                  className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-[#7A5FFF] text-[#7A5FFF] cursor-pointer"
                >
                  <span>{option}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggle}
                className={`
                  cursor-pointer transition-transform
                  ${listening ? "animate-pulse-scale" : "scale-100"}
                `}
              >
                <Image
                  src="/chatbot/microphone.svg"
                  alt="Microphone"
                  width={36}
                  height={36}
                  className={listening ? "filter hue-rotate-200" : ""}
                />
              </button>
              {inputValue && (
                <button
                  onClick={onClickSend}
                  className={`text-[#7A5FFF] font-extralight cursor-pointer ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <div
                      className="w-5 h-5 rounded-full border-2 border-[#7A5FFF] border-t-transparent animate-spin mx-auto"
                      style={{ background: "transparent" }}
                    />
                  ) : (
                    "Send"
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Text to chat with Simbi */}
          {!isMobile && display && (
            <div className="absolute -top-16 left-50">
              <Image
                src="/chatbot/text.svg"
                alt="talk to simbi text"
                width={270}
                height={270}
              />
            </div>
          )}

          {/* Sitting Simbi */}
          {display && (
            <div className="absolute -top-42 left-4 w-54 h-54">
              <Image
                src="/chatbot/sittingSimbi.svg"
                alt="Simbi"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
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
