"use client";

import StepForm from "@/components/StepForm";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-[#F5F3F1]
        sm:px-6 sm:py-10
        md:px-8 md:py-14
      "
    >
      {/* 전체 서비스 영역 */}
      <div
        className="
          relative
          w-full
          min-h-screen
          sm:min-h-0
          max-w-[520px]
          mx-auto
          bg-[#FCFBFA]
          sm:border sm:border-[#E5E1E2]
          sm:rounded-[28px]
          sm:shadow-[0_20px_60px_rgba(74,103,92,0.08)]
          overflow-hidden
        "
      >
        {/* HYUNDAI GREEN POINT LINE */}
        <div className="h-[4px] w-full bg-[#4A675C]" />

        {/* HEADER */}
        <header
          className="
            flex items-start justify-between
            px-6 pt-6
            sm:px-8 sm:pt-7
          "
        >
          {/* BRAND */}
          <div>
            <p
              className="
                text-[11px]
                tracking-[0.24em]
                font-semibold
                text-[#202220]
              "
            >
              THE HYUNDAI SEOUL
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-[8px] tracking-[0.2em] text-[#4A675C] font-medium">
                2F
              </span>

              <span className="w-4 h-px bg-[#C9D0CC]" />

              <span className="text-[8px] tracking-[0.2em] text-[#8C918E]">
                MODERN MOOD
              </span>
            </div>
          </div>

          {/* AI SERVICE */}
          <div
            className="
              flex items-center gap-2
              px-3 py-2
              bg-[#F0E4ED]
              rounded-full
            "
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#4A675C]" />

            <span className="text-[8px] tracking-[0.16em] font-medium text-[#4A675C]">
              AI SHOPPING
            </span>
          </div>
        </header>

        {/* DIVIDER */}
        <div className="mx-6 sm:mx-8 mt-6 h-px bg-[#ECE8E8]" />

        {/* CONTENT */}
        <div
          className="
            px-6 pb-8 pt-2
            sm:px-8 sm:pb-10
          "
        >
          <StepForm />
        </div>
      </div>

      {/* DESKTOP FOOTER */}
      <div className="hidden sm:block text-center mt-6">
        <p className="text-[9px] tracking-[0.22em] text-[#9A9D9A]">
          AI PERSONAL SHOPPER · THE HYUNDAI SEOUL · 2F MODERN MOOD
        </p>
      </div>
    </main>
  );
}