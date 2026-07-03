import React, { useEffect, useRef, useState } from 'react';
import '../styles/alt.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.92)] backdrop-blur-[12px] border-b border-[oklch(0.900_0.005_80)]">
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="/alt" className="font-['Gloock'] text-2xl text-[oklch(0.420_0.120_60)] tracking-[-0.03em]">
            Saddl
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'Method', 'Results'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-['Bricolage_Grotesque'] font-medium text-[oklch(0.440_0.008_80)] hover:text-[oklch(0.100_0.015_80)] transition-colors duration-150">
                {item}
              </a>
            ))}
            <button className="bg-[oklch(0.420_0.120_60)] hover:bg-[oklch(0.340_0.120_60)] text-white font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[20px] py-[10px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px]">
              Book Call
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(true)}>
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
          <button className="absolute top-6 right-6 p-2" onClick={() => setIsOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="flex flex-col space-y-8 mt-12">
            {['Services', 'Method', 'Results'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-['Gloock'] text-4xl text-[oklch(0.100_0.015_80)]">
                {item}
              </a>
            ))}
            <div className="pt-8 border-t border-[oklch(0.900_0.005_80)]">
              <button className="w-full bg-[oklch(0.420_0.120_60)] text-white font-['Bricolage_Grotesque'] font-semibold text-lg py-4 rounded-[2px]">
                Book Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Reveal({ children, delay = 0 }) {
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
    <div ref={ref} className="reveal-element" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-[180px] pb-[128px] overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        <div className="max-w-[640px]">
          <h1 className="font-['Gloock'] text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-[oklch(0.100_0.015_80)] mb-8" style={{ textWrap: 'balance' }}>
            We run ecommerce operations for brands that demand margin.
          </h1>
          <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.008_80)] mb-10 max-w-[68ch]" style={{ textWrap: 'pretty' }}>
            Saddl is a firm that is in your accounts every week, making decisions, tracking outcomes, and reconciling what actually happened against what should have happened. No dashboards, no software — just disciplined operational execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[oklch(0.420_0.120_60)] hover:bg-[oklch(0.340_0.120_60)] text-white font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[32px] py-[14px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px]">
              Engage Saddl
            </button>
            <button className="bg-transparent border border-[oklch(0.420_0.120_60)] text-[oklch(0.420_0.120_60)] hover:bg-[oklch(0.975_0.005_80)] font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[31px] py-[13px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px]">
              Read the Methodology
            </button>
          </div>
        </div>

        {/* Floating Data Card */}
        <div className="lg:justify-self-end w-full max-w-[480px]">
          <div className="bg-white border border-[oklch(0.900_0.005_80)] rounded-[4px] p-8 shadow-floating transition-transform duration-200 hover:-translate-y-[2px]">
            <div className="font-['Fragment_Mono'] text-[0.8125rem] text-[oklch(0.440_0.008_80)] mb-8 uppercase tracking-widest border-b border-[oklch(0.900_0.005_80)] pb-4">
              Current Active Engagements
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.008_80)] mb-1">Total Incremental Revenue</div>
                <div className="font-['Fragment_Mono'] text-4xl text-[oklch(0.420_0.120_60)]">+$4,290,118</div>
              </div>
              
              <div>
                <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.008_80)] mb-1">Average Margin Lift</div>
                <div className="font-['Fragment_Mono'] text-3xl text-[oklch(0.100_0.015_80)]">+412 bps</div>
              </div>
              
              <div>
                <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.008_80)] mb-1">Inventory Turn Velocity</div>
                <div className="font-['Fragment_Mono'] text-3xl text-[oklch(0.100_0.015_80)]">3.8x <span className="text-[oklch(0.440_0.008_80)] text-lg">/yr</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerStrip() {
  return (
    <div className="w-full bg-[oklch(0.420_0.120_60)] overflow-hidden py-4 border-y border-[oklch(0.340_0.120_60)] hover:*:pause">
      <div className="ticker-wrapper flex font-['Fragment_Mono'] text-[0.875rem] text-[oklch(1.000_0.000_0)] whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="ticker-content flex shrink-0 items-center">
            <span className="mx-8 opacity-50">/</span>
            <span>Q3 RECONCILIATION: +$42K FOUND</span>
            <span className="mx-8 opacity-50">/</span>
            <span>ROAS OPTIMIZATION: 2.4x → 3.8x</span>
            <span className="mx-8 opacity-50">/</span>
            <span>INVENTORY CLEARED: 14,000 UNITS</span>
            <span className="mx-8 opacity-50">/</span>
            <span>OPERATIONAL AUDITS: 12 IN PROGRESS</span>
            <span className="mx-8 opacity-50">/</span>
            <span>MARGIN DEFENDED: +18% YOY</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section id="method" className="py-[128px] relative bg-[oklch(1.000_0.000_0)]">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-50"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <Reveal>
          <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-[oklch(0.100_0.015_80)] max-w-[800px] mb-24">
            Most brands are drowning in dashboards, while basic operational hygiene degrades.
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-[64px]">
          <Reveal delay={80}>
            <div className="bg-[oklch(0.975_0.005_80)] p-8 rounded-[4px] h-full relative overflow-hidden group">
              <div className="font-['Gloock'] text-[10rem] text-[oklch(0.900_0.005_80)] absolute -top-12 -right-8 opacity-50 pointer-events-none select-none">
                01
              </div>
              <h3 className="font-['Bricolage_Grotesque'] font-semibold text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.3] text-[oklch(0.100_0.015_80)] mb-4 relative z-10">
                The Execution Gap
              </h3>
              <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.008_80)] relative z-10">
                Agencies run ads. Consultants write reports. Software provides metrics. None of them actually go into your systems and execute the unglamorous, high-leverage work of managing inventory, pricing, and merchandising on a daily basis.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={160}>
            <div className="bg-[oklch(0.975_0.005_80)] p-8 rounded-[4px] h-full relative overflow-hidden group">
              <div className="font-['Gloock'] text-[10rem] text-[oklch(0.900_0.005_80)] absolute -top-12 -right-8 opacity-50 pointer-events-none select-none">
                02
              </div>
              <h3 className="font-['Bricolage_Grotesque'] font-semibold text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.3] text-[oklch(0.100_0.015_80)] mb-4 relative z-10">
                Margin Erosion
              </h3>
              <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.008_80)] relative z-10">
                When nobody owns the intersection of marketing spend and inventory reality, margins bleed. Over-ordering, stockouts during campaigns, and aggressive discounting to clear aged inventory are symptoms of a missing operational layer.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="results" className="py-[128px] border-t border-[oklch(0.900_0.005_80)] bg-[oklch(1.000_0.000_0)] relative overflow-hidden">
      
      {/* Decorative large glyph background */}
      <div className="font-['Gloock'] text-[18rem] text-[oklch(0.900_0.005_80)] absolute top-0 left-[10%] opacity-20 pointer-events-none select-none leading-none">
        &ldquo;
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div>
            <Reveal>
              <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-[oklch(0.100_0.015_80)] mb-8">
                We are measured exclusively by the financial reality we create.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.008_80)] mb-12">
                "Saddl stepped into our accounts and completely re-architected how we handle inventory and promotional pricing. Within 90 days, they had cleared out our aged inventory without damaging our premium positioning, and raised our baseline contribution margin across all core SKUs."
              </p>
              <div className="font-['Bricolage_Grotesque']">
                <div className="font-semibold text-[oklch(0.100_0.015_80)]">Elena Rostova</div>
                <div className="text-[0.875rem] text-[oklch(0.440_0.008_80)]">COO, Aethel & Co.</div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-y-16 gap-x-8">
            <Reveal delay={0}>
              <div>
                <div className="font-['Fragment_Mono'] text-[clamp(2rem,4vw,3.5rem)] text-[oklch(0.420_0.120_60)] leading-none mb-2">32%</div>
                <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.008_80)]">Increase in Contribution Margin</div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <div className="font-['Fragment_Mono'] text-[clamp(2rem,4vw,3.5rem)] text-[oklch(0.100_0.015_80)] leading-none mb-2">$1.2M</div>
                <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.008_80)]">Aged Inventory Reconciled</div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <div className="font-['Fragment_Mono'] text-[clamp(2rem,4vw,3.5rem)] text-[oklch(0.100_0.015_80)] leading-none mb-2">99.8%</div>
                <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.008_80)]">In-Stock Rate on Hero SKUs</div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div>
                <div className="font-['Fragment_Mono'] text-[clamp(2rem,4vw,3.5rem)] text-[oklch(0.100_0.015_80)] leading-none mb-2">14</div>
                <div className="font-['Bricolage_Grotesque'] text-[0.875rem] text-[oklch(0.440_0.008_80)]">Days to First Profitable Action</div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-[128px] bg-[oklch(0.975_0.005_80)] border-t border-[oklch(0.900_0.005_80)]">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-['Gloock'] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-[oklch(0.100_0.015_80)] mb-6">
            Bring operational discipline to your ecommerce stack.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="font-['Bricolage_Grotesque'] text-[1rem] leading-[1.7] text-[oklch(0.440_0.008_80)] mb-10 max-w-[60ch] mx-auto">
            Stop relying on passive reporting. Let us step into your accounts, reconcile the data, and execute the actions that defend your margin.
          </p>
          <button className="bg-[oklch(0.420_0.120_60)] hover:bg-[oklch(0.340_0.120_60)] text-white font-['Bricolage_Grotesque'] font-semibold text-[15px] px-[32px] py-[14px] rounded-[2px] transition-colors duration-150 active:translate-y-[1px]">
            Engage Saddl
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.100_0.015_80)] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="font-['Gloock'] text-2xl text-[oklch(0.420_0.120_60)] tracking-[-0.03em] mb-8 md:mb-0">
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

export default function AltApp() {
  return (
    <div className="min-h-screen bg-[oklch(1.000_0.000_0)] text-[oklch(0.100_0.015_80)] font-sans antialiased selection:bg-[oklch(0.420_0.120_60)] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <TickerStrip />
        <Problem />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
