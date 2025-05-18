"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import SideBar from "@/components/dashboard/SideBar";
import HeaderNotification from "@/components/dashboard/HeaderNotification";
import HeaderSearch from "@/components/dashboard/HeaderSearch";
import { FaBars } from "react-icons/fa";
import { inter } from "@/lib/fonts";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import styles from "@/styles/ComingSoon.module.css";

const RewardPage = () => {
  const [toggleUserNavBar, setToggleUserNavBar] = useState<boolean>(false);
  const [toggleMiniNavBar, setToggleMiniNavBar] = useState(false); // for toggling the mininavbar;
  const comingSoon = true;

  const handleToggleUserNavBar = () => {
    // for toggling the navbar on the headerNotification
    setToggleUserNavBar((prevState) => !prevState);
  };

  const handleToggleMiniNavBar = () => {
    // for toggling the mininavbar;

    setToggleMiniNavBar((prevState) => !prevState);
  };

  const router = useRouter();

  return (
    <>
      {toggleMiniNavBar && (
        <div className="w-[222px] top-0 left-0 fixed z-50 ">
          <SideBar handleToggleMiniNavBar={handleToggleMiniNavBar} />
        </div>
      )}

      {toggleUserNavBar && (
        <div
          className={
            toggleUserNavBar
              ? `${inter.className} opacity-100 duration-1000 rounded-[16px] w-[220px] h-[146px] border-[1px] border-grayborder flex flex-col justify-center items-center gap-4 absolute bg-white top-24 right-5 z-50 px-6`
              : `${inter.className} rounded-[16px] w-[220px] h-[146px] border-[1px] border-grayborder flex flex-col justify-center items-center gap-4 absolute bg-white top-24 right-5 z-50 px-6 opacity-0 duration-1000`
          }
        >
          <span className="flex hover:cursor-pointer items-center gap-6 group w-full">
            <span>
              <Image
                src="/DashboardIcons/cupIcon.png"
                alt="Cup Icon"
                height={18}
                width={18}
              />
            </span>
            <span
              onClick={() => router.push("/telegram")}
              className="font-normal group-hover:text-lightblue duration-300 "
            >
              Upgrade Plan
            </span>
          </span>
          <span className="flex hover:cursor-pointer items-center gap-6 group w-full">
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
          </span>
          <span className="flex hover:cursor-pointer items-center gap-6 group w-full">
            <span>
              <Image
                src="/DashboardIcons/purpleLogOutIcon.svg"
                alt="Cup Icon"
                height={18}
                width={18}
              />
            </span>
            <span
              onClick={() => {
                useAuthStore.getState().logout();
                window.location.href = "/auth/signin";
              }}
              className="font-normal group-hover:text-lightblue duration-300 "
            >
              Log Out
            </span>
          </span>
        </div>
      )}

      <div className="relative">
        <main className="min-h-screen bg-[#f9f9fc] px-4 sm:px-6 md:px-16 py-10 text-[#1d1042]">
          {/* Responsive header view */}
          <header className="mt-[5px] mb-[8vh] flex xl:flex-row flex-col-reverse gap-y-5 justify-between items-center">
            <div className="xl:w-[40%] w-full">
              <HeaderSearch />
            </div>
            <div className="xl:w-[30%] hidden md:block w-full">
              <HeaderNotification
                handleToggleUserNavBar={handleToggleUserNavBar}
              />
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

          <div className="flex flex-row items-center justify-start gap-8 bg-[#F3F2FF] border-[#ECECEE] md:border-b md:bg-transparent rounded-xl md:rounded-none px-2 md:px-0">
            <Image
              src="/DashboardIcons/think.svg"
              alt="SIMBI character"
              width={100}
              height={100}
              className="mb-4 md:mb-0 w-[144px] h-[275px]"
            />
            <div className="text-left md:text-center md:ml-8">
              <h1 className="text-3xl md:text-4xl font-extrabold">Rewards</h1>
              <p className="text-gray-500 mt-3 text-sm md:text-base">
                Track your progress and earn rewards as you achieve your study
                goals
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 mt-24 px-10">
            {/* Total Tokens */}
            <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center text-center flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/DashboardIcons/coins.png"
                  alt="yellow coins"
                  width={38}
                  height={38}
                />
                <h2 className="text-xl font-semibold">Total Tokens Earned</h2>
              </div>
              <Image
                src="/DashboardIcons/bigg.png"
                alt="Token"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-4xl font-extrabold">
                200
                <span className="text-base text-gray-500 font-normal">
                  /tokens
                </span>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow flex flex-col md:flex-row items-center flex-2">
              <Image
                src="/DashboardIcons/big.png"
                alt="Character"
                width={150}
                height={225}
                className="mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center space-x-2 mb-2">
                  <Image
                    src="/DashboardIcons/star-03.png"
                    alt="star icon"
                    width={31}
                    height={31}
                  />
                  <h3 className="text-xl font-semibold">Current NFT Badges</h3>
                </div>
                <p className="text-base font-medium my-3">
                  Bronze study badge unlocked
                  <span className="ml-2 text-xs bg-[#C1BCFF] text-[#1F125C] px-2 py-1 rounded-full">
                    New
                  </span>
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  {["gold", "silver"].map((badge) => (
                    <div key={badge} className="flex flex-col items-center">
                      <div className="relative">
                        <Image
                          src={`/DashboardIcons/lock1.png`}
                          alt={badge}
                          width={64}
                          height={96}
                          className="opacity-40"
                        />
                      </div>
                      <p className="text-xs font-semibold mt-1 capitalize">
                        {badge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 py-20">
            {[
              {
                icon: "/DashboardIcons/study-streak.svg",
                title: "Study Streak",
                desc: "Complete 7 consecutive days of study",
                tokens: 7,
                progress: "5/7 days",
              },
              {
                icon: "/DashboardIcons/study-star.svg",
                title: "Perfect Score",
                desc: "Achieve 100% on any quiz",
                tokens: 6,
                progress: null,
              },
              {
                icon: "/DashboardIcons/study-time.svg",
                title: "Time Master",
                desc: "Study for 20 hours total",
                tokens: 5,
                progress: "15/20 hours",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-5 h-44 space-y-10"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Image
                    src={item.icon}
                    width={34}
                    height={30}
                    alt="reward icons"
                  />
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </div>
                <p className="text-base text-[#6B7280] font-normal">
                  {item.desc}
                </p>
                <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
                  <div className="flex items-center space-x-2 bg-[#C1BCFF] text-black px-3 py-1 rounded-full text-sm">
                    <span>+{item.tokens} tokens</span>
                  </div>
                  <Image
                    src="/DashboardIcons/small.png"
                    alt="token"
                    width={20}
                    height={20}
                  />
                  {item.progress ? (
                    <p className="text-sm font-medium">{item.progress}</p>
                  ) : (
                    <span className="text-gray-400 text-xl">🔒</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-normal mb-4">Upcoming Rewards</h3>
            <div className="bg-white rounded-xl shadow divide-y divide-gray-200 px-5 pt-10 pb-6">
              {[
                {
                  icon: "🎁",
                  title: "Standard Study Materials",
                  subtitle: "5 quizzes Completed",
                },
                {
                  icon: "🏅",
                  title: "Novice Badge",
                  subtitle: "Completed 10 schedules",
                },
                {
                  icon: "🌞",
                  title: "Achievement Certificate",
                  subtitle: "Increased live study time",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col text-base font-medium sm:flex-row justify-between items-start sm:items-center p-4 gap-2"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-base font-medium">{item.title}</p>
                      <p className="text-sm text-[#525252] font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {comingSoon && (
          <div className={styles["coming-soon-overlay"]}>
            <div className={styles["coming-soon-badge"]}>Coming Soon</div>
          </div>
        )}
      </div>
    </>
  );
};

export default RewardPage;
