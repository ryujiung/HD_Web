"use client";

import { getTopBrands } from "@/lib/brandScore";
import { brandInfo } from "@/lib/brandInfo";
import { Answers } from "./StepForm";

export default function Result({
  answer,
  onReset,
}: {
  answer: Answers;
  onReset: () => void;
}) {
  const results = getTopBrands(answer);
  const topBrand = results[0];

  const info = brandInfo[topBrand.name];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">
        추천 브랜드 TOP 3
      </h2>

      {/* 🔥 1위 브랜드 상세 */}
      <div className="space-y-3 border p-5 rounded-xl">
        <div className="text-xl font-bold">
          🥇 {topBrand.name}
        </div>

        {info && (
          <>
            <img
              src={info.image}
              alt={topBrand.name}
              className="w-full h-60 object-cover rounded-lg"
            />

            <p className="text-gray-600">
              {info.description}
            </p>
          </>
        )}

        <div className="font-semibold">
          {topBrand.score}점
        </div>
      </div>

      {/* 나머지 Top3 */}
      {results.slice(1).map((r, index) => (
        <div
          key={r.name}
          className="p-4 border rounded-lg flex justify-between"
        >
          <div>
            {index + 2}. {r.name}
          </div>

          <div>{r.score}점</div>
        </div>
      ))}

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