"use client";

import OptionButton from "./OptionButton";
import { Language } from "./StepForm";

const budgetOptions = [
  {
    value: "MID-LOW",
    ko: "50만원 이하",
    en: "Under ₩500K",
  },
  {
    value: "MID",
    ko: "50 ~ 100만원",
    en: "₩500K – ₩1M",
  },
  {
    value: "MID-HIGH",
    ko: "100 ~ 300만원",
    en: "₩1M – ₩3M",
  },
  {
    value: "HIGH",
    ko: "300만원 이상",
    en: "Over ₩3M",
  },
];

const watchOptions = [
  {
    value: "WATCH-LUXURY",
    ko: "럭셔리",
    en: "LUXURY",
  },
  {
    value: "WATCH-ENTRY-LUXURY",
    ko: "엔트리 럭셔리",
    en: "ENTRY LUXURY",
  },
  {
    value: "WATCH-MIDDLE",
    ko: "미들 레인지",
    en: "MIDDLE RANGE",
  },
];

export default function StepBudget({
  onSelect,
  language,
  category,
}: {
  onSelect: (v?: string) => void;
  language: Language;
  category?: string;
}) {
  const isKorean = language === "ko";
  const isWatch = category === "시계";

  const options = isWatch ? watchOptions : budgetOptions;

  return (
    <div className="py-3">

      {/* STEP */}
      <div className="flex items-center gap-3 mb-7">
        <span
          className="
            text-[11px]
            font-semibold
            tracking-[0.18em]
            text-[#4A675C]
          "
        >
          04
        </span>

        <span className="w-7 h-px bg-[#CBD5D0]" />

        <span
          className="
            text-[9px]
            tracking-[0.22em]
            text-[#969C98]
          "
        >
          {isWatch ? "WATCH SEGMENT" : "BUDGET"}
        </span>
      </div>

      {/* QUESTION */}
      <div className="mb-8">
        <h2
          className="
            text-[27px]
            leading-[1.35]
            font-semibold
            tracking-[-0.035em]
            text-[#1D211F]
          "
        >
          {isWatch ? (
            isKorean ? (
              <>
                어떤 등급의 시계를
                <br />
                찾고 계신가요?
              </>
            ) : (
              <>
                Which watch segment
                <br />
                are you looking for?
              </>
            )
          ) : isKorean ? (
            <>
              생각하고 계신
              <br />
              예산은 어느 정도인가요?
            </>
          ) : (
            <>
              What is your
              <br />
              budget?
            </>
          )}
        </h2>

        <p
          className="
            text-[14px]
            leading-6
            text-[#7D837F]
            mt-4
          "
        >
          {isWatch
            ? isKorean
              ? "찾고 계신 시계의 등급을 선택해주세요."
              : "Choose the watch segment you are looking for."
            : isKorean
            ? "쇼핑을 위해 생각하고 있는 예산을 선택해주세요."
            : "Choose the budget range you have in mind."}
        </p>
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            label={isKorean ? option.ko : option.en}
            onClick={() => onSelect(option.value)}
          />
        ))}

        <OptionButton
          label={isKorean ? "상관없음" : "No Preference"}
          onClick={() => onSelect(undefined)}
        />
      </div>

      {/* BOTTOM ACCENT */}
      <div className="mt-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#ECE9EA]" />

        <div className="w-[5px] h-[5px] rounded-full bg-[#F0E4ED]" />

        <div className="h-px flex-1 bg-[#ECE9EA]" />
      </div>
    </div>
  );
}