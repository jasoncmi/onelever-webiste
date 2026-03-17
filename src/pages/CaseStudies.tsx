import React from 'react';
import { motion } from 'motion/react';
import { Factory, ArrowRight, Zap, Target, Combine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const CaseStudiesDetail = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1a2332] min-h-screen">
      <Helmet>
        <title>Case Studies & Production Results | OneLever</title>
        <meta name="description" content="See real outcomes from OneLever's AI implementations, including our quoting automation system for the manufacturing industry." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Page Hero */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Real problems. <span className="text-gradient">Real outcomes.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Here's what AI looks like when it actually works.
          </p>
        </div>
        
        {/* Case Study 1 */}
        <div className="glass-dark rounded-[3rem] p-8 md:p-12 border border-[#c2823a]/20 shadow-2xl relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c2823a]/5 blur-[120px] -z-10" />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#c2823a]/10 border border-[#c2823a]/30 flex items-center justify-center text-[#c2823a]">
              <Factory className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-2">
                Manufacturing
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Quoting Automation</h2>
            </div>
          </div>

          <div className="space-y-12">
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl border border-red-500/10">
                <h3 className="text-sm uppercase tracking-widest font-bold text-red-400 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" /> The Business & Problem
                </h3>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  <strong>The business:</strong> A Canadian manufacturer processing approximately $1B in annual quotes.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  <strong>The problem:</strong> Every quote took 15 days. The data lived in Excel spreadsheets and CAD files that no existing tool could process together. A $200K/year CRM didn't integrate with their core operations. The business wasn't losing money because they lacked technology — they were losing money because their systems couldn't keep up.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-emerald-500/10">
                <h3 className="text-sm uppercase tracking-widest font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> What We Built
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  An AI system that processes quote requests by reading and understanding their existing spreadsheet and CAD data — automatically extracting the information that used to take a team days to compile manually. The system integrates directly with their operations workflow, replacing the manual bottleneck with an automated pipeline.
                </p>
              </div>
            </div>

            <div className="glass-dark p-8 rounded-3xl border border-[#c2823a]/30 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-[#c2823a]/10 to-transparent opacity-50" />
               
               {/* Hard Metrics Banner */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 border-b border-[#c2823a]/20 pb-10 relative z-10">
                 <div>
                   <div className="text-4xl font-display font-bold text-white mb-1">98%</div>
                   <div className="text-xs text-[#c2823a] uppercase tracking-widest font-bold">Time Saved</div>
                 </div>
                 <div>
                   <div className="text-4xl font-display font-bold text-white mb-1">0</div>
                   <div className="text-xs text-[#c2823a] uppercase tracking-widest font-bold">Data Leaks</div>
                 </div>
                 <div>
                   <div className="text-4xl font-display font-bold text-white mb-1">100%</div>
                   <div className="text-xs text-[#c2823a] uppercase tracking-widest font-bold">Adoption Rate</div>
                 </div>
                 <div>
                   <div className="text-4xl font-display font-bold text-white mb-1">7/8</div>
                   <div className="text-xs text-[#c2823a] uppercase tracking-widest font-bold">Eval Score</div>
                 </div>
               </div>

              <h3 className="text-2xl font-display font-bold text-white mb-6 relative z-10">The Details</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#c2823a]/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#c2823a]" />
                  </div>
                  <p className="text-lg text-zinc-300"><strong>15-day quoting process</strong> dramatically reduced.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#c2823a]/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#c2823a]" />
                  </div>
                  <p className="text-lg text-zinc-300">Quote data from spreadsheets and CAD files processed automatically.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#c2823a]/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#c2823a]" />
                  </div>
                  <p className="text-lg text-zinc-300"><strong>8 major components swapped</strong> during the live engagement without breaking the architecture — including when the client changed their CAD platform mid-project.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#c2823a]/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#c2823a]" />
                  </div>
                  <p className="text-lg text-zinc-300">Won a competitive evaluation against a boutique AI firm: OneLever scored <strong>7/8 queries</strong>, the competitor scored 0/8.</p>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-[#c2823a] pl-6 py-2">
              <h3 className="text-sm uppercase tracking-widest font-bold text-zinc-500 mb-2 flex items-center gap-2">
                <Combine className="w-4 h-4" /> What's Next
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed italic">
                The quoting system is the first engagement. The same architecture extends to replace the underperforming CRM, integrate with the ERP system, and automate margin optimization. One problem leads to the next.
              </p>
            </div>

          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center glass p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#d49650]/5 blur-3xl -z-10" />
          <h2 className="text-3xl font-display font-bold mb-6">More Case Studies <span className="text-[#d49650]">Coming Soon</span></h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            We're currently building AI solutions for businesses across multiple verticals — CPA firms, law practices, healthcare providers, and manufacturers. As each engagement reaches production, we'll publish the results here.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Every case study follows the same format: the business, the problem, what we built, and the measurable result. No jargon. No technology buzzwords. Just what happened.
          </p>
          
          <Link to="/#contact" className="inline-flex px-8 py-4 bg-[#c2823a] hover:bg-[#d49650] text-white font-bold rounded-lg transition-all duration-300 items-center gap-2 shadow-xl shadow-[#c2823a]/20 cursor-pointer">
            Want to be our next case study? <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
