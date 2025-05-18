"use client";
import SessionTimerPage from "@/components/sessionTimer/SessionTimer";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading session timer...</p>}>
      <SessionTimerPage />
    </Suspense>
  );
}
