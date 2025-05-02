import Image from "next/image";

export default function HeaderNotification() {
  // Api fetching goes here
  return (
    <div className="flex justify-between items-center">
      <aside className="relative">
        <Image
          src="/DashboardIcons/notificationBellIcon.svg"
          alt={"notification bell"}
          width={19.87}
          height={10}
        />
        <Image
          src="/DashboardIcons/notificationBellPingIcon.svg"
          alt="message indicator"
          width={10}
          height={10}
          className="absolute left-[13px] top-0"
        />
      </aside>
      <aside className="bg-bluemaguerite w-[65%] p-2 rounded-[10px] flex justify-between ">
        <Image
          src="/DashboardIcons/dashboardUserImg.png"
          alt="Image of the user"
          height={40}
          width={40}
          className="rounded-[10px]"
        />
        <div className="flex flex-col font-medium ">
          <h3 className="text-[0.875rem]">Grace Fernades</h3>
          <p className="text-[0.75rem] text-lightblue">Basic plan</p>
        </div>
        <button>
          <Image
            src="/DashboardIcons/arrowDownIcon.svg"
            alt="arrow down icon"
            height={6}
            width={12}
          />
        </button>
      </aside>
    </div>
  );
}
