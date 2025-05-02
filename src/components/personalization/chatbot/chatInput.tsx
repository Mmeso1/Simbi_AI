"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ChatInputProps {
  display?: boolean;
}

export default function ChatInput(display: ChatInputProps) {
  const bubbleOptions = ["Search", "Generate", "Create"];
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const router = useRouter();

  return (
    <div className="w-full px-4 bg-[#FDFDFF]">
      {/* Heading and Simbi image */}
      {display && (
        <div className="w-full max-w-3xl text-center ml-50">
          <img
            src="/chatbot/text.svg"
            alt="talk to simbi text"
            className="mb-6"
          />
        </div>
      )}

      {/* Input bar */}
      <div className="relative flex flex-col justify-center w-full h-[250px] bg-white border border-[#7A5FFF] rounded-2xl px-6">
        <textarea
          placeholder="Ask anything"
          onChange={handleInputChange}
          value={inputValue}
          className="my-6 text-[rgba(30,30,47,0.84)] text-xl font-thin focus:outline-none resize-none w-full max-h-40 overflow-y-auto bg-transparent"
          rows={1}
        />

        {/* Bubbles */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="flex items-center -mr-2 p-2 rounded-[50%] border-2 border-[#7A5FFF] text-[#7A5FFF]">
              <Image src="/chatbot/add.svg" alt="Plus" width={25} height={25} />
            </button>

            {bubbleOptions.map((option, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#7A5FFF] text-[#7A5FFF] cursor-pointer"
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
                }}
                className="text-[#7A5FFF] font-extralight cursor-pointer"
              >
                Send
              </button>
            )}
          </div>
        </div>

        {/* Sitting Simbi */}
        {display && (
          <div className="absolute left-0 -top-42 w-54 h-54">
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
  );
}
