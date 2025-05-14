"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useGetStudyPlanStore } from "@/store/getStudyPlanStore";
import FormatTime from "./FormatTime";
import moment from "moment";
import { Study, ViewFilter } from "@/types/user";

export default function StudyCourses({
  handleToggleGenerateStudyPlan,
  view = "day", // Default value for view prop
}: {
  handleToggleGenerateStudyPlan: () => void;
  view?: ViewFilter; // Optional prop to toggle view between day, week, month
}) {
  const [toggleStudyNav, setToggleStudyNav] = useState<string | null>(null);

  const handleToggleStudyNav = (id: string) => {
    setToggleStudyNav((prevState) => (prevState === id ? null : id));
  };

  const { fetchStudies, isLoading, error, studies } = useGetStudyPlanStore();

  useEffect(() => {
    fetchStudies();
  }, [fetchStudies]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Function to filter studies by day, week, or month
  const filterStudiesByView = (
    studies: Study[],
    view: ViewFilter = "day", // Make sure view is passed and used here
    referenceDate: Date = new Date()
  ) => {
    return studies.filter((study) =>
      study.planData.schedule.some((day) =>
        day.sessions.some((session) => {
          const sessionDate = moment(session.date);
          const refDate = moment(referenceDate);

          if (view === "day") return sessionDate.isSame(refDate, "day");
          if (view === "week") return sessionDate.isSame(refDate, "week");
          if (view === "month") return sessionDate.isSame(refDate, "month");
          return false;
        })
      )
    );
  };

  // Now pass the `view` prop to the filter function
  const filteredStudies = filterStudiesByView(studies, view);

  return (
    <>
      {filteredStudies.length === 0 ? (
        <div>No studies available for this period</div>
      ) : (
        filteredStudies.map((course) => (
          <div
            className="flex bg-graytime py-4 px-4 rounded-[12px] items-center justify-between w-full gap-5 relative"
            key={course.id}
          >
            <div className="flex items-center gap-x-4">
              <Image
                src={"/DashboardIcons/bookIcon.svg"}
                alt="title Icon"
                height={30}
                width={30}
              />

              <div className="">
                <p className="text-[0.875rem] font-medium">{course.name}</p>
                <p className="text-[0.75rem] text-gray">
                  {FormatTime(
                    course.planData.schedule[0]?.sessions[0]?.startTime ?? ""
                  )}{" "}
                  -
                  {FormatTime(
                    course.planData.schedule[0]?.sessions[0]?.endTime ?? ""
                  )}
                </p>
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
        ))
      )}
    </>
  );
}
