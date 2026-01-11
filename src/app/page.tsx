"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import StepGender from "@/components/StepGender";
import StepAge from "@/components/StepAge";
import StepBudget from "@/components/StepBudget";
import StepInterest from "@/components/StepInterest";
import Result from "@/components/Result";

/** --------------------
 * 답변 타입 정의
 * ------------------- */
type Answer = {
  gender?: string;
  age?: string; // ✅ string만
  budget?: string;
  interest?: string;
};

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  /** 🔥 새로고침 시 항상 1단계로 */
  useEffect(() => {
    router.replace("/?step=1");
  }, [router]);

  /** URL에서 step 읽기 */
  const step = Number(searchParams.get("step") || 1);

  /** 답변 상태 */
  const [answer, setAnswer] = useState<Answer>({});

  /** step 범위 보호 */
  useEffect(() => {
    if (step < 1) router.replace("/?step=1");
    if (step > 5) router.replace("/?step=5");
  }, [step, router]);

  /** 다음 단계 */
  const next = <K extends keyof Answer>(
    key: K,
    value: Answer[K]
  ) => {
    setAnswer(prev => ({
      ...prev,
      [key]: value,
    }));
    router.push(`/?step=${step + 1}`);
  };

  /** 이전 단계 (페이지 내부 버튼용) */
  const prev = () => {
    router.push(`/?step=${step - 1}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-green-900">
      <div className="w-full max-w-md bg-green-800 rounded-xl shadow-md p-8 space-y-6">

        {step === 1 && (
          <StepGender onSelect={v => next("gender", v)} />
        )}

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

        {step === 5 && (
          <Result answer={answer} />
        )}

      </div>
    </main>
  );
}

/** --------------------
 * 이전 버튼 컴포넌트
 * ------------------- */
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full py-2
        text-black bg-white
        rounded-xl
        border border-gray-200
        shadow-sm
        hover:bg-gray-100
        active:scale-95
        transition
      "
    >
      ← 이전
    </button>
  );
}
