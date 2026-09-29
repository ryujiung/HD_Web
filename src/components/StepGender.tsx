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
    <div className="py-3">
      {/* STEP */}
      <div className="flex items-center gap-3 mb-7">
        <span className="text-[11px] font-medium tracking-[0.18em] text-[#9A8662]">
          01
        </span>

        <span className="w-7 h-px bg-[#CFC9BF]" />

        <span className="text-[9px] tracking-[0.22em] text-[#AAA49B]">
          GENDER
        </span>
      </div>

      {/* QUESTION */}
      <div className="mb-8">
        <h2 className="text-[27px] leading-[1.35] font-semibold tracking-[-0.035em]">
          {isKorean ? (
            <>
              성별을
              <br />
              선택해주세요.
            </>
          ) : (
            <>
              Select your
              <br />
              gender.
            </>
          )}
        </h2>

        <p className="text-[14px] leading-6 text-[#858078] mt-4">
          {isKorean
            ? "더 정확한 브랜드 추천을 위해 선택해주세요."
            : "This helps us personalize your brand recommendations."}
        </p>
      </div>

      {/* OPTIONS */}
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