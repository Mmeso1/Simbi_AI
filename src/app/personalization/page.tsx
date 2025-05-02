"use client";

import { sections } from "@/data/personalizationData";
import SingleQuestion from "@/components/personalization/SingleQuestion";
import { useEffect } from "react";
import { usePersonalizationStore } from "@/store/usePersonalization";

export default function PersonalizationPage() {
  const { currentSection, setSection } = usePersonalizationStore();
  const section = sections[currentSection];

  // ensure the store is seeded if you ever navigate directly
  useEffect(() => {
    setSection(0);
  }, [setSection]);

  return (
    <div className="space-y-6">
      {section.questions.map((q) => (
        <SingleQuestion
          key={q.id}
          questionId={q.id}
          question={q.question}
          options={q.options}
        />
      ))}
    </div>
  );
}
