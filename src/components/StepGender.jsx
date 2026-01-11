import OptionButton from "./OptionButton";

export default function StepGender({ onSelect }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">성별을 선택해주세요</h2>
      <OptionButton label="Male" onClick={() => onSelect("male")} />
      <OptionButton label="Female" onClick={() => onSelect("female")} />
    </div>
  );
}
