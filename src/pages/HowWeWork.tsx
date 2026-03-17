import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, LineChart, CheckCircle2, FileText, BarChart, 
  ArrowRight, ShieldCheck, Zap, Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const HowWeWork = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1a2332] min-h-screen">
      <Helmet>
        <title>How We Work | OneLever</title>
        <meta name="description" content="Learn about OneLever's engagement journey: starting with a pragmatic audit, integrating data, building a pilot demo, and scaling into production." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            We start with <span className="text-[#c2823a]">one problem.</span><br/>
            We build something that solves it.<br/>
            <span className="text-zinc-400">Then we expand from there.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            No 12-month transformation roadmaps. No AI readiness assessments. Just outcomes — then more outcomes.
          </p>
        </div>

        {/* Data Readiness Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">
              Step 0
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Before AI — Your Data <span className="text-gradient">Has to Be Ready</span></h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
              AI is only as good as the data you feed it. And for most businesses, the data isn't ready. It's scattered across ERPs, spreadsheets, and emails. You can't build AI on a foundation that doesn't hold. That's why data is part of every OneLever engagement. Before we build AI, we make sure the data underneath it is solid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Database className="w-6 h-6 text-[#c2823a]" />,
                title: "Data Integration",
                desc: "Your systems need to talk to each other. We connect your ERP, CRM, accounting software, and operational tools so data flows automatically — no more manual exports and copy-paste between systems."
              },
              {
                icon: <LineChart className="w-6 h-6 text-[#d49650]" />,
                title: "Business Intelligence & Dashboards",
                desc: "You shouldn't have to wait for a monthly report to know how your business is doing. We build dashboards that give you real-time visibility into the metrics that matter."
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-[#c2823a]" />,
                title: "Data Cleanup & Organization",
                desc: "Duplicate records, inconsistent formats, missing fields — these kill AI before it starts. We clean and structure your data so it's accurate, consistent, and ready."
              },
              {
                icon: <FileText className="w-6 h-6 text-[#d49650]" />,
                title: "Automated Reporting",
                desc: "The reports your team builds manually every week — pulling data from three systems into a spreadsheet — we automate them. Your people spend time acting on insights."
              },
              {
                icon: <BarChart className="w-6 h-6 text-[#c2823a]" />,
                title: "Custom Analytics",
                desc: "Sometimes you need more than a dashboard. You need analysis tailored to your specific business questions — profitability by client, capacity forecasting, pipeline analysis. We build it."
              }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-4 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="glass-dark p-8 rounded-3xl border border-[#c2823a]/30 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[#c2823a]/5 blur-3xl -z-10" />
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              This isn't a separate product or a separate engagement. It's part of how we work. When we look at your business problem, we look at the data behind it. If the data needs work first, we do that work. If it's ready, we go straight to AI. Either way, you get outcomes.
            </p>
            <p className="text-[#c2823a] font-medium text-sm italic">
              *OneLever's data practice brings over 15 years of experience in business intelligence, data integration, and analytics across industries including financial services, insurance, manufacturing, and distribution.*
            </p>
          </div>
        </div>

        {/* The Engagement Journey */}
        <div className="mb-24 py-16 border-y border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 font-display font-bold">The <span className="text-gradient">Engagement Journey</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "The Pragmatic Audit",
                desc: "We map your entire business operation and surface the exact bottleneck where AI creates the most impact. No code is written until the ROI is mathematically proven.",
                time: "Duration: 1-2 wks"
              },
              {
                step: "02",
                title: "Pilot Demo",
                desc: "We build a working demo on your actual use case — not a generic presentation. You see it working with your data, on your systems. Low commitment.",
                time: "Duration: 2-4 wks"
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Once you see value, we build the full solution. Clear scope and timeline. Your team is trained from day one so the system is rapidly adopted.",
                time: "Duration: 2-4 mos"
              },
              {
                step: "04",
                title: "Scale & Support",
                desc: "We don't disappear. We stay to maintain and optimize the solution. As the AI works, it reveals the next opportunity.",
                time: "Pattern: Solve, Scale, Next"
              }
            ].map((phase, i) => (
              <div key={i} className="relative glass-dark p-6 rounded-3xl border border-[#c2823a]/20 group hover:-translate-y-1 transition-all">
                <div className="absolute -top-6 -right-6 text-7xl font-display font-bold text-white/5 group-hover:text-[#c2823a]/10 transition-colors z-0">
                  {phase.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#c2823a] transition-colors">{phase.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">{phase.desc}</p>
                  <div className="inline-block px-3 py-1 bg-[#1a2332] border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#c2823a] font-bold">
                    {phase.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show, Don't Tell & Your Data Controls */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass p-10 rounded-[3rem] border border-white/5 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#c2823a]/10 flex items-center justify-center mb-6 text-[#c2823a]">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Show, <span className="text-gradient">Don't Tell.</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              We don't sell AI with a slide deck. When we see a problem we can solve, we build something and put it in front of you. A working demo. On your use case. With your data.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Interest becomes a pilot. The pilot becomes a paid solution. The solution becomes a partnership. If it doesn't work, you'll know immediately. If it does, you'll know that too.
            </p>
          </div>
          
          <div className="glass p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] z-0" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Your Data. <span className="text-emerald-400">Your Control.</span></h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                We build on the platforms that make sense for your business — not the ones that pad our margins. Your team is trained to use every tool we implement. Your systems are documented.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                If you ever want to change direction, swap a component, or bring something in-house, the architecture supports it. No vendor lock-in. No black boxes. No dependency on a single platform. This isn't a bullet point in a proposal. It's how we build everything.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8">
          <Link to="/#contact" className="inline-flex px-8 py-4 bg-[#c2823a] hover:bg-[#d49650] text-white font-bold rounded-lg transition-all duration-300 items-center shadow-xl shadow-[#c2823a]/20 cursor-pointer">
            Let's find your first problem to solve
          </Link>
        </div>

      </div>
    </div>
  );
};
