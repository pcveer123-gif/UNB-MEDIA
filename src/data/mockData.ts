import { Creator, Service } from '../types';

export const CREATORS: Creator[] = [
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    handle: '@elenarostova',
    category: 'Fashion',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsL2C8ltvQG8e1lvV2-BCvl3FEtRKImfZ_S0dFNgd2161T4ZXxSzmgsmMhlnGhFazJibNNUznt9uCSIChP7t2g8BgwtzHcA1rOkLXRBH3dWvkUn1AvaHLVyELXH1zyXEz3i6pgq9HjcyNcy82O6L2QdKQUGhivlafEKnAlODxW03zeD4CYO_0dG_TVY6ZBhtjr9tsUc4RDZZcTP5YvxFs6Nf5Gj_0eODmkyJl9NRFB47TWAlN_6iLD',
    followers: '1.2M',
    followersCount: 1200000,
    avgViews: '450K',
    avgViewsCount: 450000,
    engagementRate: '5.4%',
    hasLiveCampaign: true,
    liveCampaignDetails: 'Autumn Haute Couture Capsule w/ Maison Margiela',
    bio: 'Editorial fashion stylist and digital creator based between Paris and New York. Specializing in avant-garde monochrome aesthetics, luxury capsule lookbooks, and high-fashion storytelling.',
    location: 'Paris / New York',
    platforms: [
      { platform: 'Instagram', handle: '@elenarostova', followers: '820K' },
      { platform: 'TikTok', handle: '@elena.editorial', followers: '340K' },
      { platform: 'YouTube', handle: 'Elena Rostova Studio', followers: '40K' },
    ],
    pastBrands: ['Saint Laurent', 'Celine', 'Bottega Veneta', 'Dior Beauty', 'Byredo'],
    featuredWorks: [
      {
        title: 'Monochrome Winter Editorial',
        metric: '1.8M Impressions',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
        type: 'Reels Campaign'
      },
      {
        title: 'Paris Fashion Week Front Row Review',
        metric: '720K Views',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
        type: 'Story Takeover'
      }
    ],
    demographics: {
      topAge: '22 - 34 (71%)',
      topGender: '68% Female / 32% Male',
      topCountry: 'United States, France, UK',
    },
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    handle: '@marcus.tech',
    category: 'Tech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9sUdKTDPD7691tTqP_dNeYMm4yiG5MZZRFcSz9v9Z3myTU7f10muq44Gw9edyJnGkoiG5gQqsi23gSgzE9Vb3JgggfmwYfcYvHyzDYLP5PRolBb73tmcHwBevnhijgLHk_SaC5usZcqeEUHj288NPeeqMfpsYbUvmLxWjjWxSU7rGpTXMu3lMyy1SLeCXEwdytLihA0ug95dvHIK_OSJQ93F8unwo3jvtnNwre--rD4h9nGc5eVu',
    followers: '850K',
    followersCount: 850000,
    avgViews: '320K',
    avgViewsCount: 320000,
    engagementRate: '6.2%',
    hasLiveCampaign: false,
    bio: 'Product designer & tech reviewer exploring the intersection of minimalist hardware, desk setups, and developer productivity workflows.',
    location: 'San Francisco, CA',
    platforms: [
      { platform: 'YouTube', handle: 'Marcus Chen Studio', followers: '510K' },
      { platform: 'Instagram', handle: '@marcus.tech', followers: '240K' },
      { platform: 'X', handle: '@marcustech', followers: '100K' },
    ],
    pastBrands: ['Apple', 'Logitech', 'Sony', 'Notion', 'Keychron'],
    featuredWorks: [
      {
        title: 'Minimalist Workspace Overhaul 2025',
        metric: '1.2M Views',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
        type: 'Dedicated Video'
      },
      {
        title: 'Mechanical Keyboards & Studio Audio',
        metric: '480K Views',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        type: 'Sponsored Review'
      }
    ],
    demographics: {
      topAge: '24 - 38 (82%)',
      topGender: '74% Male / 26% Female',
      topCountry: 'United States, Germany, Japan',
    },
  },
  {
    id: 'sophia-al-mansoor',
    name: 'Sophia Al-Mansoor',
    handle: '@sophia.mansoor',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    followers: '1.6M',
    followersCount: 1600000,
    avgViews: '610K',
    avgViewsCount: 610000,
    engagementRate: '4.9%',
    hasLiveCampaign: true,
    liveCampaignDetails: 'Global Skincare Ritual Ambassador w/ Augustinus Bader',
    bio: 'Holistic skincare chemist and beauty curator. Combining clinical ingredient breakdown with editorial beauty artistry and organic wellness.',
    location: 'Dubai / London',
    platforms: [
      { platform: 'Instagram', handle: '@sophia.mansoor', followers: '980K' },
      { platform: 'TikTok', handle: '@sophiaskincare', followers: '620K' },
    ],
    pastBrands: ['Augustinus Bader', 'La Mer', 'Aesop', 'Chanel Beauty', 'Dyson Hair'],
    featuredWorks: [
      {
        title: 'Clinical Peptide Science Explained',
        metric: '2.4M Views',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        type: 'Shorts & Reels'
      }
    ],
    demographics: {
      topAge: '20 - 40 (78%)',
      topGender: '84% Female / 16% Male',
      topCountry: 'UAE, UK, United States',
    },
  },
  {
    id: 'julian-vance',
    name: 'Julian Vance',
    handle: '@julianvance.arch',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    followers: '680K',
    followersCount: 680000,
    avgViews: '240K',
    avgViewsCount: 240000,
    engagementRate: '5.8%',
    hasLiveCampaign: false,
    bio: 'Architectural photographer and modernist interior architect highlighting brutalist concrete, bespoke furniture, and sustainable Nordic living spaces.',
    location: 'Copenhagen / Berlin',
    platforms: [
      { platform: 'Instagram', handle: '@julianvance.arch', followers: '520K' },
      { platform: 'YouTube', handle: 'Julian Vance Architecture', followers: '160K' },
    ],
    pastBrands: ['Vitra', 'Herman Miller', 'Poltrona Frau', ' Bang & Olufsen', 'Rimowa'],
    featuredWorks: [
      {
        title: 'Nordic Passive House Showcase',
        metric: '890K Views',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        type: 'Architectural Docu-Series'
      }
    ],
    demographics: {
      topAge: '26 - 45 (85%)',
      topGender: '55% Male / 45% Female',
      topCountry: 'Denmark, Germany, US, Sweden',
    },
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    handle: '@mayalin.table',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    followers: '940K',
    followersCount: 940000,
    avgViews: '380K',
    avgViewsCount: 380000,
    engagementRate: '6.1%',
    hasLiveCampaign: false,
    bio: 'Editorial food author, slow living advocate, and ceramicist. Bringing artisanal table settings, seasonal fermentation, and culinary tranquility.',
    location: 'Kyoto / Los Angeles',
    platforms: [
      { platform: 'Instagram', handle: '@mayalin.table', followers: '680K' },
      { platform: 'TikTok', handle: '@mayalintable', followers: '260K' },
    ],
    pastBrands: ['Le Creuset', 'Diptyque', 'Nespresso', 'Our Place', 'Kinfolk'],
    featuredWorks: [
      {
        title: 'Morning Rituals in Kyoto',
        metric: '1.4M Views',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        type: 'Visual Journal'
      }
    ],
    demographics: {
      topAge: '22 - 38 (80%)',
      topGender: '72% Female / 28% Male',
      topCountry: 'United States, Japan, Canada',
    },
  },
  {
    id: 'liam-oconnor',
    name: 'Liam O’Connor',
    handle: '@liam.nomad',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    followers: '1.1M',
    followersCount: 1100000,
    avgViews: '520K',
    avgViewsCount: 520000,
    engagementRate: '5.1%',
    hasLiveCampaign: true,
    liveCampaignDetails: 'Alpine Expedition Series w/ Arc’teryx',
    bio: 'National Geographic contributing visual journalist and high-altitude alpinist documenting remote expeditions and wild conservation efforts.',
    location: 'Zurich / Vancouver',
    platforms: [
      { platform: 'Instagram', handle: '@liam.nomad', followers: '740K' },
      { platform: 'YouTube', handle: 'Liam O’Connor Expeditions', followers: '360K' },
    ],
    pastBrands: ['Arc’teryx', 'Leica Camera', 'Land Rover', 'Patagonia', 'Red Bull'],
    featuredWorks: [
      {
        title: 'Patagonian Ice Field Crossing',
        metric: '2.1M Views',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        type: 'Expedition Film'
      }
    ],
    demographics: {
      topAge: '24 - 42 (75%)',
      topGender: '60% Male / 40% Female',
      topCountry: 'Switzerland, US, Canada, Norway',
    },
  }
];

export const SERVICES: Service[] = [
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    description: 'End-to-end execution of high-impact influencer campaigns tailored to brand objectives.',
    iconName: 'campaign',
    features: [
      'Strategic Creator Discovery & Curation',
      'Editorial Creative Brief Development',
      'Contract Negotiation & Legal Clearance',
      'Multi-Platform Campaign Orchestration',
      'Real-Time Performance Tracking & ROI Auditing'
    ]
  },
  {
    id: 'brand-collaborations',
    title: 'Brand Collaborations',
    description: 'Facilitating premium partnerships and co-creation opportunities between brands and top-tier talent.',
    iconName: 'handshake',
    isPremium: true,
    features: [
      'Exclusive Capsule Collection Co-Design',
      'Long-Term Brand Ambassador Agreements',
      'Bespoke Product Seeding & VIP Gifting',
      'VIP Event Activations & Front-Row Access',
      'White-Glove Executive Concierge'
    ]
  },
  {
    id: 'talent-representation',
    title: 'Talent Management',
    description: 'Bespoke representation for elite digital creators navigating commercial strategy and personal brand legacy.',
    iconName: 'diamond',
    features: [
      'Inbound Commercial Sifting & Filtering',
      'Global Rights & Licensing Protection',
      'Content Quality & Aesthetic Advisory',
      'Publishing, Podcast & Venture Incubation'
    ]
  },
  {
    id: 'content-analytics',
    title: 'Editorial Content Production',
    description: 'High-craft visual assets, short films, and studio photography designed for multichannel brand amplification.',
    iconName: 'analytics',
    features: [
      'Full Studio & On-Location Production',
      'Color Grading & High-Fidelity Audio Mastering',
      'Paid Social Asset Re-Purposing (Spark / Whitelisting)',
      'Full Copyright & Commercial Asset Handover'
    ]
  }
];

export const CLIENT_LOGOS = [
  'VOGUE', 'CELINE', 'APPLE', 'BYREDO', 'LEICA', 'ARC’TERYX', 'RIMOWA', 'AESOP'
];

export const AGENCY_STATS = [
  { value: '50M+', label: 'Combined Global Reach' },
  { value: '98%', label: 'Campaign Retention Rate' },
  { value: '$14M+', label: 'Delivered Media Value' },
  { value: '180+', label: 'Curated Partnerships' },
];
