import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use environment variable for the endpoint, fallback to a placeholder text if not set
      const endpoint = (import.meta as any).env.VITE_CONTACT_FORM_ENDPOINT || 'https://formspree.io/f/placeholder';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-32 pb-24 bg-[#1a2332] min-h-screen">
      <Helmet>
        <title>Start a Conversation | OneLever</title>
        <meta name="description" content="Reach out to OneLever to honestly evaluate whether AI can solve your specific business problem." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Start a <span className="text-[#c2823a]">conversation.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            One conversation. No jargon. No commitment. Let's look at your business together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-dark rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c2823a]/10 blur-[120px] -z-10" />
            
            <div className="grid lg:grid-cols-5 gap-16">
              
              <div className="lg:col-span-3">
                {submitStatus === 'success' ? (
                  <div className="bg-[#1a2332] border border-[#c2823a]/50 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-[#c2823a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-[#c2823a] w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Received</h3>
                    <p className="text-zinc-400">
                      Thanks for reaching out! We've received your information and we'll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-2 block">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe" 
                        className="w-full bg-[#1a2332] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#c2823a]/50 transition-all text-white placeholder:text-zinc-600" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-2 block">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com" 
                        className="w-full bg-[#1a2332] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#c2823a]/50 transition-all text-white placeholder:text-zinc-600" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-2 block">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp" 
                        className="w-full bg-[#1a2332] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#c2823a]/50 transition-all text-white placeholder:text-zinc-600" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-2 block">What's the biggest problem in your business right now?</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what's broken or taking too much time..." 
                        rows={4} 
                        className="w-full bg-[#1a2332] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#c2823a]/50 transition-all text-white placeholder:text-zinc-600"
                      ></textarea>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="text-red-400 text-sm font-medium p-4 bg-red-400/10 rounded-xl border border-red-400/20">
                        There was an error sending your message. Please try again or email us directly at hello@onelever.com.
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 flex items-center justify-center gap-2 bg-[#c2823a] hover:bg-[#d49650] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all shadow-xl shadow-[#c2823a]/20 cursor-pointer text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin w-5 h-5" />
                          Sending...
                        </>
                      ) : (
                        "Let's talk"
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Prefer to reach out directly?</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-[#c2823a]/20 transition-colors">
                        <Mail className="text-[#c2823a] w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email</div>
                        <div className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">hello@onelever.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-[#c2823a]/20 transition-colors">
                        <Phone className="text-[#c2823a] w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Phone</div>
                        <div className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">1-800-555-0199</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                        <MapPin className="text-[#c2823a] w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-300 leading-relaxed">
                          We're based in the Ottawa/Kingston region and work with businesses across Canada.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-[#c2823a]/20">
                  <h4 className="font-bold text-[#c2823a] mb-2 uppercase tracking-widest text-xs">What Happens Next</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    You'll hear back from us within one business day. The first conversation is simple: we listen to your problem, ask a few questions, and tell you honestly whether AI can help. 
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    If it can, we'll show you what that looks like — on your use case, not a generic demo. No slide decks. No sales pressure.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
