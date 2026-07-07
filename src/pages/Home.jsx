import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // FAQ accordion
    const faqs = document.querySelectorAll('.faq-question');
    const handleFaqClick = (e) => {
      const item = e.currentTarget.parentElement;
      item.classList.toggle('open');
    };
    
    faqs.forEach(faq => faq.addEventListener('click', handleFaqClick));
    
    return () => {
      observer.disconnect();
      faqs.forEach(faq => faq.removeEventListener('click', handleFaqClick));
    };
  }, []);

  return (
    <>
      <section className="s-hero home-hero tex-ledger grain">
        <div className="hero-glow"></div>
        <div className="wrap">
          <div className="hero-content">
            <h1 className="t-display reveal" style={{ transitionDelay: '0.2s', maxWidth: '900px', marginInline: 'auto' }}>
              Your ecommerce runs on hundreds of decisions a week.<br/>We own every one of them.
            </h1>
            
            <p className="hero-body t-body-lg mx-auto reveal" style={{ transitionDelay: '0.3s' }}>
              Advertising, inventory, pricing, listings, and contribution margin — run as one system everywhere you sell, from Amazon and Walmart to Noon and your own D2C. Not software you operate. A team that operates it for you.
            </p>
            
            <div className="hero-ctas justify-center reveal flex-col sm:flex-row" style={{ transitionDelay: '0.4s' }}>
              <Link to="/apply" className="btn btn-jade w-full sm:w-auto text-center">Request an account audit</Link>
              <Link to="/saddl-os" className="btn btn-outline w-full sm:w-auto text-center">Explore Saddl OS</Link>
            </div>
            
            <div className="hero-plat justify-center reveal gap-y-2 gap-x-3 md:gap-6" style={{ transitionDelay: '0.5s' }}>
              <span>Amazon (Global)</span>
              <span className="hidden md:inline">•</span>
              <span>Noon UAE/KSA</span>
              <span className="hidden md:inline">•</span>
              <span>Walmart</span>
              <span className="hidden md:inline">•</span>
              <span>Meta & Google D2C</span>
            </div>
          </div>

          <div className="hero-panel text-left flex flex-col" style={{ padding: 0, background: 'transparent', zIndex: 30, position: 'relative', borderRadius: '24px', boxShadow: 'var(--shadow-panel)', marginBottom: '4rem' }}>
            <iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameBorder="0" style={{ border: 'none', borderRadius: '24px', overflow: 'hidden', display: 'block' }}></iframe>
          </div>
        </div>
      </section>

      <section className="s-xl tex-ledger grain">
        <div className="wrap">
          <div className="text-center mb-16 reveal">
            <h2 className="t-headline mt-4">Three steps from audit to operator.</h2>
            <p className="t-body-lg text-[var(--muted)] mt-2">You shouldn't have to change much. We embed around what you already have.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="step-card reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="step-num">STEP 01</span>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Diagnostic</h3>
              <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">We run a free account diagnostic. Read-only access. Contribution margin gaps, attribution blind spots, and inventory exposure surfaced within 48 hours. No commitment required.</p>
              <div className="bg-[var(--surface)] border border-[var(--hairline)] rounded-lg p-4">
                <div className="t-data text-xs text-[var(--muted)]">48h turnaround · read-only · Amazon + Noon + D2C</div>
              </div>
            </div>

            <div className="step-card reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="step-num">STEP 02</span>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Brief</h3>
              <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">You receive a full account brief: what's working, what isn't, and what we'd do differently from week one. A decision point — not a sales call. No pressure, no follow-up sequence.</p>
              <div className="bg-[var(--surface)] border border-[var(--hairline)] rounded-lg p-4">
                <div className="t-data text-xs text-[var(--muted)]">Full account brief · decision point · no commitment</div>
              </div>
            </div>

            <div className="step-card reveal" style={{ transitionDelay: '0.3s' }}>
              <span className="step-num">STEP 03</span>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Embed</h3>
              <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">Saddl OS goes live on your accounts. Weekly decisions, bi-weekly reports, monthly P&L reconciliation. You stop managing. We start running.</p>
              <div className="bg-[var(--surface)] border border-[var(--hairline)] rounded-lg p-4">
                <div className="t-data text-xs text-[var(--muted)]">Weekly decisions · bi-weekly reports · monthly P&L</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-modules tex-deep grain">
        <div className="wrap">
          <div className="text-center mb-16 reveal">
            <h2 className="t-headline mt-4">Six intelligence layers.</h2>
            <p className="t-body-lg text-[var(--ink)] opacity-70 mt-2">Built for the data that matters — contribution margin per SKU, not vanity metrics.</p>
            <div className="t-data text-[var(--ink)] opacity-40 mt-6">Amazon (Global) · Noon UAE/KSA incl. Minutes · Meta · Google</div>
          </div>

          <div className="modules-grid">
            <div className="module-card reveal">
              <div className="icon-tile"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="2,14 7,8.5 11,11.5 18,4"/><polyline points="13,4 18,4 18,9"/></svg></div>
              <h3 className="text-[var(--ink)] font-bold text-lg mb-2">Advertising Intelligence</h3>
              <p className="text-[var(--ink)] opacity-60 text-sm mb-6 flex-1">SP, SB, SD campaigns managed and validated. Every bid change tracked to a revenue delta.</p>
              <div className="t-data text-[11px] text-[var(--ink)] opacity-40 border-t border-[var(--hairline-d)] pt-3">Jun 12 · bid +22% · +$1,250 validated · 14-day window</div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="icon-tile"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 1.5L18 6v8L10 18.5 2 14V6z"/><line x1="2" y1="6" x2="10" y2="10.5"/><line x1="10" y1="10.5" x2="18" y2="6"/><line x1="10" y1="10.5" x2="10" y2="18.5"/></svg></div>
              <h3 className="text-[var(--ink)] font-bold text-lg mb-2">Inventory Intelligence</h3>
              <p className="text-[var(--ink)] opacity-60 text-sm mb-6 flex-1">Reorder forecasting, FBA fee optimisation, stockout prevention. Contribution margin per unit.</p>
              <div className="t-data text-[11px] text-[var(--ink)] opacity-40 border-t border-[var(--hairline-d)] pt-3">B08X · 47 units · reorder triggered · ETA 18d</div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="icon-tile"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V7z"/><polyline points="12,2 12,7 17,7"/><line x1="7" y1="11" x2="13" y2="11"/><line x1="7" y1="14" x2="11" y2="14"/></svg></div>
              <h3 className="text-[var(--ink)] font-bold text-lg mb-2">Listing & Content</h3>
              <p className="text-[var(--ink)] opacity-60 text-sm mb-6 flex-1">AI-generated copy optimised for search and conversion. A+, brand store, video briefs. Continuously tested.</p>
              <div className="t-data text-[11px] text-[var(--ink)] opacity-40 border-t border-[var(--hairline-d)] pt-3">Listing update deployed · rank +12 · BSR 4,821→3,209</div>
            </div>

            <div className="module-card reveal">
              <div className="icon-tile"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 10.5L9.5 3H18V11.5L11 18.5 2.5 10.5z"/><circle cx="14" cy="7" r="1.2" fill="currentColor" stroke="none"/></svg></div>
              <h3 className="text-[var(--ink)] font-bold text-lg mb-2">Pricing Intelligence</h3>
              <p className="text-[var(--ink)] opacity-60 text-sm mb-6 flex-1">Competitive monitoring, Buy Box optimisation, promotional ROI modelling against real margin.</p>
              <div className="t-data text-[11px] text-[var(--ink)] opacity-40 border-t border-[var(--hairline-d)] pt-3">Buy Box 94% · competitor −$1.40 · margin floor: met</div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="icon-tile"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="10" width="4" height="8" rx="1"/><rect x="8" y="6" width="4" height="12" rx="1"/><rect x="14" y="3" width="4" height="15" rx="1"/></svg></div>
              <h3 className="text-[var(--ink)] font-bold text-lg mb-2">Financial Intelligence & P&L</h3>
              <p className="text-[var(--ink)] opacity-60 text-sm mb-6 flex-1">True contribution margin per SKU: COGS, FBA fees, ad spend, returns. No rounding, no omissions.</p>
              <div className="t-data text-[11px] text-[var(--ink)] opacity-40 border-t border-[var(--hairline-d)] pt-3">Revenue $18,420 · true CM $4,103 (22.3%) · dashboard CM $6,210</div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="icon-tile"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 1.5L3 4.5V10c0 4.5 3.1 8.3 7 9.5 3.9-1.2 7-5 7-9.5V4.5z"/><polyline points="7.5,10.5 9.5,12.5 13,8.5"/></svg></div>
              <h3 className="text-[var(--ink)] font-bold text-lg mb-2">Brand Health</h3>
              <p className="text-[var(--ink)] opacity-60 text-sm mb-6 flex-1">Review velocity, listing suppression, hijacker detection, BSR trends. Issues resolved, not reported.</p>
              <div className="t-data text-[11px] text-[var(--ink)] opacity-40 border-t border-[var(--hairline-d)] pt-3">3 suppressions · 2 resolved · 1 escalated · reviews +8</div>
            </div>
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/saddl-os" className="font-bold text-[var(--jade-mist)] hover:text-[var(--ink)] underline-offset-4 hover:underline transition-all">Explore Saddl OS &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="s-xl tex-ledger grain">
        <div className="wrap">
          <div className="text-center mb-16 reveal">
            <h2 className="t-headline mt-4">Specifics, not promises.</h2>
            <p className="t-body-lg text-[var(--muted)] mt-2">Real outcomes from brands we operate. Names withheld by request.</p>
          </div>

          <div className="proof-grid mb-16">
            <div className="proof-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="proof-quote-bg">"</div>
              <div className="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">★★★★★</div>
              <q className="break-words">"We sell on three marketplaces from one warehouse. When a supplier is late, all three go dark together — for our top seller, that's AED 100K a month at risk. Our inventory management system built around supplier lead time, sales velocity, and cash flow, kept out-of-stock under 10% across 100+ SKUs."</q>
              <div className="proof-author mt-6 flex items-center gap-3">
                <div className="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HK</div>
                <div className="proof-attr"><span className="proof-name font-semibold text-sm text-[var(--ink)]">Home and Kitchen Essentials brand</span><br/><span className="proof-co text-xs text-[var(--muted)]">Amazon+Noon UAE and KSA · H1 2026</span></div>
              </div>
            </div>

            <div className="proof-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="proof-quote-bg">"</div>
              <div className="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">★★★★★</div>
              <q className="break-words">"One of our sellers was paying full price to advertise to customers who'd have bought anyway — 60% of their ad budget was chasing people already searching their own brand name. We cut that spend by a quarter. Revenue didn't drop — it went up. AED 5,400 a month in cost savings, reinvested and reclaimed."</q>
              <div className="proof-author mt-6 flex items-center gap-3">
                <div className="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HB</div>
                <div className="proof-attr"><span className="proof-name font-semibold text-sm text-[var(--ink)]">Hydration brand</span><br/><span className="proof-co text-xs text-[var(--muted)]">Amazon UAE · Q2 2026</span></div>
              </div>
            </div>

            <div className="proof-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="proof-quote-bg">"</div>
              <div className="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">★★★★★</div>
              <q className="break-words">"One seller's Noon account went out of budget every single day — a single setting was burning the budget by afternoon. We fixed that: ROAS 1.04× → 2.70× in 20 days. Then we rebuilt the account with a structured approach — brand defense, category targeting, competitor conquest — each with its own budget and bid logic. Current ROAS: 3.15×, nearly tripling where it started."</q>
              <div className="proof-author mt-6 flex items-center gap-3">
                <div className="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HB</div>
                <div className="proof-attr"><span className="proof-name font-semibold text-sm text-[var(--ink)]">Hydration brand</span><br/><span className="proof-co text-xs text-[var(--muted)]">Noon UAE · Q2 2026</span></div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 t-data text-[var(--ink)] text-[13px] font-semibold tracking-wider reveal">
            <span>Multi-marketplaces operations</span>
            <span className="text-[var(--hairline)]">|</span>
            <span>3+ geos covered. 100+ SKUs managed</span>
            <span className="text-[var(--hairline)]">|</span>
            <span>AED 40,000+ recovered/saved monthly</span>
            <span className="text-[var(--hairline)]">|</span>
            <span>Below -10% out-of-stock</span>
          </div>
        </div>
      </section>

      <section className="s-modules tex-deep grain">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="t-headline">What you're probably wondering.</h2>
          </div>

          <div className="bg-[var(--card)] rounded-[var(--r-card)] shadow-[var(--shadow-card)] overflow-hidden reveal">
            <div className="faq-item">
              <button className="faq-question">
                Is this a retainer or a managed service?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                Neither label fits exactly. We embed as your operating team — present in your accounts every week, making decisions, owning outcomes. Retainers imply advice. Managed services imply outsourcing. We call it embedding because that's what it is.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                Do we need to give you access to our Amazon account?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                Yes — operator-level access to Seller Central and Advertising Console. We cannot make decisions in your accounts without it. All access is scoped to what Saddl OS requires and fully logged.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                How quickly do you see results?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                Diagnostic surfaces issues in 48 hours. Advertising decisions show validated impact in 14–21 days. Inventory decisions show in the reorder cycle. P&L clarity shows in the first monthly reconciliation. We don't promise timelines — we promise accountability for what the numbers show.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                What happens if we want to stop?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                30-day notice, clean handover. Your accounts, your data, always yours. We document everything we've done and why. You leave knowing exactly what the system was doing and how to continue it.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                Do you work with brands outside MENA?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                Yes. We operate accounts globally on Amazon. Our edge in MENA is Noon UAE/KSA expertise including Noon Minutes — which most global agencies don't have. For brands with Amazon global and Noon presence, we run both as one system.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                What does it cost?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                Pricing is based on account complexity, platform count, and scope — discussed after the diagnostic. We don't publish pricing because a $2M Amazon-only brand and a $15M Amazon + Noon + D2C brand are different engagements. Apply first. We'll tell you exactly what it costs before you commit to anything.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-apply tex-ledger grain">
        <div className="wrap text-center max-w-3xl mx-auto py-16 reveal">
          <h2 className="t-headline">Your accounts are running right now.</h2>
          <p className="t-body-lg text-[var(--muted)] mt-4 mb-8">The question is whether someone accountable is running them.</p>
          
          <div className="mb-10 w-full px-4 sm:px-0">
            <Link to="/apply" className="btn btn-jade w-full sm:w-auto px-8 py-4 text-lg">Apply</Link>
          </div>

          <p className="t-data text-xs text-[var(--muted)] max-w-2xl mx-auto">
            Right for brands with $1M–$20M revenue · Amazon · Noon UAE/KSA · Meta · Google
          </p>
        </div>
      </section>
    </>
  );
}
