
import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../App';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const myForm = e.currentTarget;
    const formData = new FormData(myForm);
    const body = new URLSearchParams();
    body.append("form-name", "contact");
    formData.forEach((value, key) => {
      if (key !== "form-name") body.append(key, value as string);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      });

      if (response.ok) {
        setStatus('sent');
        myForm.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Netlify Form Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-6 font-mono-custom">
              <span className="text-cyan-500">04.</span> <span className="reveal-text">{t.contact.title}</span>
            </h2>
            <p className="text-slate-400 mb-8 text-sm md:text-lg leading-relaxed max-w-md">
              {t.contact.desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl glass-panel flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500 transition-all">
                  <Mail className="w-5 h-5 text-cyan-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-slate-500 font-mono-custom uppercase tracking-widest mb-0.5">{t.contact.email}</p>
                  <a href="mailto:juanmanueltoledo0487@gmail.com" className="text-sm md:text-lg text-slate-200 hover:text-cyan-400 transition-colors truncate block">juanmanueltoledo0487@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl glass-panel flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500 transition-all">
                  <MessageSquare className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-slate-500 font-mono-custom uppercase tracking-widest mb-0.5">{t.contact.whatsapp}</p>
                  <a href="https://wa.me/5493764674458" target="_blank" rel="noreferrer" className="text-sm md:text-lg text-slate-200 hover:text-emerald-400 transition-colors block">+54 9 376 467-4458</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl glass-panel flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-slate-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-slate-500 font-mono-custom uppercase tracking-widest mb-0.5">{t.contact.location}</p>
                  <p className="text-sm md:text-lg text-slate-200 truncate">{t.contact.locValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="https://github.com/juantoledo1" target="_blank" rel="noreferrer" className="w-11 h-11 md:w-14 md:h-14 glass-panel rounded-xl flex items-center justify-center hover:border-cyan-500 transition-all text-slate-400 hover:text-white">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://linkedin.com/in/juantoledo1" target="_blank" rel="noreferrer" className="w-11 h-11 md:w-14 md:h-14 glass-panel rounded-xl flex items-center justify-center hover:border-blue-500 transition-all text-slate-400 hover:text-blue-400">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-10 rounded-2xl border-cyan-500/10 shadow-2xl relative overflow-hidden mt-8 lg:mt-0">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[9px] font-mono-custom text-slate-500 mb-2 uppercase tracking-widest">{t.contact.labelName}</label>
                  <input id="name" required type="text" name="name" className="w-full bg-slate-950/40 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all" placeholder={t.contact.placeName} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[9px] font-mono-custom text-slate-500 mb-2 uppercase tracking-widest">{t.contact.labelEmail}</label>
                  <input id="email" required type="email" name="email" className="w-full bg-slate-950/40 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all" placeholder={t.contact.placeEmail} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[9px] font-mono-custom text-slate-500 mb-2 uppercase tracking-widest">{t.contact.labelMsg}</label>
                <textarea id="message" required name="message" rows={4} className="w-full bg-slate-950/40 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all resize-none" placeholder={t.contact.placeMsg}></textarea>
              </div>
              <button disabled={status === 'sending' || status === 'sent'} type="submit" className={`w-full py-4 rounded-lg font-bold transition-all text-xs uppercase tracking-widest border flex items-center justify-center gap-2 ${status === 'sent' ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-400/20'}`}>
                {status === 'idle' && <><Send className="w-3.5 h-3.5" /> {t.contact.btnSend}</>}
                {status === 'sending' && t.contact.sending}
                {status === 'sent' && t.contact.sent}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
