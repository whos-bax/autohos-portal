// 차량 브랜드 및 모델 데이터
export const carBrands: Record<string, string[]> = {
  현대: [
    "그랜저",
    "소나타",
    "아반떼",
    "투싼",
    "싼타페",
    "팰리세이드",
    "아이오닉",
    "코나",
  ],
  기아: ["K5", "K8", "K9", "스포티지", "쏘렌토", "카니발", "EV6", "셀토스"],
  제네시스: ["G70", "G80", "G90", "GV70", "GV80", "GV60"],
  쉐보레: ["말리부", "트레일블레이저", "트랙스", "이쿼녹스", "타호"],
  BMW: ["3시리즈", "5시리즈", "7시리즈", "X3", "X5", "X7"],
  벤츠: ["C클래스", "E클래스", "S클래스", "GLC", "GLE", "GLS"],
};

export const years = Array.from({ length: 15 }, (_, i) => 2025 - i);

// 인기 차량 데이터
export const popularCars = [
  {
    brand: "현대",
    model: "그랜저",
    year: "2020~2024",
    repairs: 45230,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=250&fit=crop",
  },
  {
    brand: "기아",
    model: "K5",
    year: "2020~2024",
    repairs: 38920,
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=250&fit=crop",
  },
  {
    brand: "현대",
    model: "소나타",
    year: "2019~2024",
    repairs: 41230,
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=250&fit=crop",
  },
  {
    brand: "기아",
    model: "쏘렌토",
    year: "2020~2024",
    repairs: 29450,
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=400&h=250&fit=crop",
  },
  {
    brand: "현대",
    model: "투싼",
    year: "2021~2024",
    repairs: 25680,
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=250&fit=crop",
  },
  {
    brand: "제네시스",
    model: "G80",
    year: "2020~2024",
    repairs: 18920,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop",
  },
  {
    brand: "현대",
    model: "아반떼",
    year: "2020~2024",
    repairs: 52340,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop",
  },
  {
    brand: "기아",
    model: "카니발",
    year: "2021~2024",
    repairs: 21450,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop",
  },
  {
    brand: "BMW",
    model: "5시리즈",
    year: "2020~2024",
    repairs: 15670,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop",
  },
  {
    brand: "벤츠",
    model: "E클래스",
    year: "2020~2024",
    repairs: 14230,
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=250&fit=crop",
  },
];

// 정비 통계 데이터
export const repairStats = [
  {
    item: "엔진오일 교환",
    frequency: "6,000km / 6개월",
    avgCost: "85,000원",
    range: "70,000 ~ 100,000원",
  },
  {
    item: "에어컨 필터",
    frequency: "15,000km / 1년",
    avgCost: "35,000원",
    range: "25,000 ~ 45,000원",
  },
  {
    item: "브레이크 패드 (전륜)",
    frequency: "40,000km",
    avgCost: "150,000원",
    range: "120,000 ~ 180,000원",
  },
  {
    item: "브레이크 패드 (후륜)",
    frequency: "60,000km",
    avgCost: "130,000원",
    range: "100,000 ~ 160,000원",
  },
  {
    item: "타이어 교환 (4개)",
    frequency: "50,000km",
    avgCost: "400,000원",
    range: "280,000 ~ 600,000원",
  },
  {
    item: "미션오일",
    frequency: "80,000km",
    avgCost: "120,000원",
    range: "100,000 ~ 150,000원",
  },
];

// 정비소 데이터
export const shops = [
  {
    id: 1,
    name: "모드게러지",
    area: "강남구 역삼동",
    rating: 4.8,
    reviews: 128,
    specialty: "수입차 전문",
    distance: "1.2km",
    todayCount: 5,
    open: true,
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "태영자동차공업소",
    area: "서초구 서초동",
    rating: 4.7,
    reviews: 89,
    specialty: "엔진 전문",
    distance: "2.1km",
    todayCount: 3,
    open: true,
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "카서비스샵",
    area: "송파구 잠실동",
    rating: 4.9,
    reviews: 156,
    specialty: "종합 정비",
    distance: "3.5km",
    todayCount: 8,
    open: true,
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "오일웍스 강남점",
    area: "강남구 논현동",
    rating: 4.6,
    reviews: 234,
    specialty: "오일/소모품",
    distance: "0.8km",
    todayCount: 12,
    open: false,
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "프리미엄카케어",
    area: "강남구 청담동",
    rating: 4.9,
    reviews: 312,
    specialty: "수입차 전문",
    distance: "4.2km",
    todayCount: 6,
    open: true,
    image:
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "스피드모터스",
    area: "서초구 반포동",
    rating: 4.5,
    reviews: 178,
    specialty: "종합 정비",
    distance: "2.8km",
    todayCount: 9,
    open: true,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
  },
];

// 커뮤니티 게시글 데이터
export const communityPosts = [
  {
    category: "정비 Q&A",
    title: "엔진오일 교환주기 어떻게 되나요?",
    author: "초보운전자",
    time: "10분 전",
    comments: 12,
    views: 234,
    hot: false,
  },
  {
    category: "비용 후기",
    title: "소나타 DN8 브레이크 패드 교환 15만원",
    author: "소나타러버",
    time: "1시간 전",
    comments: 8,
    views: 456,
    hot: true,
  },
  {
    category: "정비 팁",
    title: "겨울철 차량 관리 꿀팁 공유합니다",
    author: "정비왕",
    time: "3시간 전",
    comments: 24,
    views: 892,
    hot: true,
  },
  {
    category: "그랜저",
    title: "그랜저 IG 6만km 후기 및 정비 내역",
    author: "그랜저매니아",
    time: "5시간 전",
    comments: 31,
    views: 1023,
    hot: true,
  },
  {
    category: "K5",
    title: "K5 DL3 타이어 추천 부탁드려요",
    author: "K5오너",
    time: "6시간 전",
    comments: 15,
    views: 567,
    hot: false,
  },
  {
    category: "정비 팁",
    title: "셀프 세차 후 왁스 코팅 방법",
    author: "세차매니아",
    time: "8시간 전",
    comments: 19,
    views: 723,
    hot: false,
  },
];

// 정비 트렌드 데이터
export const repairTrends = [
  { item: "엔진오일 교환", count: 12340, avg: "85,000원", trend: "+5%" },
  { item: "브레이크 패드", count: 5670, avg: "150,000원", trend: "+12%" },
  { item: "에어컨 필터", count: 4320, avg: "35,000원", trend: "-3%" },
  { item: "타이어 교환", count: 3210, avg: "320,000원", trend: "+8%" },
];
