"use client";

import { Answer } from "@/lib/brandScore";
import { getTopBrand } from "@/lib/brandScore";

export default function Result({ answer }: { answer: Answer }) {
  const topBrand = getTopBrand(answer);

  if (!topBrand) return null;

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold">
        당신을 위한 추천 브랜드
      </h2>

      <div className="border border-gray-700 rounded-xl p-6 space-y-2">
        <p className="text-xl font-semibold">
          {topBrand.name}
        </p>
        <p className="text-gray-500">
          적합도 점수 {topBrand.score}점
        </p>
      </div>
    </div>
  );
}
