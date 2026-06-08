import React from "react";
import SengoalLogo from "./SengoalLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-offwhite text-[#4A4A4A] border-t border-brand-charcoal/5 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-24">
          
          {/* Column 1: Brand details Info */}
          <div className="space-y-6">
            <SengoalLogo variant="horizontal" theme="light" height={36} mobileHeight={28} />
            <p className="text-sm leading-relaxed text-[#4A4A4A] max-w-sm font-medium">
              Sengoal is India's premier consumer-facing circular energy network, pioneering clean fuels synthesis and municipal grease interception.
            </p>
          </div>

          {/* Column 2: Ecosystem connections */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest text-[#0F5D2F] uppercase">
              Ecosystem Circularity
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold">
              <a href="#problem" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">The Crisis Standard</a>
              <a href="#loop" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">Signature Loop</a>
              <a href="#products" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">Refinery Outputs</a>
              <a href="#temple" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">The South Indian Temple Loop</a>
            </div>
          </div>

          {/* Column 3: Logistics & Technology */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest text-[#0F5D2F] uppercase">
              Logistics & Compliance
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold">
              <a href="#technology" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">IoT Smart Containers</a>
              <a href="#investors" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">Financial Roadmaps</a>
              <a href="#pledge" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">Consumer Commitments</a>
              <a href="https://fssai.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#0F5D2F] transition text-[#4A4A4A]">RUCO FSSAI Compliance</a>
            </div>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest text-[#0F5D2F] uppercase">
              Registered Headquarters
            </h4>
            <div className="text-xs leading-relaxed text-[#4A4A4A] font-semibold space-y-1">
              <p>Sengoal Circular Energy Inc.</p>
              <p>Level 7, UB City Corporate Towers,</p>
              <p>Vittal Mallya Rd, Bengaluru,</p>
              <p>Karnataka 560001, India.</p>
            </div>
            <p className="text-xs font-bold text-[#0F5D2F]">
              contact@sengoal.com
            </p>
          </div>

        </div>

        {/* Closing Sub-ledger */}
        <div className="pt-8 border-t border-brand-charcoal/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold">
          <div>
            © {currentYear} Sengoal Circular Energy Inc. All Rights Reserved.
          </div>
          
          <div className="flex gap-6 max-wrap-fit">
            <span>• RUCO LICENSED: IND-KAT-560-011</span>
            <span>• ISO 9001:2015</span>
            <span>• EN14214 BIOMASS REGISTERED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
