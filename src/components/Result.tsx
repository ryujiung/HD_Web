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
    <div className="space-y-5">

      {/* 결과 타이틀 */}
      <div className="pt-2 pb-3">
        <p className="text-xs tracking-[0.2em] text-[#9A8662] mb-3">
          YOUR RESULT
        </p>

        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          추천 브랜드 TOP 3
        </h2>

        <p className="text-sm text-[#8A8680] mt-2">
          선택하신 취향을 바탕으로 추천해드려요.
        </p>
      </div>

      {/* 1위 브랜드 */}
      <div className="border border-[#E8E6E1] rounded-2xl p-5 bg-white">

        <div className="flex justify-between items-start mb-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-light italic">
                01
              </span>

              <span className="text-[11px] tracking-[0.2em] text-[#9A8662]">
                BEST MATCH
              </span>
            </div>

            <h3 className="text-xl font-semibold mt-4">
              {topBrand.name}
            </h3>
          </div>

          {/* 개발 중 확인용 점수 */}
          <div className="text-right">
            <p className="text-[10px] tracking-wider text-[#9A958D]">
              MATCH
            </p>

            <p className="text-xl font-medium mt-1">
              {topBrand.score}
            </p>
          </div>
        </div>

        {info && (
          <>
            {/* 이미지가 있는 브랜드만 이미지 노출 */}
            {info.image && (
              <div className="w-full h-48 bg-[#FAF9F6] rounded-xl flex items-center justify-center p-5">
                <img
                  src={info.image}
                  alt={topBrand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}

            {/* 현재는 한국어만 노출 */}
            <p
              className={`text-[14px] leading-6 text-[#68645E] whitespace-pre-line ${
                info.image ? "mt-5" : ""
              }`}
            >
              {info.description.ko}
            </p>
          </>
        )}
      </div>

      {/* 2위 / 3위 */}
      {results.slice(1).map((r, index) => (
        <div
          key={r.name}
          className="
            px-5 py-4
            border border-[#E8E6E1]
            rounded-xl
            flex items-center justify-between
            bg-white
          "
        >
          <div className="flex items-center gap-4">
            <span className="text-xl font-light italic text-[#77736D]">
              0{index + 2}
            </span>

            <span className="font-medium">
              {r.name}
            </span>
          </div>

          {/* 개발 중 확인용 점수 */}
          <div className="text-right">
            <p className="text-[9px] tracking-wider text-[#AAA59D]">
              MATCH
            </p>

            <p className="text-sm mt-1">
              {r.score}
            </p>
          </div>
        </div>
      ))}

      {/* 처음부터 */}
      <button
        onClick={onReset}
        className="
          w-full py-4 mt-2
          bg-[#1C1B19]
          text-white
          rounded-xl
          text-sm font-medium
          transition
          hover:bg-black
        "
      >
        처음부터 다시 선택하기
      </button>
    </div>
  );
}