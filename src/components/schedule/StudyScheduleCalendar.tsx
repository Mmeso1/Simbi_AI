"use client";
import { useState } from "react";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

const localizer = momentLocalizer(moment);

const StudyScheduleCalendar = () => {
  const [view, setView] = useState<View>("week");
  const [date, setDate] = useState<Date>(new Date(2025, 3, 25));

  const events: CalendarEvent[] = [
    {
      title: "Site: 25",
      start: new Date(2025, 3, 25, 9),
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
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Study Schedule - {moment(date).format("Do MMMM YYYY")}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setView("day")}
            className={`px-3 py-1 text-sm rounded-md ${
              view === "day"
                ? "bg-purple-100 text-purple-600 font-medium"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Day
          </button>
          <button
            onClick={() => setView("week")}
            className={`px-3 py-1 text-sm rounded-md ${
              view === "week"
                ? "bg-purple-100 text-purple-600 font-medium"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setView("month")}
            className={`px-3 py-1 text-sm rounded-md ${
              view === "month"
                ? "bg-purple-100 text-purple-600 font-medium"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Month
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
