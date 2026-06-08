import React from "react";
import { Shield, Zap, Droplets, ArrowRight } from "lucide-react";

export default function WhyThisMatters() {
  const cards = [
    {
      step: "01",
      title: "PUBLIC HEALTH",
      subtitle: "Arresting Domestic Lipid Poisoning",
      description: "By gathering discarded domestic fats, we prevent malicious market recycling and protect local households from eating toxic cyclic monomers, trans-fats, and heavy arterial free radicals.",
      badge: "National Health",
      bgClass: "bg-white",
      icon: <Shield className="w-5 h-5 text-[#0F5D2F]" />
    },
    {
      step: "02",
      title: "ENVIRONMENT",
      subtitle: "Halting Sewer Congestion & Wastewater Bleed",
      description: "Dumping spent oil down domestic bathroom sinks is catastrophic, turning into grease-bergs that throttle municipal sewer systems and smother delicate freshwater aquatic biology.",
      badge: "Eco-Preservation",
      bgClass: "bg-[#0F5D2F] text-white border-[#0F5D2F]",
      icon: <Droplets className="w-5 h-5 text-brand-accent" />
    },
    {
      step: "03",
      title: "RENEWABLE ENERGY",
      subtitle: "Synthesizing Clean Liquid Mobility Assets",
      description: "We extract massive carbon offsets by converting discarded fatty acids directly into high-cetane Biodiesel and aerospace SAF, lessening Indian reliance on imported fossil oils.",
      badge: "Energetic Autonomy",
      bgClass: "bg-white",
      icon: <Zap className="w-5 h-5 text-brand-gold" />
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite border-b border-brand-charcoal/5 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Simple Section Titles */}
        <div className="max-w-[720px] mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            08 / THE SENGOAL THESIS
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
            An Uncompromising Solution.
          </h2>
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
            We do not solve environmental issues simply to feel ethical. We treat critical waste liabilities as high-yield energetic inputs to build resilient national infrastructure.
          </p>
        </div>

        {/* Bento Board Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const isDark = card.bgClass.includes("bg-[#0F5D2F]");
            return (
              <div
                key={card.step}
                className={`p-10 rounded-[24px] border border-brand-charcoal/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-350 group relative overflow-hidden ${card.bgClass}`}
              >
                {/* Decorative subtle numbering behind card design */}
                <div className={`absolute right-6 top-6 text-9xl font-black font-display font-sans select-none pointer-events-none opacity-[0.03] transition-all duration-500 group-hover:scale-110 ${
                  isDark ? "text-white" : "text-[#111111]"
                }`}>
                  {card.step}
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className={`p-3 rounded-2xl ${isDark ? "bg-white/10" : "bg-black/5"}`}>
                      {card.icon}
                    </span>
                    <span className={`text-[9px] font-mono tracking-widest font-black ${
                      isDark ? "text-brand-accent" : "text-[#0F5D2F]"
                    }`}>
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className={`text-xs font-mono font-bold tracking-widest uppercase ${
                      isDark ? "text-brand-gold" : "text-zinc-400"
                    }`}>
                      {card.title}
                    </p>
                    <h3 className={`font-display text-2xl font-black leading-snug uppercase ${
                      isDark ? "text-white" : "text-[#111111]"
                    }`}>
                      {card.subtitle}
                    </h3>
                    <p className={`text-sm leading-relaxed font-medium ${
                      isDark ? "text-white/80" : "text-[#4A4A4A]"
                    }`}>
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-10 relative z-10">
                  <span className={`p-2 rounded-full border transition-transform duration-300 group-hover:translate-x-1 ${
                    isDark ? "border-white/10 bg-white/5 text-white" : "border-brand-charcoal/10 bg-brand-offwhite text-[#111111]"
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
