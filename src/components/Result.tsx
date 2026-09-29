"use client";

import { getTopBrands } from "@/lib/brandScore";
import { brandInfo } from "@/lib/brandInfo";
import { Answers, Language } from "./StepForm";

const brandNamesEn: Record<string, string> = {
  르메르: "LEMAIRE",
  "alo Yoga": "ALO YOGA",
  베이프: "BAPE",
  우영미: "WOOYOUNGMI",
  몽블랑: "MONTBLANC",
  "TAG HEUER": "TAG HEUER",
  크롬하츠선글라스: "CHROME HEARTS EYEWEAR",
  스와로브스키: "SWAROVSKI",
  타임파리: "TIME PARIS",
  피어오브갓: "FEAR OF GOD",
  플리츠플리츠: "PLEATS PLEASE ISSEY MIYAKE",
  토템: "TOTEME",
  코치: "COACH",
  옴므플리쎄: "HOMME PLISSÉ ISSEY MIYAKE",
  언더커버: "UNDERCOVER",
  "아크네 스튜디오": "ACNE STUDIOS",
  아워레가시: "OUR LEGACY",
  아미: "AMI",
  아더에러: "ADERERROR",
  스톤아일랜드: "STONE ISLAND",
  막스마라: "MAX MARA",
  랑방컬렉션: "LANVIN COLLECTION",
  "Y-3": "Y-3",
  R13: "R13",
  헬렌카민스키: "HELEN KAMINSKI",
  롱샴: "LONGCHAMP",
  바오바오: "BAO BAO ISSEY MIYAKE",
  투미: "TUMI",
};

export default function Result({
  answer,
  onReset,
  language,
}: {
  answer: Answers;
  onReset: () => void;
  language: Language;
}) {
  const results = getTopBrands(answer);
  const topBrand = results[0];
  const info = brandInfo[topBrand.name];

  const isKorean = language === "ko";

  const getBrandName = (name: string) => {
    if (isKorean) return name;
    return brandNamesEn[name] ?? name;
  };

  return (
    <div className="pb-2">

      {/* RESULT HEADER */}
      <div className="pt-3 pb-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#9A8662]" />

          <p className="text-[10px] tracking-[0.28em] text-[#8B7653] font-medium">
            PERSONAL SELECTION
          </p>
        </div>

        <h2 className="text-[30px] leading-[1.3] font-semibold tracking-[-0.035em]">
          {isKorean ? (
            <>
              당신을 위한
              <br />
              브랜드를 찾았어요.
            </>
          ) : (
            <>
              Your brand matches
              <br />
              are ready.
            </>
          )}
        </h2>

        <p className="text-[14px] leading-6 text-[#858078] mt-4">
          {isKorean
            ? "선택하신 취향을 바탕으로 가장 잘 어울리는 브랜드를 추천해드려요."
            : "Discover the brands that best match your style and preferences."}
        </p>
      </div>

      {/* BEST MATCH */}
      <section className="border-t border-[#D9D5CE] pt-6">

        <div className="flex items-end justify-between mb-6">
          <div className="flex items-baseline gap-4">
            <span className="text-[42px] leading-none font-light italic tracking-[-0.05em]">
              01
            </span>

            <span className="text-[10px] tracking-[0.24em] text-[#9A8662] font-medium">
              BEST MATCH
            </span>
          </div>

          <span className="text-[10px] tracking-[0.16em] text-[#AAA49B]">
            THE HYUNDAI SEOUL · 2F
          </span>
        </div>

        {/* 브랜드명 */}
        <h3 className="text-[26px] leading-tight font-semibold tracking-[-0.03em] mb-5">
          {getBrandName(topBrand.name)}
        </h3>

        {/* 브랜드 이미지 */}
        {info?.image && (
          <div className="w-full h-56 bg-[#F7F6F2] rounded-[18px] flex items-center justify-center p-7 overflow-hidden">
            <img
              src={info.image}
              alt={getBrandName(topBrand.name)}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {/* 브랜드 설명 */}
        {info && (
          <div className={info.image ? "mt-6" : "mt-2"}>
            <p className="text-[14px] leading-[1.8] text-[#5F5B55] whitespace-pre-line">
              {isKorean
                ? info.description.ko
                : info.description.en}
            </p>
          </div>
        )}
      </section>

      {/* OTHER MATCHES */}
      <section className="mt-10 border-t border-[#D9D5CE]">

        <div className="py-5">
          <p className="text-[10px] tracking-[0.24em] text-[#9A8662] font-medium">
            MORE FOR YOU
          </p>
        </div>

        {results.slice(1).map((brand, index) => (
          <div
            key={brand.name}
            className="
              py-5
              border-t border-[#E8E5DF]
              flex items-center
            "
          >
            <div className="flex items-center gap-5 min-w-0">
              <span className="text-[22px] font-light italic text-[#8A857E]">
                0{index + 2}
              </span>

              <span className="text-[15px] font-medium tracking-[-0.01em]">
                {getBrandName(brand.name)}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* RESET */}
      <button
        onClick={onReset}
        className="
          w-full mt-10 py-[17px]
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
        {isKorean
          ? "처음부터 다시 선택하기"
          : "START OVER"}
      </button>

      {/* FOOTER */}
      <div className="pt-7 text-center">
        <p className="text-[9px] tracking-[0.25em] text-[#B2ADA5]">
          AI PERSONAL SHOPPER · THE HYUNDAI SEOUL
        </p>
      </div>

    </div>
  );
}