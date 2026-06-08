import React, { useState, useEffect } from "react";
import SengoalLogo from "./SengoalLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "The Problem", href: "#problem" },
    { name: "Circular Loop", href: "#loop" },
    { name: "Ecosystem Products", href: "#products" },
    { name: "Temple Light", href: "#temple" },
    { name: "Technology", href: "#technology" },
    { name: "Investor Vision", href: "#investors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[60px] md:h-[64px] lg:h-[72px] flex items-center ${
        scrolled
          ? "bg-brand-offwhite/90 backdrop-blur-md border-b border-brand-charcoal/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 h-full lg:grid lg:grid-cols-[auto_1fr_auto] flex items-center justify-between gap-4 lg:gap-6">
        
        {/* LOGO AREA - Left Aligned */}
        <div className="flex items-center justify-start shrink-0">
          <a href="#" className="hover:opacity-95 transition-opacity inline-block" aria-label="Sengoal Home">
            <SengoalLogo 
              variant="horizontal" 
              theme="light" 
              height={40} 
              mobileHeight={32} 
            />
          </a>
        </div>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[12px] xl:text-[13px] font-medium tracking-[0.02em] text-brand-forest/85 hover:text-brand-accent transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTA Buttons - Handled via exact spacing */}
        <div className="hidden lg:flex items-center justify-end gap-2 h-12">
          <a
            href="[PLACEHOLDER_PLEDGE_URL]"
            className="h-8 flex items-center justify-center px-3 rounded-full border border-brand-green text-brand-green font-bold text-[9px] uppercase tracking-wider hover:bg-brand-green hover:text-white transition-all duration-300 whitespace-nowrap text-center"
          >
            Take The Pledge
          </a>
          <a
            href="mailto:partner@sengoal.com?subject=Strategic Partnership Proposal"
            className="h-8 flex items-center justify-center px-3 rounded-full bg-brand-green text-white font-bold text-[9px] uppercase tracking-wider hover:bg-brand-forest transition-all duration-300 whitespace-nowrap text-center"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-brand-forest focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-brand-forest rounded-full transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-brand-forest rounded-full transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-brand-forest rounded-full transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={menuOpen ? { transform: "rotate(-45deg) translateY(-8px)" } : {}}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-x-0 top-[60px] md:top-[64px] bg-brand-offwhite border-b border-brand-green/10 shadow-2xl transition-all duration-500 lg:hidden overflow-hidden ${
          menuOpen ? "max-h-[420px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-8 flex flex-col gap-5">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold tracking-wide text-brand-forest/90 hover:text-brand-accent py-1.5 transition-colors border-b border-brand-gray/30"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="[PLACEHOLDER_PLEDGE_URL]"
              onClick={() => setMenuOpen(false)}
              className="text-center text-xs font-bold tracking-wider uppercase py-3 rounded-full border border-brand-green text-brand-green hover:bg-brand-green/5 transition-all"
            >
              Take The Pledge
            </a>
            <a
              href="mailto:partner@sengoal.com?subject=Strategic Partnership Proposal"
              onClick={() => setMenuOpen(false)}
              className="text-center text-xs font-bold tracking-wider uppercase py-3 rounded-full bg-brand-green text-white hover:bg-brand-forest transition-all"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
