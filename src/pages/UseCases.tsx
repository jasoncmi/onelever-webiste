import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Plus, ArrowRight, X, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const UseCases = () => {

  const useCasesData = [
    {
      industry: "Manufacturing",
      items: [
        { problem: "Quoting takes days or weeks — data is scattered across spreadsheets, CAD files, and tribal knowledge", solution: "AI reads your quote documents, extracts pricing and specs, and generates quotes in hours instead of weeks" },
        { problem: "Knowledge walks out the door when experienced employees leave", solution: "AI trained on your processes, specs, and institutional knowledge preserves it and makes it searchable" },
        { problem: "Quality control is manual and inconsistent", solution: "AI-powered visual inspection and defect detection catches issues earlier and more consistently" },
        { problem: "Production scheduling relies on gut feel and spreadsheets", solution: "AI analyzes order data, capacity, and constraints to optimize scheduling and reduce downtime" },
        { problem: "Inventory management is reactive — you're always short or overstocked", solution: "AI forecasts demand based on order history, seasonality, and lead times" },
        { problem: "ERP and CRM don't talk to each other", solution: "AI integration workflows bridge your systems — pulling data from one, processing it, pushing it to another" }
      ]
    },
    {
      industry: "Accounting & CPA Firms",
      items: [
        { problem: "Staff spend hours processing client documents — receipts, invoices, statements", solution: "AI classifies, extracts, and organizes documents automatically, cutting processing time dramatically" },
        { problem: "Junior staff interrupt partners with questions about procedures and tax code", solution: "An AI assistant trained on your firm's knowledge base gives instant answers — freeing up partner time" },
        { problem: "Tax season creates a bottleneck of repetitive data entry and review", solution: "AI pre-processes tax documents, flags anomalies, and prepares draft workpapers for human review" },
        { problem: "Client onboarding requires manual gathering and organizing of financial documents", solution: "AI-powered intake collects, classifies, and organizes client documents into your workflow automatically" },
        { problem: "Keeping up with regulatory changes across jurisdictions", solution: "AI monitors regulatory updates and flags changes relevant to your clients' situations" },
        { problem: "Your team spends time on emails that could be templated or auto-drafted", solution: "AI drafts routine client communications based on context — your team reviews and sends" }
      ]
    },
    {
      industry: "Law Firms & Legal",
      items: [
        { problem: "Contract review takes hours of associate time per document", solution: "AI reviews contracts, flags non-standard clauses, and highlights risks — associates review the output, not the full document" },
        { problem: "Client intake is manual — forms, document collection, conflict checks", solution: "AI automates intake forms, extracts key information, and runs preliminary conflict checks" },
        { problem: "Legal research is time-consuming and expensive", solution: "AI searches case law, statutes, and your firm's own work product to surface relevant precedents faster" },
        { problem: "Document management is chaotic — files are scattered across drives and email", solution: "AI organizes, tags, and makes your document library searchable by topic, client, and matter" },
        { problem: "Billing and time tracking are inconsistent", solution: "AI analyzes work patterns and drafts time entries based on email, document, and calendar activity" },
        { problem: "Clients call with status questions that pull staff away from billable work", solution: "An AI assistant handles routine client inquiries — case status, next steps, document requests" }
      ]
    },
    {
      industry: "Healthcare",
      items: [
        { problem: "Phone lines are overwhelmed — patients can't get through, staff are tied to the phone", solution: "Voice AI triages calls, answers common questions, books appointments, and routes urgent calls to the right person" },
        { problem: "Patient intake is paper-based or clunky — forms get lost, data gets entered twice", solution: "AI-powered digital intake collects patient information, verifies it, and feeds it directly into your system" },
        { problem: "Clinical documentation takes hours of staff time after every patient interaction", solution: "AI assists with documentation — drafting notes from voice recordings or structured inputs for clinician review" },
        { problem: "Appointment no-shows waste capacity and revenue", solution: "AI-powered reminders, rescheduling, and waitlist management reduce no-shows and fill gaps" },
        { problem: "Staff spend time answering the same patient questions repeatedly", solution: "An AI assistant trained on your clinic's FAQs, services, and policies handles routine inquiries" },
        { problem: "Referral management is manual and things fall through the cracks", solution: "AI tracks referrals, follows up automatically, and flags overdue items" }
      ]
    },
    {
      industry: "Construction & Trades",
      items: [
        { problem: "Estimating and bidding is slow — pulling quantities from plans takes days", solution: "AI extracts quantities and specs from blueprints and drawings, accelerating the estimating process" },
        { problem: "Project documentation is scattered — change orders, RFIs, and submittals get lost", solution: "AI organizes project documents, tracks changes, and makes everything searchable" },
        { problem: "Safety compliance tracking is manual and error-prone", solution: "AI monitors safety documentation, training records, and certifications — flags gaps before they become violations" },
        { problem: "Scheduling subcontractors and managing timelines relies on spreadsheets and phone calls", solution: "AI optimizes scheduling based on availability, dependencies, and project timelines" },
        { problem: "Experienced foremen and estimators are retiring — their knowledge isn't documented", solution: "AI trained on your historical projects, estimates, and procedures preserves institutional knowledge" },
        { problem: "Job costing is done after the fact — by then it's too late to fix overruns", solution: "AI tracks costs against estimates in real time and flags variances early" }
      ]
    },
    {
      industry: "Real Estate & Property Management",
      items: [
        { problem: "Tenant inquiries and maintenance requests flood your phone and email", solution: "Voice AI and chatbots handle routine inquiries, log maintenance requests, and route urgent issues" },
        { problem: "Lease administration is manual — tracking renewals, escalations, and compliance", solution: "AI monitors lease terms, flags upcoming renewals, and calculates escalations automatically" },
        { problem: "Property listings require repetitive writing and data entry across multiple platforms", solution: "AI generates listing descriptions, syncs data across platforms, and keeps listings consistent" },
        { problem: "Market analysis for acquisitions or pricing is time-consuming", solution: "AI analyzes comparable properties, market trends, and financial data to support decisions" },
        { problem: "Showing scheduling and follow-up is manual and things get missed", solution: "AI coordinates showings, sends follow-ups, and tracks prospect engagement" }
      ]
    },
    {
      industry: "Insurance",
      items: [
        { problem: "Claims processing involves manual review of documents, photos, and reports", solution: "AI extracts information from claims documents, classifies damage, and pre-processes claims for adjuster review" },
        { problem: "Policy inquiries tie up staff — clients calling to ask about coverage, deductibles, deadlines", solution: "AI assistant handles routine policy questions, freeing staff for complex cases" },
        { problem: "Underwriting involves manual data gathering and risk assessment", solution: "AI aggregates data from multiple sources, flags risk factors, and prepares draft risk assessments" },
        { problem: "Renewal processing is batch work that creates seasonal bottlenecks", solution: "AI pre-processes renewals, flags changes in risk profile, and drafts renewal communications" },
        { problem: "Compliance documentation and audit preparation is labor-intensive", solution: "AI organizes compliance records, generates reports, and flags gaps before audits" }
      ]
    },
    {
      industry: "Logistics & Transportation",
      items: [
        { problem: "Invoice reconciliation takes 20+ hours per week — matching POs, invoices, and receipts manually", solution: "AI matches documents automatically, flags discrepancies, and prepares reconciled batches for approval" },
        { problem: "Route planning is done manually or with outdated tools", solution: "AI optimizes routes based on delivery windows, vehicle capacity, traffic patterns, and fuel efficiency" },
        { problem: "Shipment tracking inquiries flood customer service", solution: "AI assistant provides real-time shipment status to customers without human involvement" },
        { problem: "Warehouse inventory is inaccurate — picking errors and stock discrepancies are common", solution: "AI improves inventory accuracy through automated counting, demand prediction, and pick optimization" },
        { problem: "Driver compliance tracking (hours, certifications, inspections) is manual", solution: "AI monitors compliance data, flags expirations, and automates reporting" }
      ]
    },
    {
      industry: "Professional Services & Consulting",
      items: [
        { problem: "Proposal writing is repetitive — every RFP response starts from scratch", solution: "AI drafts proposals based on your past work, capabilities, and the specific RFP requirements" },
        { problem: "Project reporting is manual — pulling data from multiple tools into a status update", solution: "AI aggregates project data and generates draft reports, dashboards, and client updates" },
        { problem: "Knowledge is siloed — one team's solution for a client could help another, but nobody knows", solution: "AI makes your firm's collective knowledge searchable — past projects, deliverables, methodologies" },
        { problem: "Utilization tracking and resource planning rely on spreadsheets", solution: "AI analyzes team capacity, project timelines, and skill requirements to optimize staffing" },
        { problem: "Client communication follow-ups fall through the cracks", solution: "AI tracks communication cadence and flags when a client relationship needs attention" }
      ]
    },
    {
      industry: "Financial Services",
      items: [
        { problem: "Client onboarding and KYC documentation is slow and manual", solution: "AI automates document collection, identity verification, and compliance checks" },
        { problem: "Portfolio reporting for clients is a monthly grind", solution: "AI generates personalized client reports from portfolio data — formatted and ready for review" },
        { problem: "Compliance monitoring requires constant manual review of transactions and communications", solution: "AI monitors for compliance issues in real time, flags anomalies, and generates audit trails" },
        { problem: "Client inquiries about account status, transactions, and policies take up advisor time", solution: "AI assistant handles routine inquiries so advisors focus on relationship and strategy" },
        { problem: "Market research and analysis is time-consuming", solution: "AI aggregates market data, news, and research to surface relevant insights faster" }
      ]
    },
    {
      industry: "Non-Profits & Associations",
      items: [
        { problem: "Donor communications are generic — no personalization at scale", solution: "AI segments donors and drafts personalized outreach based on giving history and engagement" },
        { problem: "Grant applications require repetitive writing and data compilation", solution: "AI drafts grant narratives from your outcomes data, reusing and adapting previous successful applications" },
        { problem: "Member inquiries about benefits, events, and policies tie up staff", solution: "AI assistant handles routine member questions, freeing staff for higher-value work" },
        { problem: "Event coordination involves manual tracking of registrations, communications, and logistics", solution: "AI automates registration, sends personalized reminders, and manages waitlists" },
        { problem: "Impact reporting is manual — pulling data from multiple programs into funder reports", solution: "AI aggregates program data and generates draft impact reports in funder-required formats" }
      ]
    },
    {
      industry: "Retail & E-Commerce",
      items: [
        { problem: "Customer service inquiries are repetitive — order status, returns, product questions", solution: "AI chatbot handles routine inquiries, escalating complex issues to staff" },
        { problem: "Inventory forecasting is inaccurate — overstocking ties up cash, understocking loses sales", solution: "AI forecasts demand by analyzing sales history, seasonality, trends, and external factors" },
        { problem: "Product descriptions and marketing copy are time-consuming to write at scale", solution: "AI generates product descriptions, email campaigns, and social content from product data" },
        { problem: "Pricing decisions are based on gut feel rather than market data", solution: "AI analyzes competitor pricing, demand patterns, and margins to recommend optimal pricing" },
        { problem: "Returns processing is manual and slow", solution: "AI classifies return reasons, automates routing, and identifies patterns to reduce return rates" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#1a2332] min-h-screen">
      <Helmet>
        <title>Industry Use Cases | OneLever</title>
        <meta name="description" content="Explore how OneLever implements custom AI solutions across Manufacturing, Accounting, Legal, Healthcare, Construction, Real Estate, and more." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c2823a] text-xs font-bold uppercase tracking-widest mb-6">
            Industry Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">What AI Can Do for <span className="text-gradient">Your Business</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Every business has different problems. The right AI solution depends on where your pain is — not on a technology trend. Here's what AI looks like across the industries we serve.
          </p>
        </div>

        <div className="space-y-16">
          {useCasesData.map((industryInfo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="glass-dark rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c2823a]/5 rounded-full blur-[80px] -z-10 group-hover:bg-[#c2823a]/10 transition-colors duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c2823a] flex items-center justify-center shadow-lg shadow-[#c2823a]/20">
                    <Building2 className="text-white w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold font-display">{industryInfo.industry}</h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-px bg-white/5 overflow-hidden rounded-2xl border border-white/10">
                {industryInfo.items.map((item, idxx) => (
                  <div key={idxx} className="bg-[#1a2332] p-6 lg:p-8 hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <X className="w-3 h-3 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">The Problem</h4>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{item.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 mt-6">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-[#c2823a] font-bold mb-1">How AI Solves It</h4>
                        <p className="text-white font-medium text-sm md:text-base leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 glass rounded-[2.5rem] p-8 md:p-12 border border-[#c2823a]/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#c2823a]/5 blur-3xl -z-10" />
          <h3 className="text-3xl font-display font-bold mb-4">Don't See Your Industry?</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            These are examples, not limits. If your business has a process that's manual, repetitive, time-consuming, or dependent on information trapped in documents and systems — AI can probably help.
            <br/><br/>
            The pattern is always the same: find the bottleneck, build something that solves it, train your team, and expand from there.
          </p>
          <Link to="/#contact" className="inline-flex px-8 py-4 bg-[#c2823a] hover:bg-[#d49650] text-white font-bold rounded-lg transition-all duration-300 items-center gap-2 shadow-xl shadow-[#c2823a]/20 cursor-pointer hover:-translate-y-1">
            Let's find your bottleneck <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
