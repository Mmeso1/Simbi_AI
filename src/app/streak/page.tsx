export default function SimbiStreak() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl min-h-[600px] flex flex-col justify-between bg-gradient-to-br from-[#9A7DFF] to-[#FFD194] rounded-[40px] p-6">
      
        <div className="flex items-center space-x-4">
          <img src="/DashboardIcons/streak0.svg" alt="avatar" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">
            <span className="text-black">SIMBI</span> Alert!
          </h1>
        </div>

        <div className="mt-2 px-2">
          <h2 className="text-xl font-bold leading-snug">
            STREAK MODE: ACTIVATED <span className="text-yellow-400">⚡</span>
          </h2>
          <p className="mt-1 text-lg leading-relaxed">
            You’ve smashed 2 plans in a row! I’ve notified the Study gods—they’re impressed.
          </p>
        </div>

       
        <div className="relative flex justify-center mt-8 mb-6">
          <img
            src="/DashboardIcons/ellipse.svg"
            alt="ellipse"
            className="absolute bottom-0 w-[250px] pointer-events-none"
          />
          <img
            src="/DashboardIcons/streak.svg"
            alt="character"
            className="relative z-10 w-[180px]"
          />
        </div>
      </div>
    </div>
  );
}
