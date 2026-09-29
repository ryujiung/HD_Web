"use client";

type OptionButtonProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

export default function OptionButton({
  label,
  onClick,
  active = false,
}: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        min-h-[58px]
        px-4 py-4
        rounded-[12px]
        border
        text-[13px]
        leading-[1.4]
        font-medium
        tracking-[-0.01em]
        text-left
        transition-all
        duration-200
        active:scale-[0.98]

        ${
          active
            ? `
              bg-[#4A675C]
              border-[#4A675C]
              text-white
              shadow-[0_6px_18px_rgba(74,103,92,0.14)]
            `
            : `
              bg-white
              border-[#DDE2DF]
              text-[#353A37]
              hover:border-[#4A675C]
              hover:bg-[#F5F8F6]
              hover:text-[#3F594F]
            `
        }
      `}
    >
      <div className="flex items-center justify-between gap-3">
        <span>{label}</span>

        {active && (
          <span
            className="
              flex-shrink-0
              w-[18px] h-[18px]
              rounded-full
              border border-white/50
              bg-white/10
              flex items-center justify-center
              text-[9px]
              leading-none
            "
          >
            ✓
          </span>
        )}
      </div>
    </button>
  );
}