"use client";
import HeaderNotification from "@/components/dashboard/HeaderNotification";
import HeaderSearch from "@/components/dashboard/HeaderSearch";
import StudyScheduleCalendar from "@/components/schedule/StudyScheduleCalendar";
import { useState } from "react";

export default function SchedulePage() {
  const [toggleUserNavBar, setToggleUserNavBar] = useState<boolean>(false); // for toggling the navbar on the headerNotification

  const handleToggleUserNavBar = () => {
    // for toggling the navbar on the headerNotification
    setToggleUserNavBar((prevState) => !prevState);
  };
  return (
    <section className="mx-auto w-[90%]">
      <header className="mt-[30px] flex justify-between items-center">
        <div className="w-2/3">
          <HeaderSearch />
        </div>
        <div className="w-[30%]">
          <HeaderNotification handleToggleUserNavBar={handleToggleUserNavBar} />
        </div>
      </header>

      <StudyScheduleCalendar />

      <p className="hidden">{toggleUserNavBar}</p>
    </section>
  );
}
