import React from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <>
      <section className="tex-deep grain min-h-screen flex flex-col justify-center" style={{ paddingTop: '160px', paddingBottom: '128px' }}>
        <div className="wrap mx-auto px-4 md:px-8 w-full" style={{ maxWidth: '1000px' }}>
          <div className="bg-[var(--card)] shadow-[var(--shadow-panel)] text-center border border-[var(--hairline)]" style={{ padding: '80px', borderRadius: '32px' }}>
            
            <header style={{ marginBottom: '64px' }}>
              <h1 className="t-headline text-4xl md:text-5xl text-[var(--ink)]" style={{ marginBottom: '32px' }}>Careers at Saddl</h1>
              <p className="t-body text-lg text-[var(--muted)] mx-auto" style={{ lineHeight: '1.8', maxWidth: '65ch' }}>
                We're building the operating system for modern ecommerce brands. We're always looking for disciplined operators, financial strategists, and supply chain experts to join our core team.
              </p>
            </header>
            
            <div className="bg-[var(--surface)] border border-[var(--hairline)] text-left mx-auto shadow-inner" style={{ padding: '64px', borderRadius: '24px', marginBottom: '80px', maxWidth: '800px' }}>
              <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>No open roles right now</h3>
              <p className="t-body text-lg text-[var(--muted)]" style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                While we don't have any specific roles open at this exact moment, we are growing quickly. If you think you'd be a perfect fit and can bring exceptional value to our team, we'd love to hear from you anyway.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <a href="mailto:careers@saddl.io" className="btn btn-jade inline-flex shadow-lg hover:shadow-xl transition-shadow rounded-full font-medium" style={{ padding: '20px 48px', fontSize: '1.125rem', marginBottom: '40px' }}>
                Send us your CV
              </a>
              <Link to="/" className="text-[var(--jade-mist)] hover:text-[var(--ink)] transition-colors hover:underline font-medium tracking-wide" style={{ textUnderlineOffset: '4px', fontSize: '0.9rem' }}>
                &larr; BACK TO HOME
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
