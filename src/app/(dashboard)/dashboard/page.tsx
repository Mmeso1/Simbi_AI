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
import { Inter } from "next/font/google";
import StudyForm from "@/components/study-plans/StudyForm";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function DashboardPage() {
  const monthsOfTheYear = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Generate Study Plan Pop up
  const [toggleGenerateStudyPlan, setToggleGenerateStudyPlan] = useState(false); // for toggling study form
  const [toggleProductivity, setToggleProductivity] = useState<string>("Week"); // for productivity scorecard section
  const [toggleUserNavBar, setToggleUserNavBar] = useState<boolean>(false); // for toggling the navbar on the headerNotification

  const handleToggleUserNavBar = () => {
    // for toggling the navbar on the headerNotification
    setToggleUserNavBar((prevState) => !prevState);
  };

  const handleToggleGenerateStudyPlan = () => {
    // for toggling the Generate Study Plan pop up
    setToggleGenerateStudyPlan((prevState) => !prevState);
  };

  return (
    <section className="flex poppins">
      {/* Logic  for toggling the Generate Study Plan pop up  */}
      {toggleGenerateStudyPlan && (
        <div className="fixed top-1/2 left-1/2 h-[90vh] w-[70%] -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-lightblue overflow-auto z-100 rounded-2xl bg-white">
          <StudyForm
            handleToggleGenerateStudyPlan={handleToggleGenerateStudyPlan}
          />
        </div>
      )}

      <aside className="w-2/3 min-h-screen border-r-2 px-10 border-r-gray">
        {/* Dashboard Middle section */}

        <header className="mt-[30px]">
          <HeaderSearch />
          <div className="bg-bluemaguerite h-[231px] mt-[60px] w-full rounded-[20px] text-deeppurple px-6 relative">
            <h1 className="font-semibold pt-7 text-[2.5rem]">Welcome back</h1>
            <p className="text-[1.125rem] font-[400] ">
              I’m Simbi, ready to learn and have fun?
            </p>
            <button
              onClick={handleToggleGenerateStudyPlan}
              className="font-medium cursor-pointer hover:bg-blue-900 poppins h-[48px] mt-7 rounded-[8px] bg-lightblue text-white w-[242px] text-base "
            >
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

          <div className="flex items-center justify-between gap-x-16 w-full mt-16">
            <div className="w-2/3 flex justify-between items-center">
              <DashboardHeaders text="Active Study Plan" />
              <Link
                className="text-lightblue text-[0.75rem] cursor-pointer hover:underline hover:decoration-1 hover:decoration-lightblue hover:font-semibold "
                href="/study-plans"
              >
                View All
              </Link>
            </div>

            <div className="w-2/3 flex justify-center gap-x-6 items-center">
              <Image
                src="/DashboardIcons/calendar Icon.svg"
                alt="calendar Icon"
                height={24}
                width={24}
              />
              <p className="font-normal text-lightblue text-[1.125rem]">
                {" "}
                Today, {new Date().getUTCDate()}{" "}
                {monthsOfTheYear[new Date().getMonth()]}{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="mt-5 w-full">
            <div className="grid grid-cols-2 gap-x-16">
              <StudyCourses />
            </div>
          </div>
        </section>
      </aside>
      <aside className="w-1/3 px-6 min-h-screen">
        {/* for toggling the navbar on the headerNotification */}

        {toggleUserNavBar && (
          <div
            className={
              toggleUserNavBar
                ? `${inter.className} opacity-100 duration-1000 rounded-[16px] w-[220px] h-[146px] border-[1px] border-grayborder flex flex-col justify-center items-center gap-4 absolute bg-white top-24 right-5 z-50 px-6`
                : `${inter.className} rounded-[16px] w-[220px] h-[146px] border-[1px] border-grayborder flex flex-col justify-center items-center gap-4 absolute bg-white top-24 right-5 z-50 px-6 opacity-0 duration-1000`
            }
          >
            <Link href="" className="flex items-center gap-6 group w-full">
              <span>
                <Image
                  src="/DashboardIcons/cupIcon.png"
                  alt="Cup Icon"
                  height={18}
                  width={18}
                />
              </span>
              <span className="font-normal group-hover:text-lightblue duration-300 ">
                Upgrade Plan
              </span>
            </Link>
            <Link href="" className="flex items-center gap-6 group w-full">
              <span>
                <Image
                  src="/DashboardIcons/customizeIcons.svg"
                  alt="Cup Icon"
                  height={18}
                  width={18}
                />
              </span>
              <span className="font-normal group-hover:text-lightblue duration-300 ">
                Customize Simbi
              </span>
            </Link>
            <Link href="" className="flex items-center gap-6 group w-full">
              <span>
                <Image
                  src="/DashboardIcons/purpleLogOutIcon.svg"
                  alt="Cup Icon"
                  height={18}
                  width={18}
                />
              </span>
              <span className="font-normal group-hover:text-lightblue duration-300 ">
                Log Out
              </span>
            </Link>
          </div>
        )}
        <section className="mt-[30px]">
          {/* Right side */}
          <HeaderNotification handleToggleUserNavBar={handleToggleUserNavBar} />

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
