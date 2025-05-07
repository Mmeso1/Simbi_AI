import Image from "next/image";

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
  );
}
