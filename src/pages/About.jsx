import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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
            Built by an operator who got tired of guessing.
          </h1>
        </div>
      </section>

      <section className="s-xl tex-ledger grain" style={{ paddingTop: '2rem' }}>
        <div className="wrap max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="prose prose-lg prose-p:font-['Bricolage_Grotesque'] prose-p:text-[var(--ink)] prose-p:leading-relaxed prose-p:mb-6 max-w-none">
            <p>
              I've been selling on Amazon for years. Built a seven-figure business. Spent hundreds of thousands on advertising. Managed a catalogue across UAE and Saudi Arabia. And for most of that time, I was running on instinct — the same way most ecommerce founders do.
            </p>
            <p>
              The ads dashboard told me ROAS. The inventory tool told me stock levels. The pricing tool showed me competitors. None of them talked to each other. None of them told me what was actually happening to the business.
            </p>
            <p>
              Before Saddl, I spent five years at Acxiom and LiveRamp — inside the infrastructure that powers identity resolution and measurement for the world's largest advertisers, through the Data Plus Math acquisition. I understood, at a technical level, what it meant to connect data sources into a single decision layer. Then I moved to MediaHub Worldwide as Analytics Director and SVP, building incrementality measurement systems for Fortune 500 brands — the kind of rigorous attribution most brands spend millions trying to reach.
            </p>
            <p>
              When I came back to my own ecommerce business, I couldn't believe the gap. The tools available to a growing brand were nowhere near the analytical standard I'd been working at. And the agencies filling the gap were operating without any real data infrastructure underneath them. So I built it.
            </p>
            <p className="font-bold">
              Saddl is what happens when you take the analytical rigour of an enterprise data team and apply it to the operational reality of a growing ecommerce brand. Not a SaaS product. Not an agency. An embedded operating team with the infrastructure to back it.
            </p>
          </div>
        </div>
      </section>

      <section className="s-xl tex-deep grain">
        <div className="wrap">
          <div className="text-center mb-16 reveal">
            <h2 className="t-headline">What makes Saddl different</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="module-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="icon-tile">✦</div>
              <h3 className="text-[var(--ink)] font-bold text-xl mb-3">We're operators, not vendors.</h3>
              <p className="text-[var(--ink)] opacity-60 text-base leading-relaxed">
                We run our own ecommerce business across Amazon and Noon — verified storefronts, live inventory, real ad spend. Everything we do for clients we've done for ourselves first.
              </p>
            </div>
            <div className="module-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="icon-tile">✦</div>
              <h3 className="text-[var(--ink)] font-bold text-xl mb-3">We built the infrastructure.</h3>
              <p className="text-[var(--ink)] opacity-60 text-base leading-relaxed">
                The data pipeline, the intelligence layer, the reporting system — all proprietary. We didn't stitch together third-party tools and call it a platform. We built the connections between ads, inventory, pricing, returns, and financials because they didn't exist anywhere else.
              </p>
            </div>
            <div className="module-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="icon-tile">✦</div>
              <h3 className="text-[var(--ink)] font-bold text-xl mb-3">We own the outcome.</h3>
              <p className="text-[var(--ink)] opacity-60 text-base leading-relaxed">
                We don't hand you a dashboard and walk away. We're in the account, making decisions, every week. When something's wrong, we catch it. When something's working, we push it further.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-apply tex-ledger grain">
        <div className="wrap text-center py-12 reveal">
          <div className="mb-10 px-4 sm:px-0">
            <Link to="/apply" className="btn btn-jade w-full sm:w-auto text-lg px-8 py-4">Request an account audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
