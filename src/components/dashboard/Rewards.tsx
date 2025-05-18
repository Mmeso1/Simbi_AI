import Image from "next/image";

export default function Rewards() {
  return (
    <section className="w-full">
      <div className="relative flex mt-5 gap-y-10 gap-x-1 font-normal justify-between text-sm flex-wrap opacity-20">
        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] xl:size-[150px] size-[155px] p-4 relative">
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
        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] xl:size-[150px] size-[155px] p-6 relative">
          <h3 className="text-[0.75rem] font-medium">Rewards Earned (token)</h3>

          <div className="absolute rounded-[20px] w-[4px] h-[30px] bg-lightpurple bottom-4"></div>
          <p className="absolute rounded-[20px] w-[4px] h-[30px] text-lightblue right-14 bottom-10 semibold text-[2rem]">
            0
          </p>
        </aside>

        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] xl:size-[150px] size-[155px] p-6 relative">
          <h3 className="text-[0.75rem] font-medium">Milestones Completed</h3>

          <div className="absolute rounded-[20px] w-[4px] h-[30px] bg-lightpurple bottom-4"></div>
          <p className="absolute rounded-[20px] w-[4px] h-[30px] text-lightblue right-14 bottom-10 semibold text-[2rem]">
            0
          </p>
        </aside>
        <aside className="bg-bluemaguerite hover:scale-105 duration-800 rounded-[20px] xl:size-[150px] size-[155px] p-6 relative">
          <h3 className="text-[0.75rem] font-medium">Active Plans</h3>

          <div className="absolute rounded-[20px] w-[4px] h-[30px] bg-lightpurple bottom-4"></div>
          <p className="absolute rounded-[20px] w-[4px] h-[30px] text-lightblue right-14 bottom-10 semibold text-[2rem]">
            0
          </p>
        </aside>
      </div>
    </section>
  );
}
