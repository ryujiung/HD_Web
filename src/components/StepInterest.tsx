"use client";

import OptionButton from "./OptionButton";
import { Language } from "./StepForm";

const categoryOptions = [
  { value: "의류", ko: "의류", en: "Clothing" },
  { value: "가방", ko: "가방", en: "Bags" },
  { value: "신발", ko: "신발", en: "Shoes" },
  {
    value: "악세사리(주얼리,모자,선글라스)",
    ko: "액세서리",
    en: "Accessories",
  },
  { value: "시계", ko: "시계", en: "Watches" },
  { value: "라이프스타일", ko: "라이프스타일", en: "Lifestyle" },
];

export default function StepInterest({
  onSelect,
  language,
}: {
  onSelect: (v?: string) => void;
  language: Language;
}) {
  const isKorean = language === "ko";

  return (
    <div className="py-2">
      {/* STEP */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#4A675C]">
          02
        </span>

        <span className="w-7 h-px bg-[#CBD5D0]" />

        <span className="text-[9px] tracking-[0.22em] text-[#969C98]">
          CATEGORY
        </span>
      </div>

      {/* QUESTION */}
      <div className="mb-6">
        <h2 className="text-[27px] leading-[1.35] font-semibold tracking-[-0.035em] text-[#1D211F]">
          {isKorean ? (
            <>
              무엇을
              <br />
              찾고 계신가요?
            </>
          ) : (
            <>
              What are you
              <br />
              looking for?
            </>
          )}
        </h2>

        <p className="text-[13px] leading-6 text-[#7D837F] mt-3">
          {isKorean
            ? "가장 관심 있는 상품군을 선택해주세요."
            : "Select the category you're most interested in."}
        </p>
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-3">
        {categoryOptions.map((category) => (
          <OptionButton
            key={category.value}
            label={isKorean ? category.ko : category.en}
            onClick={() => onSelect(category.value)}
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