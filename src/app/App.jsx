import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  BarChart2, 
  LineChart, 
  RotateCcw, 
  DollarSign, 
  Users, 
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Activity,
  Layers
} from 'lucide-react';
import { HeroGeometric, ElegantShape } from '../components/ui/HeroGeometric';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    setIsNavOpen(false);
  };

  const navItems = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'System' },
    { id: 'proof', label: 'In Practice' },
    { id: 'about', label: 'Story' },
    { id: 'services', label: 'Services' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white/60 font-sans selection:bg-[#1C5F3B] selection:text-white relative cursor-default overflow-x-hidden">
      
      {/* Interactive Cursor Spotlight */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden md:block"
        animate={{ background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(28,95,59,0.08), transparent 40%)` }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#030303]/70 backdrop-blur-md border-white/[0.08] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="w-5 h-5 bg-[#1C5F3B] rounded-[2px] transition-colors shadow-lg"></div>
            <span className="text-xl font-normal tracking-tight text-white font-['Gloock']">Saddl.</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60 font-['Bricolage_Grotesque']">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:text-white transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1C5F3B] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a href="mailto:hello@saddl.com" className="bg-[#1C5F3B] text-white px-5 py-2 rounded-sm hover:bg-[#164a2e] transition-all duration-300 font-semibold shadow-md hover:-translate-y-px text-sm ml-2 group relative overflow-hidden">
              Book Call
            </a>
          </div>
          <button className="md:hidden text-white/60 p-3 -mr-3" onClick={() => setIsNavOpen(!isNavOpen)}>{isNavOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {isNavOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#030303]/95 backdrop-blur-3xl border-b border-white/[0.08] p-6 flex flex-col gap-5 h-screen">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-white/60 hover:text-white text-lg font-medium">{item.label}</button>
            ))}
            <a href="mailto:hello@saddl.com" className="bg-[#1C5F3B] text-white px-6 py-3 rounded-sm text-center font-bold mt-4 text-sm">Book Call</a>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-12 relative z-10">
        
        {/* HERO */}
        <HeroGeometric />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50 my-4"></div>

        {/* THE PROBLEM */}
        <section id="problem" className="max-w-6xl mx-auto px-6 py-16 relative">
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <ElegantShape delay={0.2} width={400} height={80} rotate={-10} gradient="from-white/[0.05]" className="right-[-10%] top-[20%]" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
              <div className="w-10 h-10 bg-white/[0.05] border border-white/[0.15] rounded-xl flex items-center justify-center mb-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <Database className="text-white/60 group-hover:text-white relative z-10" size={18} />
              </div>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-white leading-[1.15] font-['Gloock']">Most ecommerce brands are run on instinct.</h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-4 font-['Bricolage_Grotesque']">
                You have an ads manager. An inventory spreadsheet. A returns process someone built six months ago. A pricing decision made last quarter that nobody revisited.
              </p>
              <div className="pl-4 border-l-[1.5px] border-white/[0.15] mb-4 py-2">
                <p className="text-sm font-medium text-white/80 font-['Bricolage_Grotesque']">Each one works in isolation. None of them talk to each other.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="text-white/60 text-sm md:text-base leading-relaxed space-y-4 font-['Bricolage_Grotesque'] md:pt-14 relative z-10 mt-8 md:mt-0">
              <div className="p-6 bg-white/[0.03] border border-white/[0.15] rounded-2xl backdrop-blur-[2px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <p className="mb-4">
                  So your ad spend goes up on a SKU that's about to go out of stock. Your best-margin product gets discounted because nobody checked the competitor landscape. Your returns are climbing but nobody knows if it's a listing problem, a product problem, or a fulfilment problem.
                </p>
                <p className="mb-4 text-white/80">
                  You're not flying blind — you just have five windows open instead of one.
                </p>
                <p className="text-white font-medium text-base pt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C5F3B]"></span> That's the gap Saddl closes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50 my-4"></div>

        {/* WHAT SADDL DOES */}
        <section id="solution" className="max-w-6xl mx-auto px-6 py-16 relative">
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <ElegantShape delay={0.4} width={300} height={60} rotate={15} gradient="from-white/[0.03]" className="left-[-5%] top-[50%]" />
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="mb-12 max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 leading-[1.15] font-['Gloock'] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              One system.<br/>Every decision.
            </h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-['Bricolage_Grotesque']">
              We embed into your brand as your ecommerce operating team. We bring the infrastructure, the intelligence layer, and the people who know how to use it together.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
            {[
              { title: 'Advertising', icon: BarChart2, desc: 'Campaign architecture, bid optimisation, keyword strategy, spend efficiency. Every recommendation is inventory-aware and margin-aware.' },
              { title: 'Inventory', icon: Layers, desc: 'Stock coverage, reorder signals, OOS risk, procurement planning. We track every SKU so you\'re never caught off guard.' },
              { title: 'Pricing', icon: DollarSign, desc: 'Competitor landscape, market position, break-even analysis, price floor protection. Know where you stand relative to the market.' },
              { title: 'Returns', icon: RotateCcw, desc: 'Root cause analysis, disposition tracking, true return cost per SKU. Not just how many came back — why they came back.' },
              { title: 'Financial Intelligence', icon: LineChart, desc: 'Settlement-level P&L per SKU. Real contribution margin after platform fees, fulfilment costs, promotions, and ad spend.' },
              { title: 'Reporting', icon: CheckCircle, desc: 'Biweekly snapshots that tell you what happened, why it happened, and what we\'re doing about it. No dashboards to interpret.' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="relative bg-white/[0.02] backdrop-blur-[2px] border border-white/[0.08] p-6 rounded-2xl group overflow-hidden hover:bg-white/[0.04] transition-all duration-300">
                
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-colors"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                
                <div className="w-10 h-10 bg-white/[0.05] rounded-xl flex items-center justify-center mb-4 border border-white/[0.1] group-hover:bg-white/[0.08] transition-all relative z-10">
                  <item.icon size={18} className="text-white/60 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-white/90 group-hover:text-white transition-colors relative z-10 font-['Bricolage_Grotesque']">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-['Bricolage_Grotesque'] relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50 my-4"></div>

        {/* PROOF */}
        <section id="proof" className="max-w-6xl mx-auto px-6 py-16 relative">
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <ElegantShape delay={0.3} width={500} height={120} rotate={-5} gradient="from-white/[0.03]" className="right-[-15%] top-[10%]" />
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white font-['Gloock']">What this looks like in practice.</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-5 mb-8 relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="bg-white/[0.03] backdrop-blur-[2px] border border-white/[0.1] p-8 rounded-[1.5rem] relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Graphic Element */}
              <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                 <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 200L40 120L100 150L200 50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
                   <circle cx="200" cy="50" r="6" fill="#1C5F3B"/>
                 </svg>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3 text-white leading-tight relative z-10 font-['Bricolage_Grotesque']">Proof Point 1: <br/>Advertising & Inventory Sync</h3>
              <p className="text-white/60 leading-relaxed text-sm font-['Bricolage_Grotesque'] max-w-sm relative z-10">
                A supplement brand came to us with a healthy-looking ROAS and a 29% out-of-stock rate. Inside the account: a bid multiplier running at 200% for 20 months, inflating spend on a format no one reviewed. Within weeks, we recovered over AED 20,000 in wasted ad spend.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="bg-white/[0.03] backdrop-blur-[2px] border border-white/[0.1] p-8 rounded-[1.5rem] hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-white/20 to-transparent transition-colors"></div>
              
               {/* Graphic Element */}
               <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity flex items-end gap-2">
                 <div className="w-4 h-12 bg-white/50 rounded-t-[2px]"></div>
                 <div className="w-4 h-8 bg-white/50 rounded-t-[2px]"></div>
                 <div className="w-4 h-16 bg-[#1C5F3B] rounded-t-[2px]"></div>
                 <div className="w-4 h-6 bg-white/50 rounded-t-[2px]"></div>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3 text-white leading-tight relative z-10 font-['Bricolage_Grotesque']">Proof Point 2: <br/>Working Capital Efficiency</h3>
              <p className="text-white/60 leading-relaxed text-sm font-['Bricolage_Grotesque'] max-w-sm relative z-10">
                A 100+ SKU catalogue with no visible concentration risk, quietly bleeding working capital because reorders were sized on habit rather than velocity data. We brought OOS rate below 10% across the full catalogue and freed up capital.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 my-4"></div>

        {/* ABOUT / FOUNDER STORY */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-16 relative">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="max-w-3xl mx-auto bg-white/[0.02] backdrop-blur-[2px] border border-white/[0.08] p-8 md:p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6 text-white leading-tight relative z-10 font-['Gloock']">Built by an operator who got tired of guessing.</h2>
            <div className="text-white/60 text-sm md:text-base leading-relaxed space-y-4 font-['Bricolage_Grotesque'] relative z-10">
              <p>I've been selling on Amazon for years. Built a seven-figure business. Spent hundreds of thousands on advertising. Managed a catalogue across UAE and Saudi Arabia. And for most of that time, I was running on instinct — the same way most ecommerce founders do.</p>
              <p>The ads dashboard told me ROAS. The inventory tool told me stock levels. The pricing tool showed me competitors. But none of them talked to each other. None of them told me what was actually happening to the business.</p>
              <p>Before building Saddl, I spent five years at Acxiom and LiveRamp — inside the infrastructure that powers identity resolution and measurement for the world's largest advertisers. I understood, at a technical level, what it meant to connect data sources into a single decision layer.</p>
              <p>When I came back to my own ecommerce business, I couldn't believe the gap. The tools available to a growing ecommerce brand were nowhere near the analytical standard I'd been working at.</p>
              <div className="bg-white/[0.04] backdrop-blur-[2px] p-5 rounded-2xl border border-white/[0.1] my-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-[#1C5F3B]"></div>
                <p className="text-white text-lg font-bold pl-2 font-['Bricolage_Grotesque']">So I built it.</p>
                <p className="mt-1.5 text-xs text-white/50 pl-2">Saddl is what happens when you take the analytical rigour of an enterprise data team and apply it to the operational reality of a growing ecommerce brand.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 my-4"></div>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <ElegantShape delay={0.5} width={450} height={90} rotate={10} gradient="from-white/[0.04]" className="left-[-10%] top-[30%]" />
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="mb-10 max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 text-white leading-tight font-['Gloock']">One engagement.<br/>Your entire ecommerce operation.</h2>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-3 gap-6 mb-16 relative z-10">
            {[
              { title: 'Operators, not vendors.', desc: 'We run our own ecommerce business across Amazon and Noon. Everything we do for clients we\'ve done for ourselves first.' },
              { title: 'Built the infrastructure.', desc: 'The data pipeline, intelligence layer, and reporting system are proprietary. We built the connections because they didn\'t exist.' },
              { title: 'Own the outcome.', desc: 'We don\'t hand you a dashboard and walk away. We\'re in the account, making decisions, every week.' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white/[0.02] backdrop-blur-[2px] p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/20 transition-colors"></div>
                <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center mb-4 text-white/50 group-hover:bg-white/[0.1] group-hover:text-white transition-colors border border-white/[0.1]"><ChevronRight size={16}/></div>
                <h3 className="text-base font-semibold mb-2 text-white/90 group-hover:text-white font-['Bricolage_Grotesque']">{item.title}</h3>
                <p className="text-white/50 font-['Bricolage_Grotesque'] leading-relaxed text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="space-y-4 relative z-10">
            <motion.h3 variants={fadeUp} className="text-xl font-bold mb-6 text-white font-['Bricolage_Grotesque']">How It Works</motion.h3>
            {[
              { step: '01', title: 'Onboarding', desc: 'We connect to your accounts, audit the current state across every function, and establish baseline metrics. By the end of two weeks, you have a clear picture of where the gaps are.' },
              { step: '02', title: 'Ongoing Operations', desc: 'Ads managed weekly. Inventory monitored continuously. Pricing benchmarked in real time. Returns diagnosed. Financials reconciled at settlement level every period.' },
              { step: '03', title: 'Reporting', desc: 'Every two weeks you receive a unified snapshot of performance across all channels — what happened, why, and what we\'re doing next.' },
              { step: '04', title: 'Strategic Reviews', desc: 'Monthly zoom-out. What\'s working at the portfolio level? Where should the next unit of investment go? Which SKUs are margin-positive?' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.04] backdrop-blur-[2px] rounded-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-transparent group-hover:bg-[#1C5F3B] transition-colors"></div>
                <div className="text-xl text-white/40 font-['Fragment_Mono'] group-hover:text-white transition-all duration-300 w-8 shrink-0">{item.step}</div>
                <div className="flex-1 grid md:grid-cols-2 gap-3 md:gap-8">
                  <h4 className="text-base font-semibold text-white/90 font-['Bricolage_Grotesque']">{item.title}</h4>
                  <p className="text-white/50 font-['Bricolage_Grotesque'] leading-relaxed text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section id="cta" className="max-w-4xl mx-auto px-6 py-24 text-center relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
              <ElegantShape delay={0} width={600} height={140} rotate={0} gradient="from-[#1C5F3B]/[0.15]" className="" />
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="bg-white/[0.02] backdrop-blur-md border border-white/[0.08] p-10 md:p-14 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <h2 className="text-2xl md:text-4xl font-normal tracking-tight mb-6 text-white leading-tight relative z-10 font-['Gloock']">
              Ready to run your ecommerce operation like it has a data team behind it?
            </h2>
            <p className="text-sm md:text-base text-white/60 mb-8 max-w-xl mx-auto font-['Bricolage_Grotesque'] relative z-10">
              We work with a small number of brands at a time. If you're growing on Amazon, Noon, or both — and you're ready to stop making decisions in the dark — let's talk.
            </p>
            <a href="mailto:hello@saddl.com" className="bg-[#1C5F3B] text-white px-8 py-3.5 rounded-sm font-semibold text-sm hover:bg-[#164a2e] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-px max-w-fit mx-auto relative z-10 group-hover:shadow-[0_0_30px_rgba(28,95,59,0.3)] font-['Bricolage_Grotesque']">
              Book an intro call <ArrowRight size={16} />
            </a>
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-white/[0.08] py-8 text-center text-xs text-white/40 font-['Fragment_Mono'] relative z-10">
        <p>© 2026 Saddl — Zenarise Trading LLC FZ, Dubai, UAE</p>
      </footer>
    </div>
  );
}
