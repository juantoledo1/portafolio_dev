
import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  // Para Netlify Forms en aplicaciones de una sola página (SPA), 
  // no es estrictamente necesario un handleSubmit especial si se usa el atributo "data-netlify",
  // pero mantendremos el estado visual para mejorar la UX.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Si queremos que Netlify maneje el POST automáticamente vía AJAX:
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setStatus('sent');
        form.reset();
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((error) => {
        console.error(error);
        setStatus('idle');
      });
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-mono-custom">
              <span className="text-cyan-500">04.</span> <span className="reveal-text">CONTACTO</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
              ¿Listo para blindar tu infraestructura o crear software de alta conversión? 
              Hablemos hoy sobre tu próximo gran paso.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:border-cyan-500 transition-all">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono-custom uppercase tracking-widest mb-1">EMAIL PROFESIONAL</p>
                  <a href="mailto:juanmanueltoledo0487@gmail.com" className="text-lg text-slate-200 hover:text-cyan-400 transition-colors">juanmanueltoledo0487@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:border-emerald-500 transition-all">
                  <MessageSquare className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono-custom uppercase tracking-widest mb-1">WHATSAPP DIRECTO</p>
                  <a href="https://wa.me/5493764674458" target="_blank" rel="noreferrer" className="text-lg text-slate-200 hover:text-emerald-400 transition-colors">+54 9 376 467-4458</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono-custom uppercase tracking-widest mb-1">UBICACIÓN</p>
                  <p className="text-lg text-slate-200">Posadas, Misiones, Argentina</p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex gap-6">
              <a href="https://github.com/juantoledo1" target="_blank" rel="noreferrer" className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:border-cyan-500 transition-all hover:-translate-y-1">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/juantoledo1" target="_blank" rel="noreferrer" className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:border-blue-500 transition-all hover:-translate-y-1">
                <Linkedin className="w-7 h-7 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Formulario con integración Netlify */}
          <div className="glass-panel p-10 rounded-3xl border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full"></div>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
            >
              {/* Input oculto requerido para Netlify en SPAs como React */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-mono-custom text-slate-500 mb-3 uppercase tracking-widest">NOMBRE_USUARIO</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all" 
                    placeholder="Tu nombre" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono-custom text-slate-500 mb-3 uppercase tracking-widest">EMAIL_CONTACTO</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all" 
                    placeholder="tu@email.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-mono-custom text-slate-500 mb-3 uppercase tracking-widest">MENSAJE_CIFRADO</label>
                <textarea 
                  required 
                  name="message"
                  rows={5} 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none" 
                  placeholder="Describe tu proyecto..."
                ></textarea>
              </div>
              <button 
                disabled={status !== 'idle'}
                type="submit" 
                className={`w-full py-5 rounded-xl font-bold transition-all shadow-xl uppercase tracking-widest text-sm border flex items-center justify-center gap-3 ${
                  status === 'sent' 
                  ? 'bg-emerald-600 border-emerald-400 text-white' 
                  : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-400/20'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-4 h-4" /> Enviar Mensaje
                  </>
                )}
                {status === 'sending' && "Procesando..."}
                {status === 'sent' && "¡Mensaje Enviado!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
