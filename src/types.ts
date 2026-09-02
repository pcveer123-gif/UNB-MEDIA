export interface Creator {
  id: string;
  name: string;
  handle: string;
  category: 'Fashion' | 'Tech' | 'Lifestyle' | 'Beauty' | 'Design' | 'Travel';
  image: string;
  followers: string;
  followersCount: number;
  avgViews: string;
  avgViewsCount: number;
  engagementRate: string;
  hasLiveCampaign: boolean;
  liveCampaignDetails?: string;
  bio: string;
  location: string;
  platforms: {
    platform: 'Instagram' | 'TikTok' | 'YouTube' | 'X';
    handle: string;
    followers: string;
  }[];
  pastBrands: string[];
  featuredWorks: {
    title: string;
    metric: string;
    image: string;
    type: string;
  }[];
  demographics: {
    topAge: string;
    topGender: string;
    topCountry: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'campaign' | 'handshake' | 'diamond' | 'analytics';
  isPremium?: boolean;
  features: string[];
}

export interface CampaignInquiry {
  type: 'brand' | 'creator';
  name: string;
  companyOrHandle: string;
  email: string;
  budget: string;
  timeline: string;
  goals: string[];
  message: string;
  selectedCreators: string[];
}
