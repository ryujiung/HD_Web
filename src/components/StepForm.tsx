"use client";

import { useState } from "react";

import StepGender from "./StepGender";
import StepStyle from "./StepStyle";
import StepBudget from "./StepBudget";
import StepInterest from "./StepInterest";
import Result from "./Result";

export type Answers = {
  gender?: string;
  styles?: string[];
  category?: string;
  budget?: string;
};

export default function StepForm() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});

  const next = <K extends keyof Answers>(key: K, value: any) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const prev = () => {
    setStep(prev => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <div className="space-y-6 text-[#171717]">

      {/* STEP 0 : 메인 */}
      {step === 0 && (
        <div className="min-h-[65vh] flex flex-col justify-center">
          
          <p className="text-xs tracking-[0.25em] text-[#8B7653] font-medium mb-5">
            AI PERSONAL SHOPPER
          </p>

          <h1 className="text-[32px] leading-[1.25] font-semibold tracking-[-0.03em]">
            당신에게 어울리는
            <br />
            브랜드를 찾아보세요.
          </h1>

          <p className="text-[15px] leading-7 text-[#77736D] mt-6">
            간단한 질문에 답해주시면,
            <br />
            고객님의 취향에 가장 잘 어울리는
            <br />
            2F 브랜드를 추천해드립니다.
          </p>

          <button
            onClick={() => setStep(1)}
            className="
              w-full mt-10 py-4
              bg-[#1C1B19] text-white
              rounded-xl
              text-sm font-medium
              tracking-wide
              transition
              hover:bg-black
            "
          >
            시작하기 →
          </button>
        </div>
      )}

      {/* STEP 1 : 성별 */}
      {step === 1 && (
        <StepGender onSelect={v => next("gender", v)} />
      )}

      {/* STEP 2 : 스타일 */}
      {step === 3 && (
        <>
          <StepStyle onNext={v => next("styles", v)} />
          <BackButton onClick={prev} />
        </>
      )}

      {/* STEP 3 : 예산 */}
      {step === 4 && (
        <>
          <StepBudget onSelect={v => next("budget", v)} />
          <BackButton onClick={prev} />
        </>
      )}

      {/* STEP 4 : 카테고리 */}
      {step === 2 && (
        <>
          <StepInterest onSelect={v => next("category", v)} />
          <BackButton onClick={prev} />
        </>
      )}

      {/* STEP 5 : 결과 */}
      {step === 5 && (
        <Result answer={answers} onReset={reset} />
      )}
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full py-3
        text-sm text-[#77736D]
        border border-[#E5E2DC]
        rounded-xl
        transition
        hover:bg-[#F7F6F2]
      "
    >
      ← 이전
    </button>
  );
}