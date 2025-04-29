import Image from "next/image";
import ProgressBar from "@/components/personalization/ProgressBar";

export default function PersonalizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const percent = ((0 + 1) / 3) * 100;
  return (
    <div className="bg-[#FDFDFF] px-10 mt-10">
      {/* Logo */}
      <img src="/logo.svg" className="ml-27 mb-10" alt="logo" />

      {/* Progress Indicator */}
      <ProgressBar progress={percent} />

      <div className="flex items-start w-3/4 justify-center h-[70vh] shadow-[0_19px_86.9px_rgba(149,127,255,0.53)] mx-auto mt-16 rounded-4xl">
        <section className="flex flex-1 rounded-l-4xl h-full bg-[#7A5FFF] p-6 items-center justify-center">
          <div className="text-left text-white font-medium text-[32px] leading-[40px] tracking-[-0.03em] max-w-[80%]">
            Learning Preferences
          </div>
        </section>

        {/* main content */}
        <main className="flex-2 bg-white p-6 ">{children}</main>
      </div>
    </div>
  );
}
