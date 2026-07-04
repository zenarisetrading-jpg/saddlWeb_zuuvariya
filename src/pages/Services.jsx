import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
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
            We embed as your operating team.
          </h1>
          <p className="hero-body t-body-lg mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
            Not an agency that sends reports. Not software you have to manage yourself. A team that makes the operational decisions in your accounts every week.
          </p>
        </div>
      </section>

      <section className="s-xl tex-deep grain">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="t-headline">What we actually do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="module-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="icon-tile">✦</div>
              <h3 className="text-white font-bold text-xl mb-3">Saddl OS</h3>
              <p className="text-white/60 text-base leading-relaxed">
                The operating system we deploy to run your business. Connects Amazon, Noon, Shopify, ads, and COGS into a single intelligence layer that computes true contribution margin per SKU. This is the foundation we operate from.
              </p>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="icon-tile">✦</div>
              <h3 className="text-white font-bold text-xl mb-3">Multi-Marketplace Operations</h3>
              <p className="text-white/60 text-base leading-relaxed">
                We run your business across Amazon globally and Noon UAE and KSA — including Noon Minutes — alongside Walmart and other marketplaces as you expand. Each platform has its own seller mechanics, fee structures, and quirks, and we manage all of them as one connected system.
              </p>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="icon-tile">✦</div>
              <h3 className="text-white font-bold text-xl mb-3">Full-Funnel Paid Media</h3>
              <p className="text-white/60 text-base leading-relaxed">
                Beyond marketplace advertising, we manage Meta and Google campaigns as part of the same connected system — traffic and spend decisions made with full visibility into how they affect marketplace performance.
              </p>
            </div>

            <div className="module-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="icon-tile">✦</div>
              <h3 className="text-white font-bold text-xl mb-3">Account Management & Reporting</h3>
              <p className="text-white/60 text-base leading-relaxed">
                Every two weeks you receive a unified snapshot across every channel and function — what happened, why, and what we're doing next. Monthly strategic reviews zoom out to the portfolio level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-xl tex-ledger grain">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="t-headline">How the engagement runs</h2>
          </div>

          <div className="space-y-8">
            <div className="step-card flex flex-col md:flex-row gap-6 items-start reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-full md:w-48 shrink-0">
                <span className="step-num">PHASE 1</span>
                <h3 className="text-xl font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-body)' }}>Onboarding (~2 weeks)</h3>
              </div>
              <div className="flex-1">
                <p className="text-[var(--muted)] text-lg leading-relaxed">We connect to your accounts, audit the current state across every function, and establish baseline metrics. By the end you have a clear picture of the gaps and what we're going after first.</p>
              </div>
            </div>

            <div className="step-card flex flex-col md:flex-row gap-6 items-start reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="w-full md:w-48 shrink-0">
                <span className="step-num">PHASE 2</span>
                <h3 className="text-xl font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-body)' }}>Ongoing operations</h3>
              </div>
              <div className="flex-1">
                <p className="text-[var(--muted)] text-lg leading-relaxed">Ads managed weekly. Inventory monitored continuously. Pricing benchmarked against the market in real time. Returns diagnosed and acted on. Financials reconciled at settlement level every period.</p>
              </div>
            </div>

            <div className="step-card flex flex-col md:flex-row gap-6 items-start reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="w-full md:w-48 shrink-0">
                <span className="step-num">PHASE 3</span>
                <h3 className="text-xl font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-body)' }}>Reporting</h3>
              </div>
              <div className="flex-1">
                <p className="text-[var(--muted)] text-lg leading-relaxed">Biweekly unified snapshots across all channels — what happened, why, what's next. No interpretation required.</p>
              </div>
            </div>

            <div className="step-card flex flex-col md:flex-row gap-6 items-start reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="w-full md:w-48 shrink-0">
                <span className="step-num">PHASE 4</span>
                <h3 className="text-xl font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-body)' }}>Strategic reviews</h3>
              </div>
              <div className="flex-1">
                <p className="text-[var(--muted)] text-lg leading-relaxed">Monthly: what's working at the portfolio level, where the next unit of investment should go, which SKUs to push and which to pause.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-apply tex-deep grain">
        <div className="wrap text-center">
          <div className="max-w-3xl mx-auto bg-[var(--card-dark)] border border-[var(--hairline-d)] p-12 rounded-[var(--r-card)] shadow-[var(--shadow-panel)] reveal">
            <h2 className="t-headline" style={{ color: 'white' }}>Who this is for</h2>
            <p className="t-body-lg text-white/60 mt-4 mb-8">
              Saddl works with ecommerce brands past the early stage and ready to operate with discipline. You're likely a fit if:
            </p>
            
            <ul className="text-left text-white/80 space-y-4 mb-10 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> You're selling on Amazon, Noon, or both — and growing
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> You have a catalogue of meaningful size (20+ SKUs) with real revenue at stake
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> You're making operational decisions without a full picture of what they cost
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> You want a team that takes ownership — not another vendor that sends reports
              </li>
            </ul>

            <div className="mt-8">
              <Link to="/apply" className="btn btn-jade w-full md:w-auto text-lg px-8 py-4">Request an account audit</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
