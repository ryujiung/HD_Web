"use client";

export default function OptionButton({
  label,
  onClick,
  active = false,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        py-3 rounded-lg border text-sm
        transition
        ${active
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-300 hover:bg-gray-100"}
      `}
    >
      {label}
    </button>
  );
}
