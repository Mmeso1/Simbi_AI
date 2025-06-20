"use client";
import { useMemo, useState } from "react";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Image from "next/image";
import DashboardHeaders from "../dashboard/DashboardHeaders";
import { useGetStudyPlanStore } from "@/store/getStudyPlanStore";
import Link from "next/link";

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
  const [date, setDate] = useState<Date>(new Date());

  const { isLoading, error, studies } = useGetStudyPlanStore();

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
      <div className="p-1 sm:p-2 text-xs font-medium rounded-md shadow-sm">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white bg-opacity-30 rounded-full flex-shrink-0"></div>
          <strong className="text-white truncate text-[10px] sm:text-xs">
            {main.trim()}
          </strong>
        </div>
        {detail && (
          <div className="mt-0.5 sm:mt-1 text-white text-opacity-90 text-[8px] sm:text-[10px] leading-tight truncate">
            {detail.trim()}
          </div>
        )}
      </div>
    );
  };

  if (isLoading)
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center px-4">
          <div className="mb-8 sm:mb-12 relative">
            <Image
              src="/images/hero.svg"
              alt="Simbi Character"
              width={120}
              height={120}
              className="animate-bounce sm:w-[150px] sm:h-[150px]"
              priority
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-[#7A5FFF] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#501EE3] text-lg sm:text-xl font-medium text-center">
              Wait a moment
            </p>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center bg-white px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-12 relative">
            <Image
              src="/DashboardIcons/sitting simbi.svg"
              alt="Simbi Character"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#501EE3] text-lg sm:text-xl font-medium text-center">
              Error: {error}
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-white min-h-screen w-full mx-auto">
      <main className="relative">
        {/* Header Section */}
        <div className="flex gap-4 justify-between mt-8 border-b border-gray-200 pb-5 px-4 xl:px-6 mb-6 sm:mb-10 w-full mx-auto">
          <div className="flex items-center">
            <DashboardHeaders text="Study Schedule" />
            <Image
              src="/DashboardIcons/arrowDownIcon.svg"
              alt="arrow down"
              height={16}
              width={16}
              className="ml-2 sm:ml-4 sm:w-5 sm:h-5"
            />
          </div>

          <div className="h-10 sm:h-12">
            <button
              onClick={handleToggleGenerateStudyPlan}
              className="bg-gradient-to-r from-[#7A5FFF] to-[#501EE3] hover:from-[#6B4FE8] hover:to-[#4018D6] text-base duration-300 text-white rounded-lg px-3  py-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <span>Add a Study Block</span>
            </button>
          </div>
        </div>

        {/*  Calendar Navigation */}
        <div className="mb-4 sm:mb-6 flex flex-col gap-4 px-4">
          {/* Date Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() =>
                setDate(
                  moment(date)
                    .subtract(
                      1,
                      view === "month"
                        ? "month"
                        : view === "week"
                        ? "week"
                        : "day"
                    )
                    .toDate()
                )
              }
              className="p-2 sm:p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 border border-gray-100"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <h2 className="text-lg sm:text-xl font-bold text-gray-800 min-w-[160px] sm:min-w-[200px] text-center">
              {moment(date).format(
                view === "month"
                  ? "MMM YYYY"
                  : view === "week"
                  ? "MMM DD, YYYY"
                  : "MMM DD, YYYY"
              )}
            </h2>

            <button
              onClick={() =>
                setDate(
                  moment(date)
                    .add(
                      1,
                      view === "month"
                        ? "month"
                        : view === "week"
                        ? "week"
                        : "day"
                    )
                    .toDate()
                )
              }
              className="p-2 sm:p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 border border-gray-100"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Controls */}
          <div className="flex flex-row-reverse  items-center justify-between">
            <button
              onClick={() => setDate(new Date())}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm order-2 sm:order-1"
            >
              Today
            </button>

            <div className="flex justify-between gap-3 items-center px-6 mt-3">
              <div className="flex items-center justify-center">
                <Image
                  src="/DashboardIcons/activeCalendar.svg"
                  alt="calendar view image"
                  height={32}
                  width={48}
                  className="cursor-pointer "
                />

                <Link href={"/study-plans"}>
                  <Image
                    src="/DashboardIcons/activeList.svg"
                    alt="list view image"
                    height={32}
                    width={48}
                    className="cursor-pointer "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Calendar Container */}
        <div className="bg-white rounded-2xl shadow-xl  mb-4 sm:mb-8 overflow-hidden border border-gray-100">
          <div className="h-[60vh] sm:h-[75vh] lg:h-[80vh]">
            <div className="h-full relative">
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
                    background:
                      "linear-gradient(135deg, #7A5FFF 0%, #501EE3 100%)",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 2px 8px rgba(122, 95, 255, 0.3)",
                    padding: "2px",
                  },
                })}
                views={["day", "week", "month"] as View[]}
                defaultView="week"
                toolbar={false}
                className="rbc-calendar h-full font-sans"
              />
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        /* Base Calendar Styles */
        .rbc-calendar {
          font-family: ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
            "Noto Sans", sans-serif;
        }

        /* Header Styling */
        .rbc-header {
          background: linear-gradient(to right, #f1f5f9, #f3f4f6);
          color: #475569;
          font-weight: 600;
          padding: 0.75rem 0.5rem;
          border-bottom: 2px solid #e5e7eb;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        @media (min-width: 640px) {
          .rbc-header {
            padding: 0.75rem;
            font-size: 0.875rem;
          }
        }

        /* Month View Date Styling */
        .rbc-date-cell {
          font-weight: 500;
          color: #64748b;
          font-size: 0.75rem;
        }

        @media (min-width: 640px) {
          .rbc-date-cell {
            font-size: 0.875rem;
          }
        }

        .rbc-date-cell.rbc-now {
          background: linear-gradient(135deg, #7a5fff 0%, #501ee3 100%);
          color: white;
          border-radius: 0.5rem;
          font-weight: 700;
        }

        .rbc-date-cell:hover {
          background-color: #f1f5f9;
          border-radius: 0.375rem;
          transition: all 0.2s;
        }

        /* Time Grid Styling */
        .rbc-time-view .rbc-time-gutter,
        .rbc-time-view .rbc-time-content {
          border: none;
        }

        .rbc-time-slot {
          border-top: 1px solid #f1f5f9;
        }

        .rbc-timeslot-group {
          border-bottom: 1px solid #e5e7eb;
        }

        .rbc-time-header-gutter {
          background-color: #f8fafc;
        }

        .rbc-time-header-content {
          border-left: 1px solid #e5e7eb;
        }

        /* Day and Week View Time Labels */
        .rbc-time-gutter .rbc-timeslot-group {
          background-color: #f8fafc;
          border-radius: 0 0.5rem 0.5rem 0;
          margin-right: 0.25rem;
        }

        .rbc-time-gutter .rbc-time-slot {
          color: #64748b;
          font-size: 0.75rem;
          font-weight: 500;
          text-align: center;
        }

        @media (min-width: 640px) {
          .rbc-time-gutter .rbc-time-slot {
            font-size: 0.875rem;
          }
        }

        /* Event Styling Enhancements */
        .rbc-event {
          border: none !important;
          box-shadow: 0 4px 6px -1px rgba(51, 50, 50, 0.1),
            0 2px 4px -1px rgba(41, 40, 40, 0.06);
          transition: all 0.2s;
        }

        .rbc-event:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        // /* Today highlighting */
        // .rbc-today {
        //   background-color: rgba(139, 92, 246, 0.05);
        // }

        /* Month view specific */
        .rbc-month-view {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .rbc-month-row {
          border-bottom: 1px solid #f1f5f9;
        }

        .rbc-month-row:last-child {
          border-bottom: none;
        }

        .rbc-day-bg {
          border-right: 1px solid #f1f5f9;
        }

        .rbc-day-bg:last-child {
          border-right: none;
        }

        .rbc-day-bg.rbc-today {
          background: linear-gradient(135deg, #f3e8ff 0%, #dbeafe 100%);
          background-opacity: 0.3;
        }

        /* Week and Day view specific */
        .rbc-time-view {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .rbc-time-content {
          border-top: 1px solid #e5e7eb;
        }

        .rbc-day-slot {
          border-right: 1px solid #f1f5f9;
        }

        .rbc-day-slot:last-child {
          border-right: none;
        }

        .rbc-current-time-indicator {
          background-color: #ef4444;
          height: 2px;
          border-radius: 9999px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        /* All day event area */
        .rbc-allday-cell {
          background-color: #f8fafc;
          border-bottom: 2px solid #e5e7eb;
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 640px) {
          .rbc-toolbar {
            flex-direction: column;

            align-items: stretch;
          }

          .rbc-toolbar-label {
            text-align: center;
            margin: 0.5rem 0;
          }

          .rbc-time-gutter {
            width: 10px !important;
          }

          .rbc-time-gutter .rbc-time-slot {
            font-size: 0.625rem;
          }

          .rbc-header {
            font-size: 0.625rem;
            padding: 0.5rem 0.25rem;
          }

          .rbc-date-cell {
            font-size: 0.625rem;
          }

          .rbc-event {
            font-size: 0.625rem;
          }

          .rbc-month-view .rbc-date-cell {
            height: 2.5rem;
          }
        }

        /* Tablet Responsive Adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .rbc-time-gutter {
            width: 80px !important;
          }
        }

        /* Desktop Responsive Adjustments */
        @media (min-width: 1025px) {
          .rbc-time-gutter {
            width: 100px !important;
          }
        }

        /* Base calendar styling */
        .rbc-calendar * {
          box-sizing: border-box;
        }

        .rbc-calendar .rbc-month-view,
        .rbc-calendar .rbc-time-view {
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default StudyScheduleCalendar;
