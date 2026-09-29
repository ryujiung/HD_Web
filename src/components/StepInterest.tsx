"use client";

import OptionButton from "./OptionButton";
import { Language } from "./StepForm";

const categoryOptions = [
  {
    value: "의류",
    ko: "의류",
    en: "Clothing",
  },
  {
    value: "가방",
    ko: "가방",
    en: "Bags",
  },
  {
    value: "신발",
    ko: "신발",
    en: "Shoes",
  },
  {
    value: "악세사리(주얼리,모자,선글라스)",
    ko: "액세서리",
    en: "Accessories",
  },
  {
    value: "시계",
    ko: "시계",
    en: "Watches",
  },
  {
    value: "라이프스타일",
    ko: "라이프스타일",
    en: "Lifestyle",
  },
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
    <div className="space-y-6 py-4">
      <div>
        <p className="text-xs tracking-[0.2em] text-[#9A8662] mb-3">
          02
        </p>

        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          {isKorean
            ? "관심 있는 카테고리를 선택해주세요"
            : "What are you looking for?"}
        </h2>

        <p className="text-sm text-[#8A8680] mt-2">
          {isKorean
            ? "가장 관심 있는 상품군을 선택해주세요."
            : "Select the category you're most interested in."}
        </p>
      </div>

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