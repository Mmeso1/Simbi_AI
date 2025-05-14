"use client";
import { usePersonalizationStore } from "@/store/usePersonalization";
import { sections } from "@/data/personalizationData";
import ProgressBar from "@/components/personalization/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PersonalizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentSection, next } = usePersonalizationStore();
  const section = sections[currentSection];
  const percent = ((currentSection + 1) / sections.length) * 100;
  const router = useRouter();

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      next();
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="bg-[#FDFDFF] px-4 sm:px-6 md:px-10 mt-10">
      {/* Logo */}
      <div className="mb-6 sm:mb-10">
        <Image
          src="/delly.svg"
          alt="logo"
          width={150}
          height={150}
          className="h-auto w-[120px] sm:w-[150px]"
        />
      </div>

      {/* Top Title (mobile only) */}
      <div className="md:hidden mb-4">
        <div className="bg-[#7A5FFF] text-white text-center text-[clamp(1.25rem,4vw,1.75rem)] font-semibold px-6 py-4 rounded-2xl w-full">
          {section.title}
        </div>
      </div>

      {/* Progress Bar (always full width of content area) */}
      <div className="w-full mb-10">
        <ProgressBar progress={percent} />
      </div>

      {/* Main Card */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl md:mx-auto mb-16 md:rounded-4xl md:shadow-[0_19px_86.9px_rgba(149,127,255,0.53)] overflow-hidden min-h-[70vh]">
        {/* Side Title (hidden on small screens) */}
        <section className="hidden md:flex md:basis-[40%] bg-[#7A5FFF] items-center justify-center p-6">
          <div className="text-white font-medium text-[clamp(1.5rem,3vw,2rem)] leading-snug text-center max-w-[90%]">
            {section.title}
          </div>
        </section>

        {/* Right Content Area */}
        <section className="flex-1 bg-white p-6 relative flex flex-col justify-between">
          <main className="flex-1">{children}</main>
          <button
            onClick={handleNext}
            className="text-white text-base sm:text-lg md:text-xl bg-[#7A5FFF] px-6 py-3 mt-6 rounded-lg self-end"
          >
            {currentSection < sections.length - 1 ? "Next" : "Finish"}
          </button>
        </section>
      </div>
    </div>
  );
}
