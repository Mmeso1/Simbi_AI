"use client";
import { usePersonalizationStore } from "@/store/usePersonalization";
import { sections } from "@/data/personalizationData";
// import Image from "next/image";
import ProgressBar from "@/components/personalization/ProgressBar";

export default function PersonalizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentSection } = usePersonalizationStore();
  const section = sections[currentSection];
  const percent = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="bg-[#FDFDFF] px-10 mt-10">
      {/* Logo */}
      <img src="/logo.svg" className="ml-27 mb-10" alt="logo" />

      {/* Progress Indicator */}
      <ProgressBar progress={percent} />

      <div className="flex w-3/4 min-h-[70vh] mx-auto my-16 overflow-hidden rounded-4xl shadow-[0_19px_86.9px_rgba(149,127,255,0.53)]">
        <section className="flex flex-1 bg-[#7A5FFF] items-center">
          <div className="mx-auto max-w-[50%] text-white font-medium text-[32px] leading-[40px] tracking-[-0.03em]">
            {section.title}
          </div>
        </section>

        {/* main content */}
        <section className="flex-2 bg-white p-6 relative">
          <main>{children}</main>
          <button
            onClick={() => usePersonalizationStore.getState().next()}
            className="text-white text-xl bg-[#7A5FFF] px-7 py-3 rounded-lg absolute bottom-14 right-14"
          >
            Next
          </button>
        </section>
      </div>
    </div>
  );
}
