export default function SimbiAlert() {
  return (
    <div className="w-full flex items-center justify-center bg-white py-4">
      <div className="w-full max-w-md bg-gradient-to-br from-[#9A7DFF] to-[#FFD194] rounded-2xl p-3 shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src="/DashboardIcons/streak0.svg"
            alt="avatar"
            className="w-8 h-8"
          />
          <h1 className="text-base font-semibold  text-red-900">
            Deadline Alert !
          </h1>
        </div>

        <div className="mt-1">
          <p className="text-sm mt-1">
            You&apos;re flirting dangerously with your due dates, and honestly?
            It&apos;s kinda stressful to watch. 👀 You&apos;re flirting
            dangerously with your due dates, and honestly? It&apos;s kinda
            stressful to watch. 👀
          </p>
        </div>

        <div className="relative flex justify-center mt-3">
          <img
            src="/DashboardIcons/ren2.svg"
            alt="ellipse"
            className="absolute bottom-0 w-[100px]"
          />
          <img
            src="/DashboardIcons/simbi 8.svg"
            alt="character"
            className="relative z-10 w-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
