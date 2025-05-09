import Image from "next/image";

// import BrainpowerCard from "./BrainPowerRatingProgress";

// import FocusTimeCard from "./FocusTimeProgress";

// import StudySessionCard from "./StudySessionProgressBar";

export default function progressBar() {
  return (
    <div className="flex justify-between w-full flex-wrap items-center text-center gap-y-4">
      <Image
        src="/DashboardIcons/studyHoursIcon.png"
        alt="study image"
        height={189}
        width={200}
      />
      <Image
        src="/DashboardIcons/StudySessionIcon.png"
        alt="study image"
        height={189}
        width={200}
      />
      <Image
        src="/DashboardIcons/RatingIcon.png"
        alt="study image"
        height={189}
        width={200}
      />
    </div>

    // pages/dashboard.tsx

    // <div className="grid grid-cols-3 gap-4 mb-4">
    //   <FocusTimeCard value="05" />
    //   <StudySessionCard current={5} />
    //   <BrainpowerCard percentage={72} />
    // </div>
  );
}
