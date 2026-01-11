import { recommendStore } from "@/lib/recommend";

type Answer = {
  gender?: string;
  age?: string | number;
  budget?: string;
  interest?: string;
};

type ResultProps = {
  answer: Answer;
};

export default function Result({ answer }: ResultProps) {
  const store = recommendStore(answer);

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-semibold">
        추천 결과 🎉
      </h2>

      <div className="bg-indigo-50 p-6 rounded-xl shadow-md text-lg font-medium">
        {store.name}
      </div>

      <div className="text-sm text-gray-500 text-left">
        <p>성별: {answer.gender ?? "-"}</p>
        <p>나이: {answer.age ?? "-"}</p>
        <p>예산: {answer.budget ?? "-"}</p>
        <p>관심사: {answer.interest ?? "-"}</p>
      </div>
    </div>
  );
}
