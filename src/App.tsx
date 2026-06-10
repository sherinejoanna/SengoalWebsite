import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import CircularLoop from "./components/CircularLoop";
import AboutSengoal from "./components/AboutSengoal";
import HouseholdTimeline from "./components/HouseholdTimeline";
import TempleLoop from "./components/TempleLoop";
import GlobalImpact from "./components/GlobalImpact";
import CommunityMovement from "./components/CommunityMovement";
import WhyThisMatters from "./components/WhyThisMatters";
import SmartTechnology from "./components/SmartTechnology";
import InvestorVision from "./components/InvestorVision";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

// Custom generated asset paths for Sengoal
import heroImg from "./assets/images/sengoal_hero_1780903921072.png";
import problemKnImg from "./assets/images/problem_kitchen_1780903939113.png";
import refineryImg from "./assets/images/sengoal_refinery_1780903957652.png";
import templeLpImg from "./assets/images/temple_lamps_1780903977309.png";
import techColImg from "./assets/images/collection_tech_1780903997914.png";

const IMAGES = {
  hero: heroImg,
  problemKn: problemKnImg,
  refinery: refineryImg,
  templeLp: templeLpImg,
  techCol: techColImg
};

export default function App() {
  return (
    <div className="font-sans text-brand-charcoal bg-brand-offwhite min-h-screen relative selection:bg-brand-accent/30 selection:text-brand-forest">
      
      {/* 70px Header (Fixed Navbar) */}
      <Header />

      <main className="w-full">
        {/* Section 1: Hero Visuals */}
        <Hero heroImagePath={IMAGES.hero} />

        {/* Section 2: Split statistics \& counting reveals */}
        <Problem kitchenImagePath={IMAGES.problemKn} />

        {/* Section 3: Signature Circular Horizontal Loop */}
        <CircularLoop />

        {/* Section 4: Bio-Refinery interactive Product Sheets */}
        <AboutSengoal refineryImagePath={IMAGES.refinery} />

        {/* Section 5: Timeline lifecycle storytelling flow */}
        <HouseholdTimeline
          heroImage={IMAGES.hero}
          kitchenImage={IMAGES.problemKn}
          refineryImage={IMAGES.refinery}
          techImage={IMAGES.techCol}
          templeImage={IMAGES.templeLp}
        />

        {/* Section 6: South Indian shrine bio-returns loop */}
        <TempleLoop templeImagePath={IMAGES.templeLp} />

        {/* Section 7: Interactive vector globe axis map */}
        <GlobalImpact />

        {/* Section 8: Citizen stats \& dynamic milestone metrics progress bars */}
        <CommunityMovement />

        {/* Section 9: Bento card triple thesis pillars */}
        <WhyThisMatters />

        {/* Section 10: IoT hardware collector showcases */}
        <SmartTechnology techImagePath={IMAGES.techCol} />

        {/* Section 11: Dark Tesla-inspired business milestone schedules */}
        <InvestorVision />

        {/* Section 12: Final conversion CTA \& active local carbon database pledge sheet */}
        <FinalCTA ctaImagePath={IMAGES.hero} />
      </main>

      {/* Structured compliance footer */}
      <Footer />

    </div>
  );
}
