type StreakType = {
  title: string;
  info: string;
};

export default function Streak() {
  const streakData: StreakType[] = [
    // Api request goes here for the streak section
    {
      title: "Consecutive Days",
      info: "0 🔥",
    },
    {
      title: "Simbi's Mood",
      info: "Happy",
    },
    {
      title: "Weekly goal",
      info: "0 milestones",
    },
  ];

  const display = streakData.map((data) => (
    <div
      className="border-[0.56px] w-[151px] h-[69px]  flex flex-col gap-[13px] rounded-[3px] p-[9px] border-grayborder justify-center"
      key={data.title}
    >
      <h3 className="text-[0.875rem] text-graytext font-normal">
        {data.title}
      </h3>
      <p className="font-medium">{data.info}</p>
    </div>
  ));

  return (
    <section className="flex items-center flex-wrap w-full sm:w-[80%] gap-[10.5px] justify-center sm:justify-start mt-5">
      {display}
    </section>
  );
}
