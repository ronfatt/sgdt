export interface MetricItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  iconName: string;
}

export interface KeywordItem {
  id: string;
  label: string;
  effect: 'computing' | 'deflation' | 'reward' | 'community' | 'ecosystem';
}

export interface EcosystemModule {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  period: string;
  items: string[];
}

export const HERO_KEYWORDS: KeywordItem[] = [
  { id: "computing", label: "COMPUTING POWER", effect: "computing" },
  { id: "deflation", label: "DEFLATION", effect: "deflation" },
  { id: "reward", label: "REWARD", effect: "reward" },
  { id: "community", label: "COMMUNITY", effect: "community" },
  { id: "ecosystem", label: "ECOSYSTEM", effect: "ecosystem" },
];

export const LIVE_METRICS: MetricItem[] = [
  {
    id: "community",
    label: "GLOBAL COMMUNITY",
    value: 1246892,
    suffix: "",
    iconName: "Users",
  },
  {
    id: "users",
    label: "ECOSYSTEM USERS",
    value: 3782159,
    suffix: "",
    iconName: "Globe",
  },
  {
    id: "power",
    label: "TOTAL COMPUTING POWER",
    value: 58.72,
    suffix: " PH/s",
    decimals: 2,
    iconName: "Cpu",
  },
  {
    id: "burned",
    label: "TOKENS BURNED",
    value: 26781309,
    suffix: " SGDT",
    iconName: "Flame",
  },
  {
    id: "growth",
    label: "NETWORK GROWTH",
    value: 187.63,
    suffix: "%",
    decimals: 2,
    iconName: "TrendingUp",
  },
];

export const ECOSYSTEM_MODULES: EcosystemModule[] = [
  {
    id: "asset",
    title: "DIGITAL ASSET",
    subTitle: "Value Carrier",
    description: "High-liquidity core asset driving value exchange and reserve asset utility across global network ecosystems.",
    icon: "Coins",
  },
  {
    id: "power",
    title: "COMPUTING POWER",
    subTitle: "Network Infrastructure",
    description: "User participation and hardware resources aggregate into high-performance decentralized computing power.",
    icon: "Zap",
  },
  {
    id: "reward",
    title: "ECOSYSTEM REWARD",
    subTitle: "Incentive Protocol",
    description: "Algorithmic distribution rewards active network contributors, node operators, and ecosystem liquidity providers.",
    icon: "Gift",
  },
  {
    id: "burn",
    title: "TOKEN BURN",
    subTitle: "Deflation Mechanism",
    description: "Systematic smart contract protocol burns tokens based on computing activity and ecosystem transaction volume.",
    icon: "Flame",
  },
  {
    id: "deflation",
    title: "DEFLATION",
    subTitle: "Reduced Supply",
    description: "Continuous supply contraction creates economic scarcity and elevates long-term token value metrics.",
    icon: "TrendingDown",
  },
  {
    id: "cycle",
    title: "VALUE CYCLE",
    subTitle: "Sustainable Growth",
    description: "Self-reinforcing economic feedback loop connecting supply reduction directly to increased participation incentive.",
    icon: "RefreshCw",
  },
];

export const WHY_SGDT_FEATURES: FeatureItem[] = [
  {
    id: "participation",
    title: "REAL PARTICIPATION",
    description: "Active community engagement converts directly into real infrastructure and measurable network growth.",
    icon: "UserCheck",
  },
  {
    id: "deflationary",
    title: "DEFLATIONARY MODEL",
    description: "Automatic transaction and computing power burn algorithms guarantee continuous supply scarcity.",
    icon: "ShieldAlert",
  },
  {
    id: "economy",
    title: "COMPUTING POWER ECONOMY",
    description: "Decentralized computing power drives yield generation and real-world Web3 application processing.",
    icon: "Cpu",
  },
  {
    id: "network",
    title: "COMMUNITY NETWORK",
    description: "Global interconnected node architecture produces compounding organic network security and adoption.",
    icon: "Share2",
  },
  {
    id: "incentives",
    title: "ECOSYSTEM INCENTIVES",
    description: "Multi-layered dynamic reward structures continuously compensate early adopters and long-term stakers.",
    icon: "Award",
  },
  {
    id: "vision",
    title: "LONG-TERM VISION",
    description: "Architected for institutional-grade stability, long-term economic balance, and generational Web3 impact.",
    icon: "Compass",
  },
];

export const FLYWHEEL_STEPS = [
  { step: "01", title: "MORE USERS", desc: "Global adoption expands network footprint" },
  { step: "02", title: "MORE PARTICIPATION", desc: "Increased interaction across decentralized services" },
  { step: "03", title: "MORE COMPUTING POWER", desc: "Infrastructure scales up dynamically" },
  { step: "04", title: "MORE ECOSYSTEM ACTIVITY", desc: "Transaction volume & protocol utility surges" },
  { step: "05", title: "MORE TOKEN BURN", desc: "Smart contracts destroy tokens continuously" },
  { step: "06", title: "LOWER CIRCULATING SUPPLY", desc: "Scarcity threshold increases protocol value" },
  { step: "07", title: "STRONGER ECOSYSTEM VALUE", desc: "Yield & security attract high-value participants" },
  { step: "08", title: "MORE USERS", desc: "Virtuous cycle repeats with exponential scale" },
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "PHASE 01",
    title: "ECOSYSTEM FOUNDATION",
    period: "Q1 - Q2 2025",
    items: [
      "Ecosystem Architecture & Smart Contract Audit",
      "Digital Asset Deflationary Protocol Mechanism",
      "Core Community Node Initialization & Governance Framework",
    ],
  },
  {
    phase: "PHASE 02",
    title: "NETWORK EXPANSION",
    period: "Q3 - Q4 2025",
    items: [
      "Global Market Expansion & Tier 1 Exchange Listing Strategy",
      "Decentralized Computing Power Node Onboarding",
      "Ecosystem Staking Pools & Automated Burn Engine",
    ],
  },
  {
    phase: "PHASE 03",
    title: "ECOSYSTEM APPLICATION",
    period: "Q1 - Q2 2026",
    items: [
      "Enterprise Web3 API & Cross-Chain Infrastructure",
      "Strategic Institutional Liquidity & Treasury Partnerships",
      "Real-World Asset (RWA) & Computing Yield Integrations",
    ],
  },
  {
    phase: "PHASE 04",
    title: "GLOBAL ECOSYSTEM",
    period: "Q3 2026+",
    items: [
      "Fully Autonomous Decentralized Governance (DAO)",
      "Global High-Performance Computing Mesh Deployment",
      "Complete Web3 Institutional FinTech Protocol Standard",
    ],
  },
];

export const REGIONAL_NODES = [
  { name: "Southeast Asia", lat: 1.3521, lng: 103.8198, x: "78%", y: "58%" },
  { name: "East Asia", lat: 35.6762, lng: 139.6503, x: "84%", y: "38%" },
  { name: "Middle East", lat: 25.2048, lng: 55.2708, x: "62%", y: "45%" },
  { name: "Europe", lat: 51.5074, lng: -0.1278, x: "48%", y: "30%" },
  { name: "North America", lat: 40.7128, lng: -74.006, x: "24%", y: "32%" },
  { name: "South America", lat: -23.5505, lng: -46.6333, x: "32%", y: "70%" },
];
