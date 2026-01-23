type OptionButtonProps = {
  label: string;
  onClick: () => void;
};

export default function OptionButton({ label, onClick }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        h-14
        border
        border-gray-700
        rounded-lg
        font-medium
        hover:bg-gray-100
        transition
      "
    >
      {label}
    </button>
  );
}
