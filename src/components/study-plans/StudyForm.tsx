"use client";

import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const step1Schema = z.object({
  planName: z.string().min(1, "Plan name is required"),
  studySubjects: z.string().min(1, "Study subject is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  studyGoalType: z.string().min(1, "Study goal type is required"),
  dailyStudyTime: z.string().min(1, "Daily study time is required"),
  daysAvailable: z.array(z.string()).min(1, "Select at least one day"),
  priorityTag: z.string().min(1, "Priority tag is required"),
  difficultyLevel: z.string().min(1, "Difficulty level is required"),
  studyLevel: z.string().min(1, "Study level is required"),
  addToSchedule: z.string().min(1, "This field is required"),
});

const step2Schema = z.object({
  preferredStudyMethod: z.string().min(1, "Preferred study method is required"),
  learningStyle: z.string().min(1, "Learning style is required"),
  dailyStudyDuration: z.string().min(1, "Daily study duration is required"),
  breakReference: z.string().min(1, "Break reference is required"),
  studyTips: z.string().min(1, "This field is required"),
  preferredTone: z.string().min(1, "Preferred tone is required"),
});

const step3Schema = z.object({
  milestoneType: z.string().min(1, "Milestone type is required"),
  motivationPreference: z.string().min(1, "Motivation preference is required"),
  checkInStyle: z.string().min(1, "Check-in style is required"),
  telegramReminder: z.string().min(1, "This field is required"),
  rewardStyle: z.string().min(1, "Reward style is required"),
  rewardFrequency: z.string().min(1, "Reward frequency is required"),
});

const formSchema = step1Schema.merge(step2Schema).merge(step3Schema);

type FormData = z.infer<typeof formSchema>;

type Day = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

const steps = [
  {
    id: 1,
    name: "Plan Overview",
    fields: [
      "planName",
      "studySubjects",
      "startDate",
      "endDate",
      "studyGoalType",
      "dailyStudyTime",
      "daysAvailable",
      "priorityTag",
      "difficultyLevel",
      "studyLevel",
      "addToSchedule",
    ],
  },
  {
    id: 2,
    name: "Study Preferences",
    fields: [
      "preferredStudyMethod",
      "learningStyle",
      "dailyStudyDuration",
      "breakReference",
      "studyTips",
      "preferredTone",
    ],
  },
  {
    id: 3,
    name: "Milestone",
    fields: [
      "milestoneType",
      "motivationPreference",
      "checkInStyle",
      "telegramReminder",
      "rewardStyle",
      "rewardFrequency",
    ],
  },
];

export default function StudyForm({
  handleToggleGenerateStudyPlan,
}: {
  handleToggleGenerateStudyPlan: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      daysAvailable: ["Mon", "Tue", "Wed"] as Day[],
      telegramReminder: "Yes",
      addToSchedule: "Yes",
    },
  });

  const {
    handleSubmit,
    trigger,
    register,
    formState: { errors },
    watch,
    setValue,
  } = methods;

  const nextStep = async () => {
    const fields: (keyof FormData)[] = steps[currentStep - 1]
      .fields as (keyof FormData)[];
    const isValid = await trigger(fields);
    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Api goes here
    router.push("/study-plans");
  };

  const daysAvailable = watch("daysAvailable") || [];

  const toggleDay = (day: Day) => {
    const newDays = daysAvailable.includes(day)
      ? daysAvailable.filter((d) => d !== day)
      : [...daysAvailable, day];

    // Ensure at least one day is selected
    if (newDays.length === 0) {
      return;
    }

    setValue("daysAvailable", newDays);
  };

  return (
    <div className=" w-full  mx-auto p-6 bg-white z-100 shadow-2xl">
      {/* Header */}
      <header className="flex border-b-[0.6px] border-grayborder justify-between h-[100px] items-center">
        <div className="flex items-center gap-6 ">
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
              Lets&apos;s generate your study plan
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

      {/* Progress bar */}
      <div className="flex justify-between items-center sticky top-10 bg-graybg px-6 rounded-[12px] h-[60px] my-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center justify-center h-full "
          >
            <span
              className={`my-2 lg:px-16 px-4 py-2 text-sm ${
                currentStep === step.id
                  ? "font-semibold rounded-[12px] text-lightblue bg-lightbluebg text-xs lg:text-[1.125rem]"
                  : "text-deepdarkgray font-normal text-xs lg:text-[1.125rem]"
              }`}
            >
              {step.name}
            </span>
          </div>
        ))}
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-[1.125rem] text-dark border-b-2 border-dashed pb-2 border-grayborder font-semibold">
                Study Plan Overview
              </h2>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Name of Study Plan
                  </span>
                  <input
                    type="text"
                    placeholder="Reading Economics"
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("planName")}
                  />
                  {errors.planName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.planName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Select Study Subjects
                  </span>
                  <input
                    type="text"
                    placeholder="Economics"
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("studySubjects")}
                  />
                  {errors.studySubjects && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.studySubjects.message}
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
                      className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                      {...register("startDate")}
                    />
                    <input
                      type="date"
                      className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
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
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Study goal type
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("studyGoalType")}
                  >
                    <option value="">-- Select goal type -- </option>
                    <option value="Pass final exams">Pass final exams</option>
                    <option value="Prepare for exams">Prepare for exams</option>
                    <option value="Read for pleasure">Read for pleasure</option>
                  </select>
                  {errors.studyGoalType && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.studyGoalType.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Daily Study Time
                  </span>
                  <input
                    type="time"
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("dailyStudyTime")}
                  />
                  {errors.dailyStudyTime && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.dailyStudyTime.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Days available
                  </span>
                  <div className="flex justify-between items-center">
                    {(
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as Day[]
                    ).map((day) => (
                      <label
                        key={day}
                        className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2 flex gap-1 items-center justify-center"
                      >
                        <input
                          type="checkbox"
                          checked={daysAvailable.includes(day)}
                          onChange={() => toggleDay(day)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        {day}
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

              <h2 className="text-[1.125rem] text-dark border-b-2 border-dashed pb-2 border-grayborder font-semibold">
                General
              </h2>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Priority tag
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("priorityTag")}
                  >
                    <option value="">-- Select Priority tag -- </option>
                    <option value="Very Urgent">Very Urgent</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Relaxed">Relaxed</option>
                  </select>
                  {errors.priorityTag && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.priorityTag.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Difficulty level
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("difficultyLevel")}
                  >
                    <option value="">-- Select Difficulty level -- </option>
                    <option value="Hard">Hard</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Easy">Easy</option>
                  </select>
                  {errors.difficultyLevel && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.difficultyLevel.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Study Level
                  </span>
                  <input
                    type="text"
                    placeholder="University - 200 lvl"
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("studyLevel")}
                  />
                  {errors.studyLevel && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.studyLevel.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Add Plan to Schedule
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("addToSchedule")}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.addToSchedule && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.addToSchedule.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-[1.125rem] text-dark border-b-2 border-dashed pb-2 border-grayborder font-semibold">
                Study Preferences
              </h2>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Preferred Study Session Method
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("preferredStudyMethod")}
                  >
                    <option value="">
                      -- Select Preferred Study Method --{" "}
                    </option>
                    <option value="Pomodoro/quizzes">Pomodoro/quizzes</option>
                    <option value="Pomodoro">Pomodoro</option>
                    <option value="Quizzes">Quizzes</option>
                  </select>
                  {errors.preferredStudyMethod && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.preferredStudyMethod.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Learning Style
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("learningStyle")}
                  >
                    <option value="">
                      -- Select Preferred Learning Style --
                    </option>
                    <option value="Reading and writing">
                      Reading & writing
                    </option>
                    <option value="Reading">Reading only</option>
                    <option value="Video">Video</option>
                  </select>
                  {errors.learningStyle && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.learningStyle.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Daily Study Duration (in hours)
                  </span>
                  <input
                    type="number"
                    placeholder="1"
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("dailyStudyDuration")}
                  />
                  {errors.dailyStudyDuration && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.dailyStudyDuration.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Break reference (in minutes)
                  </span>
                  <input
                    type="number"
                    placeholder="15"
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("breakReference")}
                  />
                  {errors.breakReference && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.breakReference.message}
                    </p>
                  )}
                </div>
              </div>

              <h2 className="text-[1.125rem] text-dark border-b-2 border-dashed pb-2 border-grayborder font-semibold">
                General
              </h2>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Simbi Study Tips
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("studyTips")}
                  >
                    <option value="">
                      -- Do you want Simbi Study Tips --{" "}
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.studyTips && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.studyTips.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Simbi Preferred Tone
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("preferredTone")}
                  >
                    <option value="">-- Select Simbi Preferred Tone --</option>
                    <option value="Tough love (sass Simbi)">
                      Tough love (sass Simbi)
                    </option>
                  </select>
                  {errors.preferredTone && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.preferredTone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-[1.125rem] text-dark border-b-2 border-dashed pb-2 border-grayborder font-semibold">
                Milestone
              </h2>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Milestone Type
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("milestoneType")}
                  >
                    <option value="">-- Select Milestone Type -- </option>
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
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Motivation Preference
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("motivationPreference")}
                  >
                    <option value="">-- Select Motivation Preference --</option>
                    <option value="Steady hustle">Steady hustle</option>
                  </select>
                  {errors.motivationPreference && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.motivationPreference.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Check-in-Style
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("checkInStyle")}
                  >
                    <option value="">-- -- </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  {errors.checkInStyle && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.checkInStyle.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Telegram reminder
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("telegramReminder")}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.telegramReminder && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.telegramReminder.message}
                    </p>
                  )}
                </div>
              </div>

              <h2 className="text-[1.125rem] text-dark border-b-2 border-dashed pb-2 border-grayborder font-semibold">
                General
              </h2>

              <div className="flex justify-between gap-6 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Reward Style
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("rewardStyle")}
                  >
                    <option value="">-- --</option>
                    <option value="Collecting tokens to trade later">
                      Collecting tokens to trade later
                    </option>
                  </select>
                  {errors.rewardStyle && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.rewardStyle.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full py-[8px] px-[10px] border-bluebg border-[1px] rounded-[8px]">
                  <span className="font-normal text-[0.75rem] text-deepdarkgray">
                    Reward Frequency
                  </span>
                  <select
                    className="font-medium text-[0.875rem] placeholder:text-[0.875rem] border-0 outline-0 text-dark  py-2"
                    {...register("rewardFrequency")}
                  >
                    <option value="">-- --</option>
                    <option value="After Key milestones">
                      After Key milestones
                    </option>
                  </select>
                  {errors.rewardFrequency && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.rewardFrequency.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-6 md:flex-row flex-col-reverse">
            <div className="flex items-center justify-end md:justify-start   w-full  my-7 md:my-0 text-left  md:w-1/2 gap-x-6 ">
              <Link href="/chat">
                <p className="font-semibold cursor-pointer text-lightblue">
                  Chat with Simbi
                </p>
              </Link>
              <span className=" hover:bg-grayborder hover:rounded-full duration-500 hover:scale-105 cursor-pointer">
                <Link href="/chat">
                  {" "}
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
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 font-medium py-2 bg-white text-lightblue hover:border-0 border-[1px] hover:text-white rounded-md hover:bg-blue-900"
                >
                  Previous
                </button>
              )}
              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-14 py-3 bg-lightblue text-white rounded-md hover:bg-blue-900 ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-lightblue text-white rounded-md hover:bg-blue-900 ml-auto"
                >
                  Generate Study Plan
                </button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
