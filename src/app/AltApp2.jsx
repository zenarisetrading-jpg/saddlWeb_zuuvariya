import React, { useEffect, useRef, useState } from 'react';
import '../styles/alt2.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.92)] backdrop-blur-[12px] border-b border-[oklch(0.900_0.004_145)]">
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="/alt2" className="font-['Gloock'] text-2xl text-[oklch(0.398_0.148_145)] tracking-[-0.03em]">
            Saddl
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Saddl OS', 'How We Work', 'About', 'Blog'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="font-['Bricolage_Grotesque'] font-medium text-[oklch(0.440_0.006_145)] hover:text-[oklch(0.108_0.014_145)] transition-colors duration-150">
                {item}
              </a>
            ))}
            <button className="bg-[oklch(0.398_0.148_145)] hover:bg-[oklch(0.32_0.148_145)] text-white font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[20px] py-[10px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px]">
              Apply
            </button>
          </div>

          <button className="md:hidden p-2 text-[oklch(0.108_0.014_145)]" onClick={() => setIsOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col pt-24 px-8">
          <button className="absolute top-6 right-6 p-2 text-[oklch(0.108_0.014_145)]" onClick={() => setIsOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="flex flex-col space-y-8 mt-12">
            {['Saddl OS', 'How We Work', 'About', 'Blog'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} onClick={() => setIsOpen(false)} className="font-['Gloock'] text-4xl text-[oklch(0.108_0.014_145)]">
                {item}
              </a>
            ))}
            <div className="pt-8 border-t border-[oklch(0.900_0.004_145)]">
              <button className="w-full bg-[oklch(0.398_0.148_145)] text-white font-['Bricolage_Grotesque'] font-semibold text-lg py-4 rounded-[2px]">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-element ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-[180px] pb-[128px] overflow-hidden bg-[oklch(0.974_0.004_145)] hero-lighting">
      <div className="absolute inset-0 bg-dot-grid-2 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[55%_45%] gap-16 items-center relative z-10">
        <div className="max-w-[640px]">
          <div className="inline-block bg-[oklch(0.398_0.148_145)] text-white font-['Bricolage_Grotesque'] font-medium text-[0.6875rem] uppercase tracking-[0.06em] px-[10px] py-[4px] rounded-[2px] mb-[12px]">
            embedded ecommerce operations
          </div>
          <h1 className="font-['Gloock'] text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-[oklch(0.108_0.014_145)] mb-8" style={{ textWrap: 'balance' }}>
            We run your ecommerce.
          </h1>
          <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.006_145)] mb-10 max-w-[68ch]" style={{ textWrap: 'pretty' }}>
            We embed as your operating team — managing advertising, inventory, listings, pricing, P&L, and brand health as one connected system. We're in your accounts every week. We own the outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[oklch(0.398_0.148_145)] hover:bg-[oklch(0.32_0.148_145)] text-white font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[32px] py-[14px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px]">
              Apply
            </button>
            <button className="bg-transparent border border-[oklch(0.398_0.148_145)] text-[oklch(0.398_0.148_145)] hover:bg-[oklch(0.974_0.004_145)] font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[31px] py-[13px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px]">
              Saddl OS
            </button>
          </div>
          <div className="flex flex-wrap gap-4 font-['Bricolage_Grotesque'] font-medium text-[0.8125rem] text-[oklch(0.440_0.006_145)]">
            <span className="bg-[oklch(1.000_0.000_0)] px-3 py-1 rounded-[4px] border border-[oklch(0.900_0.004_145)]">Amazon (Global)</span>
            <span className="bg-[oklch(1.000_0.000_0)] px-3 py-1 rounded-[4px] border border-[oklch(0.900_0.004_145)]">Noon UAE/KSA</span>
            <span className="bg-[oklch(1.000_0.000_0)] px-3 py-1 rounded-[4px] border border-[oklch(0.900_0.004_145)]">Meta D2C</span>
            <span className="bg-[oklch(1.000_0.000_0)] px-3 py-1 rounded-[4px] border border-[oklch(0.900_0.004_145)]">Google D2C</span>
          </div>
        </div>

        {/* Floating Dark Glass Card */}
        <div className="justify-self-end w-full max-w-[480px]">
          <div className="bg-[oklch(0.072_0.012_80)] rounded-[28px] p-[8px] shadow-card-deep animate-float-slow transition-shadow duration-600">
            <div className="bg-[linear-gradient(135deg,oklch(0.108_0.014_145/0.8),oklch(0.072_0.012_80/0.95))] border border-[oklch(1_0_0/0.06)] rounded-[20px] p-6 h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[oklch(0.398_0.148_145/0.15)] blur-[50px] rounded-full pointer-events-none"></div>
               
               <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.974_0.004_145)] mb-6 flex justify-between items-center relative z-10">
                 <span className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-[oklch(0.780_0.080_145)]"></span>
                   Saddl OS
                 </span>
                 <span className="font-['Fragment_Mono'] text-[0.75rem] text-[oklch(0.440_0.006_145)]">LIVE</span>
               </div>
               
               <div className="space-y-4 relative z-10">
                 <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.780_0.080_145)]">
                   [ Advertising Intelligence ]
                 </div>
                 <div className="font-['Bricolage_Grotesque'] text-[1rem] text-white">
                   SB Campaign bid adjusted +22%
                 </div>
                 <div className="h-[1px] w-full bg-[oklch(1_0_0/0.1)] my-4"></div>
                 <div className="flex justify-between items-end">
                   <div>
                     <div className="font-['Bricolage_Grotesque'] text-[0.75rem] text-[oklch(0.440_0.006_145)] uppercase tracking-wider mb-1">Expected Delta</div>
                     <div className="font-['Fragment_Mono'] text-xl text-[oklch(0.780_0.080_145)]">+$840/wk</div>
                   </div>
                   <div className="text-right">
                     <div className="font-['Bricolage_Grotesque'] text-[0.75rem] text-[oklch(0.440_0.006_145)] uppercase tracking-wider mb-1">Status</div>
                     <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.974_0.004_145)]">monitoring</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.440_0.006_145)] mt-8 text-center">
            127 decisions logged this week · $18,340 net impact
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeEngage() {
  const steps = [
    {
      num: "01",
      title: "Diagnostic",
      desc: "We run a free account diagnostic. Read-only access. We surface contribution margin gaps, attribution blind spots, and inventory exposure within 48 hours. No commitment required.",
      anchor: (
        <div className="bg-white border border-[oklch(0.900_0.004_145)] rounded-[8px] p-6 shadow-whisper h-[140px] flex flex-col justify-center">
          <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.108_0.014_145)] mb-2">ASIN B08XYZABC · CPC $1.24</div>
          <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.440_0.006_145)] mb-2">ACoS 38.4% · TACoS 18.2%</div>
          <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.55_0.18_25)] font-medium">GAP: contribution margin not computed</div>
        </div>
      )
    },
    {
      num: "02",
      title: "Brief",
      desc: "You receive a full account brief: what's working, what isn't, and what we'd do differently from week one. This is a decision point — not a sales call. No pressure, no follow-up sequence.",
      anchor: (
        <div className="bg-white border border-[oklch(0.900_0.004_145)] rounded-[8px] p-6 shadow-whisper h-[140px] flex flex-col justify-center">
          <div className="flex justify-between border-b border-[oklch(0.900_0.004_145)] pb-2 mb-2">
            <span className="font-['Bricolage_Grotesque'] text-[0.875rem] font-semibold">What's broken</span>
            <span className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.55_0.18_25)]">3 items</span>
          </div>
          <div className="flex justify-between">
            <span className="font-['Bricolage_Grotesque'] text-[0.875rem] font-semibold">Week-one actions</span>
            <span className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.398_0.148_145)]">4 items</span>
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Embed",
      desc: "We embed. Saddl OS goes live on your accounts. Weekly decisions, bi-weekly reports, monthly P&L reconciliation. You stop managing. We start running.",
      anchor: (
        <div className="bg-white border border-[oklch(0.900_0.004_145)] rounded-[8px] p-6 shadow-whisper h-[140px] flex flex-col justify-center">
          <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.440_0.006_145)] mb-2">Jun 12 · 14:47</div>
          <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.108_0.014_145)] font-medium mb-1">SB Campaign bid adjusted +22%</div>
          <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.398_0.148_145)]">Expected: +$840/wk</div>
        </div>
      )
    }
  ];

  return (
    <section id="how-we-work" className="py-[128px] bg-[oklch(0.974_0.004_145)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal>
          <div className="inline-block bg-[oklch(0.974_0.004_145)] border border-[oklch(0.900_0.004_145)] text-[oklch(0.440_0.006_145)] font-['Bricolage_Grotesque'] font-medium text-[0.6875rem] uppercase tracking-[0.06em] px-[10px] py-[4px] rounded-[2px] mb-[12px]">
            how it works
          </div>
          <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-[oklch(0.108_0.014_145)] mb-4">
            Three steps from audit to operator.
          </h2>
          <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.006_145)] mb-24 max-w-[60ch]">
            You shouldn't have to change much. We embed around what you already have.
          </p>
        </Reveal>

        <div className="space-y-[64px]">
          {steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 80}>
              <div className="grid md:grid-cols-[55%_45%] gap-12 items-center relative z-10">
                <div className="relative">
                  <div className="font-['Gloock'] text-[9rem] text-[oklch(0.900_0.004_145)] absolute -top-[4rem] -left-[2rem] opacity-60 pointer-events-none select-none z-[-1] leading-none">
                    {step.num}
                  </div>
                  <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.440_0.006_145)] tracking-[0.04em] mb-4">
                    Step {step.num}
                  </div>
                  <h3 className="font-['Bricolage_Grotesque'] font-semibold text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.3] text-[oklch(0.108_0.014_145)] mb-4">
                    {step.title}
                  </h3>
                  <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.006_145)] max-w-[55ch]">
                    {step.desc}
                  </p>
                </div>
                <div>
                  {step.anchor}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SaddlOS() {
  const modules = [
    {
      title: "Advertising Intelligence",
      desc: "SP, SB, SD campaigns managed and validated. Every bid change tracked to a revenue delta.",
      data: "Jun 12 · bid change +22% · +$1,250 validated impact · 14-day window"
    },
    {
      title: "Inventory Intelligence",
      desc: "Reorder forecasting, FBA fee optimisation, stockout prevention. Contribution margin per unit.",
      data: "B08XYZABC · 47 units remaining · reorder signal triggered · ETA: 18 days"
    },
    {
      title: "Listing & Content",
      desc: "AI-generated copy optimised for search and conversion. A+, brand store, video briefs.",
      data: "Listing update deployed · rank Δ: +12 positions · BSR: 4,821 → 3,209"
    },
    {
      title: "Pricing Intelligence",
      desc: "Competitive monitoring, Buy Box optimisation, promotional ROI modelling. Margin floors met.",
      data: "Buy Box hold: 94% · competitor Δ: -$1.40 · response: held"
    },
    {
      title: "Financial Intelligence & P&L",
      desc: "True contribution margin per SKU with all cost layers: COGS, FBA fees, ad spend, returns.",
      data: "B08XYZABC · revenue $18,420 · true CM: $4,103 (22.3%)"
    },
    {
      title: "Brand Health",
      desc: "Review velocity and sentiment, listing suppression monitoring, hijacker detection, BSR trends.",
      data: "3 suppressed listings detected · 2 resolved · review velocity: +8"
    }
  ];

  return (
    <section id="saddl-os" className="py-[128px] relative bg-[oklch(1.000_0.000_0)]">
      <div className="absolute inset-0 bg-dot-grid-2 pointer-events-none opacity-50"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <Reveal>
          <div className="inline-block bg-[oklch(0.974_0.004_145)] border border-[oklch(0.900_0.004_145)] text-[oklch(0.440_0.006_145)] font-['Bricolage_Grotesque'] font-medium text-[0.6875rem] uppercase tracking-[0.06em] px-[10px] py-[4px] rounded-[2px] mb-[12px]">
            saddl os
          </div>
          <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-[oklch(0.108_0.014_145)] mb-4">
            One operating system. Six intelligence layers.
          </h2>
          <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.006_145)] max-w-[60ch] mb-2">
            Built for the data that matters — contribution margin per SKU, not vanity metrics.
          </p>
          <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.440_0.006_145)] mb-24">
            Amazon (Global) · Noon UAE/KSA incl. Minutes · Meta · Google
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="bg-white border border-[oklch(0.900_0.004_145)] rounded-[8px] p-6 shadow-whisper hover:shadow-soft transition-shadow duration-400 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[oklch(0.398_0.148_145/0.04)] blur-[40px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <h3 className="font-['Bricolage_Grotesque'] font-bold text-[1rem] leading-[1.3] tracking-[-0.01em] text-[oklch(0.108_0.014_145)] mb-2">
                  {mod.title}
                </h3>
                <p className="font-['Bricolage_Grotesque'] text-[0.9375rem] leading-[1.6] text-[oklch(0.440_0.006_145)] mb-4 h-[48px]">
                  {mod.desc}
                </p>
                <div className="h-[1px] w-full bg-[oklch(0.900_0.004_145)] mb-4"></div>
                <div className="font-['Fragment_Mono'] text-[0.75rem] text-[oklch(0.440_0.006_145)]">
                  {mod.data}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const quotes = [
    {
      text: "We hadn't seen our true contribution margin until Saddl ran the reconciliation. The number was $2.10 lower per unit than we thought — on 4,000 units a month.",
      brand: "Consumer electronics brand",
      context: "Amazon UAE"
    },
    {
      text: "The inventory call saved us $38,000 in storage fees we were about to rack up. They flagged it before we'd even thought about Q4 planning.",
      brand: "Home & kitchen brand",
      context: "Amazon KSA + Noon"
    },
    {
      text: "Six weeks in, our ACoS dropped from 31% to 19%. Not because we cut spend — because every bid decision was now validated.",
      brand: "Health & beauty brand",
      context: "Amazon Global"
    }
  ];

  return (
    <section id="proof" className="py-[128px] bg-[oklch(0.974_0.004_145)] border-t border-[oklch(0.900_0.004_145)] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <Reveal>
          <div className="inline-block bg-[oklch(0.974_0.004_145)] border border-[oklch(0.900_0.004_145)] text-[oklch(0.440_0.006_145)] font-['Bricolage_Grotesque'] font-medium text-[0.6875rem] uppercase tracking-[0.06em] px-[10px] py-[4px] rounded-[2px] mb-[12px]">
            client outcomes
          </div>
          <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-[oklch(0.108_0.014_145)] mb-4">
            Specifics, not promises.
          </h2>
          <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.006_145)] mb-24 max-w-[60ch]">
            Real figures from brands we operate. Names withheld by request — outcomes are the point.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {quotes.map((quote, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="bg-[oklch(0.974_0.004_145)] border border-[oklch(0.900_0.004_145)] rounded-[8px] p-8 shadow-soft h-full relative z-10">
                <div className="font-['Gloock'] text-[10rem] text-[oklch(0.900_0.004_145)] absolute -top-10 -left-2 opacity-50 pointer-events-none select-none z-[-1] leading-none">
                  &ldquo;
                </div>
                <p className="font-['Bricolage_Grotesque'] text-[1.0625rem] leading-[1.7] text-[oklch(0.108_0.014_145)] relative z-10 mb-8">
                  {quote.text}
                </p>
                <div className="mt-auto relative z-10 border-t border-[oklch(0.900_0.004_145)] pt-6">
                  <div className="font-['Bricolage_Grotesque'] font-medium text-[0.875rem] text-[oklch(0.108_0.014_145)]">
                    {quote.brand}
                  </div>
                  <div className="font-['Bricolage_Grotesque'] text-[0.8125rem] text-[oklch(0.440_0.006_145)] mt-1">
                    {quote.context}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 border-t border-[oklch(0.900_0.004_145)] pt-16">
          <Reveal delay={0}>
            <div>
              <div className="font-['Fragment_Mono'] text-[clamp(2rem,3vw,3rem)] text-[oklch(0.108_0.014_145)] mb-2">1,248</div>
              <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.006_145)]">decisions logged</div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <div className="font-['Fragment_Mono'] text-[clamp(2rem,3vw,3rem)] text-[oklch(0.108_0.014_145)] mb-2">14</div>
              <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.006_145)]">brands operated</div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <div className="font-['Fragment_Mono'] text-[clamp(2rem,3vw,3rem)] text-[oklch(0.398_0.148_145)] mb-2">99.4%</div>
              <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.006_145)]">decision accuracy</div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div>
              <div className="font-['Fragment_Mono'] text-[clamp(2rem,3vw,3rem)] text-[oklch(0.108_0.014_145)] mb-2">0</div>
              <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.006_145)]">reorder windows missed</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Is this a retainer or a managed service?",
      a: "Neither label fits exactly. We embed as your operating team — present in your accounts every week, making decisions, owning outcomes. Retainers imply advice; managed services imply outsourcing. We call it embedding because that's what it is."
    },
    {
      q: "Do we need to give you access to our Amazon account?",
      a: "Yes — operator-level access to Seller Central and Advertising Console. This is not optional: we cannot make decisions in your accounts without it. All access is scoped to what Saddl OS requires and logged."
    },
    {
      q: "How quickly do you see results?",
      a: "The diagnostic surfaces issues in 48 hours. Advertising decisions typically show validated impact in 14–21 days. Inventory decisions show impact in the reorder cycle. P&L clarity shows in the first monthly reconciliation. We don't promise timelines — we promise accountability for what the numbers show."
    },
    {
      q: "What happens if we want to stop?",
      a: "30-day notice, clean handover. Your accounts, your data, your access — always yours. We document everything we've done and why. You leave knowing exactly what the system was doing."
    },
    {
      q: "Do you work with brands outside MENA?",
      a: "Yes. We operate accounts globally on Amazon. Our edge in MENA is Noon UAE/KSA expertise including Noon Minutes, which most global agencies don't have. For brands with both Amazon global and Noon presence, we're the only firm that runs both as one system."
    },
    {
      q: "What does it cost?",
      a: "Pricing is discussed after the diagnostic — it's based on account complexity, platform count, and scope. We don't publish pricing because a $2M Amazon-only brand and a $15M Amazon + Noon + D2C brand are different engagements. Apply first. We'll tell you exactly what it costs before you commit to anything."
    }
  ];

  return (
    <section className="py-[128px] bg-[oklch(1.000_0.000_0)] relative overflow-hidden border-t border-[oklch(0.900_0.004_145)]">
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <Reveal>
          <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-[oklch(0.108_0.014_145)] mb-16">
            What you're probably wondering.
          </h2>
        </Reveal>

        <div className="border-b border-[oklch(0.900_0.004_145)]">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 50}>
              <div className="border-t border-[oklch(0.900_0.004_145)] py-6">
                <button 
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="font-['Bricolage_Grotesque'] font-semibold text-[1.0625rem] tracking-[-0.01em] text-[oklch(0.108_0.014_145)]">
                    {faq.q}
                  </span>
                  <span className="font-['Bricolage_Grotesque'] font-medium text-[1.25rem] text-[oklch(0.398_0.148_145)] ml-4 shrink-0 transition-transform duration-300">
                    {openIdx === idx ? '×' : '+'}
                  </span>
                </button>
                <div className={`faq-answer ${openIdx === idx ? 'expanded' : ''}`}>
                  <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.006_145)] pt-4 pb-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section className="py-[128px] bg-[oklch(0.072_0.012_80)] relative overflow-hidden">
      <div className="absolute inset-0 bg-line-grid-2 pointer-events-none opacity-20"></div>
      
      {/* Radial Jade Glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[oklch(0.398_0.148_145/0.07)] blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Decorative Fragment Mono string */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-5 pointer-events-none select-none z-0">
        <div className="font-['Fragment_Mono'] text-[6rem] text-white whitespace-nowrap opacity-10">
          decision → validated → impact → +$
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="inline-block bg-[oklch(0.398_0.148_145)] text-white font-['Bricolage_Grotesque'] font-medium text-[0.6875rem] uppercase tracking-[0.06em] px-[10px] py-[4px] rounded-[2px] mb-[16px]">
            cleared desk
          </div>
          <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-white mb-6">
            Your accounts are running right now.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.900_0.004_145)] mb-10 max-w-[60ch] mx-auto">
            The question is whether someone accountable is running them.
          </p>
          <button className="bg-[oklch(0.398_0.148_145)] hover:bg-[oklch(0.32_0.148_145)] text-white font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[32px] py-[14px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px] mb-8">
            Apply
          </button>
          <p className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.006_145)] max-w-[50ch] mx-auto">
            Right for brands with $1M–$20M revenue on Amazon. MENA presence welcome. Platforms: Amazon, Noon, Meta, Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.072_0.012_80)] text-white py-16 border-t border-[oklch(1_0_0/0.1)]">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="font-['Gloock'] text-2xl text-white tracking-[-0.03em] mb-8 md:mb-0">
          Saddl
        </div>
        
        <div className="flex gap-8 font-['Bricolage_Grotesque'] text-[0.875rem]">
          {['Methodology', 'Case Studies', 'Client Portal', 'Terms'].map(link => (
            <a key={link} href="#" className="text-white/40 hover:text-white/75 transition-colors duration-150">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function AltApp2() {
  return (
    <div className="min-h-screen bg-[oklch(0.974_0.004_145)] text-[oklch(0.108_0.014_145)] font-sans antialiased selection:bg-[oklch(0.398_0.148_145)] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <HowWeEngage />
        <SaddlOS />
        <Proof />
        <FAQ />
        <Apply />
      </main>
      <Footer />
    </div>
  );
}
