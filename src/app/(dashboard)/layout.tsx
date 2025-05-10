import Image from "next/image";
import { balooThambi2 } from "@/lib/fonts";
import NavBar from "@/components/dashboard/NavBar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <nav className="w-[222px] hidden md:block pt-[59px] px-[27px] bg-darkblue min-h-screen">
        {/* The reusable dashboard component on the left */}
        <div className="flex w-[148.96px] gap-[4.96px] items-center justify-center cursor-pointer hover:scale-110">
          <Image
            src="/DashboardIcons/mini-logo.svg"
            alt="an Image of simbi"
            width={50}
            height={41}
          />
          <h3
            className={`${balooThambi2.className} text-white  font-bold text-[2rem] `}
          >
            SIMBI
          </h3>
        </div>

        <NavBar />

        <div className="mt-[180px]">
          <Image
            src="/DashboardIcons/sitting simbi.svg"
            alt="Sitting Simbi"
            height={169}
            width={168}
          />
        </div>

        <div className="mt-24 bg-[rgba(0,0,0,0.3)] w-[168px] min-h-[147px] flex flex-col gap-y-2 items-center justify-center rounded-[18px] px-3 py-4">
          <h3 className="text-yellow font-semibold text-[0.875rem]">
            Upgrade your plan
          </h3>
          <p className="text-center text-[0.75rem] text-milkwhite font-normal">
            {" "}
            Connect Telegram bot, wallet, join study groups
          </p>
          <Link href="/telegram">
            <button className="bg-bluegradient #2aabee 0%, #229ed9 99.26%)]  w-[128px] h-[48px] rounded-[12px] flex items-center justify-center text-white font-semibold text-[0.875rem]">
              Sync Telegram
            </button>
          </Link>
        </div>
      </nav>
      <aside className="flex-1">
        {/* The rest of the page on the right */}
        {children}
      </aside>
    </main>
  );
}
