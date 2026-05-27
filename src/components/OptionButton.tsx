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
    ? "py-3 rounded-lg border text-sm transition border-gray-900 bg-gray-900 text-white"
    : "py-3 rounded-lg border text-sm transition border-gray-300 hover:bg-gray-100";

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
}