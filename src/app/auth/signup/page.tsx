"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TwoLinePasswordInput } from "@/components/auth/TwoLineInput";
import FormInput from "@/components/auth/FormInput";

export default function SignupPage() {
  interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    remember: boolean;
  }

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  // handleChange, handleSubmit…
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      {/* Left panel */}
      <div
        className="w-full md:w-1/2 bg-[#E4DFFF] flex flex-col items-center justify-center p-8 md:p-14 text-center gap-8 
+                 h-[45vh] md:h-auto"
      >
        <h1 className="text-4xl md:text-5xl font-medium leading-[60px] tracking-[-3%]">
          Get started with{" "}
          <span className="text-[rgba(122,95,255,1)] font-bold">
            <br />
            SIMBI
          </span>
        </h1>
        <Image
          src="/images/simbi-girl-sit.svg"
          alt="Simbi sitting"
          className="w-48 h-48 md:w-[215px] md:h-[293px] object-contain"
          width={215}
          height={293}
        />
      </div>

      {/* Right panel */}
      <div className="md:w-1/2 flex flex-col justify-center p-10 space-y-6">
        <h2 className="text-xl text-[#1E1E2F] font-medium">
          Enter your Details
        </h2>

        <div className="space-y-5">
          <FormInput
            name="firstName"
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <FormInput
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TwoLinePasswordInput
            id="password"
            placeholderTitle="Password"
            mask="********"
            value={form.password}
            onChange={handleChange}
          />

          <TwoLinePasswordInput
            id="confirmPassword"
            placeholderTitle="Confirm Password"
            mask="********"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            checked={form.remember}
            onChange={handleChange}
            className="mr-2 cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-[#7A5FFF] text-sm cursor-pointer"
          >
            Remember Me
          </label>
        </div>

        <Link href="/auth/signin">
          <p className="block text-[#4976F4] text-sm hover:underline cursor-pointer ml-5">
            Already have an account?
          </p>
        </Link>

        <Link href="/personalization">
          <button
            // onClick={handleSubmit}
            className="w-full bg-[#7A5FFF] text-white py-3 rounded-lg transition-all hover:opacity-90 cursor-pointer"
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
}
