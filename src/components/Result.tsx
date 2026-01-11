import { recommendStores } from "@/lib/recommend";

type Answer = {
  gender?: string;
  age?: string;
  budget?: string;
  interest?: string;
};

type Store = {
  name: string;
};

type ResultProps = {
  answer: Answer;
};

export default function Result({ answer }: ResultProps) {
  const stores = recommendStores(answer);
  console.log("추천 결과 개수:", stores.length);
  console.log("추천 결과:", stores);


  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-semibold">
        추천 결과 🎉
      </h2>

      {stores.length === 0 ? (
        <div className="bg-gray-100 p-6 rounded-xl text-gray-500">
          조건에 맞는 매장이 없습니다 😢
        </div>
      ) : (
        <div className="space-y-3">
          {stores.map(store => (
            <div
              key={store.name}
              className="bg-indigo-50 p-4 rounded-xl shadow text-lg font-medium"
            >
              {store.name}
            </div>
          ))}
        </div>
      )}

      <div className="text-sm text-gray-500 text-left pt-4">
        <p>성별: {answer.gender ?? "-"}</p>
        <p>나이: {answer.age ?? "-"}</p>
        <p>예산: {answer.budget ?? "-"}</p>
        <p>관심사: {answer.interest ?? "-"}</p>
      </div>
    </div>
  );
}
