import React, { useState } from "react";
import { motion } from "motion/react";
import { refineryProducts } from "../data";
import { Check, ArrowUpRight, Flame, Shield, Droplets, Plane } from "lucide-react";

interface AboutProps {
  refineryImagePath: string;
}

export default function AboutSengoal({ refineryImagePath }: AboutProps) {
  const [selectedProduct, setSelectedProduct] = useState(refineryProducts[0].id);

  const getProductIcon = (id: string, active: boolean) => {
    const cls = `w-5 h-5 transition-colors ${active ? "text-brand-accent" : "text-[#0F5D2F]"}`;
    switch (id) {
      case "refined-oil":
        return <Droplets className={cls} />;
      case "deepam-oil":
        return <Flame className={cls} />;
      case "biodiesel":
        return <Shield className={cls} />;
      case "saf":
        return <Plane className={cls} />;
      default:
        return <Check className={cls} />;
    }
  };

  const activeProduct = refineryProducts.find((p) => p.id === selectedProduct) || refineryProducts[0];

  return (
    <section id="products" className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite border-b border-brand-charcoal/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Editorial Title Block */}
        <div className="max-w-[720px] mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            03 / Our Multi-Product Infrastructure
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
            Advanced refinement chemistry. Multiplying circular outcomes.
          </h2>
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
            Sengoal commands a custom multi-product refinery ecosystem that repurposes greasy domestic lipids into standard high-value consumer goods, sacred lights, and heavy industrial fuels.
          </p>
        </div>

        {/* Industrial Imagery & Product Sheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Editorial Image Block */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-between">
            <div className="relative h-full min-h-[300px] md:min-h-[450px] rounded-[24px] overflow-hidden shadow-xl bg-zinc-100">
              <img
                src={refineryImagePath}
                alt="Architectural photograph of Sengoal's modern clean fuel refinery facility"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white">
                <p className="text-[9px] uppercase tracking-widest text-[#F5C542] font-semibold mb-1">
                  Commissioned Hub Capacity
                </p>
                <p className="font-display text-lg font-bold leading-relaxed">
                  Proprietary Hydro-Filtration and Esterification Line Unit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Product Matrix Interaction panel */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* Interactive product triggers */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                SELECT PRIMARY CATEGORY
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {refineryProducts.map((p) => {
                  const isSelected = p.id === selectedProduct;
                  return (
                    <button
                      key={p.id}
                      onMouseEnter={() => setSelectedProduct(p.id)}
                      onClick={() => setSelectedProduct(p.id)}
                      className={`px-5 py-4 rounded-[16px] border text-left transition-all duration-300 flex items-center justify-between ${
                        isSelected
                          ? "bg-[#0F5D2F] text-white border-[#0F5D2F] shadow-md"
                          : "bg-white text-[#111111] border-brand-charcoal/5 hover:border-[#0F5D2F]/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {getProductIcon(p.id, isSelected)}
                        <span className="text-sm font-bold tracking-tight">
                          {p.name.replace("Standard ", "").replace("Sanctified ", "")}
                        </span>
                      </div>
                      <ArrowUpRight className={`w-4 h-4 opacity-70 ${isSelected ? "text-brand-accent" : "text-zinc-400"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Product Specifications card sheet */}
            <div className="bg-[#0F5D2F]/5 border border-brand-green/10 rounded-[24px] p-8 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex px-3 py-1 bg-[#0F5D2F]/10 text-[#0F5D2F] rounded-full text-[10px] font-mono uppercase tracking-wider border border-brand-green/15">
                  {activeProduct.scaleMetric}
                </span>
                
                <h3 className="font-display text-2xl font-black text-[#111111]">
                  {activeProduct.name}
                </h3>
                
                <p className="text-[15px] text-[#4A4A4A] leading-relaxed font-medium">
                  {activeProduct.description}
                </p>
              </div>

              {/* Specs array looping */}
              <div className="space-y-3 pt-6 border-t border-brand-green/10">
                <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  CHEMICAL SPECIFICATIONS
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeProduct.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs font-semibold text-[#4A4A4A] bg-white p-2.5 rounded-[12px] border border-brand-charcoal/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
