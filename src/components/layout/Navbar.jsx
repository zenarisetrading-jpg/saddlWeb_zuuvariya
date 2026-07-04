import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-left">
          <Link to="/" className="nav-wordmark">Saddl</Link>
        </div>
        <div className="nav-links hide-on-mobile">
          <Link to="/saddl-os" className="nav-link">Saddl OS</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blogs" className="nav-link">Blog</Link>
        </div>
        <div className="nav-actions">
          <Link to="/apply" className="btn-nav hide-on-mobile">Request an account audit</Link>
          <button 
            className="mobile-menu-btn show-on-mobile" 
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
          >
            {isNavOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>
      </nav>

      {isNavOpen && (
        <div className="mobile-nav-overlay show-on-mobile" onClick={() => setIsNavOpen(false)}>
          <ul className="mobile-nav-menu" onClick={e => e.stopPropagation()}>
            <li><Link to="/saddl-os" onClick={() => setIsNavOpen(false)}>Saddl OS</Link></li>
            <li><Link to="/services" onClick={() => setIsNavOpen(false)}>Services</Link></li>
            <li><Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
            <li><Link to="/blogs" onClick={() => setIsNavOpen(false)}>Blog</Link></li>
            <li><Link to="/apply" className="btn-nav" onClick={() => setIsNavOpen(false)}>Request an account audit</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}
