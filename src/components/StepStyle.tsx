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
    <div className="py-3">
      {/* STEP */}
      <div className="flex items-center gap-3 mb-7">
        <span className="text-[11px] font-medium tracking-[0.18em] text-[#9A8662]">
          03
        </span>

        <span className="w-7 h-px bg-[#CFC9BF]" />

        <span className="text-[9px] tracking-[0.22em] text-[#AAA49B]">
          STYLE
        </span>
      </div>

      {/* QUESTION */}
      <div className="mb-8">
        <h2 className="text-[27px] leading-[1.35] font-semibold tracking-[-0.035em]">
          {isKorean ? (
            <>
              어떤 스타일을
              <br />
              선호하시나요?
            </>
          ) : (
            <>
              What is your
              <br />
              style?
            </>
          )}
        </h2>

        <p className="text-[14px] leading-6 text-[#858078] mt-4">
          {isKorean
            ? "취향에 맞는 스타일을 자유롭게 선택해주세요."
            : "Select all the styles that match your taste."}
        </p>
      </div>

      {/* OPTIONS */}
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

      {/* NEXT */}
      <button
        type="button"
        onClick={() =>
          onNext(selected.length > 0 ? selected : undefined)
        }
        className="
          w-full mt-6 py-[17px]
          bg-[#1C1B19]
          text-white
          rounded-xl
          text-[13px] font-medium
          tracking-[0.03em]
          transition-all
          hover:bg-black
          active:scale-[0.99]
        "
      >
        {isKorean ? "다음 →" : "NEXT →"}
      </button>
    </div>
  );
}