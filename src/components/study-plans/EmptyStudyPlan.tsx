import Image from "next/image";

export default function EmptyStudyPlan() {
  return (
    <section>
      <div className="w-[478px] min-h-[530.89px] items-center mt-24 flex flex-col gap-[30px] mx-auto">
        <div>
          <Image
            src="/DashboardIcons/notStudyingSimbi.svg"
            alt="Simbi looking at you not studying"
            height={274.89}
            width={321}
          />
        </div>
        <div className="text-center">
          <p className="font-semibold text-[2rem] text-grayheader">
            No Study Plan created Yet
          </p>
          <p className="font-medium text-grayschedule text-[1.25rem]">
            Generate a study plan to get started
          </p>
        </div>
        <button className="bg-lightblue text-white rounded-[8px] px-[20px] py-[12px] font-semibold">
          Generate your Study plan
        </button>
      </div>
    </section>
  );
}
