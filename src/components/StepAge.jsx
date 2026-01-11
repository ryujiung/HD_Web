import OptionButton from "./OptionButton";

const ages = ["10대", "20대", "30대", "40대", "50대 이상"];

export default function StepAge({ onSelect }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        나이대를 선택해주세요
      </h2>

      {ages.map(age => (
        <OptionButton
          key={age}
          label={age}
          onClick={() => onSelect(age)}
        />
      ))}
    </div>
  );
}
