import { NextResponse } from "next/server";
import axiosInstance from "../axios";
import { FormData } from "@/components/study-plans/StudyForm";
import { isAxiosError } from "axios";

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json();
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    const response = await axiosInstance.post("study-plan/generate", data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Error generating study plan:", error.message);
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.message || "Failed to generate study plan";
      return NextResponse.json({ error: message }, { status });
    } else {
      console.error("Unexpected error generating study plan:", error);
      return NextResponse.json(
        { error: "Failed to generate study plan" },
        { status: 500 }
      );
    }
  }
}
