"use client";
import Consistency from "@/components/dashboard/Consistency";
import DashboardHeaders from "@/components/dashboard/DashboardHeaders";
import HeaderNotification from "@/components/dashboard/HeaderNotification";
import HeaderSearch from "@/components/dashboard/HeaderSearch";
import ProgressBars from "@/components/dashboard/progressBar";
import Rewards from "@/components/dashboard/Rewards";
import Streak from "@/components/dashboard/Streak";
import StudyCourses from "@/components/dashboard/StudyCourses";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const [toggleProductivity, setToggleProductivity] = useState("Week"); // for productivity scorecard section

  return (
    <section className="flex">
      <aside className="w-2/3 min-h-screen border-r-2 px-10 border-r-gray">
        {/* Dashboard Middle section */}
        <header className="mt-[30px]">
          <HeaderSearch />
          <div className="bg-bluemaguerite h-[231px] mt-[60px] w-full rounded-[20px] text-deeppurple px-6 relative">
            <h1 className="font-semibold pt-7 text-[2.5rem]">Welcome back</h1>
            <p className="text-[1.125rem] font-[400] ">
              I’m Simbi, ready to learn and have fun?
            </p>
            <button className="font-medium poppins h-[48px] mt-7 rounded-[8px] bg-lightblue text-white w-[242px] text-base ">
              Generate a new Study Plan
            </button>
            <Image
              src="/DashboardIcons/wavingSimbi.svg"
              alt="An image of simbi waving"
              height={189}
              width={200}
              className="absolute -top-25 right-15"
            />
          </div>
        </header>

        <div className="mt-[40px]">
          <DashboardHeaders text="Study Streak" />

          <Streak />
        </div>

        <section className="mt-[45px]">
          <div className="flex items-center justify-between">
            <DashboardHeaders text="Productivity Scorecard" />
            <div className="w-[150px] flex justify-between items-center">
              <button
                onClick={() => setToggleProductivity("Day")}
                className={
                  toggleProductivity === "Day"
                    ? "hover:text-lightblue  text-[0.875rem] font-medium text-lightblue"
                    : "hover:text-lightblue text-grayborder text-[0.875rem] font-medium"
                }
              >
                Day
              </button>
              <button
                onClick={() => setToggleProductivity("Week")}
                className={
                  toggleProductivity === "Week"
                    ? "hover:text-lightblue  text-[0.875rem] font-medium text-lightblue"
                    : "hover:text-lightblue text-grayborder text-[0.875rem] font-medium"
                }
              >
                Week
              </button>
              <button
                onClick={() => setToggleProductivity("Month")}
                className={
                  toggleProductivity === "Month"
                    ? "hover:text-lightblue  text-[0.875rem] font-medium text-lightblue"
                    : "hover:text-lightblue text-grayborder text-[0.875rem] font-medium"
                }
              >
                Month
              </button>
            </div>
          </div>

          <div className="mt-10">
            <ProgressBars />
          </div>

          <div className="flex items-center w-[80%] mt-16">
            <div className="w-2/3 flex justify-between items-center">
              <DashboardHeaders text="Active Study Plan" />
              <Link className="text-lightblue text-[0.75rem]" href={""}>
                View All
              </Link>
            </div>
          </div>

          <div className="mt-5 w-[80%]">
            <StudyCourses />
          </div>
        </section>
      </aside>
      <aside className="w-1/3 px-6 min-h-screen">
        <section className="mt-[30px]">
          <HeaderNotification />

          <section className="mt-[50px]">
            <DashboardHeaders text="Rewards and Milestones" />
            <Rewards />

            <div className="border-[0.75px] border-grayborder rounded-[6px] mt-20 px-6 py-4">
              <h3 className="flex justify-between items-center">
                <span className="font-semibold text-[0.875rem]">
                  Simbi’s Study tips
                </span>
                <Image
                  src="/DashboardIcons/dotIcon.svg"
                  alt="dot icons"
                  height="3"
                  width="3"
                />
              </h3>
              <div className="shadow-md rounded-[12px] shadow-gray-border p-4">
                <h3 className="font-medium flex justify-between items-center text-[0.65rem] tracking-[2%] text-lightblue">
                  <span>Study Session</span>
                  <span className="font-medium text-[0.56rem] tracking-[2%] text-deepdarkgray ">
                    9min ago
                  </span>
                </h3>
                <p className="leading-[15px] tracking-[2%] font-normal text-[0.75rem] text-dark mt-3">
                  I set a timer for your study session. Try not to wander off
                  into TikTok land again.
                </p>
              </div>
            </div>

            <div>
              <Consistency />
            </div>
          </section>
        </section>
      </aside>
    </section>
  );
}
