
const stores = [
    // 글로벌 패션
    { name: "MSGM", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "R13", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "Y-3", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["High"] },
    { name: "골든구스", category: "글로벌 패션", gender:["male","female"], age:["20대","30대","40대"], budget:["High"] },
    { name: "꼼데가르송", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["Middle","High"] },
    { name: "노비스", category: "글로벌 패션", gender:["male","female"], age:["20대","30대","40대"], budget:["High"] },
    { name: "드롤드무슈", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["Middle"] },
    { name: "랑방컬렉션", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["High"] },
    { name: "롱샴", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "르메르", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["High"] },
    { name: "막스마라", category: "글로벌 패션", gender:["female"], age:["30대","40대"], budget:["High"] },
    { name: "메종마르지엘라", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["High"] },
    { name: "무스너클", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["High"] },
    { name: "무이", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "베이프", category: "글로벌 패션", gender:["male","female"], age:["20대"], budget:["Middle"] },
    { name: "스톤아일랜드", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["High"] },
    { name: "아더에러 글라스샵", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "아르떼 디 마노", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "아미", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "아워레가시", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["High"] },
    { name: "아크네 스튜디오", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["High"] },
    { name: "알로", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "언더커버", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["High"] },
    { name: "에르노", category: "글로벌 패션", gender:["male","female"], age:["30대","40대"], budget:["High"] },
    { name: "옴므플리세", category: "글로벌 패션", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "우영미", category: "글로벌 패션", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "이자벨마랑", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "일레븐티", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "캐나다구스", category: "글로벌 패션", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "코치", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "타임파리", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "토템", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "페트레이", category: "글로벌 패션", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "플리츠플리츠", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "피어오브갓", category: "글로벌 패션", gender:["male"], age:["20대","30대"], budget:["High"] },
    { name: "헬렌카민스키", category: "글로벌 패션", gender:["female"], age:["20대","30대"], budget:["Middle"] },
  
    // VIP 서비스
    { name: "쟈스민 블랙 라운지", category: "VIP 서비스", gender:["male","female"], age:["20대","30대"], budget:["High"] },
  
    // 리빙
    { name: "라이카", category: "리빙", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "프린트베이커리", category: "리빙", gender:["male","female"], age:["20대","30대"], budget:["Low"] },
  
    // 패션잡화 · ACC
    { name: "구찌(선글라스)", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "디올(선글라스)", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "바오바오", category: "패션잡화 · ACC", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "스와로브스키", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "스킴스", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["Low"] },
    { name: "지미추", category: "패션잡화 · ACC", gender:["female"], age:["20대","30대"], budget:["High"] },
    { name: "크롬하츠", category: "패션잡화 · ACC", gender:["male"], age:["20대","30대"], budget:["High"] },
    { name: "톰포드(선글라스)", category: "패션잡화 · ACC", gender:["male","female"], age:["30대"], budget:["High"] },
    { name: "투미", category: "패션잡화 · ACC", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
  
    // 기타 · 편의시설
    { name: "메이린 S", category: "기타 · 편의시설", gender:["female"], age:["20대","30대"], budget:["Middle"] },
    { name: "쿨화이트", category: "기타 · 편의시설", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "타임닥터", category: "기타 · 편의시설", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "틸 화이트", category: "기타 · 편의시설", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
  
    // 워치
    { name: "IWC", category: "워치", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "몽블랑", category: "워치", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "미도", category: "워치", gender:["male","female"], age:["20대","30대"], budget:["Middle"] },
    { name: "브라이틀링", category: "워치", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "오메가", category: "워치", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "위블로", category: "워치", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "태그호이어", category: "워치", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "튜더", category: "워치", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "해밀턴", category: "워치", gender:["male"], age:["30대","40대"], budget:["Middle"] },
  
    // 남성 럭셔리패션
    { name: "루이비통(남)", category: "남성 럭셔리패션", gender:["male"], age:["30대","40대"], budget:["High"] },
    { name: "프라다(남)", category: "남성 럭셔리패션", gender:["male"], age:["30대","40대"], budget:["High"] },
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
  