"use client";

import UploadBox from "@/components/upload/UploadBox";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pt-20 text-center">

        <p className="mb-4 text-sm font-semibold tracking-wide text-purple-600">
          TRUSTED BY JOB BOARDS, ATS & RECRUITERS
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          The Most{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Advanced
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Accurate
          </span>{" "}
          AI Resume Parser
        </h1>

        <p className="mt-6 text-gray-600">
          Steps to use our resume parsing software
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Upload Resumes",
            "Extract Resume Data",
            "Download or Sync with ATS",
          ].map((step) => (
            <span key={step} className="rounded-full border px-4 py-2">
              {step}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <UploadBox />
        </div>
      </div>
    </section>
  );
}
