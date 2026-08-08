export type Language = "en" | "zh";

export interface TranslationKeys {
  nav: {
    ecosystem: string;
    tokenomics: string;
    roadmap: string;
    community: string;
    whitepaper: string;
    joinSgdt: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    subtitleHighlight: string;
    description: string;
    exploreEcosystem: string;
    joinCommunity: string;
    scrollExplore: string;
    keywords: {
      computing: string;
      deflation: string;
      reward: string;
      community: string;
      ecosystem: string;
    };
  };
  metrics: {
    community: string;
    users: string;
    power: string;
    burned: string;
    growth: string;
  };
  ecosystem: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    moduleDetail: string;
    flowTitle: string;
    flowSteps: string[];
    modules: Record<string, { title: string; subTitle: string; desc: string }>;
  };
  pillars: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    card1: {
      tag: string;
      headline: string;
      headlineHighlight: string;
      desc: string;
      totalSupply: string;
      burned: string;
      circulating: string;
    };
    card2: {
      tag: string;
      headline: string;
      headlineHighlight: string;
      desc: string;
      hashPower: string;
    };
    card3: {
      tag: string;
      headline: string;
      headlineHighlight: string;
      desc: string;
      countries: string;
      security: string;
      institutionalGrade: string;
    };
  };
  whySgdt: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: Record<string, { title: string; desc: string }>;
  };
  doubleCycle: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    valueCycle: string;
    communityCycle: string;
    economicEffect: string;
    networkEffect: string;
    hoverHint: string;
    valueNodes: Record<string, { title: string; desc: string }>;
    communityNodes: Record<string, { title: string; desc: string }>;
  };
  flywheel: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    hubTitle: string;
    hubSub: string;
    steps: Array<{ step: string; title: string; desc: string }>;
  };
  globalNetwork: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    selectedHub: string;
    mesh: string;
    activeStatus: string;
  };
  roadmap: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    phases: Array<{ phase: string; title: string; period: string; items: string[] }>;
  };
  finalCta: {
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    enterEcosystem: string;
    joinCommunity: string;
  };
  footer: {
    tagline: string;
    quickNav: string;
    topOfPage: string;
    mainnetEngine: string;
    institutionalMesh: string;
    copyright: string;
    riskTitle: string;
    riskDesc: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      ecosystem: "ECOSYSTEM",
      tokenomics: "TOKENOMICS",
      roadmap: "ROADMAP",
      community: "COMMUNITY",
      whitepaper: "WHITEPAPER",
      joinSgdt: "JOIN SGDT",
    },
    hero: {
      badge: "WEB3 FINTECH ECOSYSTEM PROTOCOL",
      subtitle: "BUILDING THE NEXT-GENERATION",
      subtitleHighlight: "DIGITAL ECOSYSTEM",
      description:
        "SGDT integrates digital assets, computing power, token burn, ecosystem rewards and global community networks to build a sustainable and self-growing Web3 digital economy.",
      exploreEcosystem: "EXPLORE ECOSYSTEM",
      joinCommunity: "JOIN COMMUNITY",
      scrollExplore: "SCROLL TO EXPLORE",
      keywords: {
        computing: "COMPUTING POWER",
        deflation: "DEFLATION",
        reward: "REWARD",
        community: "COMMUNITY",
        ecosystem: "ECOSYSTEM",
      },
    },
    metrics: {
      community: "GLOBAL COMMUNITY",
      users: "ECOSYSTEM USERS",
      power: "TOTAL COMPUTING POWER",
      burned: "TOKENS BURNED",
      growth: "NETWORK GROWTH",
    },
    ecosystem: {
      label: "THE SGDT ECOSYSTEM",
      title: "A MULTI-VALUE",
      titleHighlight: "ECOSYSTEM",
      description:
        "SGDT connects users, digital assets, computing power, burn mechanisms, community growth and ecosystem applications into a self-sustaining economic system.",
      moduleDetail: "MODULE DETAIL",
      flowTitle: "ECONOMIC VALUE FLOW",
      flowSteps: [
        "Digital Asset",
        "Computing Power",
        "Reward",
        "Burn",
        "Deflation",
        "Value Cycle",
      ],
      modules: {
        asset: {
          title: "DIGITAL ASSET",
          subTitle: "Value Carrier",
          desc: "High-liquidity core asset driving value exchange and reserve asset utility across global network ecosystems.",
        },
        power: {
          title: "COMPUTING POWER",
          subTitle: "Network Infrastructure",
          desc: "User participation and hardware resources aggregate into high-performance decentralized computing power.",
        },
        reward: {
          title: "ECOSYSTEM REWARD",
          subTitle: "Incentive Protocol",
          desc: "Algorithmic distribution rewards active network contributors, node operators, and ecosystem liquidity providers.",
        },
        burn: {
          title: "TOKEN BURN",
          subTitle: "Deflation Mechanism",
          desc: "Systematic smart contract protocol burns tokens based on computing activity and ecosystem transaction volume.",
        },
        deflation: {
          title: "DEFLATION",
          subTitle: "Reduced Supply",
          desc: "Continuous supply contraction creates economic scarcity and elevates long-term token value metrics.",
        },
        cycle: {
          title: "VALUE CYCLE",
          subTitle: "Sustainable Growth",
          desc: "Self-reinforcing economic feedback loop connecting supply reduction directly to increased participation incentive.",
        },
      },
    },
    pillars: {
      label: "THREE CORE PILLARS",
      title: "ENGINEERING",
      titleHighlight: "SCARCITY & UTILITY",
      description:
        "SGDT operates on three core technical mechanisms designed to compound network value, incentivize computing participation, and build a resilient Web3 global ecosystem.",
      card1: {
        tag: "BURN & DEFLATION",
        headline: "BURN TO CREATE",
        headlineHighlight: "SCARCITY",
        desc: "Systematic token burn mechanisms reduce circulating supply and strengthen the long-term economic cycle.",
        totalSupply: "TOTAL SUPPLY",
        burned: "BURNED TOKENS",
        circulating: "CIRCULATING SUPPLY",
      },
      card2: {
        tag: "COMPUTING POWER",
        headline: "POWERING THE",
        headlineHighlight: "ECOSYSTEM",
        desc: "User participation converts into computing power, driving the growth of the entire SGDT network.",
        hashPower: "TOTAL HASH POWER",
      },
      card3: {
        tag: "COMMUNITY GROWTH",
        headline: "COMMUNITY IS",
        headlineHighlight: "THE NETWORK",
        desc: "From one user to a global network. Together, we build the future of digital economy.",
        countries: "COUNTRIES & REGIONS",
        security: "NETWORK SECURITY",
        institutionalGrade: "INSTITUTIONAL GRADE",
      },
    },
    whySgdt: {
      label: "WHY SGDT",
      title: "DESIGNED FOR",
      titleHighlight: "SUSTAINABILITY",
      description:
        "Built from the ground up to avoid inflationary traps, aligning long-term protocol participants with scalable Web3 infrastructure growth.",
      features: {
        participation: {
          title: "REAL PARTICIPATION",
          desc: "Active community engagement converts directly into real infrastructure and measurable network growth.",
        },
        deflationary: {
          title: "DEFLATIONARY MODEL",
          desc: "Automatic transaction and computing power burn algorithms guarantee continuous supply scarcity.",
        },
        economy: {
          title: "COMPUTING POWER ECONOMY",
          desc: "Decentralized computing power drives yield generation and real-world Web3 application processing.",
        },
        network: {
          title: "COMMUNITY NETWORK",
          desc: "Global interconnected node architecture produces compounding organic network security and adoption.",
        },
        incentives: {
          title: "ECOSYSTEM INCENTIVES",
          desc: "Multi-layered dynamic reward structures continuously compensate early adopters and long-term stakers.",
        },
        vision: {
          title: "LONG-TERM VISION",
          desc: "Architected for institutional-grade stability, long-term economic balance, and generational Web3 impact.",
        },
      },
    },
    doubleCycle: {
      label: "ECONOMIC ENGINE",
      title: "THE DOUBLE",
      titleHighlight: "CYCLE",
      subtitle: "ECONOMIC EFFECT × NETWORK EFFECT",
      valueCycle: "VALUE CYCLE",
      communityCycle: "COMMUNITY CYCLE",
      economicEffect: "ECONOMIC EFFECT",
      networkEffect: "NETWORK EFFECT",
      hoverHint: "Tap / hover any node for details",
      valueNodes: {
        v1: { title: "Digital Asset", desc: "Base liquidity & reserve asset" },
        v2: { title: "Computing Power", desc: "Hardware infrastructure engagement" },
        v3: { title: "Reward", desc: "Algorithmic incentive distribution" },
        v4: { title: "Burn", desc: "Contract supply destruction" },
        v5: { title: "Scarcity", desc: "Reduced circulating tokens" },
        v6: { title: "Value Cycle", desc: "Self-sustaining price feedback" },
      },
      communityNodes: {
        c1: { title: "User", desc: "Individual participant onboarding" },
        c2: { title: "Community", desc: "Global decentralized node clusters" },
        c3: { title: "Network", desc: "Compounding connectivity effects" },
        c4: { title: "Application", desc: "Decentralized ecosystem services" },
        c5: { title: "Traffic", desc: "High-volume protocol usage" },
        c6: { title: "New User", desc: "Continuous organic growth" },
      },
    },
    flywheel: {
      label: "SELF-REINFORCING FLYWHEEL",
      title: "THE ECOSYSTEM",
      titleHighlight: "FLYWHEEL",
      description:
        "As adoption grows, each phase automatically triggers the next, compounding network velocity and creating non-linear token deflation.",
      hubTitle: "FLYWHEEL",
      hubSub: "SGDT ENGINE",
      steps: [
        { step: "01", title: "MORE USERS", desc: "Global adoption expands network footprint" },
        { step: "02", title: "MORE PARTICIPATION", desc: "Increased interaction across decentralized services" },
        { step: "03", title: "MORE COMPUTING POWER", desc: "Infrastructure scales up dynamically" },
        { step: "04", title: "MORE ECOSYSTEM ACTIVITY", desc: "Transaction volume & protocol utility surges" },
        { step: "05", title: "MORE TOKEN BURN", desc: "Smart contracts destroy tokens continuously" },
        { step: "06", title: "LOWER CIRCULATING SUPPLY", desc: "Scarcity threshold increases protocol value" },
        { step: "07", title: "STRONGER ECOSYSTEM VALUE", desc: "Yield & security attract high-value participants" },
        { step: "08", title: "MORE USERS", desc: "Virtuous cycle repeats with exponential scale" },
      ],
    },
    globalNetwork: {
      label: "GLOBAL NODE INFRASTRUCTURE",
      title: "FROM COMMUNITY TO",
      titleHighlight: "GLOBAL ECOSYSTEM",
      description:
        "SGDT starts with community, but its vision extends far beyond it. Decentralized nodes form a resilient mesh network spanning strategic continental hubs.",
      selectedHub: "SELECTED REGIONAL HUB",
      mesh: "NODE MESH",
      activeStatus: "ACTIVE STATUS: ONLINE",
    },
    roadmap: {
      label: "STRATEGIC MILESTONES",
      title: "THE JOURNEY",
      titleHighlight: "HAS JUST BEGUN",
      description:
        "Our structured roadmap outlines the continuous evolution from protocol architecture initialization to autonomous global Web3 mesh execution.",
      phases: [
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
      ],
    },
    finalCta: {
      titleLine1: "THE FUTURE IS NOT",
      titleLine2: "BUILT BY SPECTATORS.",
      titleLine3: "IT IS BUILT BY PARTICIPANTS.",
      description:
        "Join SGDT ecosystem, contribute, participate and grow together in the next-generation digital economy.",
      enterEcosystem: "ENTER THE ECOSYSTEM",
      joinCommunity: "JOIN THE COMMUNITY",
    },
    footer: {
      tagline:
        "Building The Next-Generation Digital Ecosystem. Integrating computing power, token burn, and global community networks into a sustainable Web3 digital economy.",
      quickNav: "QUICK NAVIGATION",
      topOfPage: "TOP OF PAGE",
      mainnetEngine: "MAINNET ENGINE",
      institutionalMesh: "v2.4 INSTITUTIONAL MESH",
      copyright: "© 2026 SGDT. All Rights Reserved.",
      riskTitle: "Risk Disclosure:",
      riskDesc:
        "Digital assets involve market risks. Information presented on this website is for ecosystem introduction purposes only and does not constitute financial or investment advice.",
    },
  },
  zh: {
    nav: {
      ecosystem: "生态体系",
      tokenomics: "代币经济",
      roadmap: "路线图",
      community: "全球社区",
      whitepaper: "白皮书",
      joinSgdt: "加入 SGDT",
    },
    hero: {
      badge: "WEB3 金融科技生态协议",
      subtitle: "构建下一代",
      subtitleHighlight: "数字生态系统",
      description:
        "SGDT 融合数字资产、算力基础设施、代币销毁机制、生态奖励及全球社区网络，打造可持续、自增长的 Web3 数字经济体。",
      exploreEcosystem: "探索生态",
      joinCommunity: "加入社区",
      scrollExplore: "向下探索",
      keywords: {
        computing: "算力网络",
        deflation: "通缩机制",
        reward: "生态奖励",
        community: "全球社区",
        ecosystem: "多维生态",
      },
    },
    metrics: {
      community: "全球社区用户",
      users: "生态总用户",
      power: "全网总算力",
      burned: "累计销毁代币",
      growth: "网络增长率",
    },
    ecosystem: {
      label: "THE SGDT ECOSYSTEM",
      title: "多维价值",
      titleHighlight: "生态系统",
      description:
        "SGDT 将用户、数字资产、算力基础设施、通缩销毁机制、社区增长及生态应用紧密连接，构建自驱动的经济循环系统。",
      moduleDetail: "模块详情",
      flowTitle: "经济价值流向",
      flowSteps: [
        "数字资产",
        "算力网络",
        "生态奖励",
        "代币销毁",
        "通缩缩量",
        "价值循环",
      ],
      modules: {
        asset: {
          title: "数字资产",
          subTitle: "价值载体",
          desc: "高流动性核心资产，作为全球网络生态价值交换与储备资产。",
        },
        power: {
          title: "算力网络",
          subTitle: "基础设施",
          desc: "用户参与及硬件资源汇聚为高性能去中心化算力网络。",
        },
        reward: {
          title: "生态奖励",
          subTitle: "激励协议",
          desc: "智能算法自动分发，奖励网络贡献者、节点运营者及流动性提供者。",
        },
        burn: {
          title: "代币销毁",
          subTitle: "通缩机制",
          desc: "智能合约根据算力活动与生态交易量定期销毁代币。",
        },
        deflation: {
          title: "通缩缩量",
          subTitle: "持续缩量",
          desc: "持续减少流通供应量，创造经济稀缺性并提升代币长期价值。",
        },
        cycle: {
          title: "价值循环",
          subTitle: "可持续增长",
          desc: "自驱动经济正反馈闭环，将通缩缩量直接转化为更高的参与激励。",
        },
      },
    },
    pillars: {
      label: "THREE CORE PILLARS",
      title: "打造",
      titleHighlight: "稀缺性与真实效用",
      description:
        "SGDT 依托三大核心技术机制，提升网络价值，激励算力参与，构建高韧性 Web3 全球生态。",
      card1: {
        tag: "销毁与通缩",
        headline: "极致销毁",
        headlineHighlight: "缔造稀缺",
        desc: "系统的代币销毁机制持续减少流通供应量，强化长期经济价值循环。",
        totalSupply: "总供应量",
        burned: "已销毁代币",
        circulating: "流通供应量",
      },
      card2: {
        tag: "算力网络",
        headline: "算力引擎",
        headlineHighlight: "赋能生态",
        desc: "用户参与转化为去中心化算力，驱动整个 SGDT 网络的算力增长。",
        hashPower: "全网总算力",
      },
      card3: {
        tag: "社区增长",
        headline: "全球社区",
        headlineHighlight: "节点共建",
        desc: "从单一用户到全球网络，共同构建数字经济的未来。",
        countries: "覆盖国家与地区",
        security: "网络安全",
        institutionalGrade: "机构级保障",
      },
    },
    whySgdt: {
      label: "WHY SGDT",
      title: "为",
      titleHighlight: "可持续发展而生",
      description:
        "避开通胀陷阱，将长期协议参与者与可扩展的 Web3 基础设施增长深度绑定。",
      features: {
        participation: {
          title: "真实参与",
          desc: "积极的社区参与直接转化为真实的基础设施与网络增长。",
        },
        deflationary: {
          title: "通缩经济模型",
          desc: "自动交易与算力销毁算法保障代币通缩与稀缺性。",
        },
        economy: {
          title: "算力经济体",
          desc: "去中心化算力驱动收益生成与真实 Web3 应用处理。",
        },
        network: {
          title: "社区网络效应",
          desc: "全球互联节点架构带来复合型网络安全与有机增长。",
        },
        incentives: {
          title: "多维生态激励",
          desc: "多层动态奖励结构持续回报早期参与者与长期质押者。",
        },
        vision: {
          title: "长期发展愿景",
          desc: "具备机构级稳定性、长期经济平衡与跨时代 Web3 影响力的架构设计。",
        },
      },
    },
    doubleCycle: {
      label: "ECONOMIC ENGINE",
      title: "双循环",
      titleHighlight: "经济模型",
      subtitle: "经济效应 × 网络效应",
      valueCycle: "价值循环",
      communityCycle: "社区循环",
      economicEffect: "经济效应",
      networkEffect: "网络效应",
      hoverHint: "点击 / 悬停节点查看详情",
      valueNodes: {
        v1: { title: "数字资产", desc: "基础流动性与储备资产" },
        v2: { title: "算力网络", desc: "硬件基础设施参与" },
        v3: { title: "生态奖励", desc: "智能算法激励分发" },
        v4: { title: "代币销毁", desc: "智能合约销毁" },
        v5: { title: "通缩稀缺", desc: "减少流通代币" },
        v6: { title: "价值循环", desc: "自驱动价格正反馈" },
      },
      communityNodes: {
        c1: { title: "用户", desc: "个人参与者入局" },
        c2: { title: "社区", desc: "全球去中心化节点集群" },
        c3: { title: "网络", desc: "网络连接复利效应" },
        c4: { title: "应用", desc: "去中心化生态服务" },
        c5: { title: "流量", desc: "高频协议使用流量" },
        c6: { title: "新用户", desc: "持续有机裂变增长" },
      },
    },
    flywheel: {
      label: "SELF-REINFORCING FLYWHEEL",
      title: "生态增长",
      titleHighlight: "飞轮",
      description:
        "随着网络拓展，每个阶段自动触发下一阶段，加速网络流通速度并创造非线性代币通缩。",
      hubTitle: "增长飞轮",
      hubSub: "SGDT 引擎",
      steps: [
        { step: "01", title: "更多用户", desc: "全球用户增加拓展网络版图" },
        { step: "02", title: "更多参与", desc: "去中心化服务交互量提升" },
        { step: "03", title: "更多算力", desc: "基础设施算力动态扩容" },
        { step: "04", title: "更多生态活动", desc: "交易量与协议实用性骤升" },
        { step: "05", title: "更多代币销毁", desc: "智能合约持续销毁代币" },
        { step: "06", title: "流通量减少", desc: "稀缺性门槛推高协议价值" },
        { step: "07", title: "更高生态价值", desc: "收益与安全性吸引高价值参与者" },
        { step: "08", title: "更多用户", desc: "形成指数级良性循环" },
      ],
    },
    globalNetwork: {
      label: "GLOBAL NODE INFRASTRUCTURE",
      title: "从社区共建 到",
      titleHighlight: "全球生态",
      description:
        "SGDT 始于社区，但愿景远不止于此。去中心化节点跨越各大洲战略枢纽，构建高韧性网状网络。",
      selectedHub: "已选区域枢纽",
      mesh: "节点网格",
      activeStatus: "运行状态: 在线",
    },
    roadmap: {
      label: "STRATEGIC MILESTONES",
      title: "征程才",
      titleHighlight: "刚刚开始",
      description:
        "清晰的路线图展现了从协议架构初始化到全球 Web3 去中心化网络自主运行的演进过程。",
      phases: [
        {
          phase: "阶段 01",
          title: "生态奠基",
          period: "2025 Q1 - Q2",
          items: [
            "生态架构设计与智能合约安全审计",
            "数字资产通缩协议机制部署",
            "核心社区节点初始化与治理框架",
          ],
        },
        {
          phase: "阶段 02",
          title: "网络扩张",
          period: "2025 Q3 - Q4",
          items: [
            "全球市场拓展与 Top 交易所上线策略",
            "去中心化算力节点接入",
            "生态质押池与自动销毁引擎上线",
          ],
        },
        {
          phase: "阶段 03",
          title: "生态应用",
          period: "2026 Q1 - Q2",
          items: [
            "企业级 Web3 API 与跨链基础设施",
            "机构级流动性与国库战略合作",
            "真实世界资产 (RWA) 与算力收益集成",
          ],
        },
        {
          phase: "阶段 04",
          title: "全球生态",
          period: "2026 Q3+",
          items: [
            "完全自主去中心化治理 (DAO)",
            "全球高性能算力网格全面部署",
            "构建完整的 Web3 机构级金融科技协议标准",
          ],
        },
      ],
    },
    finalCta: {
      titleLine1: "未来不属于旁观者",
      titleLine2: "未来属于",
      titleLine3: "每一位参与者。",
      description:
        "加入 SGDT 生态，贡献力量，深度参与，共同在下一代数字经济中成长。",
      enterEcosystem: "进入生态系统",
      joinCommunity: "加入全球社区",
    },
    footer: {
      tagline:
        "构建下一代数字生态系统。融合算力基础设施、通缩销毁与全球社区网络，打造可持续的 Web3 数字经济。",
      quickNav: "快速导航",
      topOfPage: "返回顶部",
      mainnetEngine: "主网引擎",
      institutionalMesh: "v2.4 机构级网格",
      copyright: "© 2026 SGDT. 保留所有权利。",
      riskTitle: "风险提示:",
      riskDesc:
        "数字资产存在市场风险。本网站展示的信息仅供生态介绍，不构成任何财务或投资建议。",
    },
  },
};
