"use client";

import OptionButton from "./OptionButton";
import { Language } from "./StepForm";

export default function StepGender({
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
          01
        </p>

        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          {isKorean ? "성별을 선택해주세요" : "Select your gender"}
        </h2>

        <p className="text-sm text-[#8A8680] mt-2">
          {isKorean
            ? "더 정확한 브랜드 추천을 위해 선택해주세요."
            : "This helps us provide more personalized brand recommendations."}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <OptionButton
          label={isKorean ? "남성" : "Men"}
          onClick={() => onSelect("male")}
        />

        <OptionButton
          label={isKorean ? "여성" : "Women"}
          onClick={() => onSelect("female")}
        />

        <OptionButton
          label={isKorean ? "성별 무관" : "Any"}
          onClick={() => onSelect(undefined)}
        />

        <OptionButton
          label={isKorean ? "밝히지 않음" : "Prefer not to say"}
          onClick={() => onSelect(undefined)}
        />
      </div>
    </div>
  );
}