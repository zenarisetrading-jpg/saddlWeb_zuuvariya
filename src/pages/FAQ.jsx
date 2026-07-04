import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // FAQ accordion logic
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
      <section className="s-hero tex-ledger grain text-center border-b border-[var(--hairline)]">
        <div className="wrap">
          <h1 className="t-display reveal" style={{ transitionDelay: '0.1s', maxWidth: '900px', marginInline: 'auto' }}>
            Frequently Asked Questions
          </h1>
          <p className="hero-body t-body-lg mx-auto mt-4 reveal text-[var(--muted)]" style={{ transitionDelay: '0.2s', maxWidth: '600px' }}>
            Everything you need to know about our operating model, platform access, and pricing.
          </p>
        </div>
      </section>

      <section className="s-modules tex-deep grain" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="wrap max-w-4xl mx-auto">
          
          <div className="bg-[var(--card)] rounded-[var(--r-card)] shadow-[var(--shadow-card)] overflow-hidden reveal" style={{ transitionDelay: '0.3s' }}>
            
            <div className="faq-item" style={{ borderTop: 'none' }}>
              <h2 className="faq-question">
                1. Is this a retainer or a managed service?
                <span className="faq-icon">+</span>
              </h2>
              <div className="faq-answer">
                Neither label fits exactly. We embed as your operating team — in your accounts every week, making decisions, owning outcomes. Retainers imply advice; managed services imply outsourcing. We call it embedding because that's what it is.
              </div>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">
                2. Do we need to give you access to our Amazon account?
                <span className="faq-icon">+</span>
              </h2>
              <div className="faq-answer">
                Yes — operator-level access to Seller Central and the Advertising Console. We can't make decisions in your accounts without it. All access is scoped to what Saddl OS requires and logged.
              </div>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">
                3. How quickly do you see results?
                <span className="faq-icon">+</span>
              </h2>
              <div className="faq-answer">
                The audit surfaces issues in 48 hours. Advertising decisions typically show validated impact in 14–21 days. Inventory decisions show impact in the reorder cycle. P&L clarity shows in the first monthly reconciliation. We don't promise timelines — we promise accountability for what the numbers show.
              </div>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">
                4. What happens if we want to stop?
                <span className="faq-icon">+</span>
              </h2>
              <div className="faq-answer">
                30-day notice, clean handover. Your accounts, your data, your access — always yours. We document everything we've done and why. You leave knowing exactly what the system was doing.
              </div>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">
                5. Do you work with brands outside MENA?
                <span className="faq-icon">+</span>
              </h2>
              <div className="faq-answer">
                Yes. We operate accounts globally on Amazon. Our edge in MENA is Noon UAE/KSA including Noon Minutes, which most global agencies don't have. For brands running both Amazon global and Noon, we're the only firm that runs both as one system.
              </div>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">
                6. What does it cost?
                <span className="faq-icon">+</span>
              </h2>
              <div className="faq-answer">
                Pricing is set after the audit — based on account complexity, platform count, and scope. We don't publish a rate because a $2M Amazon-only brand and a $15M Amazon + Noon + D2C brand are different engagements. Request an audit first; we'll tell you exactly what it costs before you commit to anything.
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="s-apply tex-ledger grain">
        <div className="wrap text-center py-12 reveal">
          <div className="hero-chip mb-6"><span className="hero-chip-tag">cleared desk</span></div>
          <h2 className="t-headline mb-8">Ready to see what the numbers show?</h2>
          <div className="mb-4">
            <Link to="/apply" className="btn btn-jade text-lg px-8 py-4">Request an account audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
