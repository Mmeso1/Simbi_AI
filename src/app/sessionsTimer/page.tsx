"use client";
import { balooThambi2 } from "@/lib/fonts";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SessionTimerPage() {
  const router = useRouter();

  // Setting up state to get users time input
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const handleStart = () => {
    // Convert user input to seconds and check if it is valid
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds > 0) {
      router.push(`sessionsTimer/countdown?time=${totalSeconds}`);
    }
  };

  return (
    <section className="w-[90%] mx-auto">
      <header className="h-[120px] flex items-center justify-between">
        <aside className="flex w-[148.96px] gap-[4.96px] items-center justify-center cursor-pointer hover:scale-110">
          <Image
            src="/DashboardIcons/mini-logo.svg"
            alt="an Image of simbi"
            width={50}
            height={41}
          />
          <h3
            className={`${balooThambi2.className} text-lightblue  font-bold text-[2rem] `}
          >
            SIMBI
          </h3>
        </aside>
        <aside
          onClick={() => router.push("/study-plans")}
          className="p-4 hover:bg-grayborder hover:rounded-full cursor-pointer"
        >
          <Image
            src="/DashboardIcons/cancelIcon.svg"
            alt="close Icon"
            width={20}
            height={20}
          />
        </aside>
      </header>

      <main>
        <div className="w-full p-[30px] shadow-md rounded-[16px] bg-bgwhite">
          <div className="flex justify-between">
            <p className="font-semibold text-[1.25rem]">Study Timer</p>
            <button
              onClick={handleStart}
              className="rounded-[8px] hover:bg-blue-900 py-[10px] bg-lightblue px-[20px] text-white"
            >
              Start
            </button>
          </div>
          <div className="flex items-center mt-10 font-medium text-[4rem] text-black justify-center  mx-auto gap-[10px]">
            <input
              type="number"
              min={0}
              max={23}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value) || 0)}
              placeholder="00"
              className="border-0 w-[100px] text-center focus:outline-lightblue placeholder:text-black"
            />
            <span>:</span>
            <input
              type="number"
              min={0}
              max={60}
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
              placeholder="00"
              className="border-0 w-[100px] text-center focus:outline-lightblue placeholder:text-black"
            />
            <span>:</span>
            <input
              type="number"
              min={0}
              max={60}
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
              placeholder="00"
              className="border-0 w-[100px] text-center focus:outline-lightblue placeholder:text-black"
            />
          </div>

          <div className="mt-10">
            <p className="font-semibold text-[1.25rem]">
              Simbi&apos;s Current State
            </p>

            <div className="my-7  flex justify-between items-center gap-x-20 w-[80%] mx-auto">
              <div className="shadow-md cursor-pointer group flex flex-col items-center  gap-[10px] hover:shadow-md duration-1000 rounded-[8px] ease-in-out hover:shadow-lightblue w-[30%] hover:scale-105">
                <Image
                  src="/DashboardIcons/simbiFocusedState.png"
                  alt="Focused simbi"
                  height={100}
                  width={142}
                />
                <div className="mt-3 text-center py-2">
                  <p className="font-semibold text-deepdarkgray group-hover:text-dark">
                    Focused
                  </p>
                  <p className="font-normal text-dark text-[0.75rem]">
                    Currently active
                  </p>
                </div>
              </div>

              <div className="shadow-md cursor-pointer group flex flex-col items-center  gap-[10px] hover:shadow-md duration-1000 rounded-[8px] ease-in-out hover:shadow-lightblue w-[30%] hover:scale-105">
                <Image
                  src="/DashboardIcons/simbiTiredState.svg"
                  alt="Focused simbi"
                  height={100}
                  width={142}
                />
                <div className="mt-3 text-center py-2">
                  <p className="font-semibold text-deepdarkgray group-hover:text-dark">
                    Tired
                  </p>
                  <p className="font-normal text-dark text-[0.75rem]">
                    Take a break
                  </p>
                </div>
              </div>

              <div className="shadow-md cursor-pointer group flex flex-col items-center  gap-[10px] hover:shadow-md duration-1000 rounded-[8px] ease-in-out hover:shadow-lightblue w-[30%] hover:scale-105">
                <Image
                  src="/DashboardIcons/simbiDistractedState.svg"
                  alt="Focused simbi"
                  height={100}
                  width={142}
                />
                <div className="mt-3 text-center py-2">
                  <p className="font-semibold text-deepdarkgray group-hover:text-dark">
                    Distracted
                  </p>
                  <p className="font-normal text-dark text-[0.75rem]">
                    Refocus needed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="my-10 min-h-[90px] px-[28px] py-[20px] flex gap-[30px] bg-softLightBlue rounded-[8px]">
          <Image
            src="/DashboardIcons/suggestingSimbi.svg"
            alt="Suggesting Simbi"
            height={27.9}
            width={36.42}
          />
          <div>
            <h3 className="font-semibold">Simbi&apos;s Suggestion</h3>
            <p className="font-normal text-[0.875rem]">
              You have been studying well. Keep up the momentum for another 15
              minutes before taking a short break
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[1.25rem]">Milestone Tracking</h3>
            <button
              onClick={() => router.push("/milestone")}
              className="bg-lightblue rounded-[8px] py-[10px] px-[15px] text-white"
            >
              + Add Milestone
            </button>
          </div>
        </section>
      </main>
    </section>
  );
}
