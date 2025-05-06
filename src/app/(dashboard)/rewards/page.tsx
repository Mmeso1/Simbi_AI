"use client";

import React from "react";
import Image from "next/image";

const RewardPage = () => {
  return (
    <main className="min-h-screen bg-[#f9f9fc] px-6 md:px-16 py-10 text-[#1d1042]">
      <div className="flex flex-col md:flex-row items-center justify-between border-b pb-8">
        <Image
          src="/DashboardIcons/think.png"
          alt="SIMBI character"
          width={120}
          height={120}
          className="mb-4 md:mb-0"
        />
        <div className="text-center md:text-right mr-38">
          <h1 className="text-4xl font-extrabold text-center mr-28">Rewards</h1>
          <p className="text-gray-500 mt-2 text-center mr0-38">
            Track your progress and earn rewards as you achieve your study goals
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-yellow-500 text-2xl">
              <Image
                src="/DashboardIcons/coins.png"
                alt="yellow coins"
                width={30}
                height={30}
              />
            </span>
            <h2 className="text-lg font-semibold">Total Tokens Earned</h2>
          </div>
          <Image
            src="/DashboardIcons/bigg.png"
            alt="Token"
            width={80}
            height={80}
            className="mb-4"
          />
          <p className="text-3xl font-extrabold">200</p>
          <p className="text-sm text-gray-500">/tokens</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center">
          <Image
            src="/DashboardIcons/big.png"
            alt="Character"
            width={120}
            height={120}
            className="mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-500 text-xl">
                <Image
                  src="/DashboardIcons/star-03.png"
                  alt="star icon"
                  width={30}
                  height={30}
                />
              </span>
              <h3 className="text-lg font-semibold">Current NFT Badges</h3>
            </div>
            <p className="text-sm font-medium mb-2">
              Bronze study badge unlocked
              <span className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                New
              </span>
            </p>
            <div className="flex space-x-4 mt-4">
              {["gold", "silver"].map((badge) => (
                <div key={badge} className="flex flex-col items-center">
                  <div className="relative">
                    <Image
                      src={`/DashboardIcons/lock1.png`}
                      alt={badge}
                      width={60}
                      height={60}
                      className="opacity-40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-yellow-500 text-xl"></span>
                    </div>
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

      {/* Streak Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          {
            icon: "🔥",
            title: "Study Streak",
            desc: "Complete 7 consecutive days of study",
            tokens: 7,
            progress: "5/7 days",
          },
          {
            icon: "⭐",
            title: "Perfect Score",
            desc: "Achieve 100% on any quiz",
            tokens: 6,
            progress: null,
          },
          {
            icon: "🕒",
            title: "Time Master",
            desc: "Study for 20 hours total",
            tokens: 5,
            progress: "15/20 hours",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-5">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="text-lg font-semibold">{item.title}</h4>
            </div>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                <span>+{item.tokens} tokens</span>
              </div>
              <Image
                src="/DashboardIcons/small.png"
                alt="token"
                width={20}
                height={20}
                className="mr-28"
              />
              {item.progress && (
                <p className="text-sm font-medium">{item.progress}</p>
              )}
              {!item.progress && (
                <span className="text-gray-400 text-xl">
                  <span role="img" aria-label="lock">
                    🔒
                  </span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Rewards */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Upcoming Rewards</h3>
        <div className="bg-white rounded-xl shadow divide-y">
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
            <div key={idx} className="flex justify-between items-center p-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
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
  );
};

export default RewardPage;
