import OptionButton from "./OptionButton";

const styles = [
  "캐주얼",
  "미니멀",
  "스트리트웨어",
  "스포티 / 애슬레저",
  "클래식 / 비즈니스",
  "페미닌",
  "Logo",
];

export default function StepStyle({
  onSelect,
}: {
  onSelect: (v: string | undefined) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        선호하는 스타일을 선택해주세요
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {styles.map(style => (
          <OptionButton
            key={style}
            label={style}
            onClick={() => onSelect(style)}
          />
        ))}

        {/* ✅ 상관없음 */}
        <OptionButton
          label="상관없음"
          onClick={() => onSelect(undefined)}
        />
      </div>
    </div>
  );
}
