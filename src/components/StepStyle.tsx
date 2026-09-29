"use client";

import { useState } from "react";
import OptionButton from "./OptionButton";
import { Language } from "./StepForm";

const styleOptions = [
  {
    value: "캐주얼",
    ko: "캐주얼",
    en: "Casual",
  },
  {
    value: "미니멀",
    ko: "미니멀",
    en: "Minimal",
  },
  {
    value: "스트리트웨어",
    ko: "스트리트웨어",
    en: "Streetwear",
  },
  {
    value: "스포티 / 애슬레저",
    ko: "스포티 / 애슬레저",
    en: "Sporty / Athleisure",
  },
  {
    value: "클래식 / 비즈니스",
    ko: "클래식 / 비즈니스",
    en: "Classic / Business",
  },
  {
    value: "페미닌",
    ko: "페미닌",
    en: "Feminine",
  },
  {
    value: "빈티지",
    ko: "빈티지",
    en: "Vintage",
  },
  {
    value: "젠더리스",
    ko: "젠더리스",
    en: "Genderless",
  },
];

export default function StepStyle({
  onNext,
  language,
}: {
  onNext: (styles?: string[]) => void;
  language: Language;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const isKorean = language === "ko";

  const toggleStyle = (style: string) => {
    setSelected((prev) =>
      prev.includes(style)
        ? prev.filter((s) => s !== style)
        : [...prev, style]
    );
  };

  return (
    <div className="space-y-6 py-4">
      <div>
        <p className="text-xs tracking-[0.2em] text-[#9A8662] mb-3">
          03
        </p>

        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          {isKorean
            ? "선호하는 스타일을 선택해주세요"
            : "Choose your preferred styles"}
        </h2>

        <p className="text-sm text-[#8A8680] mt-2">
          {isKorean
            ? "여러 스타일을 선택할 수 있습니다."
            : "You can select more than one style."}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {styleOptions.map((style) => (
          <OptionButton
            key={style.value}
            label={isKorean ? style.ko : style.en}
            active={selected.includes(style.value)}
            onClick={() => toggleStyle(style.value)}
          />
        ))}

        <OptionButton
          label={isKorean ? "상관없음" : "No Preference"}
          active={selected.length === 0}
          onClick={() => setSelected([])}
        />
      </div>

      <button
        type="button"
        onClick={() =>
          onNext(selected.length > 0 ? selected : undefined)
        }
        className="
          w-full py-4
          bg-[#1C1B19]
          text-white
          rounded-xl
          text-sm font-medium
          transition
          hover:bg-black
        "
      >
        {isKorean ? "다음 →" : "Next →"}
      </button>
    </div>
  );
}