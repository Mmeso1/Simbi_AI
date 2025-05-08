"use client";
import { useState } from "react";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Image from "next/image";
import DashboardHeaders from "../dashboard/DashboardHeaders";

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

const localizer = momentLocalizer(moment);

const StudyScheduleCalendar = () => {
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState<Date>(new Date(2025, 3, 25));

  const events: CalendarEvent[] = [
    {
      title: `Reading- Chemistry`,
      start: new Date(2025, 3, 25, 13),
      end: new Date(2025, 3, 25, 14),
      allDay: false,
    },
    {
      title: `Reading- Physics`,
      start: new Date(2025, 3, 25, 10),
      end: new Date(2025, 3, 25, 11),
      allDay: false,
    },

    // ... other events
  ];

  // Custom styling for different views
  const getCalendarStyle = () => {
    const baseStyle = {
      height: "600px",
      backgroundColor: "rgba(288, 288, 288, 1)",
    };

    if (view === "day") {
      return {
        ...baseStyle,
        ".rbc-time-header": {
          backgroundColor: "rgba(288, 288, 288, 1)",
          borderBottom: "1px solid #ddd",
          padding: "10px 0",
        },
        ".rbc-time-content": {
          backgroundColor: "#fff",
        },
      };
    }

    if (view === "week") {
      return {
        ...baseStyle,
        ".rbc-time-header": {
          backgroundColor: "rgba(288, 288, 288, 1)",
          borderBottom: "1px solid #ddd",
          padding: "10px 0",
        },
        ".rbc-time-content": {
          backgroundColor: "#fff",
        },
      };
    }

    return baseStyle;
  };

  const EventComponent = ({ event }: { event: CalendarEvent }) => (
    <div className="p-1 text-xs">
      <strong>{event.title.split(":")[0]}:</strong> {event.title.split(":")[1]}
    </div>
  );

  return (
    <div className="">
      <div className="flex items-center xl:flex-row flex-col-reverse gap-y-6 justify-between mt-16 border-b-[0.95px] pb-5 xl:px-6 px-0  border-b-grayborder mb-10">
        <div className="flex w-[446.91px] items-center justify-evenly">
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
                ? "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7   after:w-full after:h-[2.4px]  hover:after:bg-lightblue transition-all text-[0.75rem]   hover:text-lightblue text-lightblue after:bg-lightblue"
                : "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7   after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.75rem] text-deepdarkgray  hover:text-lightblue"
            }
          >
            Daily
          </button>
          <button
            onClick={() => setView("week")}
            className={
              view === "week"
                ? "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7   after:w-full after:h-[2.4px]  hover:after:bg-lightblue transition-all text-[0.75rem]   hover:text-lightblue text-lightblue after:bg-lightblue"
                : "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7   after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.75rem] text-deepdarkgray  hover:text-lightblue"
            }
          >
            Weekly
          </button>
          <button
            onClick={() => setView("month")}
            className={
              view === "month"
                ? "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7   after:w-full after:h-[2.4px]  hover:after:bg-lightblue transition-all text-[0.75rem]   hover:text-lightblue text-lightblue after:bg-lightblue"
                : "font-semibold relative after:absolute after:left-0 xl:after:-bottom-9 after:-bottom-7   after:w-full after:h-[2.4px] after:bg-transparent hover:after:bg-lightblue transition-all text-[0.75rem] text-deepdarkgray  hover:text-lightblue"
            }
          >
            Monthly
          </button>
        </div>
        <div className="flex w-[350.37px]  h-[48px] gap-[16px] items-center justify-between">
          <button className="flex w-[79.42px] h-[36.14px] gap-[7.57px] cursor-pointer rounded-[4.27px] items-center justify-center border-[0.95px] border-lightblue">
            <Image
              src="/DashboardIcons/exportbuttonicon.png"
              alt="Filter image icon"
              height={10.47}
              width={11.11}
              className=""
            />
            <span className="text-lightblue font-semibold text-[0.875rem]">
              Export
            </span>
          </button>
          <button className="bg-lightblue hover:bg-blue-900 duration-300 text-white rounded-[8px] px-[20px] py-[12px] font-semibold">
            Add a Study Block +
          </button>
        </div>
      </div>

      <div style={getCalendarStyle()}>
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
    </div>
  );
};

export default StudyScheduleCalendar;
