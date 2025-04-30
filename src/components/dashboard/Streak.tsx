type StreakType = {
  title: string;
  info: string;
};

export default function Streak() {
  const streakData: StreakType[] = [
    // Api request goes here for the streak section
    {
      title: "Consecutive Days",
      info: "5 🔥",
    },
    {
      title: "Simbi's Mood",
      info: "Happy",
    },
    {
      title: "Weekly goal",
      info: "5 milestones",
    },
  ];

  const display = streakData.map((data) => (
    <div
      className="border-[0.56px] w-[151px] h-[69px] flex flex-col gap-[13px] rounded-[3px] p-[9px] border-grayborder justify-center"
      key={data.title}
    >
      <h3 className="text-[0.875rem] text-graytext font-normal">
        {data.title}
      </h3>
      <p className="font-medium">{data.info}</p>
    </div>
  ));

  return (
    <section className="grid grid-cols-3 w-[80%] gap-[22.5px] ">
      {display}
    </section>
  );
}
