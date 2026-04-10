"use client";

import { getTopBrands } from "@/lib/brandScore";
import { Answers } from "./StepForm";

export default function Result({
  answer,
  onReset,
}: {
  answer: Answers;
  onReset: () => void;
}) {
  const results = getTopBrands(answer);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">
        추천 브랜드 TOP 3
      </h2>

      {results.map((r, index) => (
        <div
          key={r.name}
          className="
            p-5
            border border-gray-700
            rounded-xl
            flex
            justify-between
            items-center
          "
        >
          <div>
            <div className="font-semibold">
              {index + 1}. {r.name}
            </div>
          </div>

          <div className="font-bold">
            {r.score}점
          </div>
        </div>
      ))}

      {/* 다시 시작 버튼 */}
      <button
        onClick={onReset}
        className="
          w-full py-3
          border border-gray-700
          rounded-lg
          hover:bg-gray-100
        "
      >
        처음부터 다시 선택하기
      </button>
    </div>
  );
}