import { getTopBrand } from "@/lib/brandScore";
import { Answers } from "./StepForm";

export default function Result({
  answer,
  onReset,
}: {
  answer: Answers;
  onReset: () => void;
}) {
  const result = getTopBrand(answer);

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold">추천 결과 🎉</h2>

      {result ? (
        <div className="p-6 border border-gray-700 rounded-xl text-lg font-semibold">
          {result.name}
        </div>
      ) : (
        <p className="text-gray-500">추천 결과가 없습니다</p>
      )}

      {/* 🔥 다시하기 버튼 */}
      <button
        onClick={onReset}
        className="
          w-full py-3
          border border-gray-700
          rounded-lg
          font-semibold
          hover:bg-gray-100
          transition
        "
      >
        처음부터 다시 선택하기
      </button>
    </div>
  );
}
