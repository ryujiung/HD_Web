"use client";

import { useState } from "react";
import OptionButton from "./OptionButton";

const styles = [
  "캐주얼",
  "미니멀",
  "스트리트웨어",
  "스포티 / 애슬레저",
  "클래식 / 비즈니스",
  "페미닌",
  "Logo",
];

export default function StepStyle({
  onNext,
}: {
  onNext: (styles?: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleStyle = (style: string) => {
    setSelected(prev =>
      prev.includes(style)
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        선호하는 스타일을 순서대로 선택해주세요(복수선택 가능)
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {styles.map(style => (
          <OptionButton
            key={style}
            label={style}
            active={selected.includes(style)}
            onClick={() => toggleStyle(style)}
          />
        ))}

        {/* 상관없음 */}
        <OptionButton
          label="상관없음"
          active={selected.length === 0}
          onClick={() => setSelected([])}
        />
      </div>

      <button
        onClick={() =>
          onNext(selected.length > 0 ? selected : undefined)
        }
        className="
          w-full py-2
          border border-gray-700
          rounded-lg
          font-semibold
          hover:bg-gray-100
          transition
        "
      >
        다음
      </button>
    </div>
  );
}
