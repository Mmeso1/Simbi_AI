import DashboardHeaders from "@/components/dashboard/DashboardHeaders";
import HeaderNotification from "@/components/dashboard/HeaderNotification";
import HeaderSearch from "@/components/dashboard/HeaderSearch";
import StudyCourses from "@/components/dashboard/StudyCourses";
import EmptyStudyPlan from "@/components/study-plans/EmptyStudyPlan";
import Image from "next/image";

export default function StudyPlanPage() {
  const task = false;
  return (
    <section className="mx-auto w-[90%]">
      <Image
        src="/DashboardIcons/messageSimbiIcon.svg"
        alt="Image of an envelope"
        height={97}
        width={117}
        className="fixed bottom-10 right-20"
      />
      <header className="mt-[30px] flex justify-between items-center">
        <div className="w-2/3">
          <HeaderSearch />
        </div>
        <div className="w-[30%]">
          <HeaderNotification />
        </div>
      </header>

      <div className="flex items-center justify-between mt-16">
        <div className="flex w-[446.91px] items-center justify-between">
          <div className="flex">
            <DashboardHeaders text="Study Plans" />
            <Image
              src="/DashboardIcons/arrowDownIcon.svg"
              alt="arrow down"
              height={20}
              width={20}
              className="ml-4"
            />
          </div>
          <button className="font-semibold text-[0.75rem] text-deepdarkgray  hover:text-lightblue">
            Daily
          </button>
          <button className="font-semibold text-[0.75rem]  text-deepdarkgray  hover:text-lightblue">
            Weekly
          </button>
          <button className="font-semibold text-[0.75rem] text-deepdarkgray  hover:text-lightblue">
            Monthly
          </button>
        </div>

        <div className="flex w-[350.37px] h-[48px] gap-[16px] items-center justify-between">
          <button className="flex w-[79.42px] h-[36.14px] gap-[7.57px] rounded-[4.27px] items-center justify-center border-[0.95px] border-lightblue">
            <Image
              src="/DashboardIcons/filterIcon.svg"
              alt="Filter image"
              height={10.47}
              width={11.11}
              className=""
            />
            <span className="text-lightblue font-semibold text-[0.875rem]">
              Filter
            </span>
          </button>
          <button className="bg-lightblue text-white rounded-[8px] px-[20px] py-[12px] font-semibold">
            Start a Study Session
          </button>
        </div>
      </div>

      {task ? (
        <div className="mt-16">
          <EmptyStudyPlan />
        </div>
      ) : (
        <div className="mt-16 flex w-full gap-10">
          <div className="w-2/3">
            <StudyCourses />
          </div>

          <div className="1/3">
            <div className="rounded-[20px] w-[330px] min-h-[190px] bg-bluemaguerite p-4 relative">
              {/* Pep Talk Simbi */}
              <h3 className="text-deeppurple font-semibold text-[2rem] leading-[40px]">
                Simbi&apos;s <br /> Pep talk
              </h3>
              <p className="text-deeppurple mt-3 font-normal">
                Study Plan – let’s pretend <br /> you’ll stick to it 😉
              </p>

              <Image
                src="/DashboardIcons/peptalkSimbi.svg"
                alt="Pep talking Simbi"
                height={149.08}
                width={94.93}
                className="absolute right-5 top-5"
              />
            </div>

            <div className="mt-10 rounded-[8px] border-[1px] min-h-[144px] w-[330px] p-4 border-gray-200 overflow-x-auto">
              {/* Urgent deadlines */}
              <h3 className="text-error font-medium">Urgent deadlines</h3>
              <div className="mt-2">
                <StudyCourses />
              </div>
            </div>

            <div className="mt-10 rounded-[8px] border-[1px] min-h-[144px] w-[330px] p-4 border-gray-200 overflow-x-auto">
              {/* Missed deadlines */}
              <h3 className="text-error font-medium">Missed deadlines</h3>
              <div className="mt-2">
                <StudyCourses />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
