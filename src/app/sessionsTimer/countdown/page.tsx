"use client";
import { balooThambi2 } from "@/lib/fonts";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountDownPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTime = parseInt(searchParams.get("time") || "0");
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // Start count-up timer
  useEffect(() => {
    if (isRunning && timeElapsed < initialTime) {
      const timer = setInterval(() => {
        setTimeElapsed((prev) => (prev < initialTime ? prev + 1 : prev));
      }, 1000);

      return () => clearInterval(timer);
    }

    if (timeElapsed >= initialTime) {
      setIsRunning(false);
    }
  }, [isRunning, timeElapsed, initialTime]);

  // Format seconds to hh:mm:ss
  const formatTime = (total: number): string => {
    const h = Math.floor(total / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((total % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (total % 60).toString().padStart(2, "0");
    return `${h} : ${m} : ${s}`;
  };

  return (
    <section className="w-[90%] mx-auto pb-20">
      <header className="h-[120px] flex items-center justify-between">
        <aside className="flex w-[148.96px] gap-[4.96px] items-center justify-center cursor-pointer hover:scale-110">
          <Image
            src="/DashboardIcons/mini-logo.svg"
            alt="an Image of simbi"
            width={50}
            height={41}
          />
          <h3
            className={`${balooThambi2.className} text-lightblue font-bold text-[2rem]`}
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

      <p className="font-semibold text-[1.25rem] text-deepdarkgray">
        Current session
      </p>

      <section className="flex flex-col w-full min-h-[310px] mt-3 gap-[18px] p-[30px] rounded-[16px] bg-bgwhite shadow-md">
        <div className="text-right w-full">
          <button
            onClick={() => {
              setTimeElapsed(0);
              setIsRunning(true);
            }}
            className="mr-5 font-medium py-[10px] px-[15px] hover:bg-blue-900 rounded-[8px] bg-lightblue text-white"
          >
            Restart
          </button>
          <button
            onClick={() => setIsRunning((prev) => !prev)}
            className="hover:bg-blue-900 hover:text-white py-[10px] px-[15px] font-medium rounded-[8px] border-lightblue border-[1px]"
          >
            Break
          </button>
        </div>

        <div className="text-center font-medium text-[3rem]">
          {formatTime(timeElapsed)}
          <p className="text-[0.875rem] font-normal text-black mt-2">
            {timeElapsed < initialTime &&
              `${formatTime(initialTime - timeElapsed)} remaining`}
          </p>
        </div>
      </section>

      <div className="relative w-[50%] mx-auto h-[14px] bg-progress  overflow-visible mt-7 rounded-[36px]">
        {/*  Time Progress monitor */}
        <div
          className="absolute left-0 top-0 h-full bg-lightblue transition-all duration-500 rounded-[100px]"
          style={{ width: `${(timeElapsed / initialTime) * 100}%` }}
        />

        <div
          className="absolute  top-1/2 -translate-y-1/2 transition-all duration-500"
          style={{ left: `calc(${(timeElapsed / initialTime) * 100}% - 20px)` }}
        >
          <Image
            src="/DashboardIcons/timeSimbi.svg"
            alt="Progress Icon"
            width={39.38}
            height={30.88}
          />
        </div>
      </div>

      <div className="mt-20 mx-auto w-[80%]">
        <textarea
          placeholder="Take note during your session..."
          className="font-medium rounded-[8px] focus:outline-grayborder focus:outline-1 w-full py-[24px] px-[33px] resize-y border-[1px] shadow-md shadow-grayborder border-grayborder"
          rows={5}
        />
      </div>

      <div className="mt-32 w-[80%] mx-auto text-right">
        <button
          disabled={timeElapsed > 0}
          className={`lightblue px-20 bg-lightblue py-[7px] hover:bg-blue-900 rounded-[8px] text-white`}
        >
          Finish
        </button>
      </div>
    </section>
  );
}
