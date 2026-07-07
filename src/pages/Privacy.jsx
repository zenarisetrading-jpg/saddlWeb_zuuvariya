import React from 'react';

export default function Privacy() {
  return (
    <>
      <section className="tex-deep grain min-h-screen" style={{ paddingTop: '160px', paddingBottom: '128px' }}>
        <div className="wrap mx-auto px-4 md:px-8" style={{ maxWidth: '900px' }}>
          <div className="bg-[var(--card)] shadow-[var(--shadow-panel)] text-left border border-[var(--hairline)]" style={{ padding: '64px', borderRadius: '32px' }}>
            
            <header style={{ marginBottom: '64px', borderBottom: '1px solid var(--hairline)', paddingBottom: '48px' }}>
              <h1 className="t-headline text-4xl md:text-5xl text-[var(--ink)]" style={{ marginBottom: '24px' }}>Privacy Policy</h1>
              <p className="t-data text-[var(--muted)] uppercase tracking-wider">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>

            <div className="text-[var(--muted)]" style={{ fontSize: '1.125rem' }}>
              <p style={{ lineHeight: '1.8', maxWidth: '75ch', marginBottom: '64px' }}>
                At Saddl, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
              </p>
              
              <section style={{ marginBottom: '64px' }}>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Information We Collect</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  We only collect information necessary to provide you with our services, such as your name, contact details, and relevant business information provided during our audit application process. This ensures we can deliver the most accurate and valuable insights for your brand.
                </p>
              </section>
              
              <section style={{ marginBottom: '64px' }}>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>How We Use Your Information</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  Your information is used strictly to evaluate your fit for our services, communicate with you effectively, and deliver the specific services you request. We value your trust and <strong className="text-[var(--ink)]">do not</strong> sell, rent, or secretly share your data with third parties.
                </p>
              </section>
              
              <section>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Us</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your data rights, please contact us directly at <a href="mailto:info@saddl.io" className="text-[var(--jade)] font-medium hover:underline" style={{ textUnderlineOffset: '4px' }}>info@saddl.io</a>.
                </p>
              </section>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
