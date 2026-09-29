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
    <div className="space-y-6 text-[#1D211F]">

      {/* KR / EN */}
      <div className="flex justify-end pt-2">
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
              min-w-[42px]
              px-3 py-2
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
              min-w-[42px]
              px-3 py-2
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
        <div className="min-h-[60vh] flex flex-col justify-center">

          {/* SERVICE LABEL */}
          <div className="flex items-center gap-3 mb-7">
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
              text-[33px]
              sm:text-[35px]
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
              text-[14px]
              leading-7
              text-[#777D79]
              mt-6
            "
          >
            {isKorean ? (
              <>
                몇 가지 간단한 질문을 통해
                <br />
                고객님의 취향과 쇼핑 목적에 어울리는
                <br />
                2F 브랜드를 추천해드립니다.
              </>
            ) : (
              <>
                Answer a few simple questions
                <br />
                to discover the 2F brands that best match
                <br />
                your style and shopping preferences.
              </>
            )}
          </p>

          {/* LILAC INFO CARD */}
          <div
            className="
              mt-8
              px-5 py-4
              bg-[#F0E4ED]/60
              border border-[#EADDE6]
              rounded-2xl
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  flex items-center justify-center
                  w-8 h-8
                  rounded-full
                  bg-white/70
                "
              >
                <span className="w-[6px] h-[6px] rounded-full bg-[#4A675C]" />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    tracking-[0.18em]
                    text-[#4A675C]
                    font-semibold
                  "
                >
                  PERSONALIZED CURATION
                </p>

                <p className="text-[11px] text-[#777274] mt-1">
                  {isKorean
                    ? "취향 · 스타일 · 관심 카테고리를 기반으로 추천합니다."
                    : "Curated around your style, interests and preferences."}
                </p>
              </div>

            </div>
          </div>

          {/* START BUTTON */}
          <button
            type="button"
            onClick={() => setStep(1)}
            className="
              w-full
              mt-9
              py-[17px]
              bg-[#4A675C]
              text-white
              rounded-xl
              text-[13px]
              font-medium
              tracking-[0.04em]
              transition-all duration-200
              hover:bg-[#3F594F]
              active:scale-[0.99]
              shadow-[0_8px_24px_rgba(74,103,92,0.16)]
            "
          >
            {isKorean ? "시작하기 →" : "GET STARTED →"}
          </button>

          {/* BOTTOM TEXT */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <span className="w-5 h-px bg-[#D5D8D6]" />

            <p
              className="
                text-[8px]
                tracking-[0.22em]
                text-[#A0A5A2]
              "
            >
              2F · MODERN MOOD
            </p>

            <span className="w-5 h-px bg-[#D5D8D6]" />
          </div>
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

          <BackButton
            onClick={prev}
            language={language}
          />
        </>
      )}

      {/* STEP 3 : 스타일 */}
      {step === 3 && (
        <>
          <StepStyle
            onNext={(v) => next("styles", v)}
            language={language}
          />

          <BackButton
            onClick={prev}
            language={language}
          />
        </>
      )}

      {/* STEP 4 : 예산 / 워치 등급 */}
      {step === 4 && (
        <>
          <StepBudget
            onSelect={(v) => next("budget", v)}
            language={language}
            category={answers.category}
          />

          <BackButton
            onClick={prev}
            language={language}
          />
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
      type="button"
      onClick={onClick}
      className="
        w-full
        py-3
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