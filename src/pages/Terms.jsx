import React from 'react';

export default function Terms() {
  return (
    <>
      <section className="tex-deep grain min-h-screen" style={{ paddingTop: '160px', paddingBottom: '128px' }}>
        <div className="wrap mx-auto px-4 md:px-8" style={{ maxWidth: '900px' }}>
          <div className="bg-[var(--card)] shadow-[var(--shadow-panel)] text-left border border-[var(--hairline)]" style={{ padding: '64px', borderRadius: '32px' }}>
            
            <header style={{ marginBottom: '64px', borderBottom: '1px solid var(--hairline)', paddingBottom: '48px' }}>
              <h1 className="t-headline text-4xl md:text-5xl text-[var(--ink)]" style={{ marginBottom: '24px' }}>Terms & Conditions</h1>
              <p className="t-data text-[var(--muted)] uppercase tracking-wider">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>
            
            <div className="text-[var(--muted)]" style={{ fontSize: '1.125rem' }}>
              <section style={{ marginBottom: '64px' }}>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>1. Introduction</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  Welcome to Saddl. By accessing our website and using our services, you agree to be legally bound by these Terms & Conditions. Please read them carefully.
                </p>
              </section>
              
              <section style={{ marginBottom: '64px' }}>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>2. Services</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  Saddl provides operational, financial, and strategic ecommerce management services. Any specific engagements, audits, or ongoing partnerships will be governed by a separate, formal mutual agreement.
                </p>
              </section>
              
              <section style={{ marginBottom: '64px' }}>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>3. Intellectual Property</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  The content, layout, design, data, graphics, methodologies, and software products (including Saddl OS) on this website are protected by intellectual property laws and are the exclusive property of Saddl.
                </p>
              </section>
              
              <section style={{ marginBottom: '64px' }}>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>4. Limitation of Liability</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  Saddl shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly through the use of our website or initial assessments.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[var(--ink)] tracking-tight" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>5. Contact</h3>
                <p style={{ lineHeight: '1.8', maxWidth: '75ch' }}>
                  For any questions or legal inquiries regarding these terms, please contact us directly at <a href="mailto:info@saddl.io" className="text-[var(--jade)] font-medium hover:underline" style={{ textUnderlineOffset: '4px' }}>info@saddl.io</a>.
                </p>
              </section>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
