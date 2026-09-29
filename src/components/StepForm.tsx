"use client";

import { useState } from "react";

import StepGender from "./StepGender";
import StepStyle from "./StepStyle";
import StepBudget from "./StepBudget";
import StepInterest from "./StepInterest";
import Result from "./Result";

export type Language = "ko" | "en";

export type Answers = {
  gender?: string;
  styles?: string[];
  category?: string;
  budget?: string;
};

export default function StepForm() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [language, setLanguage] = useState<Language>("ko");

  const next = <K extends keyof Answers>(key: K, value: any) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const prev = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const isKorean = language === "ko";

  return (
    <div className="space-y-6 text-[#171717]">
      {/* 언어 선택 */}
      <div className="flex justify-end">
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setLanguage("ko")}
            className={
              language === "ko"
                ? "font-semibold text-[#1C1B19]"
                : "text-[#AAA59D]"
            }
          >
            KR
          </button>

          <span className="text-[#D8D4CD]">|</span>

          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={
              language === "en"
                ? "font-semibold text-[#1C1B19]"
                : "text-[#AAA59D]"
            }
          >
            EN
          </button>
        </div>
      </div>

      {/* STEP 0 : 메인 */}
      {step === 0 && (
        <div className="min-h-[60vh] flex flex-col justify-center">
          <p className="text-xs tracking-[0.25em] text-[#8B7653] font-medium mb-5">
            AI PERSONAL SHOPPER
          </p>

          <h1 className="text-[32px] leading-[1.25] font-semibold tracking-[-0.03em]">
            {isKorean ? (
              <>
                당신에게 어울리는
                <br />
                브랜드를 찾아보세요.
              </>
            ) : (
              <>
                Discover the brands
                <br />
                that suit you.
              </>
            )}
          </h1>

          <p className="text-[15px] leading-7 text-[#77736D] mt-6">
            {isKorean ? (
              <>
                간단한 질문에 답해주시면,
                <br />
                고객님의 취향에 가장 잘 어울리는
                <br />
                2F 브랜드를 추천해드립니다.
              </>
            ) : (
              <>
                Answer a few simple questions
                <br />
                and discover the 2F brands
                <br />
                that best match your style.
              </>
            )}
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
            {isKorean ? "시작하기 →" : "Get Started →"}
          </button>
        </div>
      )}

      {/* STEP 1 : 성별 */}
      {step === 1 && (
        <StepGender
          onSelect={(v) => next("gender", v)}
          language={language}
        />
      )}

      {/* STEP 2 : 카테고리 */}
      {step === 2 && (
        <>
          <StepInterest
            onSelect={(v) => next("category", v)}
            language={language}
          />

          <BackButton onClick={prev} language={language} />
        </>
      )}

      {/* STEP 3 : 스타일 */}
      {step === 3 && (
        <>
          <StepStyle
            onNext={(v) => next("styles", v)}
            language={language}
          />

          <BackButton onClick={prev} language={language} />
        </>
      )}

      {/* STEP 4 : 예산 */}
      {step === 4 && (
        <>
          <StepBudget
            onSelect={(v) => next("budget", v)}
            language={language}
          />

          <BackButton onClick={prev} language={language} />
        </>
      )}

      {/* STEP 5 : 결과 */}
      {step === 5 && (
        <Result
          answer={answers}
          onReset={reset}
          language={language}
        />
      )}
    </div>
  );
}

function BackButton({
  onClick,
  language,
}: {
  onClick: () => void;
  language: Language;
}) {
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
      {language === "ko" ? "← 이전" : "← Back"}
    </button>
  );
}