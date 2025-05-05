// app/components/TimeFetcher.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function TimeFetcher({
  onTimeParsed,
}: {
  onTimeParsed: (time: number) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const timeParam = parseInt(searchParams.get("time") || "0", 10);
    onTimeParsed(isNaN(timeParam) ? 0 : timeParam);
  }, [searchParams, onTimeParsed]);

  return null; // No UI needed
}
