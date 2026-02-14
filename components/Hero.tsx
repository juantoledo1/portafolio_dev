
import React from 'react';
import { ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center relative bg-transparent overflow-visible">
      <div className="max-w-7xl mx-auto w-full relative z-[60]">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-400/30 text-cyan-400 text-[10px] md:text-xs font-mono-custom mb-10 uppercase tracking-[0.3em] backdrop-blur-xl shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            SISTEMA_ACTIVO: Juan Manuel Toledo
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tighter reveal-text px-2 max-w-5xl">
            Software de Alto Impacto <br className="hidden md:block" />
            <span className="text-cyan-400 glow-text">Seguro</span> & <span className="text-emerald-400">Escalable</span>.
          </h1>
          
          <p className="text-slate-300 text-base md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Especialista en fusionar <span className="text-cyan-400 font-bold">Ciberseguridad Avanzada</span> y <span className="text-emerald-400 font-bold">Marketing Estratégico</span>. Construyo soluciones digitales blindadas diseñadas para vender.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-24 w-full max-w-md relative z-[70]">
            <button 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="w-full sm:w-auto px-12 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(8,145,178,0.3)] text-sm uppercase tracking-widest border border-cyan-400/20 cursor-pointer"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full sm:w-auto px-12 py-4 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 rounded-2xl font-bold transition-all active:scale-95 glass-panel text-sm uppercase tracking-widest cursor-pointer"
            >
              Hablar Ahora
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-slate-400 border-t border-cyan-500/20 pt-16 w-full max-w-5xl pointer-events-none">
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-cyan-950/40 rounded-2xl border border-cyan-500/20 shadow-inner">
                <ShieldCheck className="text-cyan-500 w-8 h-8" />
              </div>
              <span className="text-[10px] md:text-xs font-mono-custom uppercase tracking-widest font-bold text-cyan-500/80">Cyber Security</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-500/20 shadow-inner">
                <TrendingUp className="text-emerald-500 w-8 h-8" />
              </div>
              <span className="text-[10px] md:text-xs font-mono-custom uppercase tracking-widest font-bold text-emerald-500/80">Growth Marketing</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-blue-950/40 rounded-2xl border border-blue-500/20 shadow-inner">
                <Cpu className="text-blue-500 w-8 h-8" />
              </div>
              <span className="text-[10px] md:text-xs font-mono-custom uppercase tracking-widest font-bold text-blue-500/80">Full-Stack Dev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
