import React from 'react';
import { ShieldCheck, Users, Brain, Target, Building2, Zap, Cloud, MessageSquare, Database, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const About = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1a2332] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Built for the AI era. <span className="text-gradient">Not bolted on.</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Three established Canadian technology companies. One new mission: AI that actually delivers.
          </p>
        </div>

        {/* Why OneLever Exists */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Why OneLever <span className="text-[#c2823a]">Exists</span></h2>
          </div>
          
          <div className="glass-dark rounded-[3rem] p-8 md:p-16 border border-red-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/5 blur-[120px] -z-10" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
                <p>
                  The AI industry has a 95% failure rate. Not because the technology doesn't work — because the partners delivering it can't follow through.
                </p>
                <p>
                  Enterprise consultancies write strategy decks and hand them over. Boutique AI firms build something and disappear. Traditional IT providers resell Copilot licenses and call it an AI practice. SaaS platforms offer one-size-fits-all tools that don't fit anyone.
                </p>
                <p>
                  The result: <strong className="text-white">93% of Canadian businesses</strong> experimenting with AI, and <strong className="text-white">only 2%</strong> seeing real results. Over 60% of SMB leaders admit they have no clear plan. Nearly 80% of non-adopters say AI "isn't relevant" — not because it isn't, but because nobody has shown them what it looks like in a business like theirs.
                </p>
                <p className="text-xl font-bold text-[#c2823a] pt-4">OneLever was built to close that gap.</p>
              </div>
              
              <div className="glass p-8 rounded-3xl border border-[#c2823a]/30">
                <p className="text-zinc-300 leading-relaxed italic mb-6">
                  We combine AI advisory and custom engineering with deep expertise in infrastructure, security, and communications. We don't just advise — we build. 
                </p>
                <p className="text-zinc-300 leading-relaxed italic">
                  And because we understand the full technology stack, the AI we build actually works with your existing systems, not against them. One partner who gets it — from the AI layer all the way down.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Where We Come From */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Where We <span className="text-[#c2823a]">Come From</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
              OneLever brings together the experience and capabilities of established Canadian technology companies:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#c2823a]" />,
                title: "Cloud Metric",
                desc: "Built its reputation managing IT infrastructure and cybersecurity for Canadian businesses — keeping systems running, teams productive, and data secure."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-[#d49650]" />,
                title: "Telecom Metric",
                desc: "Specialized in voice communications and connectivity — the phone systems, networking, and communications infrastructure that businesses depend on every day."
              },
              {
                icon: <Cloud className="w-6 h-6 text-[#c2823a]" />,
                title: "Server Cloud Canada",
                desc: "Delivered cloud infrastructure — the compute, storage, and hosting that powers business operations."
              },
              {
                icon: <Database className="w-6 h-6 text-[#d49650]" />,
                title: "BizXcel",
                desc: "Brought over 15 years of expertise in data analytics, business intelligence, and system integration. Because AI is only as good as the data behind it."
              }
            ].map((company, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5 transition-transform hover:-translate-y-1">
                <div className="mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    {company.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{company.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{company.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-dark p-8 rounded-3xl border border-[#c2823a]/20 text-center max-w-4xl mx-auto">
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Together, they represent decades of experience serving Canadian businesses across every layer of the technology stack. OneLever takes that foundation and builds something new on top of it: an AI implementation practice backed by real engineering depth and real data expertise.
            </p>
            <p className="text-[#c2823a] font-bold">
              This isn't a startup experimenting with AI. It's an engineering firm with a proven track record, now focused on the biggest opportunity in technology.
            </p>
          </div>
        </div>

        {/* The Team */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">The Team</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            <div className="glass p-8 rounded-3xl border border-[#c2823a]/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c2823a]/10 rounded-full blur-[50px] group-hover:bg-[#c2823a]/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-[#c2823a] overflow-hidden">
                   <img src="https://picsum.photos/seed/founder/100/100" alt="Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Jason Hurd</h3>
                  <div className="text-xs font-bold text-[#c2823a] uppercase tracking-widest mt-1">Founder & CEO</div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                Jason brings over two decades of experience scaling technology companies across Canada. He founded OneLever because he saw directly how businesses were struggling to find pragmatic, secure, and reliable partners to deploy AI into their core operations.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-emerald-500 overflow-hidden">
                   <img src="https://picsum.photos/seed/engineer/100/100" alt="Team Lead" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Chris Robinson</h3>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mt-1">AI Engineering Lead</div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                Chris leads the engineering team with a strict focus on robust, production-ready AI architectures. His background in complex data integration and infrastructure guarantees that every AI solution we build fundamentally respects the existing tech stack.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-center">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Users className="text-white w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-white">The Team of 25+</h3>
               </div>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 OneLever's team spans AI engineering, cloud infrastructure, cybersecurity, communications, and managed services. Every client engagement draws on the full depth of the team — not a single consultant working alone.
               </p>
            </div>

          </div>
        </div>

        {/* What We Believe */}
        <div className="mb-24 py-16 border-y border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">What <span className="text-[#c2823a]">We Believe</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Outcomes over experiments.", desc: "We don't build proof-of-concepts that sit in a folder. We build things that run in production and deliver measurable results." },
              { title: "Honesty over hype.", desc: "The AI industry is full of noise. We'd rather tell you what's realistic than sell you a dream. If AI isn't the right answer for your problem, we'll say so." },
              { title: "Engineering over advice.", desc: "Anybody can write a strategy deck. We build things. That's the difference." },
              { title: "Your business, your control.", desc: "Your data stays yours. Your systems are documented. If you want to change direction, the architecture supports it. We earn your loyalty by delivering value, not by locking you in." }
            ].map((belief, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#c2823a] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{belief.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{belief.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private AI & Data Sovereignty */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Private AI. <span className="text-emerald-400">Total Sovereignty.</span></h2>
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  One of the biggest barriers to enterprise AI adoption is fear of data exposure. We build systems exclusively for your business; <strong className="text-white">your data goes nowhere.</strong>
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  We deploy localized, private models within your secure environment. No public LLMs vacuuming up your IP, no third-party data sharing. Just intelligent automation that respects your boundaries.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <h3 className="text-2xl font-bold text-white mb-4">Why Privacy is Non-Negotiable</h3>
              <p>
                Public AI tools use your data to train their models. We prevent that.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Zero Data Retention:</strong> Queries and outputs are isolated from foundational model training.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Role-Based Access:</strong> AI agents respect the same secure permissions and access limits as your human team.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Compliance Ready:</strong> Built to satisfy the stringent requirements of healthcare, finance, and legal sectors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Canadian Built */}
        <div className="text-center glass-dark p-12 rounded-[3rem] border border-[#c2823a]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#c2823a]/5 blur-3xl -z-10" />
          <div className="w-16 h-16 rounded-2xl bg-[#c2823a]/10 border border-[#c2823a]/30 flex items-center justify-center mx-auto mb-6 text-[#c2823a]">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Canadian Built</h2>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            OneLever is a Canadian company serving Canadian businesses. Our infrastructure is Canadian-hosted. Our team is Canadian-based. Your data stays in Canada.
          </p>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
            In a world where most AI depends on US-hosted cloud platforms, that matters. Not as a marketing line — as a business decision about where your data lives and who controls it.
          </p>
          
          <Link to="/#contact" className="inline-flex px-8 py-4 bg-[#c2823a] hover:bg-[#d49650] text-white font-bold rounded-lg transition-all duration-300 items-center justify-center shadow-xl shadow-[#c2823a]/20 cursor-pointer">
            Start a conversation
          </Link>
        </div>

      </div>
    </div>
  );
};
