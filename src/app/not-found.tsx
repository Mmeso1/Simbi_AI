"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
      <Image
        src="/DashboardIcons/tele.svg"
        alt="Simbi with a confused face"
        width={160}
        height={160}
        className="w-40 h-40 mb-6"
      />

      <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-red-500">
        404: Ambition detected.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        But this page doesn’t exist (yet).
      </p>

      <Link
        href="/dashboard"
        className="inline-block px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-800 transition"
      >
        Back to reality
      </Link>
    </main>
  );
}
