import Image from "next/image";

export default function Rewards() {
  return (
    <section className="">
      <div className="flex mt-5 gap-x-7 gap-y-10 font-normal text-sm ">
        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] w-[180px] h-[159px] p-4 relative">
          <h3 className="text-[0.75rem] font-medium">
            Current <br /> NFT <br /> badge
          </h3>
          <Image
            src="/DashboardIcons/verydDarkSimbi.png"
            alt="image of very dark simbi"
            width={90}
            height={130}
            className="absolute top-2 right-0"
          />

          <div className="absolute rounded-[20px] w-[4px] h-[30px] bg-lightpurple bottom-4"></div>
        </aside>
        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] w-[180px] h-[159px] p-6 relative">
          <h3 className="text-[0.75rem] font-medium">Rewards Earned (token)</h3>

          <div className="absolute rounded-[20px] w-[4px] h-[30px] bg-lightpurple bottom-4"></div>
          <p className="absolute rounded-[20px] w-[4px] h-[30px] text-lightblue right-14 bottom-10 semibold text-[2rem]">
            15
          </p>
        </aside>
      </div>
      <div className="flex mt-5 gap-x-7 gap-y-10 font-normal text-sm ">
        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] w-[180px] h-[159px] p-6 relative">
          <h3 className="text-[0.75rem] font-medium">Milestones completed</h3>

          <div className="absolute rounded-[20px] w-[4px] h-[30px] bg-lightpurple bottom-4"></div>
          <p className="absolute rounded-[20px] w-[4px] h-[30px] text-lightblue right-14 bottom-10 semibold text-[2rem]">
            12
          </p>
        </aside>
        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] size-[180px] p-6 relative">
          <h3 className="text-[0.75rem] font-medium">Active Plans</h3>

          <div className="absolute rounded-[20px] w-[4px] h-[30px] bg-lightpurple bottom-4"></div>
          <p className="absolute rounded-[20px] w-[4px] h-[30px] text-lightblue right-14 bottom-10 semibold text-[2rem]">
            10
          </p>
        </aside>
      </div>
    </section>
  );
}
