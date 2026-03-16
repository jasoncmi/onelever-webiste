import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Cpu, 
  Database, 
  LineChart, 
  MessageSquare, 
  Rocket, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  Zap,
  BarChart3,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0056a7] to-[#007cba] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Brain className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">
            onelever<span className="text-[#007cba]">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Industries', 'Roadmap', 'Process', 'Case Studies'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-zinc-400 hover:text-[#0056a7] transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-[#0056a7] hover:bg-[#007cba] text-white font-semibold rounded-full text-sm transition-all shadow-lg shadow-blue-500/20">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-zinc-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {['Services', 'Industries', 'Roadmap', 'Process', 'Case Studies'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-medium text-zinc-100" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <a href="#contact" className="w-full py-3 bg-[#0056a7] text-white font-bold rounded-xl text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-mesh min-h-screen flex items-center">
      {/* Background Visualization Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0056a7]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#007cba]/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0056a7]/10 border border-[#0056a7]/20 text-[#0056a7] text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" /> AI Strategy for Enterprises
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              From Concept to <br />
              <span className="text-gradient">Cognitive Powerhouse</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
              We engineer AI that empowers. Stop chasing buzzwords and start building measurable business value with custom AI deployment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#0056a7] hover:bg-[#007cba] text-white font-bold rounded-2xl transition-all flex items-center gap-2 group shadow-xl shadow-blue-500/20">
                Talk to an AI Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-2xl transition-all">
                View Solutions
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-dark rounded-[2.5rem] p-8 md:p-12 border-white/10 shadow-2xl animate-float">
              <div className="flex items-center justify-between mb-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-[#0056a7]/50" />
                </div>
                <div className="text-xs font-mono text-zinc-500 tracking-widest">ROI_METRIC_V2.0</div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium text-[#0056a7] mb-1">Efficiency Gain</div>
                  <div className="text-5xl font-display font-bold">+45%</div>
                  <div className="text-xs text-zinc-500 mt-1 uppercase tracking-tighter">Reduction in consultation time</div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium text-[#007cba] mb-1">Cost Savings</div>
                    <div className="text-3xl font-display font-bold">$120k</div>
                    <div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">Annualized per department</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0056a7] mb-1">Accuracy</div>
                    <div className="text-3xl font-display font-bold">99.2%</div>
                    <div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">Automated data validation</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-3xl flex items-center justify-center rotate-12">
                <Cpu className="text-[#0056a7] w-10 h-10" />
              </div>
            </div>
            
            {/* Background glow for the card */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Consultation Time Reduced', value: '45%' },
    { label: 'Operational Accuracy', value: '99.9%' },
    { label: 'Client ROI in 90 Days', value: '3.2x' },
    { label: 'Successful Deployments', value: '150+' },
  ];

  return (
    <section className="py-12 glass border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-zinc-500 font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-[#0056a7]" />,
      title: "AI Consulting & Strategy",
      desc: "We align AI initiatives with your business goals to ensure maximum impact and scalability from day one."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#007cba]" />,
      title: "Custom AI Agent Development",
      desc: "Build autonomous agents that handle complex workflows, from customer support to internal operations."
    },
    {
      icon: <Database className="w-8 h-8 text-[#0056a7]" />,
      title: "Data Engineering & MLOps",
      desc: "Robust data pipelines and infrastructure to power your models with clean, reliable, and secure data."
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#007cba]" />,
      title: "Predictive Analytics",
      desc: "Turn historical data into future foresight. Optimize inventory, pricing, and resource allocation."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0056a7]" />,
      title: "Enterprise AI Integration",
      desc: "Seamlessly connect AI capabilities with your existing CRM, ERP, and legacy systems."
    },
    {
      icon: <Users className="w-8 h-8 text-[#007cba]" />,
      title: "AI Training & Support",
      desc: "We don't just deploy; we empower your team with the knowledge to manage and evolve your AI ecosystem."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our <span className="text-gradient">Core Services</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We provide the technical backbone for your AI transformation, focusing on results over hype.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 glass-dark rounded-3xl border-white/5 hover:border-[#0056a7]/30 transition-all group"
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-[#0056a7]/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl mb-3 group-hover:text-[#0056a7] transition-colors">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Workshop",
      desc: "We identify your operational bottlenecks and map out high-impact AI opportunities."
    },
    {
      number: "02",
      title: "Strategic Roadmap",
      desc: "A clear, phased plan focusing on quick wins and long-term scalability."
    },
    {
      number: "03",
      title: "Custom Deployment",
      desc: "Engineering and integrating your AI solution into your existing workflows."
    },
    {
      number: "04",
      title: "Managed Support",
      desc: "Continuous optimization and monitoring to ensure your AI stays ahead of the curve."
    }
  ];

  return (
    <section id="process" className="py-24 glass border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">A Structured, <br /><span className="text-gradient">Low-Risk Process</span></h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              We believe in proving value quickly. Our engagement model is designed to minimize risk while maximizing the speed of innovation.
            </p>
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-3xl font-display font-bold text-[#0056a7]/30">{step.number}</div>
                  <div>
                    <h4 className="text-xl mb-1">{step.title}</h4>
                    <p className="text-zinc-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass-dark rounded-[3rem] p-1 border-white/10 overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/tech-process/800/800" 
                alt="AI Process" 
                className="w-full h-full object-cover rounded-[2.8rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl border-[#0056a7]/20 shadow-xl max-w-[200px]">
              <div className="text-[#0056a7] font-bold mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 90-Day MVP
              </div>
              <p className="text-[10px] text-zinc-400 leading-tight uppercase tracking-widest">Average time from workshop to production deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-dark rounded-[3rem] p-8 md:p-16 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0056a7]/5 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Begin a Conversation <br /><span className="text-gradient">That Drives Change</span></h2>
              <p className="text-zinc-400 text-lg mb-10">
                Ready to see how AI can solve your unique operational bottlenecks? Let's talk about your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                    <MessageSquare className="text-[#0056a7] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-widest">Email Us</div>
                    <div className="text-lg font-medium">hello@onelever.ai</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                    <Globe className="text-[#007cba] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-widest">Global HQ</div>
                    <div className="text-lg font-medium">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0056a7]/50 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0056a7]/50 transition-all" />
              </div>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0056a7]/50 transition-all text-zinc-400 appearance-none">
                <option>Select Your Industry</option>
                <option>Healthcare</option>
                <option>Logistics</option>
                <option>Finance</option>
                <option>Retail</option>
              </select>
              <textarea placeholder="How can we help you?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0056a7]/50 transition-all"></textarea>
              <button className="w-full py-4 bg-[#0056a7] hover:bg-[#007cba] text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0056a7] to-[#007cba] rounded-lg flex items-center justify-center">
              <Brain className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              onelever<span className="text-[#007cba]">.</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-[#0056a7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0056a7] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0056a7] transition-colors">Cookie Policy</a>
          </div>
          
          <div className="text-sm text-zinc-600">
            © 2026 onelever AI Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      tag: "Logistics",
      title: "Optimizing Fleet Efficiency for a Regional Carrier",
      outcome: "Reduced fuel costs by 18% using predictive routing.",
      image: "https://picsum.photos/seed/logistics/600/400"
    },
    {
      tag: "Healthcare",
      title: "AI-Driven Patient Triage for Urban Clinics",
      outcome: "Decreased waiting times by 35% through automated intake.",
      image: "https://picsum.photos/seed/healthcare/600/400"
    },
    {
      tag: "Finance",
      title: "Fraud Detection for Emerging FinTech",
      outcome: "Identified 99.8% of suspicious transactions in real-time.",
      image: "https://picsum.photos/seed/finance/600/400"
    }
  ];

  return (
    <section id="case-studies" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-4">Real Results, <br /><span className="text-gradient">Real Impact</span></h2>
            <p className="text-zinc-400 text-lg">
              We don't just talk about AI. We build solutions that move the needle for our clients.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#0056a7] font-bold hover:text-[#007cba] transition-colors">
            View All Stories <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/5 shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-[#0056a7]">
                  {item.tag}
                </div>
              </div>
              <h3 className="text-xl mb-2 group-hover:text-[#0056a7] transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm font-medium">{item.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhaseRoadmap = () => {
  const phases = [
    {
      id: "Phase 0",
      title: "Data Foundation",
      desc: "Historical data, KB construction, ETL pipeline with DAG"
    },
    {
      id: "Phase 1",
      title: "Shadow Agent",
      desc: "Webhook integration, agent observes tickets, Langfuse tracing"
    },
    {
      id: "Phase 2",
      title: "Eval & Learn",
      desc: "Agent vs Human, LLM-as-Judge, golden dataset"
    },
    {
      id: "Phase 3",
      title: "Human-in-Loop",
      desc: "Agent proposes, human approves, client memory"
    },
    {
      id: "Phase 4",
      title: "Full Platform",
      desc: "E2E testing, feature integration, Agile rollout"
    },
    {
      id: "Phase 5",
      title: "Autonomous",
      desc: "Context-aware AI, proactive, full automation"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-zinc-400">
          Phase <span className="text-white">Roadmap</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {phases.map((phase, i) => (
            <React.Fragment key={phase.id}>
              <div className="flex items-center gap-2">
                <div className="flex-1 py-4 bg-[#0056a7] text-white text-center rounded-lg font-bold text-sm shadow-lg shadow-blue-900/20">
                  {phase.id}
                </div>
                {i < phases.length - 1 && (
                  <ArrowRight className="hidden lg:block text-zinc-700 w-5 h-5" />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {phases.map((phase) => (
            <div key={phase.id} className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 hover:border-zinc-700 transition-colors">
              <h4 className="text-white font-bold mb-4 text-sm leading-tight">{phase.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <PhaseRoadmap />
      <Process />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}
