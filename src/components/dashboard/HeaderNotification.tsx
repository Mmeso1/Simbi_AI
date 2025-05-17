import Image from "next/image";

import useAuthStore from "@/store/authStore";

export default function HeaderNotification({
  handleToggleUserNavBar,
}: {
  handleToggleUserNavBar: () => void;
}) {
  return (
    <div className="flex justify-between items-center">
      <aside className="relative hover:bg-gray-300 duration-300 hover:p-4 rounded-full hover:scale-105">
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
      <aside className="bg-bluemaguerite w-[70%] max-w-xs p-2 rounded-[10px] flex justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src={"/chatbot/pfp.jpg"}
            alt="Image of the user"
            height={40}
            width={40}
            className="rounded-[50%] w-[40px] h-[40px] object-cover"
          />
          <div className="flex flex-col font-medium ">
            <h3 className="text-[0.875rem]">
              {useAuthStore.getState().user?.username}
            </h3>
            <p className="text-[0.75rem] text-lightblue">Basic plan</p>
          </div>
        </div>
        <button
          className="hover:cursor-pointer"
          onClick={handleToggleUserNavBar}
        >
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
