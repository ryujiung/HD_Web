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
  const buttonClass = active
    ? `
        py-4 px-4
        rounded-xl
        border border-[#1C1B19]
        bg-[#1C1B19]
        text-white
        text-sm font-medium
        transition
      `
    : `
        py-4 px-4
        rounded-xl
        border border-[#E5E2DC]
        bg-white
        text-[#33312E]
        text-sm font-medium
        transition
        hover:border-[#1C1B19]
        hover:bg-[#FAF9F6]
      `;

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClass}
    >
      {label}
    </button>
  );
}