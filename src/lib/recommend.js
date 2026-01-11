const stores = [
    // 글로벌 패션
    { name: "MSGM", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "R13", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "Y-3", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "골든구스", category: "글로벌 패션", gender:["male","female"], age:["20대","30대","40대"], budget:["5만원 이상"] },
    { name: "꼼데가르송", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["3~5만원","5만원 이상"] },
    { name: "노비스", category: "글로벌 패션", gender:["male","female"], age:["20대","30대","40대"], budget:["5만원 이상"] },
    { name: "드롤드무슈", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "랑방컬렉션", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "롱샴", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "르메르", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "막스마라", category: "글로벌 패션", gender:["female"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "메종마르지엘라", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "무스너클", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "무이", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "베이프", category: "글로벌 패션", gender:["male","female"], age:["20대"], budget:["3~5만원"] },
    { name: "스톤아일랜드", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "아더에러 글라스샵", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "아르떼 디 마노", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "아미", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "아워레가시", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "아크네 스튜디오", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "알로", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "언더커버", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "에르노", category: "글로벌 패션", gender:["male","female"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "옴므플리세", category: "글로벌 패션", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "우영미", category: "글로벌 패션", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "이자벨마랑", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "일레븐티", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "캐나다구스", category: "글로벌 패션", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "코치", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "타임파리", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "토템", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "페트레이", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "플리츠플리츠", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "피어오브갓", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "헬렌카민스키", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
  
    // VIP 서비스
    { name: "쟈스민 블랙 라운지", category: "VIP 서비스", gender:["male","female"], age:["20대","30대"], budget:["5만원 이상"] },
  
    // 리빙
    { name: "라이카", category: "리빙", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "프린트베이커리", category: "리빙", gender:["male","female"], age:["20대","30대"], budget:["1~3만원"] },
  
    // 패션잡화 · ACC
    { name: "구찌(선글라스)", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "디올(선글라스)", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "바오바오", category: "패션잡화 · ACC", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "스와로브스키", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "스킴스", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["1~3만원"] },
    { name: "지미추", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "크롬하츠", category: "패션잡화 · ACC", gender:["male"], age:["20대","30대"], budget:["5만원 이상"] },
    { name: "톰포드(선글라스)", category: "패션잡화 · ACC", gender:["male","female"], age:["30대"], budget:["5만원 이상"] },
    { name: "투미", category: "패션잡화 · ACC", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
  
    // 기타 · 편의시설
    { name: "메이린 S", category: "기타 · 편의시설", gender:["female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "쿨화이트", category: "기타 · 편의시설", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "타임닥터", category: "기타 · 편의시설", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "틸 화이트", category: "기타 · 편의시설", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
  
    // 워치
    { name: "IWC", category: "워치", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "몽블랑", category: "워치", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "미도", category: "워치", gender:["male","female"], age:["20대","30대"], budget:["3~5만원"] },
    { name: "브라이틀링", category: "워치", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "오메가", category: "워치", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "위블로", category: "워치", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "태그호이어", category: "워치", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "튜더", category: "워치", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "해밀턴", category: "워치", gender:["male"], age:["30대","40대"], budget:["3~5만원"] },
  
    // 남성 럭셔리패션
    { name: "루이비통(남)", category: "남성 럭셔리패션", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
    { name: "프라다(남)", category: "남성 럭셔리패션", gender:["male"], age:["30대","40대"], budget:["5만원 이상"] },
  ];
  
  export function recommendStore(answer) {
    const filtered = stores.filter(store =>
      store.gender.includes(answer.gender) &&
      store.age.includes(answer.age) &&
      store.budget.includes(answer.budget) &&
      store.category === answer.interest
    );
  
    if (filtered.length > 0) return filtered[0];
    return { name: "조건에 맞는 매장이 없습니다 😢" };
  }
  