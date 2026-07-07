import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Apply from './pages/Apply';
import FAQ from './pages/FAQ';
import SaddlOS from './pages/SaddlOS';
import Blog from './pages/Blog';
// We are keeping AltApp and AltApp2 since they were experimental versions
import AltApp from './app/AltApp';
import AltApp2 from './app/AltApp2';
import CollectiveApp from './app/CollectiveApp';

export default function App() {
  return (
    <div className="collective-theme">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/saddl-os" element={<SaddlOS />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Experimental Routes */}
          <Route path="/alt" element={<AltApp />} />
          <Route path="/alt2" element={<AltApp2 />} />
          <Route path="/collective" element={<CollectiveApp />} />
          
          {/* Catch-all for simple missing pages (we'll direct to Home) */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
