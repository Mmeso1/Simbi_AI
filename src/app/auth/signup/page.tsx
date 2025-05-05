"use client";

import Image from "next/image";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // basic check — replace with real logic
    if (form.password === form.confirmPassword) {
      router.push("/unboarding");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 to-orange-100">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl w-full max-w-5xl overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 bg-purple-100 flex flex-col items-center justify-center p-10 text-center">
          <Image
            src="/images/simbi-girl-sit.png"
            alt="Simbi Girl"
            width={150}
            height={150}
          />
          <h1 className="text-2xl md:text-3xl font-bold mt-4">
            Get started with <span className="text-purple-600">SIMBI</span>
          </h1>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 p-10">
          <h2 className="text-lg font-semibold mb-4">Enter your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="mr-2"
                />
                Remember Me
              </label>
              <a
                href="/Signin"
                className="text-sm text-purple-600 hover:underline"
              >
                Already Have an Account
              </a>
            </div>
            <Link href="/personalization">
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all"
              >
                Continue
              </button>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
