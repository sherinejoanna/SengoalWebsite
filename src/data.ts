import { 
  CircularStage, 
  RefineryProduct, 
  TimelineStep, 
  TempleStage, 
  GlobalImpactNode, 
  TechnologyFeature, 
  InvestorMilestone 
} from "./types";

export const circularStages: CircularStage[] = [
  {
    id: "fresh-oil",
    step: 1,
    title: "Fresh Oil",
    description: "Cold-pressed and refined oils enter household kitchens and commercial engines.",
    longDescription: "Sengoal monitors the upstream cooking oil supply chains, promoting cold-pressed standard oils that keep families healthy and community systems safe from the initial sizzle.",
    impactMetric: "98% Clean Start Ratio",
    pillColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    accentQuote: "Everything begins with pure raw source standards."
  },
  {
    id: "collection",
    step: 2,
    title: "Eco-Collection",
    description: "Households, restaurants, and temples register used oils via Sengoal IoT nodes.",
    longDescription: "Our custom IoT collection points weigh, analyze, and reward contributors, immediately removing degraded lipids from reaching drainage sewers and municipal waterways.",
    impactMetric: "Zero-Drip Containment",
    pillColor: "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
    accentQuote: "Convenience is the catalyst of civic circularity."
  },
  {
    id: "transport",
    step: 3,
    title: "Clean Transport",
    description: "Sengoal smart fleet routes optimize logistics to minimize carbon dispatch emission.",
    longDescription: "Utilizing AI-optimized routing frameworks, Sengoal collectors retrieve cooking waste with zero transport downtime, running partly on our own first-gen biodiesel fuels.",
    impactMetric: "-45% Logistics Carbon",
    pillColor: "bg-brand-green/10 text-brand-green border-brand-green/20",
    accentQuote: "A green loop must maintain a guilt-free transport process."
  },
  {
    id: "refinement",
    step: 4,
    title: "Futuristic Refinement",
    description: "Highly advanced lipid filters separate toxic oxidation products from base hydrocarbons.",
    longDescription: "Our multi-product refinement hubs undergo proprietary thermal filtration, converting highly toxic carcinogenic compounds into pristine feedstock ready for energy synthesis.",
    impactMetric: "99.2% Conversion Efficiency",
    pillColor: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
    accentQuote: "Advanced technology turning municipal waste into high-grade capital."
  },
  {
    id: "clean-fuel",
    step: 5,
    title: "Renewable Energy",
    description: "Purified lipids are synthesized into EN14214 Biodiesel and premium aviation fuel (SAF).",
    longDescription: "Our high-pressure hydro-treatment lines convert discarded waste molecules directly into drop-in renewable fuels with up to 80% reduction in greenhouse gases.",
    impactMetric: "ISO-9001 Certified Fuels",
    pillColor: "bg-brand-green/10 text-brand-green border-brand-green/20",
    accentQuote: "True circularity is drop-in, zero-compromise fuel supply."
  },
  {
    id: "global",
    step: 6,
    title: "Global Grid",
    description: "B2B partnerships ship clean fuels across Europe, Malaysia, and the Middle East.",
    longDescription: "We partner with global shipping corridors, logistics consortiums, and airline operators to power international grids, turning localized waste into a globally traded energy asset.",
    impactMetric: "Mega-Litre Export Capacity",
    pillColor: "bg-brand-forest/10 text-brand-forest border-brand-forest/20",
    accentQuote: "Solving Indian public health issues satisfies global aviation targets."
  }
];

export const refineryProducts: RefineryProduct[] = [
  {
    id: "refined-oil",
    name: "Standard Refined Cooking Oil",
    description: "Guaranteed, cold-checked cooking oil distributed back to local enterprises with rigorous safety auditing.",
    specs: ["Acid Value < 0.1", "100% Traceable Backsheets", "Free from toxic cyclic monomers"],
    scaleMetric: "1.2M Litres Replaced"
  },
  {
    id: "deepam-oil",
    name: "Sanctified Deepam Lamp Oil",
    description: "A signature product crafted specifically from holy temple collection loops, filtered and infused with sacred camphor.",
    specs: ["Soot-Free Clean Burn", "Infused with natural resin extracts", "Replaced toxic paraffin alternatives"],
    scaleMetric: "450 Temples Supplied"
  },
  {
    id: "biodiesel",
    name: "Sengoal EN14214 Biodiesel",
    description: "High-cetane, low-emission liquid biodiesel that integrates directly into commercial trucks and farm equipment.",
    specs: ["83% Less Carbon Soot", "Direct Engine Drop-in", "Lubricity enhancing properties"],
    scaleMetric: "5.4M Litres Synthesized"
  },
  {
    id: "saf",
    name: "Sustainable Aviation Fuel (SAF)",
    description: "Next-generation aviation fuel meeting ASTMD7566 specifications, ready to power long-haul commercial flights.",
    specs: ["80% Lifetime CO2 Reduction", "HEFA-SPK certified compliance", "Compatible with existing aircraft turbine nozzles"],
    scaleMetric: "Future Export Leader"
  }
];

export const householdTimelineSteps: TimelineStep[] = [
  {
    stepNumber: "01",
    title: "A Sizzling Domestic Start",
    subtitle: "Cooking Oil in Indian Homes",
    description: "Millions of families prepare daily meals. However, oil is often reheated multiple times, generating hazardous free radicals and toxic compounds that threaten arterial health.",
    badge: "Domestic Origin",
    imageIndex: 1 // refers to kitchen image
  },
  {
    stepNumber: "02",
    title: "The Sengoal Secure Hand-off",
    subtitle: "Intelligent Home Collection",
    description: "Rather than letting waste oil contaminate bathroom drains or get dumped with trash, households store it in Sengoal canisters. Our smart fleet collects it right at their doorstep.",
    badge: "Community Collection",
    imageIndex: 4 // refers to tech image
  },
  {
    stepNumber: "03",
    title: "Thermal Refinement & Sorting",
    subtitle: "Upgradable Lipid Cracking",
    description: "At our state-of-the-art facilities, the oil is screened, filtered, and processed. Impurities and cancer-causing acrylamides are completely neutralized.",
    badge: "Industrial Processing",
    imageIndex: 2 // refers to refinery image
  },
  {
    stepNumber: "04",
    title: "Converting Waste to Local Power",
    subtitle: "High-Performance Biodiesel",
    description: "Refined triglycerides are esterified into premium green biodiesel, powering agricultural machinery, public transport, and commercial fleets throughout India.",
    badge: "Biodiesel Generation",
    imageIndex: 0 // refers to sengoal_hero image
  },
  {
    stepNumber: "05",
    title: "Taking Sengoal to the Sky",
    subtitle: "Sustainable Aviation Fuel (SAF)",
    description: "We refine fuel to meet strict aerospace specifications, supplying regional and global airlines with ready-to-use SAF that curtails long-haul aviation carbon emissions.",
    badge: "Strategic SAF Reach",
    imageIndex: 3 // refers to temple_lamps image (or general concept)
  }
];

export const templeStages: TempleStage[] = [
  {
    step: 1,
    title: "Sacred Offerings",
    subtitle: "Ghee and vegetable oils offered by devotees at South Indian shrines",
    description: "Devotees pour heart-warming quantities of lighting oils during regular puja rituals, generating an abundant supply of spiritual waste across the country.",
    offeringType: "Aradhana Ghee & Sesame oil"
  },
  {
    step: 2,
    title: "Spiritual Gathering",
    subtitle: "Dedicated Sengoal collection bins placed strategically inside temples",
    description: "Our staff respectfully clears the residual lamp chambers and excess oil offerings daily, preventing messy overflows and accidental drainage clogging.",
    offeringType: "Daily Respectful Gathering"
  },
  {
    step: 3,
    title: "Scented Refinement",
    subtitle: "Separate high-purity thermal separation and essence infusion",
    description: "Clean lipids are drawn. We filter the carbon soot, then blend the oil with elements of camphor, tulsi, and pure sandalwood oil under sterile, premium settings.",
    offeringType: "Sacred Camphor Blend"
  },
  {
    step: 4,
    title: "The Deepam Light Return",
    subtitle: "Sanctified lighting oil delivered back as ceremonial lighting",
    description: "The purified oil is returned in premium golden tins to the temples at half the cost of ordinary lamp oils, lighting the central garbhagriha with zero soot.",
    offeringType: "83% Soot-Free Flame"
  }
];

export const globalImpactNodes: GlobalImpactNode[] = [
  {
    id: "india",
    name: "India (Sengoal Hub)",
    role: "Core feedstock compilation, refinement centers, and domestic biodiesel distributions.",
    coords: { x: 62, y: 64 },
    metrics: "2.4B Litres Projected Core Target",
    partnershipType: "Primary Refinery & Supply Grid"
  },
  {
    id: "malaysia",
    name: "Malaysia & Southeast Asia",
    role: "Strategic maritime shipping lanes and cross-border palm-oil circularity partnerships.",
    coords: { x: 74, y: 72 },
    metrics: "120M Litres Regional Circulation",
    partnershipType: "Industrial Feedstock Gateway"
  },
  {
    id: "europe",
    name: "European Union Corridor",
    role: "Import terminals in Rotterdam accepting high-grade SAF to satisfy mandates.",
    coords: { x: 20, y: 32 },
    metrics: "750,000 Tonnes SAF Binding Contract",
    partnershipType: "Premium SAF Purchase Offtake"
  },
  {
    id: "middle-east",
    name: "Middle East Logistics Core",
    role: "Aviation fuel bunkering, commercial flight testing, and international terminal blending.",
    coords: { x: 44, y: 52 },
    metrics: "420K Flight Hours Powered",
    partnershipType: "Aviation Distribution Partner"
  }
];

export const technologyFeatures: TechnologyFeature[] = [
  {
    id: "automated-iot",
    title: "Automated IoT Hubs",
    subtitle: "Sengoal Smart Cabinets",
    description: "Distributed smart containers equipped with optical density sensors, automated weight logs, and integrated credit settlement APIs for seamless, untended oil hand-ins.",
    highlight: "RFID Authenticated Containers"
  },
  {
    id: "smart-tracking",
    title: "Trigonometric Bio-Tracking",
    subtitle: "Blockchain Traceability Ledger",
    description: "Every drop of fuel carries a secure cryptographic hash. Enterprise B2B purchasers can trace their fuel batch all the way back to individual household pincodes for undeniable ESG audits.",
    highlight: "100% Cryptographic Audit Trail"
  },
  {
    id: "compliance-monitoring",
    title: "Real-time FSSAI Compliance",
    subtitle: "Anti-reheating enforcement",
    description: "Sengoal monitors commercial cooking frequencies. We flag restaurants that repeatedly reuse oil past critical polar compound limits, safeguarding diner health.",
    highlight: "FSSAI Food Safety Sync"
  },
  {
    id: "route-optimization",
    title: "Decarbonized Fleet routing",
    subtitle: "Sengoal Logistics engine",
    description: "AI-driven route configurations prioritize collection containers based on fill speed, humidity indices, and local congestion, shrinking collection carbon outputs.",
    highlight: "Predictive Dynamic Fuel Routing"
  }
];

export const investorMilestones: InvestorMilestone[] = [
  {
    phase: "Phase 01: Present",
    title: "B2B Waste & Oil Asset Trading",
    subtitle: "Securing feedstock margins",
    description: "Monetizing local household and commercial cooking oil collection by distributing high-purity filtered lipids to industrial chemical markets.",
    revenueSource: "Refined Cooking Oil + Soap base feedstock trading",
    valuationImpact: "Strong cash foundations covering operating expenses"
  },
  {
    phase: "Phase 02: Scale-Up",
    title: "Biodiesel Commercial Decentralization",
    subtitle: "Serving agricultural and municipal transit hubs",
    description: "Inaugurating modular esterification units that synthesize ready-to-use EN14214 biodiesel directly for transportation grids and rural farming networks in India.",
    revenueSource: "EN14214 Biodiesel supply agreements + Carbon Credits",
    valuationImpact: "2.4x Gross Margin progression"
  },
  {
    phase: "Phase 03: Aerospace",
    title: "Sustainable Aviation Fuel Export Corridor",
    subtitle: "Direct export of advanced HEFA-SPK fuels to Europe and MENA",
    description: "Expanding deep-refining infrastructure to manufacture ASTMD7566 SAF, servicing binding offtake contracts with leading airline alliances seeking European compliance.",
    revenueSource: "Sengoal Jet-A1 Bio-SAF + Global Aviation Offset Credits",
    valuationImpact: "Unlocking institutional equity valuation scale"
  }
];
