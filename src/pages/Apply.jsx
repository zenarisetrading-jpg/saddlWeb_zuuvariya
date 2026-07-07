import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Apply() {
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formNextUrl, setFormNextUrl] = useState('');

  useEffect(() => {
    // Set the redirect URL to the current page with a success parameter
    setFormNextUrl(window.location.origin + window.location.pathname + '?success=true');

    // Check for success parameter and show message
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      // Clean up URL without reloading using React Router's history replacement
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.search]);

  return (
    <section className="s-xl tex-ledger grain">
      <div className="wrap">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="flex-1 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="hero-chip mb-6"><span className="hero-chip-tag">cleared desk</span></div>
            <h1 className="t-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '32px' }}>
              Start with an audit,<br/>not a contract.
            </h1>
            <p className="t-body-lg text-[var(--ink)] max-w-xl" style={{ marginBottom: '48px', lineHeight: 1.6 }}>
              Read-only access. Within 48 hours you'll have a clear picture of where your accounts are leaking margin, missing attribution, and carrying inventory risk. No commitment, no sales sequence — just the brief. If it's a fit, we talk about running it.
            </p>
            
            <h3 className="t-body font-bold mb-4" style={{ marginBottom: '24px' }}>What you get from the audit</h3>
            <ul className="space-y-4 t-body text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> <span className="flex-1">Contribution-margin gaps by SKU your dashboard isn't showing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> <span className="flex-1">Attribution blind spots across advertising</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> <span className="flex-1">Inventory and OOS exposure across the catalogue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--jade)] mt-1">✦</span> <span className="flex-1">A week-one action list — what we'd change first</span>
              </li>
            </ul>
          </div>
          
          <div className="w-full lg:w-[500px] reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="bg-[var(--card)] rounded-[var(--r-card)] shadow-[var(--shadow-card)] p-8 md:p-12 border border-[var(--hairline)]" style={{ padding: '40px' }}>
              
              {showSuccess && (
                <div id="form-success" style={{ display: 'block' }}>
                  Your audit request has been received. We'll be in touch within 24 hours.
                </div>
              )}

              <form id="audit-form" action="https://formsubmit.co/info@saddl.io" method="POST">
                <input type="hidden" name="_subject" value="New Account Audit Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" id="form-next" value={formNextUrl} />

                <div className="space-y-8">
                  <div>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="form-input" required placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <label className="form-label" htmlFor="brand">Brand</label>
                    <input type="text" id="brand" name="brand" className="form-input" required placeholder="Company or Brand Name" />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="website">Website / Storefront</label>
                    <input type="url" id="website" name="website" className="form-input" required placeholder="https://" />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="marketplace">Primary marketplace(s)</label>
                    <input type="text" id="marketplace" name="marketplace" className="form-input" required placeholder="e.g. Amazon US, Noon UAE, Shopify" />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="revenue">Approx. annual revenue</label>
                    <select id="revenue" name="revenue" className="form-input" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="Under $1M">Under $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $20M">$5M - $20M</option>
                      <option value="$20M+">$20M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="pain_point">What's not working right now?</label>
                    <textarea id="pain_point" name="pain_point" rows="3" className="form-input" required placeholder="Tell us what prompted you to reach out..."></textarea>
                  </div>

                  <div className="pt-6">
                    <button type="submit" className="btn btn-jade w-full py-4 text-lg">Request my account audit</button>
                  </div>

                  <p className="t-data text-[11px] leading-relaxed text-[var(--muted)] text-center mt-8" style={{ marginTop: '32px' }}>
                    <strong>Qualification note:</strong> Saddl is built for brands doing $1M–$20M in revenue on Amazon, with or without Noon. If you're earlier than that, we may not be the right fit yet — but tell us where you are.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
