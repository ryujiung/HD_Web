type BrandInfo = {
  image: string | null;
  description: {
    ko: string;
    en: string;
  };
};

export const brandInfo: Record<string, BrandInfo> = {
  우영미: {
    image: "/image/wooyoungmi.jpg",
    description: {
      ko: `우영미는 파리 감성의 컨템포러리 테일러링을 기반으로 한 젠더리스 럭셔리 캐주얼 브랜드입니다.

#WOOYOUNGMI #프렌치무드`,
      en: `WOOYOUNGMI is a genderless luxury fashion brand known for contemporary tailoring inspired by Parisian sensibilities.

#WOOYOUNGMI #FrenchMood`,
    },
  },

  르메르: {
    image: "/image/lemaire.png",
    description: {
      ko: `르메르는 편안하면서도 세련된 미니멀 스타일로 유명한 프랑스 브랜드입니다.

#프랑스 #미니멀 #파리지앵`,
      en: `LEMAIRE is a French fashion brand known for its refined minimalism and relaxed, sophisticated style.

#France #Minimal #Parisian`,
    },
  },

  "alo Yoga": {
    image: "/image/alo-yoga-logo.png",
    description: {
      ko: `alo Yoga는 세련된 미학과 퍼포먼스를 결합해 모던 럭셔리 라이프스타일을 제안하는 프리미엄 액티브웨어 브랜드입니다.

#미국 #하이엔드애슬레저 #웰니스`,
      en: `Alo Yoga is a premium activewear brand that combines refined aesthetics and performance to offer a modern luxury lifestyle.

#USA #HighEndAthleisure #Wellness`,
    },
  },

  베이프: {
    image: "/image/bape.png",
    description: {
      ko: `베이프는 1993년 니고가 설립한 힙합·우라하라 감성의 대표 스트리트 브랜드입니다.

#일본 #카모플라쥬 #콜라보`,
      en: `Founded by NIGO in 1993, BAPE is an iconic Japanese streetwear brand rooted in hip-hop and Ura-Harajuku culture.

#Japan #Camouflage #Collaboration`,
    },
  },

  몽블랑: {
    image: "/image/MONTBLANC.png",
    description: {
      ko: `몽블랑은 필기구와 시계, 레더 제품 등 다양한 컬렉션을 선보이는 럭셔리 비즈니스 라이프스타일 메종입니다.

#독일 #마이스터스튁 #럭셔리라이프스타일`,
      en: `Montblanc is a luxury business lifestyle Maison showcasing exceptional craftsmanship across writing instruments, watches, and leather goods.

#Germany #Meisterstück #LuxuryLifestyle`,
    },
  },

  "TAG HEUER": {
    image: "/image/TAGHEUER.png",
    description: {
      ko: `1860년 설립된 스위스 럭셔리 워치 브랜드 태그호이어는 혁신적인 기술력과 도전 정신을 바탕으로 스포츠 워치와 크로노그래프 분야를 선도하며, 까레라·모나코·포뮬러 1 등 아이코닉한 타임피스를 선보입니다.

#스위스 #까레라 #F1타임키퍼`,
      en: `Founded in 1860, TAG Heuer is a Swiss luxury watch brand known for its innovative technology and pioneering spirit, creating iconic sports watches and chronographs including the Carrera, Monaco, and Formula 1.

#Switzerland #Carrera #F1Timekeeper`,
    },
  },

  크롬하츠선글라스: {
    image: null,
    description: {
      ko: `925 실버 장식과 록시크 무드를 바탕으로 독창적인 디자인을 선보이는 럭셔리 아이웨어 브랜드입니다.

#미국 #DUCKBUTTER #럭셔리아이웨어`,
      en: `Chrome Hearts Eyewear is a luxury eyewear brand known for its distinctive designs, combining 925 sterling silver details with a rock-chic aesthetic.

#USA #DUCKBUTTER #LuxuryEyewear`,
    },
  },

  스와로브스키: {
    image: "/image/SWAROVSKI.jpg",
    description: {
      ko: `정교한 크리스털 기술로 빛의 아름다움을 완성하여 일상의 순간을 특별하게 만드는 크리스털 주얼리 브랜드입니다.

#오스트리아 #스완 #랩다이아`,
      en: `Swarovski is a crystal jewelry brand that brings the beauty of light to life through sophisticated crystal-cutting techniques, making everyday moments special.

#Austria #Swan #LabGrownDiamond`,
    },
  },

  타임파리: {
    image: "/image/time-paris.png",
    description: {
      ko: `타임 파리는 글로벌 시장을 겨냥한 타임의 컬렉션 브랜드로, 매 시즌 파리 패션 위크에 참가해 차별화된 컬렉션을 선보이고 있습니다.

#컬렉션룩 #셋업 #쇼피스`,
      en: `TIME PARIS is a collection-focused label created for the global market, presenting distinctive collections each season during Paris Fashion Week.

#CollectionLook #SetUp #Showpiece`,
    },
  },

  피어오브갓: {
    image: "/image/fear-of-god.png",
    description: {
      ko: `피어오브갓은 스트리트 감성과 미니멀 실루엣이 돋보이는 미국 럭셔리 브랜드입니다.

#미국 #스트리트럭셔리 #백로고후드`,
      en: `Fear of God is an American luxury fashion brand known for combining streetwear influences with refined, minimalist silhouettes.

#USA #StreetLuxury #LogoHoodie`,
    },
  },

  플리츠플리츠: {
    image: "/image/pleats-please.png",
    description: {
      ko: `플리츠플리츠는 독창적인 플리츠 소재와 편안한 실루엣이 특징인 일본 디자이너 브랜드입니다.

#이세이미야케 #먼슬리 #미스트`,
      en: `PLEATS PLEASE ISSEY MIYAKE is a Japanese designer brand known for its innovative pleated fabrics and comfortable silhouettes.

#ISSEYMIYAKE #Monthly #Mist`,
    },
  },

  토템: {
    image: "/image/toteme.png",
    description: {
      ko: `토템은 북유럽 감성의 미니멀 디자인과 세련된 실루엣이 돋보이는 럭셔리 브랜드입니다.

#스웨덴 #북유럽감성 #미니멀럭셔리`,
      en: `TOTEME is a Swedish luxury fashion brand known for Scandinavian minimalism and refined silhouettes.

#Sweden #ScandinavianStyle #MinimalLuxury`,
    },
  },

  코치: {
    image: "/image/coach.png",
    description: {
      ko: `코치는 뉴욕 헤리티지를 바탕으로 클래식과 트렌드를 결합한 모던 아메리칸 럭셔리 브랜드입니다.

#뉴욕헤리티지 #클래식아메리칸 #태비백`,
      en: `Coach is a modern American luxury brand that combines its New York heritage with classic design and contemporary style.

#NewYorkHeritage #ClassicAmerican #TabbyBag`,
    },
  },

  옴므플리쎄: {
    image: "/image/homme-plisse.jpg",
    description: {
      ko: `플리츠 소재와 실용적인 실루엣이 특징인 이세이미야케 남성 브랜드입니다.

#일본 #이세이미야케 #플리츠`,
      en: `HOMME PLISSÉ ISSEY MIYAKE is a menswear brand known for its signature pleated fabrics and functional silhouettes.

#Japan #ISSEYMIYAKE #Pleats`,
    },
  },

  언더커버: {
    image: "/image/undercover.png",
    description: {
      ko: `언더커버는 스트릿의 에너지와 하이엔드의 정교함을 결합한 브랜드입니다.

#일본 #준타카하시 #펑크룩`,
      en: `UNDERCOVER is a Japanese fashion brand that combines the energy of street culture with the refinement of high-end fashion.

#Japan #JunTakahashi #Punk`,
    },
  },

  "아크네 스튜디오": {
    image: "/image/ACNE STUDIOS.svg",
    description: {
      ko: `Acne Studios는 크리에이티브 디렉터 조니 요한슨이 스톡홀름에 설립한 브랜드입니다.

#스웨덴 #젠더리스무드 #데일리&하이엔드믹스스타일`,
      en: `Acne Studios is a brand founded in Stockholm by Creative Director Jonny Johansson.

#Sweden #GenderlessMood #DailyHighEndMix`,
    },
  },

  아워레가시: {
    image: "/image/OURLEGACY.jpg",
    description: {
      ko: `OUR LEGACY는 Jockum Hallin, Cristopher Nying 및 Richardos Klaren이 2005년에 설립한 스톡홀름 기반의 독립 패션 브랜드입니다.

#스웨덴 #미니멀리즘 #Collaboration`,
      en: `OUR LEGACY is an independent fashion brand based in Stockholm, founded in 2005 by Jockum Hallin, Cristopher Nying, and Richardos Klaren.

#Sweden #Minimalism #Collaboration`,
    },
  },

  아미: {
    image: "/image/AMI.png",
    description: {
      ko: `파리에서 영감 받은 자연스럽고 우아한 감성의 남녀 럭셔리 패션 브랜드입니다.

#프랑스 #프렌치시크 #하트로고`,
      en: `A Paris-inspired luxury fashion brand offering men's and women's collections with natural, elegant sensibilities.

#France #FrenchChic #HeartLogo`,
    },
  },

  아더에러: {
    image: "/image/ADERERROR.png",
    description: {
      ko: `아더에러는 2014년 설립되었으며 패션을 기반으로 한 문화 커뮤니케이션 브랜드입니다. 'but near missed things'이라는 브랜드 슬로건 아래 뜻밖의 경험을 느낄 수 있도록 표현하는 활동에 집중하고 있습니다.

#한국 #시그니피컨트 #포스트미니멀`,
      en: `Founded in 2014, ADERERROR is a cultural communication brand rooted in fashion. Under the slogan "but near missed things," the brand focuses on creating unexpected experiences by reinterpreting things that are often overlooked in everyday life.

#Korea #Significant #PostMinimal`,
    },
  },

  스톤아일랜드: {
    image: "/image/STONEISLAND.jpg",
    description: {
      ko: `기능성과 실험정신을 바탕으로 혁신적인 소재와 염색 기술로 독보적인 스타일을 완성하며 브랜드를 상징하는 나침반 로고와 같이 패션을 넘어 실험과 연구로 정의되는 브랜드입니다.

#이탈리아 #나일론메탈 #나침반로고`,
      en: `Driven by functionality and a spirit of experimentation, Stone Island creates a distinctive identity through innovative materials and advanced dyeing techniques. Symbolized by its iconic compass logo, the brand is defined by continuous research and experimentation beyond fashion.

#Italy #NylonMetal #CompassLogo`,
    },
  },

  막스마라: {
    image: "/image/MAXMARA.jpg",
    description: {
      ko: `1951년 런칭한 최초의 이탈리안 여성복 기업으로 전 세계에서 가장 중요한 패션하우스 중 하나이며, 우아하고 절제된 클래식 스타일로 유명한 프레타 포르테 브랜드입니다.

#이탈리아 #올드머니룩 #아이코닉코트`,
      en: `Max Mara is a prestigious Italian luxury fashion house founded in 1951 by Achille Maramotti in Reggio Emilia, pioneering modern high-quality ready-to-wear. Renowned for timeless, sophisticated womenswear, it is one of Italy's largest fashion groups.

#Italy #OldMoneyStyle #IconicCoat`,
    },
  },

  랑방컬렉션: {
    image: "/image/LANVINCOLLECTION.jpg",
    description: {
      ko: `잔느 랑방이 창조한 'LANVIN PARIS'를 기반으로 2009년 런칭한 브랜드로, 비대칭적인 유연한 볼륨과 우아한 실루엣을 통해 새로운 엘레강스를 표현합니다.

#프렌치감성 #페미닌룩 #올드머니룩`,
      en: `Launched in 2009, Lanvin Collection is a new elegance brand inspired by Jeanne Lanvin's "LANVIN PARIS." Defined by fluid volumes, refined silhouettes, and luxurious materials, the brand presents a distinctive sense of timeless elegance.

#FrenchStyle #FeminineLook #OldMoneyStyle`,
    },
  },

  "Y-3": {
    image: "/image/Y-3.png",
    description: {
      ko: `디자이너 요지 야마모토와 아디다스의 협업으로 탄생한 브랜드로, 아방가르드한 디자인과 스포티한 기능성이 조화된 하이엔드 패션을 제안합니다.

#일본 #YohjiYamamoto #하이엔드스트릿`,
      en: `A collaboration between Yohji Yamamoto and Adidas, Y-3 fuses avant-garde tailoring with sportswear functionality, defining a distinctive vision of premium street fashion.

#Japan #YohjiYamamoto #HighEndStreet`,
    },
  },

  R13: {
    image: "/image/R13.png",
    description: {
      ko: `펑크와 그런지 무드의 거친 디테일과 중성적인 핏을 바탕으로 세련된 스타일을 선보이는 뉴욕 디자이너 브랜드입니다.

#뉴욕 #펑크 #체크셔츠`,
      en: `R13 is a New York designer brand known for its refined style, combining punk and grunge-inspired details with gender-neutral silhouettes.

#NewYork #Punk #CheckShirt`,
    },
  },

  헬렌카민스키: {
    image: "/image/HELENKAMINSKI.jpg",
    description: {
      ko: `자연 친화적인 소재와 장인정신을 바탕으로 모자와 액세서리를 선보이는 호주 프리미엄 라이프스타일 브랜드입니다.

#오스트레일리아 #모자 #비앙카`,
      en: `Helen Kaminski is an Australian premium lifestyle brand known for hats and accessories crafted with natural materials and a strong commitment to craftsmanship.

#Australia #Hat #Bianca`,
    },
  },

  롱샴: {
    image: "/image/LONGCHAMP.jpg",
    description: {
      ko: `1948년 프랑스 파리에서 시작해 프렌치 감성과 현대적인 실용성을 결합한 디자인을 선보이는 럭셔리 라이프스타일 브랜드입니다.

#프랑스 #파리지앵 #르플리아쥬`,
      en: `Founded in Paris in 1948, Longchamp is a luxury lifestyle brand that combines French sensibility with modern functionality.

#France #Parisian #LePliage`,
    },
  },

  바오바오: {
    image: "/image/BAOBAO.jpg",
    description: {
      ko: `바오바오 이세이 미야케는 무한한 가변적인 모양을 만들 수 있게 배열된 조각들로 구성된다는 혁신적인 콘셉트와 생산 방식을 가지고 있는 브랜드입니다.

#일본 #삼각조각모양 #캐럿`,
      en: `BAO BAO ISSEY MIYAKE is a brand built on an innovative concept and production method, using geometric pieces arranged to create endlessly adaptable shapes.

#Japan #TriangularPieces #Carat`,
    },
  },

  투미: {
    image: "/image/TUMI.jpg",
    description: {
      ko: `기능성과 세련된 디자인을 결합한 퍼포먼스 럭셔리 라이프스타일 브랜드입니다.

#미국 #퍼포먼스럭셔리 #비즈니스백팩`,
      en: `TUMI is a performance luxury lifestyle brand that combines functionality with sophisticated design.

#USA #PerformanceLuxury #BusinessBackpack`,
    },
  },

  // ─────────────────────────────
  // 명품
  // ─────────────────────────────

  프라다남성: {
    image: "/image/PRADA.png",
    description: {
      ko: `프라다는 혁신적인 소재와 정제된 디자인을 바탕으로 전통과 현대적 감각을 결합한 컬렉션을 선보이는 이탈리아 럭셔리 패션 하우스입니다.

#이탈리아 #밀라노 #모던럭셔리`,
      en: `Prada is an Italian luxury fashion house known for combining heritage with contemporary design through innovative materials and refined aesthetics.

#Italy #Milan #ModernLuxury`,
    },
  },

  루이비통남성: {
    image: "/image/LOUISVUITTON.jpg",
    description: {
      ko: `루이 비통은 탁월한 장인정신과 창의성을 바탕으로 패션, 가죽제품, 슈즈, 액세서리 등 다양한 컬렉션을 선보이는 프랑스 럭셔리 메종입니다.

#프랑스 #럭셔리메종 #트렁크헤리티지`,
      en: `Louis Vuitton is a French luxury Maison renowned for exceptional craftsmanship and creativity across fashion, leather goods, shoes, accessories, and more.

#France #LuxuryMaison #TrunkHeritage`,
    },
  },

  // ─────────────────────────────
  // 시계
  // ─────────────────────────────

  해밀턴: {
    image: "/image/HAMILTON.png",
    description: {
      ko: `해밀턴은 미국의 감성과 스위스의 정밀함을 결합해 헤리티지와 혁신을 담은 타임피스를 선보이는 워치 브랜드입니다.

#스위스 #카키필드 #재즈마스터`,
      en: `Hamilton blends American spirit with Swiss precision, creating iconic timepieces rooted in heritage and innovation.

#Switzerland #KhakiField #Jazzmaster`,
    },
  },

  튜더: {
    image: "/image/TUDOR.jpg",
    description: {
      ko: `튜더는 대담한 디자인과 정밀성, 뛰어난 내구성을 바탕으로 헤리티지와 현대적인 감각을 선보이는 스위스 워치 브랜드입니다.

#스위스 #블랙베이 #헤리티지디자인`,
      en: `TUDOR is a Swiss watch brand known for its bold design, precision, outstanding durability, and distinctive heritage-inspired timepieces.

#Switzerland #BlackBay #HeritageDesign`,
    },
  },

  "IWC 샤프하우젠": {
    image: "/image/IWC.jpg",
    description: {
      ko: `IWC 샤프하우젠은 혁신적인 엔지니어링을 바탕으로 시대를 초월한 타임피스를 선보입니다.

#스위스 #인제니어 #우주·항공`,
      en: `IWC Schaffhausen creates timeless timepieces driven by innovative engineering.

#Switzerland #Ingenieur #Aviation`,
    },
  },

  오메가: {
    image: "/image/OMEGA.gif",
    description: {
      ko: `170여 년 전통의 스위스 워치메이킹 브랜드 오메가는 달에 간 최초의 시계이자 올림픽 공식 타임키퍼로, 혁신적인 기술력과 정밀한 워치메이킹을 선보입니다.

#스위스 #씨마스터 #올림픽`,
      en: `With over 170 years of Swiss watchmaking heritage, OMEGA is known as the first watch on the Moon and the Official Timekeeper of the Olympic Games, combining innovation with exceptional precision.

#Switzerland #Seamaster #Olympics`,
    },
  },

  // ─────────────────────────────
  // 패션 / 라이프스타일
  // ─────────────────────────────

  지미추: {
    image: "/image/JIMMYCHOO.jpg",
    description: {
      ko: `지미추는 럭셔리 슈즈로 시작해 세계적인 명성을 쌓은 영국 럭셔리 패션 브랜드로, 슈즈를 중심으로 가방과 다양한 액세서리를 선보입니다.

#영국 #럭셔리슈즈 #하이패션`,
      en: `Jimmy Choo is a British luxury fashion brand renowned worldwide for its iconic shoes, offering a range of bags and accessories alongside its signature footwear.

#UK #LuxuryShoes #HighFashion`,
    },
  },

  골든구스: {
    image: "/image/GOLDENGOOSE.png",
    description: {
      ko: `골든구스는 이탈리아 베니스에서 시작된 럭셔리 라이프스타일 브랜드로, ‘완벽한 불완전함’을 담은 Lived-in 디자인이 특징입니다. Co-Creation 서비스를 통해 Dream Maker와 함께 세상에 하나뿐인 나만의 제품을 완성할 수 있습니다.

#이탈리아 #Co-Creation #Lived-In`,
      en: `Golden Goose is an Italian luxury lifestyle brand from Venice, known for its “Perfect Imperfection” philosophy and distinctive lived-in designs. Through its Co-Creation service, customers can work with Dream Makers to create a one-of-a-kind personalized piece.

#Italy #Co-Creation #Lived-In`,
    },
  },

  무이: {
    image: "/image/MUE.jpg",
    description: {
      ko: `MUE(무이)는 럭셔리 소비자를 위한 감각적인 큐레이션과 혁신적인 브랜드 전개를 선보이는 하이엔드 편집숍입니다.

#하이엔드편집숍 #럭셔리큐레이션 #콜라보레이션`,
      en: `MUE is a refined high-end concept store offering distinctive curation for luxury consumers and innovative brand presentations.

#HighEndConceptStore #LuxuryCuration #Collaboration`,
    },
  },

  라이카: {
    image: "/image/LEICA.png",
    description: {
      ko: `라이카는 150년 이상의 역사를 바탕으로 혁신적인 기술과 독일 장인정신을 선보이는 프리미엄 카메라 브랜드입니다.

#독일헤리티지 #프리미엄카메라 #클래식`,
      en: `Leica is a premium camera brand with over 150 years of heritage, combining innovative technology with exceptional German craftsmanship.

#GermanHeritage #PremiumCamera #Classic`,
    },
  },

  "프린트 베이커리": {
    image: "/image/PRINTBAKERY.png",
    description: {
      ko: `프린트베이커리는 미술 대중화를 지향하는 아트 플랫폼 브랜드입니다.
빵을 사는 일상처럼 누구나 쉽고 가까이에서 미술을 향유하는 문화를 만들어갑니다.

#아트컬렉팅 #에디션 #원화`,
      en: `Print Bakery is an art lifestyle platform that makes art accessible to everyone, fostering a culture where people can enjoy art as easily and naturally as buying bread.

#ArtCollecting #Edition #OriginalArt`,
    },
  },
};