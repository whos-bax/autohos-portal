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

// 정비소 이미지 URL 모음
const shopImages = [
  "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&h=300&fit=crop",
];

// 정비소 데이터 생성 함수
function generateShops() {
  const shopPrefixes = [
    "블루오토", "카닥터", "퍼스트모터스", "스피드케어", "엘리트오토",
    "굿모닝카센터", "프리미엄카", "탑모터스", "베스트카", "원카서비스",
    "프로카케어", "마스터오토", "케어존", "오토피아", "카존",
    "드림카", "스타모터스", "에이스오토", "로얄카", "퍼펙트카",
  ];

  const areas = [
    { gu: "강남구", dongs: ["역삼동", "논현동", "청담동", "삼성동", "대치동", "신사동", "압구정동"] },
    { gu: "서초구", dongs: ["서초동", "반포동", "잠원동", "방배동", "양재동"] },
    { gu: "송파구", dongs: ["잠실동", "문정동", "가락동", "석촌동", "방이동", "오금동"] },
    { gu: "마포구", dongs: ["상암동", "연남동", "망원동", "합정동", "서교동", "홍대입구"] },
    { gu: "영등포구", dongs: ["여의도동", "당산동", "영등포동", "신길동", "대림동"] },
    { gu: "강서구", dongs: ["화곡동", "등촌동", "발산동", "마곡동", "공항동"] },
    { gu: "노원구", dongs: ["상계동", "중계동", "하계동", "월계동", "공릉동"] },
    { gu: "성북구", dongs: ["정릉동", "길음동", "석관동", "돈암동", "장위동"] },
    { gu: "광진구", dongs: ["건대입구", "구의동", "자양동", "화양동", "군자동"] },
    { gu: "동작구", dongs: ["사당동", "노량진동", "대방동", "상도동", "흑석동"] },
    { gu: "관악구", dongs: ["신림동", "봉천동", "남현동", "서원동"] },
    { gu: "용산구", dongs: ["이태원동", "한남동", "용산동", "청파동", "효창동"] },
    { gu: "성동구", dongs: ["성수동", "왕십리동", "금호동", "행당동", "옥수동"] },
    { gu: "은평구", dongs: ["연신내", "불광동", "응암동", "녹번동", "갈현동"] },
    { gu: "중구", dongs: ["명동", "충무로", "을지로", "신당동", "황학동"] },
  ];

  const specialties = [
    "수입차 전문", "엔진 전문", "종합 정비", "오일/소모품", "외형 복원",
    "타이어 전문", "에어컨 전문", "전기차 전문", "튜닝 전문", "판금/도색",
  ];

  const shops = [];

  for (let i = 1; i <= 80; i++) {
    const prefix = shopPrefixes[i % shopPrefixes.length];
    const areaInfo = areas[i % areas.length];
    const dong = areaInfo.dongs[i % areaInfo.dongs.length];
    const specialty = specialties[i % specialties.length];
    const image = shopImages[i % shopImages.length];

    // 거리는 0.3km ~ 15km 범위
    const distance = (0.3 + (i * 0.18) % 14.7).toFixed(1);
    // 평점은 4.0 ~ 5.0 범위
    const rating = (4.0 + (i % 10) * 0.1).toFixed(1);
    // 리뷰 수는 30 ~ 500 범위
    const reviews = 30 + ((i * 17) % 470);
    // 오늘 정비 수는 1 ~ 15
    const todayCount = 1 + (i % 15);
    // 영업 여부는 대부분 영업 중
    const open = i % 7 !== 0;

    shops.push({
      id: i,
      name: `${prefix} ${dong.replace("동", "")}점`,
      area: `${areaInfo.gu} ${dong}`,
      rating: parseFloat(rating),
      reviews,
      specialty,
      distance: `${distance}km`,
      todayCount,
      open,
      image,
    });
  }

  return shops;
}

// 정비소 데이터
export const shops = generateShops();

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

// 정비소 리뷰 데이터
const reviewTemplates = [
  { author: "김차주", car: "그랜저 IG", content: "친절하고 꼼꼼하게 설명해주셔서 좋았습니다. 가격도 합리적이고 다음에도 방문할 예정입니다.", rating: 5 },
  { author: "이정비", car: "소나타 DN8", content: "엔진오일 교환하러 갔는데 다른 문제점도 찾아주셨어요. 강추합니다!", rating: 5 },
  { author: "박모터", car: "K5 DL3", content: "예약 시간에 맞춰서 빠르게 처리해주셨습니다. 대기 공간도 깔끔해요.", rating: 5 },
  { author: "최카센", car: "투싼 NX4", content: "브레이크 패드 교환했는데 정품 부품 사용하고 영수증도 꼼꼼히 챙겨주셨습니다.", rating: 5 },
  { author: "정오토", car: "싼타페 MX5", content: "가격 대비 서비스가 훌륭합니다. 직원분들이 전문적이에요.", rating: 4 },
  { author: "한드라이브", car: "아반떼 CN7", content: "타이어 교환하러 갔는데 정렬까지 꼼꼼히 해주셨어요.", rating: 5 },
  { author: "윤카맨", car: "쏘렌토 MQ4", content: "에어컨 점검 받았는데 시원하게 잘 나옵니다. 감사합니다!", rating: 4 },
  { author: "강차량", car: "카니발 KA4", content: "대형차인데도 신속하게 처리해주셨습니다. 믿고 맡길 수 있는 곳.", rating: 5 },
  { author: "조정비사", car: "G80", content: "수입차 전문이라 그런지 확실히 다르네요. 세심한 케어 감사합니다.", rating: 5 },
  { author: "임오너", car: "EV6", content: "전기차 점검 가능한 곳이 많지 않은데 여기는 전문적으로 해주세요.", rating: 5 },
  { author: "송카페", car: "5시리즈", content: "BMW 전문점답게 부품도 정품이고 작업도 깔끔합니다.", rating: 4 },
  { author: "신모터스", car: "E클래스", content: "벤츠 정비 여러 군데 다녀봤는데 여기가 제일 만족스럽습니다.", rating: 5 },
  { author: "류드라이버", car: "코나", content: "소모품 교환 가격이 합리적이에요. 설명도 자세히 해주십니다.", rating: 4 },
  { author: "오카고", car: "셀토스", content: "첫 방문인데 친절하게 안내해주셔서 좋았습니다.", rating: 5 },
  { author: "서비스킹", car: "스포티지", content: "예상보다 빨리 끝나서 좋았어요. 실력 있는 곳입니다.", rating: 5 },
  { author: "차덕후", car: "GV70", content: "제네시스 전문 정비소라 안심하고 맡겼습니다. 결과도 만족!", rating: 5 },
  { author: "민카매니아", car: "팰리세이드", content: "대형 SUV 정비 경험이 풍부하신 것 같아요. 믿음이 갑니다.", rating: 4 },
  { author: "현정비러", car: "아이오닉", content: "하이브리드 차량도 능숙하게 다루시네요. 추천합니다.", rating: 5 },
  { author: "백차주님", car: "말리부", content: "쉐보레 차량 전문이라 부품 수급도 빠르고 좋아요.", rating: 4 },
  { author: "나운전", car: "트레일블레이저", content: "SUV 정비 잘하시는 곳입니다. 가격도 적당해요.", rating: 5 },
];

// 리뷰 타입 정의
type Review = {
  id: number;
  author: string;
  car: string;
  content: string;
  rating: number;
  date: string;
};

// 정비소별 리뷰 생성
function generateShopReviews() {
  const shopReviews: Record<number, Review[]> = {};

  for (let shopId = 1; shopId <= 80; shopId++) {
    const reviewCount = 3 + (shopId % 4); // 3~6개 리뷰
    const reviews = [];

    for (let i = 0; i < reviewCount; i++) {
      const templateIndex = (shopId + i) % reviewTemplates.length;
      const template = reviewTemplates[templateIndex];
      const daysAgo = (shopId + i) % 30;

      reviews.push({
        ...template,
        id: shopId * 100 + i,
        date: daysAgo === 0 ? "오늘" : daysAgo === 1 ? "어제" : `${daysAgo}일 전`,
      });
    }

    shopReviews[shopId] = reviews;
  }

  return shopReviews;
}

export const shopReviews = generateShopReviews();

// 별점순 상위 정비소 (상위 10개)
export const topRatedShops = [...shops]
  .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
  .slice(0, 10);
