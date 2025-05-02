import HeaderNotification from "@/components/dashboard/HeaderNotification";
import HeaderSearch from "@/components/dashboard/HeaderSearch";
import StudyScheduleCalendar from "@/components/schedule/StudyScheduleCalendar";

export default function SchedulePage() {
  return (
    <section className="mx-auto w-[90%]">
      <header className="mt-[30px] flex justify-between items-center">
        <div className="w-2/3">
          <HeaderSearch />
        </div>
        <div className="w-[30%]">
          <HeaderNotification />
        </div>
      </header>

      <StudyScheduleCalendar />
    </section>
  );
}
