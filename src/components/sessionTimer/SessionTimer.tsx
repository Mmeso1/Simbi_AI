import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "@/api/axios";
import { useGetStudyPlanStore } from "@/store/getStudyPlanStore";
import { getStudySessions } from "@/api/studySession";
import { balooThambi2 } from "@/lib/fonts";
import { SessionData } from "@/types/studySession";
import { Milestone } from "@/types/studyPlan";

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const HH = String(hours).padStart(2, "0");
  const MM = String(minutes).padStart(2, "0");
  const SS = String(seconds).padStart(2, "0");

  return `${HH}:${MM}:${SS}`;
}

export default function SessionTimerPage() {
  const router = useRouter();
  const { studyId } = useParams();
  const { studies, fetchStudies } = useGetStudyPlanStore();

  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [upcomingSessions, setUpcomingSessions] = useState<SessionData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [currentSessionDate, setCurrentSessionDate] = useState<string | null>(
    null
  );
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  // load study sessions
  useEffect(() => {
    fetchStudies();
    async function load() {
      try {
        setLoading(true);
        const data = await getStudySessions(studyId as string);
        setSessions(data);
        // find today's session or first
        const todayStr = new Date().toISOString().split("T")[0];

        // compute end of week (7 days from today)
        const weekEnd = new Date();
        weekEnd.setDate(weekEnd.getDate() + 7);
        const weekEndStr = weekEnd.toISOString().split("T")[0];

        // filter sessions in upcoming week
        const upcomingWeek = data.filter(
          (s) => s.date > todayStr && s.date <= weekEndStr
        );
        setUpcomingSessions(upcomingWeek);

        // find today's session
        const todayIdx = data.findIndex((s) => s.date === todayStr);
        if (todayIdx >= 0) {
          setCurrentIndex(todayIdx);
          setCurrentSessionDate(todayStr);

          // try to restore saved state
          const saved = JSON.parse(localStorage.getItem("timerState") || "{}");
          if (saved.date === todayStr && typeof saved.timeLeft === "number") {
            setTimeLeft(saved.timeLeft);
            setIsRunning(false);
          } else {
            setTimeLeft(data[todayIdx].duration);
          }
        }

        // load milestones
        const study = studies.find((s) => s.id === studyId);
        if (study) {
          setMilestones(study.planData.milestones);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load sessions");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [studyId, fetchStudies]);

  // Persist timer whenever the user closes or refreshes
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(
        "timerState",
        JSON.stringify({
          date: currentSessionDate,
          timeLeft,
        })
      );
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentSessionDate, timeLeft]);

  const handleComplete = useCallback(async () => {
    setIsRunning(false);
    toast.success("Session complete!");
    console.log("study id from handle complete", studyId);
    try {
      const response = await axios.post(`/study-plan/complete-session`, {
        planId: studyId,
        sessionId: sessions[currentIndex].id,
        timeSpent: sessions[currentIndex].duration,
      });
      console.log(response.data);
      toast.success(response.data.message);

      // Mark the next incomplete milestone as completed in local state
      setMilestones((prev) => {
        const idx = prev.findIndex((m) => !m.completed);
        if (idx !== -1) prev[idx].completed = true;
        return [...prev];
      });

      await fetchStudies();
      router.push("/study-plans");
    } catch (err) {
      console.error(err);
      toast.error("Failed to complete session");
    }
  }, [studyId, fetchStudies, sessions, currentIndex]);

  // countdown effect
  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) {
      handleComplete();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, handleComplete]);

  const handleStart = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  // get study plan for tips
  const study = studies.find((s) => s.id === studyId);
  if (!study)
    return (
      <section className="w-full text-center py-20">
        <p>No study plan found.</p>
      </section>
    );

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
      </div>
    );

  const todayStr = new Date().toISOString().split("T")[0];
  const hasTodaySession = currentSessionDate === todayStr;

  return (
    <section className="w-[90%] mx-auto">
      <header className="h-[120px] flex items-center justify-between">
        <aside className="flex w-[148.96px] gap-[4.96px] items-center justify-center cursor-pointer hover:scale-110">
          <Image
            src="/DashboardIcons/mini-logo.svg"
            alt="an Image of simbi"
            width={50}
            height={41}
          />
          <h3
            className={`${balooThambi2.className} text-lightblue  font-bold text-[2rem] `}
          >
            SIMBI
          </h3>
        </aside>
        <aside
          onClick={() => router.push("/study-plans")}
          className="p-4 hover:bg-grayborder hover:rounded-full cursor-pointer"
        >
          <Image
            src="/DashboardIcons/cancelIcon.svg"
            alt="close Icon"
            width={20}
            height={20}
          />
        </aside>
      </header>

      <main>
        <div className="w-full p-[30px] shadow-md rounded-[16px] bg-bgwhite mb-16">
          <div className="flex justify-between">
            <p className="font-semibold text-[1.25rem]">Study Timer</p>
            {!isRunning ? (
              <>
                <button
                  onClick={handleStart}
                  disabled={!hasTodaySession}
                  className={`rounded-[8px] py-[10px] px-[20px] text-white ${
                    hasTodaySession
                      ? "bg-lightblue hover:bg-blue-900"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Start
                </button>

                {/* {timeLeft <= 0 && currentSessionDate === todayStr && (
                  <button
                    onClick={() => {
                      // reset to today’s full duration
                      setTimeLeft(sessions[currentIndex].duration);
                      setIsRunning(false);
                    }}
                    className="ml-4 text-sm text-lightblue underline"
                  >
                    Reset Timer
                  </button>
                )} */}
              </>
            ) : (
              <button
                onClick={handlePause}
                className="rounded-[8px] hover:bg-blue-900 py-[10px] bg-gray-500 px-[20px] text-white"
              >
                Pause
              </button>
            )}
          </div>
          <div className="flex flex-col items-center justify-center font-medium text-[4rem] text-black gap-[10px]">
            <div className="flex gap-[10px]">
              <span>{formatTime(timeLeft)}</span>
            </div>
            {!hasTodaySession ? (
              <p className="text-sm text-gray-600 mt-2">No session today</p>
            ) : (
              <p className="text-sm text-gray-600 mt-2">
                {sessions[currentIndex]?.topic}
              </p>
            )}
          </div>

          {/* Simbi's current State */}
          <div className="mt-10">
            {/* <p className="font-semibold text-center lg:text-left text-[1.25rem]">
              Simbi&apos;s Current State
            </p> */}

            <div className="my-7  flex justify-between items-center flex-wrap w-full lg:w-[80%] mx-auto">
              <div className="shadow-md cursor-pointer group flex flex-col items-center  gap-[10px] hover:shadow-md duration-1000 rounded-[8px] ease-in-out hover:shadow-lightblue w-[30%] hover:scale-105">
                <Image
                  src="/DashboardIcons/simbiFocusedState.png"
                  alt="Focused simbi"
                  height={100}
                  width={142}
                />
                <div className="mt-3 text-center py-2">
                  <p className="font-semibold text-deepdarkgray group-hover:text-dark">
                    Focused
                  </p>
                  <p className="font-normal text-dark text-[0.75rem]">
                    Currently active
                  </p>
                </div>
              </div>

              <div className="shadow-md cursor-pointer group flex flex-col items-center  gap-[10px] hover:shadow-md duration-1000 rounded-[8px] ease-in-out hover:shadow-lightblue w-[30%] hover:scale-105">
                <Image
                  src="/DashboardIcons/simbiTiredState.svg"
                  alt="Focused simbi"
                  height={100}
                  width={142}
                />
                <div className="mt-3 text-center py-2">
                  <p className="font-semibold text-deepdarkgray group-hover:text-dark">
                    Tired
                  </p>
                  <p className="font-normal text-dark text-[0.75rem]">
                    Take a break
                  </p>
                </div>
              </div>

              <div className="shadow-md cursor-pointer group flex flex-col items-center  gap-[10px] hover:shadow-md duration-1000 rounded-[8px] ease-in-out hover:shadow-lightblue w-[30%] hover:scale-105">
                <Image
                  src="/DashboardIcons/simbiDistractedState.svg"
                  alt="Focused simbi"
                  height={100}
                  width={142}
                />
                <div className="mt-3 text-center py-2">
                  <p className="font-semibold text-deepdarkgray group-hover:text-dark">
                    Distracted
                  </p>
                  <p className="font-normal text-dark text-[0.75rem]">
                    Refocus needed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Session Cards */}
        <div className="grid grid-cols-1 md:flex md:flex-col gap-4 mb-12">
          <h3 className="font-semibold text-[1.25rem]">Upcoming</h3>
          {upcomingSessions.map((sess) => (
            <div
              key={sess.id}
              className="bg-white flex justify-between opacity-60"
            >
              <div className="flex flex-col ">
                <h5 className="font-semibold text-base mb-2">{sess.topic}</h5>
                <p>{sess.notes}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">{sess.date}</p>
                <p className="text-sm text-gray-600">
                  Duration: {sess.duration} min
                </p>
              </div>
            </div>
          ))}
          {upcomingSessions.length === 0 && (
            <div className="bg-white flex justify-between">
              <h5 className="font-normal text-base mb-2">
                No upcoming sessions
              </h5>
            </div>
          )}
        </div>

        <section className="pb-20">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[1.25rem]">Milestone Tracking</h3>
            <button
              onClick={() => router.push("/milestone")}
              className="bg-lightblue hover:bg-blue-900 rounded-[8px] py-[10px] px-[15px] text-white"
            >
              View Milestones
            </button>
          </div>
        </section>

        <section className="-mt-10 pb-10">
          {milestones.map((m) => (
            <div
              key={m.description}
              className="flex justify-between items-center mb-4 gap-5"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={m.completed}
                  disabled
                  className="mr-2"
                />
                <p className="ml-3">{m.description}</p>
              </div>
              <p className="text-gray-500">
                {m.completed ? "Completed" : "In progress"}
              </p>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
}
