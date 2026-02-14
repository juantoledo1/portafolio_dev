
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

    // Método ultra-robusto: Construimos los parámetros URL asegurando que form-name esté presente
    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      searchParams.append(key, value as string);
    });
    
    // Si por alguna razón form-name no entró desde el input hidden, lo forzamos
    if (!searchParams.has('form-name')) {
      searchParams.append('form-name', 'contact');
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: searchParams.toString()
      });

      if (response.ok) {
        setStatus('sent');
        myForm.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error("Netlify response not ok");
      }
    } catch (error) {
      console.error("Netlify Form Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-mono-custom">
              <span className="text-cyan-500">04.</span> <span className="reveal-text">{t.contact.title}</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
              {t.contact.desc}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:border-cyan-500 transition-all">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono-custom uppercase tracking-widest mb-1">{t.contact.email}</p>
                  <a href="mailto:juanmanueltoledo0487@gmail.com" className="text-lg text-slate-200 hover:text-cyan-400 transition-colors">juanmanueltoledo0487@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:border-emerald-500 transition-all">
                  <MessageSquare className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono-custom uppercase tracking-widest mb-1">{t.contact.whatsapp}</p>
                  <a href="https://wa.me/5493764674458" target="_blank" rel="noreferrer" className="text-lg text-slate-200 hover:text-emerald-400 transition-colors">+54 9 376 467-4458</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono-custom uppercase tracking-widest mb-1">{t.contact.location}</p>
                  <p className="text-lg text-slate-200">{t.contact.locValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex gap-6">
              <a href="https://github.com/juantoledo1" target="_blank" rel="noreferrer" className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:border-cyan-500 transition-all hover:-translate-y-1 text-slate-400 hover:text-white">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/juantoledo1" target="_blank" rel="noreferrer" className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:border-blue-500 transition-all hover:-translate-y-1 text-slate-400 hover:text-blue-400">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-3xl border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full"></div>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>Honeypot: <input name="bot-field" /></label>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono-custom text-slate-500 mb-3 uppercase tracking-widest">{t.contact.labelName}</label>
                  <input 
                    id="name"
                    required 
                    type="text" 
                    name="name"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all" 
                    placeholder={t.contact.placeName} 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-mono-custom text-slate-500 mb-3 uppercase tracking-widest">{t.contact.labelEmail}</label>
                  <input 
                    id="email"
                    required 
                    type="email" 
                    name="email"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all" 
                    placeholder={t.contact.placeEmail} 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-mono-custom text-slate-500 mb-3 uppercase tracking-widest">{t.contact.labelMsg}</label>
                <textarea 
                  id="message"
                  required 
                  name="message"
                  rows={5} 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none" 
                  placeholder={t.contact.placeMsg}
                ></textarea>
              </div>
              
              {status === 'error' && (
                <p className="text-red-400 text-xs text-center font-mono-custom">
                  Hubo un error al enviar. Por favor intenta por WhatsApp.
                </p>
              )}

              <button 
                disabled={status === 'sending' || status === 'sent'}
                type="submit" 
                className={`w-full py-5 rounded-xl font-bold transition-all shadow-xl uppercase tracking-widest text-sm border flex items-center justify-center gap-3 ${
                  status === 'sent' 
                  ? 'bg-emerald-600 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                  : status === 'sending'
                  ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-wait'
                  : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-400/20 active:scale-95'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-4 h-4" /> {t.contact.btnSend}
                  </>
                )}
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
