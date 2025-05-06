"use client";
import DashboardHeaders from "@/components/dashboard/DashboardHeaders";
import HeaderNotification from "@/components/dashboard/HeaderNotification";
import HeaderSearch from "@/components/dashboard/HeaderSearch";
import StudyCourses from "@/components/dashboard/StudyCourses";
import EmptyStudyPlan from "@/components/study-plans/EmptyStudyPlan";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import StudyForm from "@/components/study-plans/StudyForm";
import { useRouter } from "next/navigation";
import { inter } from "@/lib/fonts";

// Fake Type for api mockup/ schema

export default function StudyPlanPage() {
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

  const router = useRouter();
  const [task, setTask] = useState(true);
  const [toggleUserNavBar, setToggleUserNavBar] = useState<boolean>(false); // for toggling the navbar on the headerNotification

  const handleToggleUserNavBar = () => {
    // for toggling the navbar on the headerNotification
    setToggleUserNavBar((prevState) => !prevState);
  };

  const startStudySession = () => {
    // Start study session by setting timer
    router.push("/sessionsTimer");
  };

  // Generate Study Plan Pop up
  const [toggleGenerateStudyPlan, setToggleGenerateStudyPlan] = useState(false); // for toggling study form

  const handleToggleGenerateStudyPlan = () => {
    // for toggling the Generate Study Plan pop up
    setToggleGenerateStudyPlan((prevState) => !prevState);
  };
  return (
    <section className="mx-auto w-[90%]">
      {/* Logic  for toggling the Generate Study Plan pop up  */}
      {toggleGenerateStudyPlan && (
        <div className="fixed top-1/2 left-1/2 h-[90vh] w-[70%] -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-lightblue overflow-auto z-100 rounded-2xl bg-white">
          <StudyForm
            handleToggleGenerateStudyPlan={handleToggleGenerateStudyPlan}
          />
        </div>
      )}
      {/* The message icon fixed to the bottom of the screen */}
      <Link href="/chat">
        <Image
          src="/DashboardIcons/messageSimbiIcon.svg"
          alt="Image of an envelope"
          height={97}
          width={117}
          className="fixed bottom-10 right-20"
        />
      </Link>
      {/* for toggling the navbar on the headerNotification */}
      {toggleUserNavBar && (
        <div
          className={
            toggleUserNavBar
              ? `${inter.className} opacity-100 duration-1000 rounded-[16px] w-[230px] h-[146px] border-[1px] border-grayborder flex flex-col justify-center items-center gap-4 absolute bg-white top-24 right-5 z-50 px-6`
              : `${inter.className} rounded-[16px] w-[230px] h-[146px] border-[1px] border-grayborder flex flex-col justify-center items-center gap-4 absolute bg-white top-24 right-5 z-50 px-6 opacity-0 duration-1000`
          }
        >
          <button className="flex items-center gap-6 group w-full">
            <span className="font-normal group-hover:text-lightblue duration-300 ">
              Start Study Session
            </span>
          </button>
          <button
            onClick={handleToggleGenerateStudyPlan}
            className="flex items-center gap-6 group w-full"
          >
            <span className="font-normal group-hover:text-lightblue duration-300 ">
              Edit Study Plan
            </span>
          </button>
          <button className="flex items-center gap-6 group w-full">
            <span className="font-normal text-error group-hover:text-lightblue duration-300 ">
              Deactivate Study Plan
            </span>
          </button>
        </div>
      )}
      <header className="mt-[30px] flex justify-between items-center">
        <div className="w-2/3">
          <HeaderSearch />
        </div>
        <div className="w-[30%]">
          <HeaderNotification handleToggleUserNavBar={handleToggleUserNavBar} />
        </div>
      </header>
      <div className="flex items-center justify-between mt-16 border-b-[0.95px] pb-5 px-6 border-b-grayborder">
        <div className="flex w-[446.91px] items-center justify-between">
          <div className="flex">
            <DashboardHeaders text="Study Plans" />
            <Image
              src="/DashboardIcons/arrowDownIcon.svg"
              alt="arrow down"
              height={20}
              width={20}
              className="ml-4"
            />
          </div>
          <button className="font-semibold relative after:absolute after:left-0 after:-bottom-9 after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.75rem] text-deepdarkgray  hover:text-lightblue">
            Daily
          </button>
          <button className="font-semibold relative after:absolute after:left-0 after:-bottom-9 after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.75rem]  text-deepdarkgray  hover:text-lightblue">
            Weekly
          </button>
          <button className="font-semibold relative after:absolute after:left-0 after:-bottom-9 after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.75rem] text-deepdarkgray  hover:text-lightblue">
            Monthly
          </button>
        </div>
        <div className="flex w-[350.37px]  h-[48px] gap-[16px] items-center justify-between">
          <button
            title="Click to toggle the view when we have to and not to study"
            onClick={() => {
              setTask((prevState) => !prevState);
            }}
            className="flex w-[79.42px] h-[36.14px] gap-[7.57px] cursor-pointer rounded-[4.27px] items-center justify-center border-[0.95px] border-lightblue"
          >
            <Image
              src="/DashboardIcons/filterIcon.svg"
              alt="Filter image icon"
              height={10.47}
              width={11.11}
              className=""
            />
            <span className="text-lightblue font-semibold text-[0.875rem]">
              Filter
            </span>
          </button>
          <button
            onClick={startStudySession}
            className="bg-lightblue hover:bg-blue-900 duration-300 text-white rounded-[8px] px-[20px] py-[12px] font-semibold"
          >
            Start a Study Session
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 mt-3">
        <div className="flex items-center justify-center gap-6">
          <Image
            src="/DashboardIcons/calendar Icon.svg"
            alt="calendar Icon"
            height={24}
            width={24}
          />
          <p className="font-normal text-lightblue text-[1.125rem]">
            Today, {new Date().getUTCDate()}{" "}
            {monthsOfTheYear[new Date().getMonth()]} {new Date().getFullYear()}
          </p>
          <p className="bg-lightblue text-white py-2 px-3 rounded-[3.81px]">
            Today
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Link href={"/schedule"}>
            <Image
              src="/DashboardIcons/calendarViewIcon.svg"
              alt="calendar view image"
              height={32}
              width={48}
              className="cursor-pointer "
            />
          </Link>
          <Image
            src="/DashboardIcons/listViewIcon.svg"
            alt="list view image"
            height={32}
            width={48}
            className="cursor-pointer "
          />
        </div>
      </div>

      {task ? (
        <div className="mt-16">
          <EmptyStudyPlan
            handleToggleGenerateStudyPlan={handleToggleGenerateStudyPlan}
          />
        </div>
      ) : (
        <div className="mt-16 flex w-full gap-10">
          <div className="w-2/3">
            <div className="grid grid-cols-2">
              <StudyCourses />
            </div>
          </div>

          <div className="1/3">
            <div className="rounded-[20px] w-[330px] min-h-[190px] bg-bluemaguerite p-4 relative">
              {/* Pep Talk Simbi */}
              <h3 className="text-deeppurple font-semibold text-[2rem] leading-[40px]">
                Simbi&apos;s <br /> Pep talk
              </h3>
              <p className="text-deeppurple mt-3 font-normal">
                Study Plan – let’s pretend <br /> you’ll stick to it 😉
              </p>

              <Image
                src="/DashboardIcons/peptalkSimbi.svg"
                alt="Pep talking Simbi"
                height={149.08}
                width={94.93}
                className="absolute right-5 top-5"
              />
            </div>

            <div className="mt-10 rounded-[8px] border-[1px] min-h-[144px] w-[330px] p-4 border-gray-200 overflow-x-auto">
              {/* Urgent deadlines */}
              <h3 className="text-error font-medium">Urgent deadlines</h3>
              <div className="mt-2">
                <div className="w-full grid grid-cols-1 gap-y-3 ml-4">
                  <StudyCourses />
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[8px] border-[1px] min-h-[144px] w-[330px] p-4 border-gray-200">
              {/* Missed deadlines */}
              <h3 className="text-error font-medium">Missed deadlines</h3>
              <div className="mt-2">
                <div className="w-full grid grid-cols-1 gap-y-3 ml-4">
                  <StudyCourses />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
