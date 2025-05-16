"use client";

import useAuthStore from "@/store/authStore";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type NavBarContents = {
  label: string;
  icon: string;
  href: string;
};

export default function NavBar() {
  const pathName = usePathname();

  const navBarContents: NavBarContents[] = [
    {
      label: "Dashboard",
      icon: "/DashboardIcons/HomeIcon.svg",
      href: "/dashboard",
    },
    {
      label: "Study Sessions",
      icon: "/DashboardIcons/CategoryIcon.svg",
      href: "/study-sessions",
    },
    {
      label: "Schedule",
      icon: "/DashboardIcons/scheduleIcon.svg",
      href: "/schedule",
    },
    {
      label: "Milestone",
      icon: "/DashboardIcons/milestoneIcon.svg",
      href: "/milestone",
    },
    {
      label: "Rewards",
      icon: "/DashboardIcons/rewardIcon.svg",
      href: "/rewards",
    },
    {
      label: "Let's chat",
      icon: "/DashboardIcons/chatSimbiIcon.svg",
      href: "/chat",
    },
    {
      label: "Logout",
      icon: "/DashboardIcons/logoutIcon.svg",
      href: "/logout",
    },
  ];

  const baseLinkClasses =
    "flex group items-center duration-300 w-[163px] font-semibold text-[0.875rem] ease-in-out justify-between";
  const activeLinkClasses = "text-yellow hover:text-yellow";
  const inactiveLinkClasses = "text-white hover:text-yellow";

  return (
    <div className="flex flex-col w-[148.96px] min-h-[357px] gap-[2rem] mt-[100px] text-left">
      {navBarContents.map((nav) => {
        const isLogout = nav.label === "Logout";
        const isActive = pathName === nav.href;

        return isLogout ? (
          <button
            key={nav.label}
            onClick={() => {
              useAuthStore.getState().logout();
              window.location.href = "/auth/signin";
            }}
            className={`${baseLinkClasses} ${inactiveLinkClasses}`}
          >
            <div className="flex items-center gap-[20px]">
              <Image
                src={nav.icon}
                alt={`${nav.label} icon`}
                width={24}
                height={24}
              />
              <p>{nav.label}</p>
            </div>
          </button>
        ) : (
          <Link
            href={nav.href}
            key={nav.label}
            aria-current={isActive ? "page" : undefined}
            className={`${baseLinkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`}
          >
            <div className="flex items-center gap-[20px]">
              <Image
                src={nav.icon}
                alt={`${nav.label} icon`}
                width={24}
                height={24}
                priority={isActive}
              />
              <p>{nav.label}</p>
            </div>
            <Image
              src="/DashboardIcons/ellipseIcon.svg"
              alt="Active indicator"
              width={8}
              height={8}
              className={
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }
            />
          </Link>
        );
      })}
    </div>
  );
}
