import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="s-xl text-center" style={{ background: 'var(--ink)', color: 'white' }}>
      <div className="wrap">
        <div className="flex flex-wrap justify-center gap-6 mb-12 t-body-lg text-white/60">
          <Link to="/saddl-os" className="hover:text-white transition-colors">Saddl OS</Link>
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/blogs" className="hover:text-white transition-colors">Blog</Link>
          <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link to="/apply" className="hover:text-white transition-colors">Request an audit</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
        </div>
        <div className="t-data text-white/40">
          &copy; 2026 Saddl · Meydan Grandstand, Nad Al Sheba, Dubai, UAE · info@saddl.io
        </div>
      </div>
    </footer>
  );
}
