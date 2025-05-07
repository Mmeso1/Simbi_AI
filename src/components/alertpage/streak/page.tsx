export default function SimbiStreak() {
  return (
    <div className="w-full flex items-center justify-center bg-white py-4">
      <div className="w-full max-w-md bg-gradient-to-br from-[#9A7DFF] to-[#FFD194] rounded-2xl p-3 shadow-md">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <img src="/DashboardIcons/streak0.svg" alt="avatar" className="w-8 h-8" />
          <h1 className="text-base font-semibold">
            <span className="text-black">SIMBI</span> Alert!
          </h1>
        </div>

        {/* Text Content */}
        <div className="mt-1">
          <h2 className="text-sm font-semibold">
            STREAK MODE: ACTIVATED <span className="text-yellow-400">⚡</span>
          </h2>
          <p className="text-sm mt-1">
            You’ve smashed 2 plans in a row! I’ve notified the Study gods—they’re impressed.
          </p>
        </div>

        {/* Images */}
        <div className="relative flex justify-center mt-3">
          <img
            src="/DashboardIcons/ellipse.svg"
            alt="ellipse"
            className="absolute bottom-0 w-[100px]"
          />
          <img
            src="/DashboardIcons/streak.svg"
            alt="character"
            className="relative z-10 w-[80px]"
          />
        </div>
      </div>
    </div>
  );
}



