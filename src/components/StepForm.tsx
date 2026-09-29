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
    <div className="space-y-4 text-[#1D211F]">

      {/* KR / EN */}
      <div className="flex justify-end pt-1">
        <div
          className="
            inline-flex items-center
            p-1
            bg-[#F2F1EF]
            rounded-full
            border border-[#E8E5E3]
          "
        >
          <button
            type="button"
            onClick={() => setLanguage("ko")}
            className={`
              min-w-[40px]
              px-3 py-[7px]
              rounded-full
              text-[10px]
              tracking-[0.12em]
              font-medium
              transition-all duration-200
              ${
                language === "ko"
                  ? "bg-[#4A675C] text-white shadow-sm"
                  : "text-[#8C918E] hover:text-[#4A675C]"
              }
            `}
          >
            KR
          </button>

          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`
              min-w-[40px]
              px-3 py-[7px]
              rounded-full
              text-[10px]
              tracking-[0.12em]
              font-medium
              transition-all duration-200
              ${
                language === "en"
                  ? "bg-[#4A675C] text-white shadow-sm"
                  : "text-[#8C918E] hover:text-[#4A675C]"
              }
            `}
          >
            EN
          </button>
        </div>
      </div>

      {/* STEP 0 : MAIN */}
      {step === 0 && (
        <div className="min-h-[52vh] flex flex-col justify-center">

          {/* SERVICE LABEL */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#4A675C]" />

            <p
              className="
                text-[9px]
                tracking-[0.28em]
                text-[#4A675C]
                font-semibold
              "
            >
              AI PERSONAL SHOPPER
            </p>
          </div>

          {/* TITLE */}
          <h1
            className="
              text-[31px]
              sm:text-[34px]
              leading-[1.25]
              font-semibold
              tracking-[-0.04em]
              text-[#1D211F]
            "
          >
            {isKorean ? (
              <>
                당신의 취향에 맞는
                <br />
                브랜드를 만나보세요.
              </>
            ) : (
              <>
                Discover the brands
                <br />
                that match your style.
              </>
            )}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-[13px]
              leading-6
              text-[#777D79]
              mt-5
            "
          >
            {isKorean ? (
              <>
                몇 가지 간단한 질문을 통해 고객님의 취향과
                <br />
                쇼핑 목적에 어울리는 2F 브랜드를 추천해드립니다.
              </>
            ) : (
              <>
                Answer a few simple questions to discover
                <br />
                the 2F brands that best match your preferences.
              </>
            )}
          </p>

          {/* START BUTTON */}
          <button
            type="button"
            onClick={() => setStep(1)}
            className="
              w-full
              mt-7
              py-[16px]
              bg-[#4A675C]
              text-white
              rounded-xl
              text-[13px]
              font-medium
              tracking-[0.04em]
              transition-all duration-200
              hover:bg-[#3F594F]
              active:scale-[0.99]
              shadow-[0_8px_24px_rgba(74,103,92,0.14)]
            "
          >
            {isKorean ? "시작하기 →" : "GET STARTED →"}
          </button>

          {/* BOTTOM */}
          <p
            className="
              text-center
              text-[8px]
              tracking-[0.22em]
              text-[#A0A5A2]
              mt-5
            "
          >
            2F · MODERN MOOD
          </p>
        </div>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <StepGender
          onSelect={(v) => next("gender", v)}
          language={language}
        />
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <StepInterest
            onSelect={(v) => next("category", v)}
            language={language}
          />

          <BackButton onClick={prev} language={language} />
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <StepStyle
            onNext={(v) => next("styles", v)}
            language={language}
          />

          <BackButton onClick={prev} language={language} />
        </>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <>
          <StepBudget
            onSelect={(v) => next("budget", v)}
            language={language}
            category={answers.category}
          />

          <BackButton onClick={prev} language={language} />
        </>
      )}

      {/* STEP 5 */}
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
      type="button"
      onClick={onClick}
      className="
        w-full
        py-[11px]
        text-[12px]
        text-[#7D837F]
        border border-[#E2E5E3]
        rounded-xl
        tracking-[0.02em]
        transition-all duration-200
        hover:bg-[#F3F6F4]
        hover:border-[#CBD5D0]
        hover:text-[#4A675C]
      "
    >
      {language === "ko" ? "← 이전" : "← BACK"}
    </button>
  );
}