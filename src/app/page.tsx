"use client";

import StepForm from "@/components/StepForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] px-4 py-8 sm:p-8">
      <div className="max-w-md mx-auto bg-white border border-[#E8E6E1] rounded-2xl p-6 sm:p-8 shadow-sm">
        <StepForm />
      </div>
    </main>
  );
}