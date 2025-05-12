"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TwoLinePasswordInput } from "@/components/auth/TwoLineInput";
import FormInput from "@/components/auth/FormInput";
import { useRouter } from "next/navigation";
import { RegisterData } from "@/types/auth";
import useAuthStore from "@/store/authStore";

export default function SignupPage() {
  const router = useRouter();
  const { register, loading, error } = useAuthStore();

  const [form, setForm] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchError, setMatchError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // live password match update
    if (name === "password" && confirmPassword) {
      setMatchError(value !== confirmPassword ? "Passwords do not match" : "");
    }
  };

  const handleSubmit = async () => {
    if (form.password !== confirmPassword) {
      setMatchError("Passwords do not match");
      return;
    }
    setMatchError("");
    try {
      const response = await register(form, () => {
        // Temporarily comment out the rerouting for debugging
        router.push("/auth/signin");
        // console.log("Callback executed after registration.");
      });
      console.log("Registration response:", response);

      if (error) {
        console.log("Error:", error);
      }
    } catch (err) {
      console.error("An error occurred during registration:", err);
    }
  };

  return (
    <>
      {/* Left panel */}
      <div
        className="w-full md:w-1/2 bg-[#E4DFFF] flex flex-col items-center justify-center p-8 md:p-14 text-center gap-8 
                 h-[45vh] md:h-auto"
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

        {/* Error message box */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

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

          <FormInput
            name="username"
            type="user"
            placeholder="Your Username"
            value={form.username}
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
            value={confirmPassword}
            onChange={(e) => {
              const value = e.target.value;
              setConfirmPassword(value);
              setMatchError(
                value !== form.password ? "Passwords do not match" : ""
              );
            }}
          />
          {matchError && (
            <p className="text-red-500 text-sm mt-1">{matchError}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
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

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#7A5FFF] text-white py-3 rounded-lg transition-all hover:opacity-90 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {loading ? "Submitting..." : "Continue"}
        </button>
      </div>
    </>
  );
}
