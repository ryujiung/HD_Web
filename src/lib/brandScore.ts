// lib/brandScore.ts

export type Answer = {
  gender?: string;
  styles?: string[]; // ✅ 복수
  category?: string;
  budget?: string;
};

type ScoreDetail = {
  label: string;
  value: number;
};

type BrandResult = {
  name: string;
  totalScore: number;
  details: ScoreDetail[];
};

type Brand = {
  name: string;
  scores: {
    gender?: Record<string, number>;
    style?: Record<string, number>;
    category?: Record<string, number>;
    budget?: Record<string, number>;
  };
};


export const brands: Brand[] = [
  {
    name: "우영미",
    scores: {
      gender: { male: 7, female: 3 },
      style: {
        캐주얼: 3,
        미니멀: 6,
        스트리트웨어: 1,
      },
      category: {
        의류: 8,
        신발: 1,
        "악세사리(주얼리,모자,선글라스)": 1,
      },
      budget: { "중가 브랜드": 5 },
    },
  },
  {
    name: "르메르",
    scores: {
      gender: { male: 3, female: 7 },
      style: { 캐주얼: 3, 미니멀: 7 },
      category: { 의류: 6, 가방: 3, 신발: 1 },
      budget: { "중가 브랜드": 5 },
    },
  },
  {
    name: "알로",
    scores: {
      gender: { male: 7, female: 3 },
      style: {
        캐주얼: 3,
        스트리트웨어: 2,
        "스포티 / 애슬레저": 5,
      },
      category: {
        의류: 6,
        가방: 1,
        신발: 2,
        "악세사리(주얼리,모자,선글라스)": 1,
      },
      budget: { "저가 브랜드": 5 },
    },
  },
  {
    name: "베이프",
    scores: {
      gender: { male: 3, female: 7 },
      style: {
        캐주얼: 4,
        스트리트웨어: 5,
        "스포티 / 애슬레저": 1,
      },
      category: {
        의류: 6,
        신발: 3,
        "악세사리(주얼리,모자,선글라스)": 1,
      },
      budget: { "저가 브랜드": 5 },
    },
  },
  {
    name: "몽블랑",
    scores: {
      gender: { male: 8, female: 2 },
      category: {
        가방: 3,
        "악세사리(주얼리,모자,선글라스)": 5,
        시계: 2,
      },
      budget: { "프리미엄 브랜드": 5 },
    },
  },
  {
    name: "태그호이어",
    scores: {
      gender: { male: 7, female: 3 },
      category: { 시계: 10 },
      budget: { "명품 브랜드": 5 },
    },
  },
  {
    name: "크롬하츠 선글라스",
    scores: {
      gender: { male: 9, female: 1 },
      category: {
        "악세사리(주얼리,모자,선글라스)": 10,
      },
      budget: { "프리미엄 브랜드": 5 },
    },
  },
  {
    name: "스와로브스키",
    scores: {
      gender: { male: 1, female: 9 },
      category: {
        "악세사리(주얼리,모자,선글라스)": 10,
      },
      budget: { "저가 브랜드": 5 },
    },
  },
];

export function getTopBrand(answer: Answer) {
  return brands
    .map(brand => {
      let score = 0;

      /** ✅ 성별 */
      if (answer.gender) {
        score += brand.scores.gender?.[answer.gender] ?? 0;
      }

      /** ✅ 스타일 (감쇠 누적 + 상한선) */
      if (answer.styles && answer.styles.length > 0) {
        let styleScore = 0;

        answer.styles.forEach((style, index) => {
          const base = brand.scores.style?.[style] ?? 0;

          if (base > 0) {
            const weight = Math.pow(0.6, index); // 1, 0.6, 0.36, ...
            styleScore += base * weight;
          }
        });

        // 🔥 스타일 점수 상한 (예: 최대 10점)
        score += Math.min(styleScore, 10);
      }

      /** ✅ 카테고리 */
      if (answer.category) {
        score += brand.scores.category?.[answer.category] ?? 0;
      }

      /** ✅ 예산 */
      if (answer.budget) {
        score += brand.scores.budget?.[answer.budget] ?? 0;
      }

      return { name: brand.name, score };
    })
    .sort((a, b) => b.score - a.score)[0];
}
