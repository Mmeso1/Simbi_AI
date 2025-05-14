import Image from "next/image";

export default function SimbiAlert() {
  return (
    <div className="w-full flex items-center justify-center bg-white py-4">
      <div className="w-full max-w-md bg-gradient-to-br from-[#9A7DFF] to-[#FFD194] rounded-2xl p-3 shadow-md">
        <div className="flex items-center space-x-2">
          <Image
            src="/DashboardIcons/streak0.svg"
            alt="avatar"
            width={8}
            height={8}
            className="w-8 h-8"
          />
          <h1 className="text-base font-semibold text-black">Reminder</h1>
        </div>

        <div className="mt-1">
          <p className="text-sm mt-1">
            Time is running faster than your crush when you say &apos;we need to
            talk&apos; 😭. Go submit that work!
          </p>
        </div>

        <div className="relative flex justify-center mt-3">
          <Image
            src="/DashboardIcons/ren.svg"
            alt="ellipse"
            width={100}
            height={100}
            className="absolute bottom-0 w-[100px] h-auto"
          />
          <Image
            src="/DashboardIcons/simbi 5.svg"
            alt="character"
            width={80}
            height={80}
            className="relative z-10 w-[80px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
