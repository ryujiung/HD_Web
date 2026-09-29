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
    <div className="space-y-6 py-4">
      <div>
        <p className="text-xs tracking-[0.2em] text-[#9A8662] mb-3">
          04
        </p>

        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          {isKorean
            ? "예산을 선택해주세요"
            : "Select your budget"}
        </h2>

        <p className="text-sm text-[#8A8680] mt-2">
          {isKorean
            ? "쇼핑을 위해 생각하고 있는 예산을 선택해주세요."
            : "Choose the budget range you have in mind."}
        </p>
      </div>

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