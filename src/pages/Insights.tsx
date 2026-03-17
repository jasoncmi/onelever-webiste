import React from 'react';
import { motion } from 'motion/react';
import { FileText, Video, Download, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Insights = () => {
  const resources = [
    {
      type: "Whitepaper",
      icon: <FileText className="w-5 h-5" />,
      title: "Strategic AI Implementation: From PoC to Production",
      desc: "A practical, production-first framework based on 100+ AI projects showing exactly how to scale operations securely.",
      tag: "Operations"
    },
    {
      type: "On-Demand Webinar",
      icon: <Video className="w-5 h-5" />,
      title: "How to Integrate AI Without Breaking Your CRM",
      desc: "Watch our principal architect map out exactly how Agentic AI securely talks to closed enterprise systems.",
      tag: "Engineering"
    },
    {
      type: "eBook",
      icon: <Download className="w-5 h-5" />,
      title: "How LLM-Powered IDP Supports Knowledge Management",
      desc: "Understand how intelligent document processing replaces manual data entry across legal and financial divisions.",
      tag: "Strategy"
    },
    {
      type: "Industry Guide",
      icon: <FileText className="w-5 h-5" />,
      title: "AI in Manufacturing: Routing and Fulfillment",
      desc: "A practical whitepaper showing how industrial suppliers use AI to minimize fuel costs and optimize quoting.",
      tag: "Logistics"
    },
    {
      type: "Whitepaper",
      icon: <FileText className="w-5 h-5" />,
      title: "Private AI Architecture & Data Sovereignty",
      desc: "Why using public APIs is a mass compliance risk, and how to deploy highly secure models in a private cloud.",
      tag: "Security"
    },
    {
      type: "eBook",
      icon: <Download className="w-5 h-5" />,
      title: "The 2026 SMB Guide to Practical AI Automation",
      desc: "Our flagship guide outlining the highest ROI adoption workflows for firms under 200 employees.",
      tag: "Operations"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#1a2332] min-h-screen">
      <Helmet>
        <title>Insights & Resources | OneLever</title>
        <meta name="description" content="Access OneLever's frameworks, webinars, and playbooks to structure your AI strategy securely from PoC to production." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c2823a] text-xs font-bold uppercase tracking-widest mb-6">
            Educational Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Insights & <span className="text-gradient">Resources</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just build solutions, we map the territory. Access our frameworks, webinars, and playbooks to structure your AI strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 flex flex-col group hover:-translate-y-2 hover:border-[#c2823a]/30 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#c2823a]/5 rounded-full blur-3xl group-hover:bg-[#c2823a]/10 transition-colors" />
              
              <div className="flex items-center gap-3 mb-6 mix-blend-screen text-[#c2823a]">
                <div className="w-10 h-10 rounded-xl bg-[#1a2332] border border-white/10 flex items-center justify-center">
                  {res.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">{res.type}</div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight text-white group-hover:text-[#c2823a] transition-colors">{res.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">{res.desc}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-white/10 mt-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{res.tag}</span>
                <span className="flex items-center gap-2 text-[#c2823a] font-bold text-sm">
                  Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
