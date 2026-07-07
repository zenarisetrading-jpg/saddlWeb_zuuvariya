import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SaddlOS() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="s-hero tex-ledger grain text-center border-b border-[var(--hairline)]">
        <div className="wrap">
          <h1 className="t-display reveal" style={{ transitionDelay: '0.1s', maxWidth: '900px', marginInline: 'auto' }}>
            The operating system for multi-channel commerce.
          </h1>
          <p className="hero-body t-body-lg mx-auto mt-6 reveal" style={{ transitionDelay: '0.2s' }}>
            Built around true contribution margin. Designed for operators, not analysts.
          </p>
        </div>
      </section>

      <section className="s-modules tex-deep grain" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="wrap max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="module-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="icon-tile">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="2,14 7,8.5 11,11.5 18,4"/><polyline points="13,4 18,4 18,9"/></svg>
              </div>
              <h3>1. Advertising Intelligence</h3>
              <p>
                Ads aren't run in a silo. Bid logic is directly informed by current inventory levels, organic rank, and true margin per unit. If a SKU is going out of stock, bids lower automatically. If organic rank improves, branded spend dials back to prevent cannibalisation. It's connected decision-making, not just bid adjustments.
              </p>
              <div className="module-data mt-auto">
                → Jun 12 · organic rank +3 · ad spend −12% · margin +$450
              </div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="icon-tile">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 1.5L18 6v8L10 18.5 2 14V6z"/><line x1="2" y1="6" x2="10" y2="10.5"/><line x1="10" y1="10.5" x2="18" y2="6"/><line x1="10" y1="10.5" x2="10" y2="18.5"/></svg>
              </div>
              <h3>2. Inventory Intelligence</h3>
              <p>
                Forecasts based on real sales velocity, adjusting for upcoming promotions and seasonal peaks. We map lead times against cash flow to trigger precise reorder points, preventing stockouts before they happen and avoiding dead capital tied up in slow-moving SKUs.
              </p>
              <div className="module-data mt-auto">
                → Jun 14 · reorder triggered · FBA stockout prevented · 18d ETA
              </div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="icon-tile">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V7z"/><polyline points="12,2 12,7 17,7"/><line x1="7" y1="11" x2="13" y2="11"/><line x1="7" y1="14" x2="11" y2="14"/></svg>
              </div>
              <h3>3. Listing & Content</h3>
              <p>
                Your listings are built and maintained with AI-assisted content generation paired with operator judgment: correct browse-node classification, full keyword architecture, and A+ content built for conversion and search rank — not just technical compliance.
              </p>
              <div className="module-data mt-auto">
                → Jun 15 · A+ copy updated · organic rank +12 spots
              </div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="icon-tile">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 10.5L9.5 3H18V11.5L11 18.5 2.5 10.5z"/><circle cx="14" cy="7" r="1.2" fill="currentColor" stroke="none"/></svg>
              </div>
              <h3>4. Pricing Intelligence</h3>
              <p>
                We monitor your competitive landscape and benchmark your market position continuously, with break-even and margin-floor analysis built in. You always know exactly how much room you have to move on price before a decision starts eating into profitability.
              </p>
              <div className="module-data mt-auto">
                → Jun 16 · hold price · Buy Box 94% · floor maintained
              </div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="icon-tile">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="10" width="4" height="8" rx="1"/><rect x="8" y="6" width="4" height="12" rx="1"/><rect x="14" y="3" width="4" height="15" rx="1"/></svg>
              </div>
              <h3>5. Financial Intelligence & P&L</h3>
              <p>
                Using an AI-powered reconciliation pipeline, we produce settlement-level contribution margin for every SKU — after platform fees, fulfilment costs, storage, promotions, and ad spend. This is the real number behind your business.
              </p>
              <div className="module-data mt-auto">
                → Jun 18 · monthly recon · true CM per SKU · 22.3% margin
              </div>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.6s' }}>
              <div className="icon-tile">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 1.5L3 4.5V10c0 4.5 3.1 8.3 7 9.5 3.9-1.2 7-5 7-9.5V4.5z"/><polyline points="7.5,10.5 9.5,12.5 13,8.5"/></svg>
              </div>
              <h3>6. Brand Health</h3>
              <p>
                We treat returns and reputation as one diagnostic. Root-cause analysis identifies whether returns stem from a listing, product, or fulfilment issue, while review velocity and rating integrity are tracked alongside.
              </p>
              <div className="module-data mt-auto">
                → Jun 19 · root-cause analysis · listing hijacker blocked · 2 resolved
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-apply tex-ledger grain">
        <div className="wrap text-center max-w-3xl mx-auto py-16 reveal">
          <h2 className="t-headline">The OS is ours. So is the outcome.</h2>
          <p className="t-body-lg text-[var(--ink)] mt-4 mb-8">
            Saddl OS isn't a dashboard we hand you. It's the intelligence layer our operators run on your accounts every week. You don't log in and interpret it — we act on it and report what happened. That's the difference between a tool and an operator.
          </p>
          <div className="mt-8">
            <Link to="/apply" className="btn btn-jade w-full md:w-auto text-lg px-8 py-4">Request an account audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
