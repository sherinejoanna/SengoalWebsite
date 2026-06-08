export interface CircularStage {
  id: string;
  step: number;
  title: string;
  description: string;
  longDescription: string;
  impactMetric: string;
  pillColor: string;
  accentQuote: string;
}

export interface RefineryProduct {
  id: string;
  name: string;
  description: string;
  specs: string[];
  scaleMetric: string;
}

export interface TimelineStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  imageIndex: number;
}

export interface TempleStage {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  offeringType: string;
}

export interface GlobalImpactNode {
  id: string;
  name: string;
  role: string;
  coords: { x: number; y: number }; // Percentage coords on world map
  metrics: string;
  partnershipType: string;
}

export interface TechnologyFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export interface InvestorMilestone {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  revenueSource: string;
  valuationImpact: string;
}
