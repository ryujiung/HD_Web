import OptionButton from "./OptionButton";

export default function StepGender({
  onSelect,
}: {
  onSelect: (v?: string) => void;
}) {
  return (
    <div className="space-y-6 py-4">

      <div>
        <p className="text-xs tracking-[0.2em] text-[#9A8662] mb-3">
          01
        </p>

        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          성별을 선택해주세요
        </h2>

        <p className="text-sm text-[#8A8680] mt-2">
          더 정확한 브랜드 추천을 위해 선택해주세요.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
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