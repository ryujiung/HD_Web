"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import StepGender from "@/components/StepGender";
import StepAge from "@/components/StepAge";
import StepBudget from "@/components/StepBudget";
import StepInterest from "@/components/StepInterest";
import Result from "@/components/Result";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL에서 step 가져오기
  const step = Number(searchParams.get("step") || 1);

  const [answer, setAnswer] = useState({});

  // step 범위 보호
  useEffect(() => {
    if (step < 1) router.replace("/?step=1");
    if (step > 5) router.replace("/?step=5");
  }, [step, router]);

  // 다음 단계
  const next = (key, value) => {
    setAnswer(prev => ({ ...prev, [key]: value }));
    router.push(`/?step=${step + 1}`);
  };

  // 이전 단계 (페이지 버튼용)
  const prev = () => {
    router.push(`/?step=${step - 1}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-green-900">
      <div className="w-full max-w-md bg-green-800 rounded-xl shadow-md p-8 space-y-6">

        {step === 1 && <StepGender onSelect={v => next("gender", v)} />}

        {step === 2 && (
          <>
            <StepAge onSelect={v => next("age", v)} />
            <BackButton onClick={prev} />
          </>
        )}

        {step === 3 && (
          <>
            <StepBudget onSelect={v => next("budget", v)} />
            <BackButton onClick={prev} />
          </>
        )}

        {step === 4 && (
          <>
            <StepInterest onSelect={v => next("interest", v)} />
            <BackButton onClick={prev} />
          </>
        )}

        {step === 5 && <Result answer={answer} />}
      </div>
    </main>
  );
}

function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 text-black bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100 active:scale-95 transition"
    >
      ← 이전
    </button>
  );
}
