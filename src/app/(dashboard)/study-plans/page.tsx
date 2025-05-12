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
import { FaBars } from "react-icons/fa";
import SideBar from "@/components/dashboard/SideBar";

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
  const [toggleMiniNavBar, setToggleMiniNavBar] = useState(false); // for toggling the mininavbar;
  // Generate Study Plan Pop up
  const [toggleGenerateStudyPlan, setToggleGenerateStudyPlan] = useState(false); // for toggling study form

  const handleToggleMiniNavBar = () => {
    // for toggling the mininavbar;
    setToggleMiniNavBar((prevState) => !prevState);
  };

  const handleToggleUserNavBar = () => {
    // for toggling the navbar on the headerNotification
    setToggleUserNavBar((prevState) => !prevState);
  };

  const startStudySession = () => {
    // Start study session by setting timer
    router.push("/sessionsTimer");
  };

  const handleToggleGenerateStudyPlan = () => {
    // for toggling the Generate Study Plan pop up
    setToggleGenerateStudyPlan((prevState) => !prevState);
  };
  return (
    <section className="mx-auto w-[90%] pb-20">
      {/* Logic  for toggling the Generate Study Plan pop up  */}
      {toggleGenerateStudyPlan && (
        <div className="fixed top-1/2 left-1/2 h-[90vh] lg:w-[70%]  w-[95%] -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-lightblue overflow-auto z-100 rounded-2xl bg-white">
          <StudyForm
            handleToggleGenerateStudyPlan={handleToggleGenerateStudyPlan}
          />
        </div>
      )}

      {toggleMiniNavBar && (
        <div className="w-[222px] top-0 left-0 fixed z-50 ">
          <SideBar handleToggleMiniNavBar={handleToggleMiniNavBar} />
        </div>
      )}

      {/* The message icon fixed to the bottom of the screen */}
      <Link href="/chat">
        <Image
          src="/DashboardIcons/messageSimbiIcon.svg"
          alt="Image of an envelope"
          height={97}
          width={117}
          className="fixed bottom-10 z-50 right-20 cursor-pointer"
        />
      </Link>
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

      <header className="mt-[30px] flex xl:flex-row flex-col-reverse gap-y-5 justify-between items-center">
        <div className="xl:w-[40%] w-full">
          <HeaderSearch />
        </div>
        <div className="xl:w-[30%] hidden md:block w-full">
          <HeaderNotification handleToggleUserNavBar={handleToggleUserNavBar} />
        </div>
        <div className="flex w-full md:hidden items-center justify-between mb-10">
          <span className="text-3xl block md:hidden text-dark">
            <FaBars onClick={handleToggleMiniNavBar} />
          </span>
          <div className="block xl:hidden sm:w-[73%] w-[80%] md:w-full">
            <HeaderNotification
              handleToggleUserNavBar={handleToggleUserNavBar}
            />
          </div>
        </div>
      </header>

      <div className="flex items-center xl:flex-row flex-col-reverse gap-y-6 justify-between mt-16 border-b-[0.95px] pb-5 xl:px-6 px-0  border-b-grayborder overflow-hidden">
        <div className="flex sm:w-[446.91px] w-[400px]  items-center justify-between">
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
          <button className="font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7   after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem] text-deepdarkgray  hover:text-lightblue">
            Daily
          </button>
          <button className="font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7  after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem]  text-deepdarkgray  hover:text-lightblue">
            Weekly
          </button>
          <button className="font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7  after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem] text-deepdarkgray  hover:text-lightblue">
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
      <div className="flex justify-between flex-col gap-3 md:flex-row items-center px-6 mt-3">
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
        <div className="mt-16 flex w-full lg:flex-row flex-col gap-10">
          <div className="lg:w-2/3 w-full">
            <div className="lg:hidden block rounded-[20px] lg:w-[330px] w-full min-h-[190px] bg-bluemaguerite p-4 relative mb-10">
              {/* Pep Talk Simbi */}
              <h3 className="text-deeppurple font-semibold sm:text-[2rem] text-[1.5rem] leading-[40px]">
                Simbi&apos;s Pep talk
              </h3>
              <p className="text-deeppurple mt-3 sm:font-normal text-[0.75rem]">
                Study Plan – let’s pretend you’ll stick to it 😉
              </p>

              <button
                onClick={handleToggleGenerateStudyPlan}
                className="font-medium cursor-pointer  hover:bg-blue-900 poppins h-[48px] mt-7 rounded-[8px] bg-lightblue text-white w-[242px] text-base "
              >
                Generate a new Study Plan
              </button>

              <Image
                src="/DashboardIcons/peptalkSimbi.svg"
                alt="Pep talking Simbi"
                height={200}
                width={130}
                className="absolute right-0 sm:right-7 -top-7"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StudyCourses
                handleToggleGenerateStudyPlan={handleToggleGenerateStudyPlan}
              />
            </div>
          </div>

          <div className="lg:w-1/3  w-full">
            <div className="hidden lg:block rounded-[20px] lg:w-[330px] w-full min-h-[190px] bg-bluemaguerite p-4 relative">
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

            <div className="mt-10 rounded-[8px] shadow-md  border-[1px] min-h-[144px] w-full lg:w-[330px] p-4 border-gray-200">
              {/* Urgent deadlines */}
              <h3 className="text-error font-medium">Urgent deadlines</h3>
              <div className="mt-2 px-2">
                <div className="w-full grid grid-cols-1 gap-y-3 ">
                  <StudyCourses
                    handleToggleGenerateStudyPlan={
                      handleToggleGenerateStudyPlan
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[8px] shadow-md border-[1px] min-h-[144px] w-full lg:w-[330px] p-4 border-gray-200">
              {/* Missed deadlines */}
              <h3 className="text-error font-medium">Missed deadlines</h3>
              <div className="mt-2 px-2">
                <div className="w-full grid grid-cols-1 gap-y-3 ">
                  <StudyCourses
                    handleToggleGenerateStudyPlan={
                      handleToggleGenerateStudyPlan
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
