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

  프라다남성: "PRADA MEN",
  루이비통남성: "LOUIS VUITTON MEN",
  해밀턴: "HAMILTON",
  튜더: "TUDOR",
  "IWC 샤프하우젠": "IWC SCHAFFHAUSEN",
  오메가: "OMEGA",
  지미추: "JIMMY CHOO",
  골든구스: "GOLDEN GOOSE",
  무이: "MUE",
  라이카: "LEICA",
  "프린트 베이커리": "PRINT BAKERY",
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

  const isKorean = language === "ko";

  const getBrandName = (name: string) => {
    if (isKorean) return name;
    return brandNamesEn[name] ?? name;
  };

  if (!topBrand) {
    return (
      <div className="py-10 text-center">
        <p className="text-[14px] text-[#7D837F]">
          {isKorean
            ? "추천 결과를 찾지 못했습니다."
            : "No matching brands were found."}
        </p>

        <button
          type="button"
          onClick={onReset}
          className="
            w-full
            mt-7
            py-[16px]
            bg-[#4A675C]
            text-white
            rounded-xl
            text-[13px]
            font-medium
            transition-all duration-200
            hover:bg-[#3F594F]
            active:scale-[0.99]
          "
        >
          {isKorean ? "처음부터 다시 선택하기" : "START OVER"}
        </button>
      </div>
    );
  }

  const info = brandInfo[topBrand.name];

  return (
    <div className="pb-1">

      {/* RESULT HEADER */}
      <div className="pt-2 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#4A675C]" />

          <p className="text-[9px] tracking-[0.26em] text-[#4A675C] font-semibold">
            PERSONAL SELECTION
          </p>
        </div>

        <h2 className="text-[29px] leading-[1.3] font-semibold tracking-[-0.035em] text-[#1D211F]">
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

        <p className="text-[13px] leading-6 text-[#7D837F] mt-3">
          {isKorean
            ? "선택하신 취향을 바탕으로 어울리는 브랜드를 추천해드려요."
            : "Discover the brands that best match your preferences."}
        </p>
      </div>

      {/* BEST MATCH */}
      <section className="border-t border-[#DDE2DF] pt-5">

        <div className="flex items-end justify-between gap-4 mb-4">
          <div className="flex items-baseline gap-3">
            <span className="text-[38px] leading-none font-light italic tracking-[-0.05em] text-[#1D211F]">
              01
            </span>

            <span className="text-[9px] tracking-[0.22em] text-[#4A675C] font-semibold">
              BEST MATCH
            </span>
          </div>

          <span className="text-[8px] tracking-[0.14em] text-[#9A9F9C]">
            2F · MODERN MOOD
          </span>
        </div>

        {/* BRAND NAME */}
        <h3 className="text-[26px] leading-tight font-semibold tracking-[-0.03em] text-[#1D211F] mb-4">
          {getBrandName(topBrand.name)}
        </h3>

        {/* BRAND IMAGE */}
        {info?.image && (
          <div
            className="
              relative
              w-full
              h-48
              bg-[#F5F6F4]
              border border-[#E7EAE8]
              rounded-[18px]
              flex items-center justify-center
              p-6
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                top-4 right-4
                w-7 h-7
                rounded-full
                bg-[#F0E4ED]/70
              "
            />

            <img
              src={info.image}
              alt={getBrandName(topBrand.name)}
              className="
                relative
                z-10
                max-w-full
                max-h-full
                object-contain
              "
            />
          </div>
        )}

        {/* DESCRIPTION */}
        {info && (
          <div className={info.image ? "mt-5" : "mt-2"}>
            <p className="text-[13px] leading-[1.75] text-[#5F6662] whitespace-pre-line">
              {isKorean
                ? info.description.ko
                : info.description.en}
            </p>
          </div>
        )}
      </section>

      {/* OTHER MATCHES */}
      {results.length > 1 && (
        <section className="mt-7 border-t border-[#DDE2DF]">

          <div className="py-4">
            <p className="text-[9px] tracking-[0.22em] text-[#4A675C] font-semibold">
              MORE FOR YOU
            </p>
          </div>

          {results.slice(1).map((brand, index) => (
            <div
              key={brand.name}
              className="
                py-4
                border-t border-[#E7EAE8]
                flex items-center
              "
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-[20px] font-light italic text-[#8C938F]">
                  0{index + 2}
                </span>

                <span className="text-[14px] font-medium tracking-[-0.01em] text-[#303532]">
                  {getBrandName(brand.name)}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* RESET */}
      <button
        type="button"
        onClick={onReset}
        className="
          w-full
          mt-7
          py-[16px]
          bg-[#4A675C]
          text-white
          rounded-xl
          text-[13px]
          font-medium
          tracking-[0.03em]
          transition-all duration-200
          hover:bg-[#3F594F]
          active:scale-[0.99]
          shadow-[0_8px_24px_rgba(74,103,92,0.12)]
        "
      >
        {isKorean
          ? "처음부터 다시 선택하기"
          : "START OVER"}
      </button>

      {/* FOOTER */}
      <div className="pt-5 text-center">
        <p className="text-[8px] tracking-[0.22em] text-[#A0A5A2]">
          AI PERSONAL SHOPPER · THE HYUNDAI SEOUL
        </p>
      </div>

    </div>
  );
}