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
              bg-[#1C1B19]
              border-[#1C1B19]
              text-white
            `
            : `
              bg-white
              border-[#DDD9D2]
              text-[#3E3B37]
              hover:border-[#8B7653]
              hover:bg-[#FAF9F6]
            `
        }
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <span>{label}</span>

        {active && (
          <span
            className="
              flex-shrink-0
              w-[17px] h-[17px]
              rounded-full
              border border-white/60
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