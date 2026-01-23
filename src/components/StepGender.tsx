import OptionButton from "./OptionButton";

export default function StepGender({
  onSelect,
}: {
  onSelect: (v?: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">성별을 선택해주세요</h2>

      <div className="grid grid-cols-2 gap-4">
        <OptionButton
          label="남성"
          onClick={() => onSelect("male")}
        />
        <OptionButton
          label="여성"
          onClick={() => onSelect("female")}
        />
        <OptionButton
          label="성별 무관"
          onClick={() => onSelect(undefined)}
        />
        <OptionButton
          label="밝히지 않음"
          onClick={() => onSelect(undefined)}
        />
      </div>
    </div>
  );
}
