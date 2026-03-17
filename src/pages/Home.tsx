import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Brain, Cpu, Database, LineChart, MessageSquare, Rocket, ShieldCheck, Users, 
  ArrowRight, CheckCircle2, ChevronRight, Zap, Globe, Combine, Download,
  Cloud, Server, Box, Workflow, Target, AlertTriangle, TrendingUp, XCircle, Search, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-mesh min-h-screen flex items-center">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#c2823a]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#d49650]/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Zap className="w-3 h-3 text-[#c2823a]" /> OneLever
            </div>
            <h1 className="text-[2.75rem] md:text-6xl font-display font-bold leading-[1.1] mb-6">
              We help businesses implement AI — and we take care of everything it needs to work.
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed font-medium">
              AI that cuts through the noise — not workslop. Your team trained to use it. Your systems built to support it. No vendor lock-in.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#contact" className="px-8 py-4 bg-[#c2823a] hover:bg-[#d49650] text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 group hover:shadow-xl hover:shadow-[#c2823a]/20 cursor-pointer">
                Start a conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
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
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Live ROI Dashboard</div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium text-[#c2823a] mb-1">Efficiency Gain</div>
                  <div className="text-5xl font-display font-bold">+45%</div>
                  <div className="text-xs text-zinc-400 mt-1 uppercase tracking-tighter">Reduction in consultation/processing time</div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium text-[#d49650] mb-1">Cost Savings</div>
                    <div className="text-3xl font-display font-bold">$120k</div>
                    <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-tighter">Annualized per department</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#c2823a] mb-1">Accuracy</div>
                    <div className="text-3xl font-display font-bold">99.2%</div>
                    <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-tighter">Automated data validation</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-3xl flex items-center justify-center rotate-12 bg-[#1a2332]/80 backdrop-blur-xl border border-white/10">
                <Combine className="text-[#c2823a] w-10 h-10" />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-[#c2823a]/10 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const tech = [
    { name: "Zero Disruption Ecosystem Integration", icon: <Globe className="w-5 h-5" /> },
    { name: "Salesforce / CRM", icon: <Cloud className="w-5 h-5" /> },
    { name: "Microsoft Teams & 365", icon: <Server className="w-5 h-5" /> },
    { name: "AWS & Azure", icon: <Database className="w-5 h-5" /> },
    { name: "OpenAI & Anthropic", icon: <Brain className="w-5 h-5" /> },
    { name: "Secure ERP Systems", icon: <Box className="w-5 h-5" /> },
    { name: "Snowflake & Databricks", icon: <Workflow className="w-5 h-5" /> },
  ];

  return (
    <div className="py-8 bg-[#1a2332] border-y border-white/5 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a2332] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a2332] to-transparent z-10" />
      
      <div className="flex animate-[slide_40s_linear_infinite] px-4">
        {[...tech, ...tech, ...tech].map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-8 text-zinc-500 font-display font-bold uppercase tracking-widest text-sm hover:text-white transition-colors cursor-pointer group">
            <span className="text-zinc-600 group-hover:text-[#c2823a] transition-colors">{t.icon}</span>
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const TheProblem = () => {
  return (
    <section className="py-24 bg-[#1a2332]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl mb-8 font-display font-bold">
          The <span className="text-gradient">Problem.</span>
        </h2>
        <div className="space-y-6 text-xl text-zinc-300 leading-relaxed font-light">
          <p>
            You've heard AI can transform your business. But every option you've seen is either too expensive, too complicated, or too vague to actually mean anything.
          </p>
          <p className="text-white font-medium">
            Meanwhile, 93% of Canadian businesses are experimenting with AI. Only 2% are seeing results. That's not a technology problem. <span className="text-[#c2823a]">It's a partner problem.</span>
          </p>
          <p>
            You don't need an AI strategy. You don't need a data team. You need someone who understands your business, finds the one problem where AI will have the biggest impact, and builds something your team can actually use.
          </p>
          <p className="font-bold text-2xl pt-4">That's what OneLever does.</p>
        </div>
      </div>
    </section>
  );
};

const WhatAICanDo = () => {
  return (
    <section className="py-24 bg-[#1a2332] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d49650]/5 blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl mb-6 font-display font-bold">
              What AI Can Do for <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-xl">
              Every business has different problems. The right AI solution depends on where your pain is — not on a technology trend. 
            </p>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-xl">
              From reducing quoting times in Manufacturing to automating client intake for CPA Firms, the pattern is always the same: find the bottleneck, build something that solves it, train your team, and expand from there.
            </p>
            
            <Link to="/use-cases" className="px-8 py-4 bg-[#c2823a] hover:bg-[#d49650] text-white font-bold rounded-lg transition-all duration-300 inline-flex items-center gap-2 group shadow-xl shadow-[#c2823a]/20 cursor-pointer text-lg">
              <Search className="w-5 h-5" /> Explore Use Cases By Industry
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {['Manufacturing', 'Accounting & CPA', 'Law Firms & Legal', 'Healthcare', 'Construction & Trades', 'Real Estate', 'Logistics', 'Financial Services'].map((ind, i) => (
              <div key={i} className="glass p-6 text-center rounded-2xl border border-white/5 font-display font-medium text-zinc-300 hover:text-white hover:border-[#c2823a]/30 transition-colors">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TargetPersonas = () => {
  const personas = [
    {
      title: "Vision to Production",
      subtitle: "For companies starting out",
      desc: "You have a clear vision for AI but discover the gap between strategy and working systems only once implementation begins. We translate ambition into deployed, production-grade systems.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Stalled AI Initiatives",
      subtitle: "For stuck POCs",
      desc: "You've tried but struggled to scale AI adoption. We diagnose and resolve the gaps preventing Agentic AI from reaching production, working directly within your existing architecture.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Accelerating Systems",
      subtitle: "For mature environments",
      desc: "For mid-transformation companies with complex delivery challenges ahead. We provide senior engineering support to compress timelines and raise the caliber of what gets built.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-widest mb-6">
            Who We Help
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-display font-bold">Meeting You <span className="text-[#c2823a]">Where You Are</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Technology is only transformative when it solves real human problems. We support mid-market challengers based on their exact stage of AI maturity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-start transition-all duration-300 hover:border-[#c2823a]/40 hover:-translate-y-2 cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-[#c2823a]/10 border border-[#c2823a]/20 flex items-center justify-center mb-6 text-[#c2823a] group-hover:bg-[#c2823a] group-hover:text-white transition-colors">
                {p.icon}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#d49650] mb-2">{p.subtitle}</div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
  return (
    <section className="py-24 bg-[#1a2332] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#c2823a]/5 blur-[200px] z-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-dark rounded-[3rem] p-10 md:p-16 border border-[#c2823a]/30 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4 font-display font-bold">Proof.</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-[#c2823a] pl-6 mb-8">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                "A Canadian manufacturer processes ~$1B in annual quotes. Each quote took 15 days. The data lived in spreadsheets and CAD files that no existing tool could handle together."
              </p>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              We built an AI system that changed that. During the live engagement, we swapped 8 major components without breaking the architecture — including when the client changed requirements mid-project.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              A competitor tried the same problem. They scored 0 out of 8 test queries. <strong className="text-white">We scored 7 out of 8.</strong>
            </p>
            
            <div className="bg-[#c2823a]/10 border border-[#c2823a]/20 rounded-2xl p-6 text-center text-[#d49650] font-bold text-xl">
              That's the difference between AI that looks good in a demo and AI that works in production.
            </div>
            
            <div className="text-center mt-10">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#c2823a] transition-colors">
                Read our detailed case studies <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const BackgroundAdvantage = () => {
  return (
    <section className="py-24 bg-[#1a2332] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 font-display font-bold">AI That Works Because We Understand <br/><span className="text-gradient">What's Behind It</span></h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Most AI vendors build something and hand it over. When it breaks, when it needs to connect to your systems, when your team has questions — you're on your own.
          </p>
        </div>

        <div className="glass p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-lg text-zinc-300 leading-relaxed font-light">
            <div>
              <p className="mb-6">
                OneLever is different. We come from <strong className="text-white">infrastructure, security, and communications</strong>. We've spent over a decade keeping Canadian businesses running. 
              </p>
              <p>
                That means when we build AI, we understand the systems it needs to work with — your network, your security policies, your existing tools. We don't need to call another vendor to figure out why something isn't connecting.
              </p>
            </div>
            <div>
              <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-4 text-emerald-400 font-bold"><ShieldCheck className="w-5 h-5" /> Data & Analytics</div>
                <div className="h-px bg-white/5" />
                <div className="flex items-center gap-4 text-[#c2823a] font-bold"><Cloud className="w-5 h-5" /> Cloud Infrastructure</div>
                <div className="h-px bg-white/5" />
                <div className="flex items-center gap-4 text-amber-500 font-bold"><Lock className="w-5 h-5" /> Managed IT & Cybersecurity</div>
                <div className="h-px bg-white/5" />
                <div className="flex items-center gap-4 text-blue-400 font-bold"><MessageSquare className="w-5 h-5" /> Communications & Voice</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 text-center mt-12 pt-8 border-t border-white/5">
            <p className="text-xl text-white font-medium">We start with AI. But if you ever need help with the technology underneath it, we're already there.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const DataIsEverything = () => {
  return (
    <section className="py-24 bg-[#1a2332] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 font-display font-bold">AI Is Only as Good as <span className="text-[#c2823a]">Your Data</span></h2>
            <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
              Most AI projects fail before they start — not because the AI doesn't work, but because the data isn't ready. Information is scattered across spreadsheets, ERPs, email, and filing cabinets.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              OneLever solves this. We don't just build AI — we fix the data underneath it first.
            </p>
            <p className="text-[#d49650] text-sm font-bold uppercase tracking-widest leading-relaxed">
              This isn't a separate engagement from AI — it's part of how we deliver.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "We connect your systems.", desc: "Your ERP, CRM, accounting software — we integrate them so data flows automatically." },
              { title: "We make your data visible.", desc: "Dashboards and analytics showing what's actually happening in real time." },
              { title: "We clean and organize your data.", desc: "Before AI can deliver insights, data needs to be accurate and accessible. We do the unglamorous work." },
              { title: "We automate your reporting.", desc: "Your people spend time acting on information, not manually compiling it into spreadsheets." }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a2332] border border-white/5 rounded-2xl p-6 flex gap-4 glass hover:border-[#c2823a]/30 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-[#c2823a] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "We start with your problem.",
      desc: "Not a technology pitch. Not an AI readiness assessment. We sit down and figure out where AI will have the biggest impact on your business — and whether your data is ready to support it."
    },
    {
      number: "2",
      title: "We build it and show you.",
      desc: "No slide decks. No proposals that sit in a folder. We build a working demo on your actual use case — so you can see it before you commit."
    },
    {
      number: "3",
      title: "We make sure it keeps working — and grow with you.",
      desc: "Once it's live, we're still there. We make sure it runs, help your team get the most out of it, and improve it as your needs evolve. And when you're ready, we find the next problem to solve."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-display font-bold">How <span className="text-gradient">It Works</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-px bg-white/10 z-0">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#c2823a] via-[#d49650] to-[#c2823a] w-full origin-left animate-[scale-x_2s_ease-in-out_infinite]" />
          </div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 glass-dark p-8 rounded-3xl border border-white/5 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-[#1a2332] border-2 border-[#c2823a] mx-auto flex items-center justify-center text-2xl font-display font-bold text-[#c2823a] mb-6 shadow-[0_0_20px_rgba(194,130,58,0.3)] bg-gradient-to-br from-[#1a2332] to-[#2c1d0f]">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/#contact" className="inline-flex px-10 py-5 bg-[#c2823a] hover:bg-[#d49650] text-white font-bold rounded-full transition-all duration-300 items-center gap-2 shadow-xl shadow-[#c2823a]/20 cursor-pointer text-lg hover:-translate-y-1">
            Start a conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="bg-[#1a2332]">
      <Helmet>
        <title>OneLever | Applied AI Consultancy</title>
        <meta name="description" content="OneLever is a Canadian Applied AI Consultancy specializing in private AI, ecosystem integration, and automating complex business workflows." />
        <meta property="og:title" content="OneLever | Applied AI Consultancy" />
        <meta property="og:description" content="OneLever is a Canadian Applied AI Consultancy specializing in private AI, ecosystem integration, and automating complex business workflows." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <TechStack />
      <TheProblem />
      <WhatAICanDo />
      <TargetPersonas />
      <Proof />
      <BackgroundAdvantage />
      <DataIsEverything />
      <HowItWorks />
    </div>
  );
};
