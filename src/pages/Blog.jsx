import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="s-hero tex-ledger grain text-center border-b border-[var(--hairline)]">
        <div className="wrap pt-28 pb-16">
          <h1 className="t-display reveal" style={{ transitionDelay: '0.1s', maxWidth: '900px', marginInline: 'auto' }}>
            The Operator's Ledger
          </h1>
          <p className="hero-body t-body-lg mx-auto mt-4 reveal text-[var(--muted)]" style={{ transitionDelay: '0.2s', maxWidth: '600px' }}>
            Insights on Amazon, Noon, and true contribution margin. Written by operators running real accounts, not content marketers.
          </p>
        </div>
      </section>

      {/* Section 2: Blog Grid */}
      <section className="s-xl tex-deep grain" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="wrap">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.1s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">What an embedded ecommerce operator actually does (vs. an agency)</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                The fundamental difference between handing strategy to an agency and embedding a team that owns the commercial engine.
              </p>
            </div>

            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.2s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">Should you use an Amazon PPC tool or hire a managed service?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                Why software alone stops at optimization, and when growing brands need to graduate to an operational team.
              </p>
            </div>

            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.3s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">Why your Amazon ROAS looks great and your profit is shrinking</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                Unpacking the trap of vanity metrics and how to transition to measuring true contribution margin.
              </p>
            </div>

            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.4s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">Amazon vs. Noon UAE: what brands get wrong about running both platforms</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                The operational pitfalls of treating MENA marketplaces interchangeably and how to build a unified system.
              </p>
            </div>

            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.5s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">Noon Minutes: what Amazon sellers need to know before selling in the UAE</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                A primer on the quick-commerce layer that most global agencies ignore entirely.
              </p>
            </div>

            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.6s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">7 signs your Amazon agency is costing you more than it's making you</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                How to spot the difference between an agency managing your spend and an operator managing your P&L.
              </p>
            </div>

            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.7s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">How much does Amazon management cost in 2026?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                Breaking down the real costs of operations and why percentage-of-spend models are obsolete.
              </p>
            </div>

            <div className="module-card reveal flex flex-col" style={{ transitionDelay: '0.8s', opacity: 0.8 }}>
              <div className="t-data text-xs text-[var(--jade-mist)] mb-3 uppercase">Coming Soon</div>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">What to look for when hiring an Amazon management firm in the UAE</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                A buyer's guide to separating the dashboard-senders from the actual operators in the MENA region.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Closing CTA */}
      <section className="s-apply tex-ledger grain">
        <div className="wrap text-center py-16 reveal">
          <div className="hero-chip mb-6"><span className="hero-chip-tag">cleared desk</span></div>
          <h2 className="t-headline mb-8">Stop reading. Start running.</h2>
          <div className="mb-4 px-4 sm:px-0">
            <Link to="/apply" className="btn btn-jade w-full sm:w-auto text-lg px-8 py-4">Request an account audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
