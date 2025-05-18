"use client";
import { useMemo, useState } from "react";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Image from "next/image";
import DashboardHeaders from "../dashboard/DashboardHeaders";
import { useGetStudyPlanStore } from "@/store/getStudyPlanStore";
import styles from "@/styles/ComingSoon.module.css";

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

const localizer = momentLocalizer(moment);

const StudyScheduleCalendar = ({
  handleToggleGenerateStudyPlan,
}: {
  handleToggleGenerateStudyPlan: () => void;
}) => {
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState<Date>(new Date(2025, 3, 25));
  const { studies } = useGetStudyPlanStore();
  const comingSoon = true;

  const events = useMemo(() => {
    return studies.flatMap((study) =>
      study.planData.schedule.flatMap((day) =>
        day.sessions.map((session) => ({
          title: `Study - ${session.topic}`,
          start: new Date(session.startTime),
          end: new Date(session.endTime),
          allDay: false,
        }))
      )
    );
  }, [studies]);

  const EventComponent = ({ event }: { event: CalendarEvent }) => {
    const [main, detail] = event.title.split("-");
    return (
      <div className="p-1 text-xs">
        <strong>{main.trim()}</strong>
        {detail && ` - ${detail.trim()}`}
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
      <main className="relative">
        <div className="flex items-center xl:flex-row flex-col-reverse gap-y-6 justify-between mt-16 border-b-[0.95px] pb-5 xl:px-6 px-0 border-b-grayborder mb-10">
          <div className="flex sm:w-[446.91px] w-[400px] items-center justify-between">
            <div className="flex">
              <DashboardHeaders text="Study Schedule" />
              <Image
                src="/DashboardIcons/arrowDownIcon.svg"
                alt="arrow down"
                height={20}
                width={20}
                className="ml-4"
              />
            </div>
            <button
              onClick={() => setView("day")}
              className={
                view === "day"
                  ? "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7 after:w-full after:h-[2.4px] hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem]  hover:text-lightblue text-lightblue after:bg-lightblue"
                  : "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7 after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem]  text-deepdarkgray hover:text-lightblue"
              }
            >
              Daily
            </button>
            <button
              onClick={() => setView("week")}
              className={
                view === "week"
                  ? "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7 after:w-full after:h-[2.4px] hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem]  hover:text-lightblue text-lightblue after:bg-lightblue"
                  : "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7 after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem]  text-deepdarkgray hover:text-lightblue"
              }
            >
              Weekly
            </button>
            <button
              onClick={() => setView("month")}
              className={
                view === "month"
                  ? "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7 after:w-full after:h-[2.4px] hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem]  hover:text-lightblue text-lightblue after:bg-lightblue"
                  : "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7 after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.70rem] sm:text-[0.75rem]  text-deepdarkgray hover:text-lightblue"
              }
            >
              Monthly
            </button>
          </div>
          <div className="flex w-[350.37px] h-[48px] gap-[16px] items-center justify-between">
            <button className="flex w-[79.42px] h-[36.14px] gap-[7.57px] cursor-pointer rounded-[4.27px] items-center justify-center border-[0.95px] border-lightblue">
              <Image
                src="/DashboardIcons/exportbuttonicon.png"
                alt="Filter image icon"
                height={10.47}
                width={11.11}
              />
              <span className="text-lightblue font-semibold text-[0.875rem]">
                Export
              </span>
            </button>
            <button
              onClick={handleToggleGenerateStudyPlan}
              className="bg-lightblue hover:bg-blue-900 duration-300 text-white rounded-[8px] px-[20px] py-[12px] font-semibold"
            >
              Add a Study Block +
            </button>
          </div>
        </div>

        <div style={{ height: "100vh", overflowX: "auto" }}>
          <Calendar<CalendarEvent>
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            view={view}
            onView={setView}
            date={date}
            onNavigate={setDate}
            components={{
              event: EventComponent,
            }}
            eventPropGetter={() => ({
              style: {
                backgroundColor: "#8A2BE2",
                color: "white",
                borderRadius: "4px",
                border: "none",
              },
            })}
            views={["day", "week", "month"] as View[]}
            defaultView="week"
            toolbar={false}
          />
        </div>
      </main>
      {comingSoon && (
        <div className={styles["coming-soon-overlay"]}>
          <div className={styles["coming-soon-badge"]}>Coming Soon</div>
        </div>
      )}
    </div>
  );
};

export default StudyScheduleCalendar;
