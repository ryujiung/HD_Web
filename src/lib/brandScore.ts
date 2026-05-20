// lib/brandScore.ts

export type Answer = {
  gender?: string;
  styles?: string[];
  category?: string;
  budget?: string;
};

type Brand = {
  name: string;
  scores: {
    gender?: Record<string, number>;
    styles?: Record<string, number>;
    category?: Record<string, boolean>;
    budget?: Record<string, number>;
  };
};

export const brands: Brand[] = [
  {
    name: "르메르",
    scores: {
      gender: { male: 3, female: 7 },
      styles: {
        "클래식 / 비즈니스": 2,
        페미닌: 1,
        미니멀: 7,
      },
      category: {
        의류: true,
        가방: true,
        신발: false,
        "악세사리(주얼리,모자,선글라스)": true,
        시계: false,
        라이프스타일: false,
      },
      budget: {
        "MID-HIGH": 10,
        MID: 5,
        HIGH: 5,
      },
    },
  },

  {
    name: "alo Yoga",
    scores: {
      gender: { male: 1, female: 9 },
      styles: {
        캐주얼: 2,
        스트리트웨어: 1,
        "스포티 / 애슬레저": 7,
      },
      category: {
        의류: true,
        가방: false,
        신발: true,
        "악세사리(주얼리,모자,선글라스)": true,
        시계: false,
        라이프스타일: true,
      },
      budget: {
        "MID-LOW": 10,
        MID: 5,
      },
    },
  },

  {
    name: "베이프",
    scores: {
      gender: { male: 4, female: 6 },
      styles: {
        스트리트웨어: 6,
        빈티지: 4,
      },
      category: {
        의류: true,
        가방: false,
        신발: true,
        "악세사리(주얼리,모자,선글라스)": true,
        시계: false,
        라이프스타일: false,
      },
      budget: {
        "MID-LOW": 10,
        MID: 5,
      },
    },
  },

  {
    name: "우영미",
    scores: {
      gender: { male: 7, female: 3 },
      styles: {
        젠더리스: 5,
        캐주얼: 2,
        미니멀: 2,
        "비즈니스 / 클래식": 1,
      },
      category: {
        의류: true,
        가방: true,
        신발: true,
        "악세사리(주얼리,모자,선글라스)": true,
        시계: false,
        라이프스타일: false,
      },
      budget: {
        MID: 10,
        "MID-LOW": 5,
        "MID-HIGH": 5,
      },
    },
  },

  {
    name: "몽블랑",
    scores: {
      gender: { male: 6, female: 4 },
      styles: {
        클래식: 8,
        캐주얼: 2,
      },
      category: {
        의류: false,
        가방: true,
        신발: false,
        "악세사리(주얼리,모자,선글라스)": true,
        시계: true,
        라이프스타일: true,
      },
      budget: {
        MID: 5,
        "MID-HIGH": 10,
        HIGH: 5,
      },
    },
  },

  {
    name: "TAG HEUER",
    scores: {
      gender: { male: 8, female: 2 },
      styles: {
        "클래식 / 비즈니스": 4,
        스포츠: 6,
      },
      category: {
        의류: false,
        가방: false,
        신발: false,
        "악세사리(주얼리,모자,선글라스)": false,
        시계: true,
        라이프스타일: false,
      },
      budget: {
        "MID-HIGH": 5,
        HIGH: 10,
      },
    },
  },

  {
    name: "크롬하츠",
    scores: {
      gender: { male: 7, female: 3 },
      styles: {
        젠더리스: 5,
        스트리트웨어: 5,
      },
      category: {
        의류: false,
        가방: false,
        신발: false,
        "악세사리(주얼리,모자,선글라스)": true,
        시계: false,
        라이프스타일: false,
      },
      budget: {
        "MID-HIGH": 5,
        HIGH: 10,
      },
    },
  },

  {
    name: "스와로브스키",
    scores: {
      gender: { male: 2, female: 8 },
      styles: {
        캐주얼: 2,
        클래식: 4,
        페미닌: 2,
        젠더리스: 2,
      },
      category: {
        의류: false,
        가방: false,
        신발: false,
        "악세사리(주얼리,모자,선글라스)": true,
        시계: false,
        라이프스타일: false,
      },
      budget: {
        "MID-LOW": 10,
        MID: 5,
      },
    },
  },
];

export function getTopBrands(answer: Answer) {
  const results = brands.map((brand) => {
    let totalScore = 0;

    if (answer.gender) {
      totalScore += brand.scores.gender?.[answer.gender] ?? 0;
    }

    if (answer.styles && answer.styles.length > 0) {
      let styleScore = 0;

      answer.styles.forEach((style, index) => {
        const base = brand.scores.styles?.[style] ?? 0;
        const weight = Math.pow(0.6, index);
        styleScore += base * weight;
      });

      totalScore += Math.min(styleScore, 10);
    }

    if (answer.category) {
      totalScore += brand.scores.category?.[answer.category] ? 5 : 0;
    }

    if (answer.budget) {
      totalScore += brand.scores.budget?.[answer.budget] ?? 0;
    }

    return {
      name: brand.name,
      score: Math.round(totalScore),
    };
  });

  return results.sort((a, b) => b.score - a.score).slice(0, 3);
}