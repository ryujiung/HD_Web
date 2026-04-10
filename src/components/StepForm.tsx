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

  /** 🔥 처음부터 다시 */
  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <div className="space-y-6">
      {/* STEP 0 : 메인 */}
      {step === 0 && (
        <div className="min-h-[60vh] flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-3xl font-bold">AI Personal Shopper</h1>
          <p className="text-gray-600">
            몇 가지 질문으로 당신에게 맞는 브랜드를 추천해드릴게요
          </p>
          <button
            onClick={() => setStep(1)}
            className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Started
          </button>
        </div>
      )}

      {/* STEP 1 : 성별 */}
      {step === 1 && <StepGender onSelect={v => next("gender", v)} />}

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
      className="w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-100"
    >
      ← 이전
    </button>
  );
}
