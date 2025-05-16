"use client";
import HeaderNotification from "@/components/dashboard/HeaderNotification";
import HeaderSearch from "@/components/dashboard/HeaderSearch";
import SideBar from "@/components/dashboard/SideBar";
import StudyScheduleCalendar from "@/components/schedule/StudyScheduleCalendar";
import StudyForm from "@/components/study-plans/StudyForm";
import { inter } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function SchedulePage() {
  const [toggleUserNavBar, setToggleUserNavBar] = useState<boolean>(false); // for toggling the navbar on the headerNotification
  const [toggleMiniNavBar, setToggleMiniNavBar] = useState(false); // for toggling the mininavbar;
  // Generate Study Plan Pop up
  const [toggleGenerateStudyPlan, setToggleGenerateStudyPlan] = useState(false); // for toggling study form

  const handleToggleUserNavBar = () => {
    // for toggling the navbar on the headerNotification
    setToggleUserNavBar((prevState) => !prevState);
  };

  const handleToggleMiniNavBar = () => {
    // for toggling the mininavbar;
    setToggleMiniNavBar((prevState) => !prevState);
  };

  const handleToggleGenerateStudyPlan = () => {
    // for toggling the Generate Study Plan pop up
    setToggleGenerateStudyPlan((prevState) => !prevState);
  };

  return (
    <section className="mx-auto w-[90%]">
      {toggleMiniNavBar && (
        <div className="w-[222px] top-0 left-0 fixed z-50 ">
          <SideBar handleToggleMiniNavBar={handleToggleMiniNavBar} />
        </div>
      )}

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

      {/* Logic  for toggling the Generate Study Plan pop up  */}
      {toggleGenerateStudyPlan && (
        <div className="w-screen h-[100vh] fixed bg-white z-50">
          <div className="fixed top-1/2 left-1/2 h-[90vh] lg:w-[70%]  w-[95%] -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-lightblue overflow-auto z-100 rounded-2xl bg-white">
            <StudyForm
              handleToggleGenerateStudyPlan={handleToggleGenerateStudyPlan}
            />
          </div>
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

      <StudyScheduleCalendar
        handleToggleGenerateStudyPlan={handleToggleGenerateStudyPlan}
      />

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

      <p className="hidden">{toggleUserNavBar}</p>
    </section>
  );
}
