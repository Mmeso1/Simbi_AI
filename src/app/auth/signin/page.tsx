"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TwoLinePasswordInput } from "@/components/auth/TwoLineInput";
import FormInput from "@/components/auth/FormInput";

export default function SignIn() {
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
          src="/images/hero.svg"
          alt="Simbi sitting"
          className="w-48 h-48 md:w-[215px] md:h-[293px] object-contain"
          width={215}
          height={293}
        />
      </div>

      {/* Right panel */}
      <div className="md:w-1/2 flex flex-col justify-center p-10 space-y-6">
        <h2 className="text-xl text-[#501EE3] font-medium">Sign In</h2>

        <div className="space-y-5">
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

        <div className="flex justify-end">
          <p className="text-sm text-[#6B728066] cursor-pointer">
            Forgot Password?
          </p>
        </div>

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
