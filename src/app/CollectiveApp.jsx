import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/collective.css';

export default function CollectiveApp() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="collective-theme">
      {/* Navbar */}
      <nav className="coll-nav reveal">
        <div className="coll-nav-logo">Saddl</div>
        <ul className={`coll-nav-links ${isNavOpen ? 'mobile-open' : ''}`}>
          <li>How We Engage</li>
          <li>Saddl OS</li>
          <li>Proof</li>
          <li>FAQ</li>
        </ul>
        <div className="coll-nav-actions">
          <a href="#apply" className="coll-nav-cta">Apply</a>
          <button className="mobile-menu-btn" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isNavOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsNavOpen(false)}>
          <ul className="mobile-nav-menu" onClick={e => e.stopPropagation()}>
            <li><a href="#how-we-engage" onClick={() => setIsNavOpen(false)}>How We Engage</a></li>
            <li><a href="#saddl-os" onClick={() => setIsNavOpen(false)}>Saddl OS</a></li>
            <li><a href="#proof" onClick={() => setIsNavOpen(false)}>Proof</a></li>
            <li><a href="#faq" onClick={() => setIsNavOpen(false)}>FAQ</a></li>
            <li><a href="#apply" className="mobile-nav-cta" onClick={() => setIsNavOpen(false)}>Apply</a></li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section className="coll-hero">
        <div className="coll-hero-tag reveal">An embedded operating system</div>
        <h1 className="coll-hero-title reveal">Your ecommerce business runs on decisions.</h1>
        <p className="coll-hero-subtitle reveal">We make sure every one of them is backed by data. We embed into your brand and run your ecommerce operations as one connected system.</p>
        
        <div className="float-widget fw-1 data-font">
          <div style={{fontSize: '0.75rem', opacity: 0.5}}>OOS RISK: HIGH</div>
          <div style={{color: 'var(--coll-red)', fontSize: '1.25rem'}}>-29%</div>
        </div>
        <div className="float-widget fw-2 data-font">
          <div style={{fontSize: '0.75rem', opacity: 0.5}}>AD SPEND EFFICIENCY</div>
          <div style={{color: 'var(--coll-teal)', fontSize: '1.25rem'}}>Recovered AED 20k</div>
        </div>
        <div className="float-widget fw-3 data-font">
          <div style={{fontSize: '0.75rem', opacity: 0.5}}>P&L SETTLEMENT</div>
          <div style={{color: 'var(--coll-blue)', fontSize: '1.25rem'}}>Margin +12%</div>
        </div>

        {/* Dashboard Mockup */}
        <div className="coll-dashboard reveal">
          <div className="dash-sidebar" style={{ background: '#01352F' }}>
            <h3 style={{marginBottom: '2rem'}}>Saddl OS</h3>
            <div style={{opacity: 0.5, marginBottom: '1rem', fontSize: '0.875rem'}}>Advertising</div>
            <div style={{opacity: 0.5, marginBottom: '1rem', fontSize: '0.875rem'}}>Inventory</div>
            <div style={{opacity: 0.5, marginBottom: '1rem', fontSize: '0.875rem'}}>Pricing</div>
            <div style={{opacity: 0.5, marginBottom: '1rem', fontSize: '0.875rem'}}>Returns</div>
            <div style={{opacity: 0.5, marginBottom: '1rem', fontSize: '0.875rem'}}>Financials</div>
          </div>
          <div className="dash-content">
            <h2 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>Unified Biweekly Snapshot</h2>
            <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem'}}>
              <div style={{flex: 1, padding: '1.5rem', background: '#01352F', borderRadius: '12px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-whisper)'}}>
                <div className="data-font" style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>TOTAL REVENUE</div>
                <div className="data-font" style={{fontSize: '2rem', color: 'var(--text-primary)'}}>AED 284,500.00</div>
              </div>
              <div style={{flex: 1, padding: '1.5rem', background: '#01352F', borderRadius: '12px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-whisper)'}}>
                <div className="data-font" style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>CONTRIBUTION MARGIN</div>
                <div className="data-font" style={{fontSize: '2rem', color: 'var(--coll-teal)'}}>41%</div>
              </div>
            </div>
            <div style={{height: '200px', background: '#01352F', borderRadius: '12px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-whisper)'}}></div>
          </div>
        </div>
      </section>

      {/* Steps / How We Engage */}
      <section className="coll-steps">
        <h2 style={{textAlign: 'center', fontSize: '3.5rem', marginBottom: '6rem'}} className="reveal">How We Engage</h2>
        
        <div className="step-row reveal">
          <div className="step-content">
            <span className="step-num">STEP 01</span>
            <h3 className="step-title">Diagnostic</h3>
            <p className="step-desc">We connect your accounts. We map the data pipeline. We look at the actual margin profile of the catalogue and identify where you are bleeding working capital.</p>
          </div>
          <div className="step-visual bg-grad-orange">
            <div style={{height: '200px', background: '#01352F', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-whisper)'}}>
              <div style={{width: '40%', height: '12px', background: 'var(--border-subtle)', borderRadius: '6px', marginBottom: '1rem'}}></div>
              <div style={{width: '60%', height: '12px', background: 'var(--border-subtle)', borderRadius: '6px', marginBottom: '1rem'}}></div>
            </div>
          </div>
        </div>

        <div className="step-row reveal">
          <div className="step-content">
            <span className="step-num">STEP 02</span>
            <h3 className="step-title">Brief</h3>
            <p className="step-desc">We don't send audits; we send a brief of what we are going to fix. This outlines the exact operational changes we will make in the first 90 days to recover capital and scale.</p>
          </div>
          <div className="step-visual bg-grad-blue">
            <div style={{height: '200px', background: '#01352F', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-whisper)'}}>
              <div style={{display: 'flex', gap: '1rem', height: '100%'}}>
                <div style={{flex: 1, background: 'var(--border-subtle)', borderRadius: '6px'}}></div>
                <div style={{flex: 2, background: 'rgba(17,17,17,0.02)', borderRadius: '6px'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="step-row reveal">
          <div className="step-content">
            <span className="step-num">STEP 03</span>
            <h3 className="step-title">Embed</h3>
            <p className="step-desc">We deploy the OS. Your ad spend, inventory position, and pricing logic are now connected. You receive bi-weekly snapshots that dictate commercial action.</p>
          </div>
          <div className="step-visual bg-grad-green">
            <div style={{height: '200px', background: '#01352F', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-whisper)'}}>
              <div style={{width: '100%', height: '40px', background: 'var(--border-subtle)', borderRadius: '6px', marginBottom: '1rem'}}></div>
              <div style={{width: '100%', height: '40px', background: 'var(--border-subtle)', borderRadius: '6px', marginBottom: '1rem'}}></div>
              <div style={{width: '100%', height: '40px', background: 'linear-gradient(90deg, var(--coll-red), var(--coll-teal), var(--coll-yellow))', borderRadius: '6px'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features / Saddl OS */}
      <section className="coll-features reveal">
        <div className="features-container">
          <h2 style={{fontSize: '3.5rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)'}}>Saddl OS</h2>
          <p style={{textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.25rem'}}>The intelligence layers running your brand.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>Advertising Intelligence</h3>
              <p>Inventory-aware and margin-aware campaign structures. Never push stock that is running low.</p>
            </div>
            <div className="feature-card">
              <h3>Inventory Intelligence</h3>
              <p>OOS risk flags, reorder signals, and capital allocation based on strict velocity data.</p>
            </div>
            <div className="feature-card">
              <h3>Listing & Content</h3>
              <p>Defending digital shelf space. We constantly monitor indexing and conversion blockers.</p>
            </div>
            <div className="feature-card">
              <h3>Pricing Intelligence</h3>
              <p>Market positioning relative to competitors, margin floors, and real-time break-even logic.</p>
            </div>
            <div className="feature-card">
              <h3>Financial Intelligence</h3>
              <p>Settlement-level P&L per SKU. The exact contribution margin after every marketplace fee.</p>
            </div>
            <div className="feature-card">
              <h3>Brand Health</h3>
              <p>Returns diagnostics by root cause. Why they came back and what it actually cost you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="coll-footer reveal">
        <h2 className="coll-footer-title">Ready to run your ecommerce operation like it has a data team behind it?</h2>
        <a href="#apply" className="coll-footer-btn">Apply</a>
      </footer>
    </div>
  );
}
