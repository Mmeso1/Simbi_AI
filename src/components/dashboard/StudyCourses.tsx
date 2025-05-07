"use client";
import Image from "next/image";

import { useState } from "react";

type Courses = {
  id: number;
  titleIcon: string;
  title: string;
  time: string;
};

export default function StudyCourses({
  handleToggleGenerateStudyPlan,
}: {
  handleToggleGenerateStudyPlan: () => void;
}) {
  const [toggleStudyNav, setToggleStudyNav] = useState<number | null>(null);

  const handleToggleStudyNav = (id: number) => {
    setToggleStudyNav((prevState) => (prevState === id ? null : id));
  };

  // Api goes here
  const courses: Courses[] = [
    {
      id: 1,
      titleIcon: "/DashboardIcons/pencilIcon.svg",
      title: `Reading- Chemistry`,
      time: "01:00Pm - 02:00PM",
    },
    {
      id: 2,
      titleIcon: "/DashboardIcons/pencilIcon.svg",
      title: `Reading- Physics`,
      time: "10:00AM - 11:00AM",
    },
  ];
  return (
    <>
      {courses.map((course) => (
        <div
          className="flex bg-graytime py-4 px-4 rounded-[12px] items-center justify-between w-full gap-5 relative"
          key={course.id}
        >
          <div className="flex items-center gap-x-4">
            <Image
              src={course.titleIcon}
              alt="title Icon"
              height={30}
              width={30}
            />

            <div className="">
              <p className="text-[0.875rem] font-medium">{course.title}</p>
              <p className="text-[0.75rem] text-gray ">{course.time}</p>
            </div>
          </div>
          <Image
            src="/DashboardIcons/dotIcon.svg"
            alt="settings icon"
            height={13.5}
            width={3}
            onClick={() => handleToggleStudyNav(course.id)}
            className="cursor-pointer"
          />
          {toggleStudyNav === course.id && (
            <div
              className={`opacity-100 duration-1000 rounded-[16px] w-[230px] h-[146px] border-[1px] border-grayborder flex flex-col justify-center items-center gap-4 absolute bg-white top-16 right-0 z-50 px-6`}
            >
              <span className="flex items-center gap-6 group w-full">
                <span className="font-normal cursor-pointer group-hover:text-lightblue duration-300 ">
                  Start Study Session
                </span>
              </span>
              <span className="flex items-center gap-6 group w-full">
                <span
                  onClick={handleToggleGenerateStudyPlan}
                  className="font-normal cursor-pointer group-hover:text-lightblue duration-300 "
                >
                  Edit Study Plan
                </span>
              </span>
              <span className="flex items-center gap-6 group w-full">
                <span className="font-normal cursor-pointer text-error group-hover:text-lightblue duration-300 ">
                  Deactivate Study Plan
                </span>
              </span>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
