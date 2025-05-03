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

// import { useState } from "react";
// import type { NextPage } from "next";

// interface ScheduleEvent {
//   id: string;
//   time: string;
//   title: string;
//   day?: string;
//   date?: Date;
// }

// const StudyScheduleCalendar: NextPage = () => {
//   const [view, setView] = useState<"daily" | "weekly" | "monthly">("daily");
//   const [currentDate] = useState(new Date(2025, 3, 23)); // April 23, 2025

//   // Sample data - replace with API fetch
//   const scheduleData: ScheduleEvent[] = [
//     {
//       id: "1",
//       time: "9am",
//       title: "Chemistry",
//       day: "Monday",
//       date: new Date(2025, 3, 21),
//     },
//     {
//       id: "2",
//       time: "10am",
//       title: "Biology",
//       day: "Tuesday",
//       date: new Date(2025, 3, 22),
//     },
//     {
//       id: "3",
//       time: "11am",
//       title: "Physics",
//       day: "Wednesday",
//       date: new Date(2025, 3, 23),
//     },
//     {
//       id: "4",
//       time: "12pm",
//       title: "Smart Money",
//       day: "Thursday",
//       date: new Date(2025, 3, 24),
//     },
//     {
//       id: "5",
//       time: "1pm",
//       title: "Mathematics",
//       day: "Friday",
//       date: new Date(2025, 3, 25),
//     },
//     {
//       id: "6",
//       time: "2pm",
//       title: "Ihr",
//       day: "Saturday",
//       date: new Date(2025, 3, 26),
//     },
//     {
//       id: "7",
//       time: "3pm",
//       title: "Ihr",
//       day: "Sunday",
//       date: new Date(2025, 3, 27),
//     },
//   ];

//   const formatDate = (date: Date) => {
//     return date.toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const daysOfWeek = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   return (
//     <div className="max-w-md mx-auto p-4 font-sans">
//       <h1 className="text-2xl font-bold mb-4">Study Schedule</h1>

//       {/* View Buttons */}
//       <div className="flex gap-2 mb-6">
//         <button
//           onClick={() => setView("daily")}
//           className={`px-4 py-2 rounded ${
//             view === "daily" ? "bg-green-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Daily
//         </button>
//         <button
//           onClick={() => setView("weekly")}
//           className={`px-4 py-2 rounded ${
//             view === "weekly" ? "bg-green-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Weekly
//         </button>
//         <button
//           onClick={() => setView("monthly")}
//           className={`px-4 py-2 rounded ${
//             view === "monthly" ? "bg-green-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Monthly
//         </button>
//       </div>

//       {/* Daily View */}
//       {view === "daily" && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             Today, {formatDate(currentDate)}
//           </h2>
//           <div className="space-y-3">
//             {["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"].map(
//               (time) => (
//                 <div key={time} className="flex items-center border-b pb-2">
//                   <div className="w-16 font-medium">{time}</div>
//                   <div className="flex-1">
//                     {scheduleData
//                       .filter(
//                         (event) =>
//                           event.time === time &&
//                           event.date?.toDateString() ===
//                             currentDate.toDateString()
//                       )
//                       .map((event) => (
//                         <span key={event.id} className="font-semibold">
//                           {event.title}
//                         </span>
//                       ))}
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       )}

//       {/* Weekly View */}
//       {view === "weekly" && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             Week of {formatDate(currentDate)}
//           </h2>
//           <div className="space-y-3">
//             {daysOfWeek.map((day) => (
//               <div key={day} className="flex items-center border-b pb-2">
//                 <div className="w-24 font-medium">{day}</div>
//                 <div className="flex-1">
//                   {scheduleData
//                     .filter((event) => event.day === day)
//                     .map((event) => (
//                       <span key={event.id} className="font-semibold block">
//                         {event.title}
//                       </span>
//                     ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Monthly View */}
//       {view === "monthly" && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             {months[currentDate.getMonth()]} {currentDate.getFullYear()}
//           </h2>
//           <div className="grid grid-cols-7 gap-1">
//             {daysOfWeek.map((day) => (
//               <div key={day} className="text-center font-medium text-sm">
//                 {day.substring(0, 3)}
//               </div>
//             ))}
//             {/* Calendar days would go here */}
//             {Array.from({ length: 30 }).map((_, i) => {
//               const day = i + 1;
//               const dayEvents = scheduleData.filter(
//                 (event) =>
//                   event.date?.getDate() === day &&
//                   event.date.getMonth() === currentDate.getMonth()
//               );

//               return (
//                 <div key={day} className="border p-1 min-h-16">
//                   <div className="text-right text-sm">{day}</div>
//                   <div className="space-y-1">
//                     {dayEvents.map((event) => (
//                       <div
//                         key={event.id}
//                         className="text-xs bg-green-100 px-1 rounded truncate"
//                       >
//                         {event.title}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudyScheduleCalendar;
