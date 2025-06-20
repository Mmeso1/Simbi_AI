"use client";

import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useGetStudyPlanStore } from "@/store/getStudyPlanStore";
import { toast } from "react-hot-toast";

const today = new Date();
today.setHours(0, 0, 0, 0); // Normalize to start of day

const formSchema = z
  .object({
    name: z.string().min(1, "Plan name is required"),
    subjects: z.array(z.string()).min(1, "At least one subject is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    daysAvailable: z.array(z.string()).min(1, "Select at least one day"),
    milestoneType: z.string().min(1, "Milestone type is required"),
    dailyStudyDuration: z.string().min(1, "Daily study duration is required"),
    breakDuration: z.string().min(1, "Break duration is required"),
  })
  .refine(
    (data) => {
      const start = new Date(data.startDate);
      // const end = new Date(data.endDate);
      // console.log(end);
      return start >= today;
    },
    {
      message: "Start date cannot be in the past",
      path: ["startDate"],
    }
  )
  .refine(
    (data) => {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      return end > start;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

export type FormData = z.infer<typeof formSchema>;

type Day =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export default function StudyForm({
  handleToggleGenerateStudyPlan,
}: {
  handleToggleGenerateStudyPlan: () => void;
}) {
  const { fetchStudies } = useGetStudyPlanStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [subjectsInput, setSubjectsInput] = useState("");

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      daysAvailable: ["Monday", "Tuesday", "Wednesday"] as Day[],
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = methods;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No access token found. Please log in.");
      }

      console.log("Form data:", data);

      const response = await axios.post(
        "https://simbi-backend.onrender.com/api/v1/study-plan/generate",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        console.log("Successfully created data", { data });
        handleToggleGenerateStudyPlan();
        router.push("/study-plans");
        toast.success("Study plan generated successfully!");
        await fetchStudies();
      } else {
        throw new Error(
          response.data?.message || "Failed to generate study plan"
        );
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (axios.isAxiosError(error)) {
        if (error.response) {
          errorMessage =
            error.response.data?.message ||
            error.response.data?.error ||
            `Server error: ${error.response.status}`;
        } else if (error.request) {
          errorMessage = "Network error: Please check your internet connection";
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error("Error submitting study plan:", error);
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const daysAvailable = watch("daysAvailable") || [];
  // const subjects = watch("subjects") || [];

  const toggleDay = (day: Day) => {
    const newDays = daysAvailable.includes(day)
      ? daysAvailable.filter((d) => d !== day)
      : [...daysAvailable, day];

    if (newDays.length === 0) {
      return;
    }

    setValue("daysAvailable", newDays);
  };

  const handleSubjectsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setSubjectsInput(raw);
    const arr = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    setValue("subjects", arr, { shouldValidate: true });
  };

  return (
    <div className="w-full mx-auto p-6 bg-white z-100 shadow-2xl">
      <header className="flex border-b-[0.6px] border-grayborder justify-between h-[60px] pb-5 items-center">
        <div className="flex items-center gap-6">
          <Image
            src="/DashboardIcons/houseIcon.svg"
            alt="House Icon"
            width={20}
            height={18}
          />
          <div className="flex h-[43px] flex-col gap-2 justify-center">
            <h1 className="font-semibold text-lightblue text-[1.125rem]">
              Generate a Study Plan
            </h1>
            <p className="font-normal text-[0.875rem]">
              Let&apos;s generate your study plan
            </p>
          </div>
        </div>
        <span
          onClick={handleToggleGenerateStudyPlan}
          className="p-4 hover:bg-grayborder hover:rounded-full cursor-pointer"
        >
          <Image
            src="/DashboardIcons/cancelIcon.svg"
            alt="close Icon"
            width={12}
            height={12}
          />
        </span>
      </header>

      <div className="font-semibold bg-graybg px-6 text-center flex items-center justify-center rounded-[12px] h-[40px] my-7 text-xs lg:text-[1.125rem]  text-lightblue">
        <p>Plan Overview</p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="flex justify-between gap-6 md:flex-row flex-col">
              <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                <span className="font-normal text-[0.75rem] text-deepdarkgray">
                  Name of Study Plan
                </span>
                <input
                  type="text"
                  placeholder="Solve Mathematics"
                  className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                <span className="font-normal text-[0.75rem] text-deepdarkgray">
                  Topics of Focus
                </span>
                <input
                  type="text"
                  placeholder="Algebra, Geometry"
                  className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2"
                  onChange={handleSubjectsChange}
                  value={subjectsInput}
                />
                {errors.subjects && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.subjects.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-6 md:flex-row flex-col">
              <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                <span className="font-normal text-[0.75rem] text-deepdarkgray">
                  Start date - End date
                </span>
                <div className="flex justify-between">
                  <input
                    type="date"
                    min={today.toISOString().split("T")[0]}
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2"
                    {...register("startDate")}
                  />
                  <input
                    type="date"
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2"
                    {...register("endDate")}
                  />
                </div>
                {errors.startDate && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.startDate.message}
                  </p>
                )}
                {errors.endDate && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.endDate.message}
                  </p>
                )}
              </div>

              {/* days availbale here */}
              <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                <span className="font-normal text-[0.75rem] text-deepdarkgray">
                  Days available
                </span>
                <div className="flex justify-between items-center">
                  {(
                    [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ] as Day[]
                  ).map((day) => (
                    <label
                      key={day}
                      className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2 flex gap-1 items-center justify-center"
                    >
                      <input
                        type="checkbox"
                        checked={daysAvailable.includes(day)}
                        onChange={() => toggleDay(day)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      {day.slice(0, 3)}
                    </label>
                  ))}
                </div>
                {errors.daysAvailable && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.daysAvailable.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-6 md:flex-row flex-col">
              <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                <span className="font-normal text-[0.75rem] text-deepdarkgray">
                  Daily Study Duration
                </span>
                <select
                  {...register("dailyStudyDuration")}
                  className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2"
                >
                  <option value=""></option>
                  <option value="1m">1 min</option>
                  <option value="1h">1 hour</option>
                  <option value="2h">2 hours</option>
                  <option value="3h">3 hours</option>
                  <option value="5h">5 hours</option>
                  <option value="6h">6 hours</option>
                  <option value="7h">7 hours</option>
                  <option value="8h">8 hours</option>
                </select>
                {errors.dailyStudyDuration && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.dailyStudyDuration.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                <span className="font-normal text-[0.75rem] text-deepdarkgray">
                  Break Reference
                </span>
                <select
                  {...register("breakDuration")}
                  className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2"
                >
                  <option value=""></option>
                  <option value="5m">5 mins</option>
                  <option value="10m">10 mins</option>
                  <option value="15m">15 mins</option>
                </select>
                {errors.breakDuration && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.breakDuration.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-6 md:flex-row flex-col">
              <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                <span className="font-normal text-[0.75rem] text-deepdarkgray">
                  Milestone Type
                </span>
                <select
                  className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark py-2"
                  {...register("milestoneType")}
                >
                  <option value="">-- Select Milestone Type --</option>
                  <option value="Chapter Completion">Chapter Completion</option>
                  <option value="Study 3 days in a row">
                    Study 3 days in a row
                  </option>
                  <option value="Study 4 days in a row">
                    Study 4 days in a row
                  </option>
                  <option value="Study 5 days in a row">
                    Study 5 days in a row
                  </option>
                </select>
                {errors.milestoneType && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.milestoneType.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 md:flex-row flex-col-reverse">
            <div className="flex items-center justify-end md:justify-start w-full my-7 md:my-0 text-left md:w-1/2 gap-x-6">
              <Link href="/chat">
                <p className="font-semibold cursor-pointer text-lightblue">
                  Chat with Simbi
                </p>
              </Link>
              <span className="hover:bg-grayborder hover:rounded-full duration-500 hover:scale-105 cursor-pointer">
                <Link href="/chat">
                  <Image
                    src="/DashboardIcons/messageSimbiIcon.svg"
                    alt="message Envelope icon"
                    height={48.48}
                    width={61}
                    className="cursor-pointer"
                  />
                </Link>
              </span>
            </div>
            <div className="flex items-center md:w-1/2 w-full">
              <button
                disabled={isSubmitting}
                className="w-full bg-[#7A5FFF] text-white py-3 rounded-lg transition-all hover:opacity-90 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting && (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {isSubmitting ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
