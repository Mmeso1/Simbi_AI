import Image from "next/image";

type Courses = {
  id: number;
  titleIcon: string;
  title: string;
  time: string;
};

export default function StudyCourses() {
  // Making line icon different

  // Api goes here
  const courses: Courses[] = [
    {
      id: 1,
      titleIcon: "/DashboardIcons/pencilIcon.svg",
      title: `Reading- Chemistry`,
      time: "01:00Pm - 02:00PM",
    },
    {
      id: 2,
      titleIcon: "/DashboardIcons/pencilIcon.svg",
      title: `Reading- Physics`,
      time: "10:00AM - 11:00AM",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 ">
      {courses.map((course) => (
        <div
          className="flex bg-graytime py-2 px-4 rounded-[12px] items-center justify-between w-[242px] gap-5"
          key={course.id}
        >
          <Image
            src={course.titleIcon}
            alt="title Icon"
            height={30}
            width={30}
          />

          <div className="">
            <p className="text-[0.875rem] font-medium">{course.title}</p>
            <p className="text-[0.75rem] text-gray ">{course.time}</p>
          </div>

          <Image
            src="/DashboardIcons/dotIcon.svg"
            alt="settings icon"
            height={13.5}
            width={3}
          />
        </div>
      ))}
    </div>
  );
}
