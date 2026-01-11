type OptionButtonProps = {
    label: string;
    onClick: () => void;
  };
  
  export default function OptionButton({ label, onClick }: OptionButtonProps) {
    return (
      <button
        onClick={onClick}
        className="
          w-full py-4 rounded-xl
          bg-white text-black font-medium
          border border-gray-200
          shadow-sm
          hover:bg-gray-100
          active:scale-95
          transition transform duration-150 ease-in-out
        "
      >
        {label}
      </button>
    );
  }
  