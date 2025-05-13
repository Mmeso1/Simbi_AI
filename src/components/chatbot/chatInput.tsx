"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useChatStore } from "@/store/chatStore";

interface ChatInputProps {
  display?: boolean;
}

export default function ChatInput({ display }: ChatInputProps) {
  const bubbleOptions = ["Search", "Generate", "Create"];
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const [isMobile, setIsMobile] = useState(false);
  console.log("Display", display);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const router = useRouter();
  const { setPrompt } = useChatStore();

  const handleSend = () => {
    setPrompt(inputValue);
  };

  return (
    <div className="flex w-full justify-center">
      <div
        className={`w-full max-w-6xl sm:px-4 px-0 mx-auto ${
          display ? "md:-mb-40" : "mb-0"
        }`}
      >
        {/* Centered Welcome */}
        <div
          className={`${
            isMobile && display
              ? "flex flex-col items-center text-center"
              : "invisible"
          }`}
        >
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
        {/* Input bar */}
        <div
          className={`relative flex flex-col justify-center mx-auto w-full md:w-4/5 lg:w-3/4
          ${
            display ? "h-[250px]" : "h-[200px]"
          } bg-white border border-[#7A5FFF] rounded-2xl px-6 mb-4`}
        >
          <textarea
            placeholder="Ask anything"
            onChange={handleInputChange}
            value={inputValue}
            className="my-6 text-[rgba(30,30,47,0.84)] text-xl font-normal focus:outline-none resize-none w-full max-h-40 overflow-y-auto bg-transparent"
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
            {/* Microphone icon (left) */}

            <div className="flex items-center gap-4">
              <button className="cursor-pointer">
                <Image
                  src="/chatbot/microphone.svg"
                  alt="Microphone"
                  width={36}
                  height={36}
                />
              </button>{" "}
              {inputValue && (
                <button
                  onClick={() => {
                    const chatID = encodeURIComponent(
                      inputValue.trim().slice(0, 20)
                    );
                    router.push(`/chat/${chatID}`);
                    handleSend();
                  }}
                  className="text-[#7A5FFF] font-extralight cursor-pointer"
                >
                  Send
                </button>
              )}
            </div>
          </div>

          {display && (
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
