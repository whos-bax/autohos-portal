export interface Car {
  brand: string;
  model: string;
  year: string;
  repairs?: number;
  image?: string;
}

export interface Shop {
  id: number;
  name: string;
  area: string;
  rating: number;
  reviews: number;
  specialty: string;
  distance: string;
  todayCount: number;
  open: boolean;
  image: string;
}

export interface RepairStat {
  item: string;
  frequency: string;
  avgCost: string;
  range: string;
}

export interface CommunityPost {
  category: string;
  title: string;
  author: string;
  time: string;
  comments: number;
  views: number;
  hot: boolean;
}

export interface RepairTrend {
  item: string;
  count: number;
  avg: string;
  trend: string;
}
