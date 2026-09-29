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

export default function StepBudget({
  onSelect,
  language,
}: {
  onSelect: (v?: string) => void;
  language: Language;
}) {
  const isKorean = language === "ko";

  return (
    <div className="py-3">
      {/* STEP */}
      <div className="flex items-center gap-3 mb-7">
        <span className="text-[11px] font-medium tracking-[0.18em] text-[#9A8662]">
          04
        </span>

        <span className="w-7 h-px bg-[#CFC9BF]" />

        <span className="text-[9px] tracking-[0.22em] text-[#AAA49B]">
          BUDGET
        </span>
      </div>

      {/* QUESTION */}
      <div className="mb-8">
        <h2 className="text-[27px] leading-[1.35] font-semibold tracking-[-0.035em]">
          {isKorean ? (
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

        <p className="text-[14px] leading-6 text-[#858078] mt-4">
          {isKorean
            ? "쇼핑을 위해 생각하고 있는 예산을 선택해주세요."
            : "Choose the budget range you have in mind."}
        </p>
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-3">
        {budgetOptions.map((budget) => (
          <OptionButton
            key={budget.value}
            label={isKorean ? budget.ko : budget.en}
            onClick={() => onSelect(budget.value)}
          />
        ))}

        <OptionButton
          label={isKorean ? "상관없음" : "No Preference"}
          onClick={() => onSelect(undefined)}
        />
      </div>
    </div>
  );
}