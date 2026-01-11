"use client";

import { useState } from "react";
import OptionButton from "./OptionButton";
import Result from "./Result";

/** 답변 타입 */
type Answers = {
  gender: string;
  age: string;
  budget: string;
  interest: string;
};

/** step key 타입 */
type AnswerKey = keyof Answers;

export default function StepForm() {
  const [step, setStep] = useState<number>(1);

  const [answers, setAnswers] = useState<Answers>({
    gender: "",
    age: "",
    budget: "",
    interest: ""
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => (prev > 1 ? prev - 1 : prev));

  const handleAnswer = (key: AnswerKey, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    nextStep();
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">성별을 선택하세요</h2>
          <OptionButton label="남성" onClick={() => handleAnswer("gender", "male")} />
          <OptionButton label="여성" onClick={() => handleAnswer("gender", "female")} />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">나이를 선택하세요</h2>
          {["10대", "20대", "30대", "40대", "50대"].map(age => (
            <OptionButton
              key={age}
              label={age}
              onClick={() => handleAnswer("age", age)}
            />
          ))}
          <button onClick={prevStep} className="text-gray-600 underline">
            ← 이전
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">예산을 선택하세요</h2>
          {["1~3만원", "3~5만원", "5~10만원", "10만원 이상"].map(budget => (
            <OptionButton
              key={budget}
              label={budget}
              onClick={() => handleAnswer("budget", budget)}
            />
          ))}
          <button onClick={prevStep} className="text-gray-600 underline">
            ← 이전
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">관심사를 선택하세요</h2>
          {[
            "글로벌 패션",
            "VIP 서비스",
            "리빙",
            "패션잡화 · ACC",
            "기타 · 편의시설",
            "워치",
            "남성 럭셔리패션"
          ].map(interest => (
            <OptionButton
              key={interest}
              label={interest}
              onClick={() => handleAnswer("interest", interest)}
            />
          ))}
          <button onClick={prevStep} className="text-gray-600 underline">
            ← 이전
          </button>
        </div>
      )}

      {step === 5 && <Result answer={answers} />}
    </div>
  );
}
