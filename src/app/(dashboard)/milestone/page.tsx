'use client';

import { useState } from 'react';
import { Calendar, List, Filter } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

const tabs = ['Active', 'Inactive', 'Completed'];

const milestones = [
  {
    subject: 'Reading - Chemistry',
    next: 'Study atomic Structure',
    progress: 40,
    daysLeft: 10,
    comment: 'Keep up the good work!',
    bgColor: 'bg-pink-100',
    pillColor: 'bg-pink-200',
  },
  {
    subject: 'Reading - Mathematics',
    next: 'Study Calculus',
    progress: 10,
    daysLeft: 10,
    comment: 'Ghosting Math? Rude',
    bgColor: 'bg-green-100',
    pillColor: 'bg-green-200',
  },
  {
    subject: 'Reading - Biology',
    next: 'Study Human Digestive System',
    progress: 60,
    daysLeft: 10,
    comment: 'Study now, flex later',
    bgColor: 'bg-yellow-100',
    pillColor: 'bg-yellow-300',
  },
  {
    subject: 'Reading - Physics',
    next: 'Study Thermodynamics',
    progress: 90,
    daysLeft: 1,
    comment: 'Okay now I’m impressed',
    bgColor: 'bg-yellow-100',
    pillColor: 'bg-yellow-300',
  },
];

const earnedMilestones = [
  {
    title: '3 days Study Streak',
    description: '3 consecutive days of study completed',
    reward: '+10 tokens',
    value: '3/3 days',
    icon: '🏆',
  },
  {
    title: 'Time Master lvl 1',
    description: 'Shockingly... you did it!',
    reward: '+15 tokens',
    value: '10 hours',
    icon: '🕒',
  },
];

const upcomingMilestones = [
  {
    title: '7 Days Study Streak',
    description: 'Complete 7 consecutive days of study',
    goal: '5/7 days',
    reward: '20 tokens',
    icon: '🕒',
  },
  {
    title: 'Pomodoro Session',
    description: 'Complete 5 sessions in one day',
    goal: '3/5 done',
    reward: '10 tokens',
    icon: '🕒',
  },
];

export default function Milestone() {
  const [selectedTab, setSelectedTab] = useState('Active');

  const filteredMilestones = milestones.filter((milestone) => {
    if (selectedTab === 'Active') return milestone.progress > 0 && milestone.progress < 100;
    if (selectedTab === 'Completed') return milestone.progress === 100;
    if (selectedTab === 'Inactive') return milestone.progress === 0;
    return true;
  });

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-3xl font-semibold text-gray-900">Milestone Tracker</h2>

      {/* Tabs and Filter */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex space-x-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={clsx(
                'pb-2 text-lg font-medium',
                selectedTab === tab ? 'border-b-2 border-violet-500 text-violet-600' : 'text-gray-500'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="flex items-center px-4 py-2 border border-violet-500 rounded-lg text-violet-600">
          <Filter className="mr-2 w-4 h-4" /> Filter
        </button>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center space-x-2 text-violet-600 text-lg font-medium">
          <Calendar className="w-5 h-5" />
          <span>Today, 23 April 2025</span>
          <button className="px-2 py-1 bg-violet-100 rounded-md">{'<'}</button>
          <button className="px-4 py-1 bg-violet-500 text-white rounded-md">Today</button>
          <button className="px-2 py-1 bg-violet-100 rounded-md">{'>'}</button>
        </div>
        <div className="flex space-x-3">
          <button className="p-3 bg-gray-100 rounded-2xl">
            <Calendar className="w-6 h-6" />
          </button>
          <button className="p-3 bg-white border rounded-2xl">
            <List className="w-6 h-6 text-violet-600" />
          </button>
        </div>
      </div>

      {/* Subject Milestones and Pep Talk/Score */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-50">
        <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredMilestones.map((m, idx) => (
            <div
              key={idx}
              className={clsx('p-4 rounded-2xl shadow-sm', m.bgColor)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{m.subject}</h3>
                  <p className="text-sm text-gray-600">Next: {m.next}</p>
                </div>
                <div className="text-gray-400">•••</div>
              </div>

              <div className="flex items-center mt-4 space-x-4">
                <Image
                  src="/DashboardIcons/progress.png"
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div className="flex-1 h-2 bg-violet-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-violet-500"
                    style={{ width: `${m.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-800">{m.progress}%</span>
              </div>

              <div className="mt-3 text-sm flex justify-between items-center">
                <span className="text-gray-700">{m.comment}</span>
                <span className={clsx('px-3 py-1 rounded-full text-sm', m.pillColor)}>
                  {m.daysLeft} days left
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pep Talk + Score Section */}
        <div className="space-y-4">
          <div className="bg-purple-100 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-purple-900">Simbi’s Pep talk</h3>
              <p className="mt-2 text-purple-800">Milestone soon! Did someone finally grow up?</p>
            </div>
            <Image src="/DashboardIcons/wavingSimbi.svg" alt="" width={100} height={100} />
          </div>

          <div className="bg-purple-100 rounded-2xl p-4">
            <p className="text-gray-600">Total token</p>
            <p className="text-lg font-semibold">15 tokens</p>
          </div>
          <div className="bg-green-100 rounded-2xl p-4">
            <p className="text-gray-600">Total Study hours</p>
            <p className="text-lg font-semibold">10 hours</p>
          </div>
        </div>
      </div>

      {/* Earned Milestones */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900">Earned Milestones</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {earnedMilestones.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow border"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-semibold text-lg text-purple-900">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <div className="flex justify-between mt-3 text-sm">
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">{item.reward}</span>
                <span className="text-purple-900 font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900">Upcoming Milestones</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {upcomingMilestones.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow border flex items-center justify-between"
            >
              <div>
                <h4 className="font-semibold text-lg text-purple-900">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">Progress: {item.goal}</p>
              <span className="text-violet-600 text-xl">⏳</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
