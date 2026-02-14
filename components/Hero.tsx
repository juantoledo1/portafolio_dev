
import React from 'react';
import { ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { useLanguage } from '../App';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <div className="min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-12 px-4 text-center relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-[60]">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/20 text-cyan-400 text-[9px] md:text-xs font-mono-custom mb-8 uppercase tracking-[0.2em] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t.hero.status}
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15] md:leading-[1.1] tracking-tight md:tracking-tighter reveal-text px-2 max-w-5xl">
            {t.hero.title1} <br className="hidden sm:block" />
            <span className="text-cyan-400 glow-text">{t.hero.title2}</span> & <span className="text-emerald-400">{t.hero.title3}</span>.
          </h1>
          
          <p className="text-slate-400 text-sm md:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 w-full max-w-[280px] sm:max-w-md relative z-[70]">
            <button 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="w-full sm:w-auto px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold transition-all shadow-lg text-[11px] md:text-xs uppercase tracking-widest border border-cyan-400/20 cursor-pointer"
            >
              {t.hero.btnProjects}
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full sm:w-auto px-8 py-3.5 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-xl font-bold transition-all glass-panel text-[11px] md:text-xs uppercase tracking-widest cursor-pointer"
            >
              {t.hero.btnTalk}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-12 text-slate-400 border-t border-cyan-500/10 pt-12 w-full max-w-4xl pointer-events-none">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 md:p-4 bg-cyan-950/20 rounded-xl border border-cyan-500/10">
                <ShieldCheck className="text-cyan-500 w-5 h-5 md:w-7 md:h-7" />
              </div>
              <span className="text-[8px] md:text-[10px] font-mono-custom uppercase tracking-wider font-bold text-cyan-500/60">{t.hero.cyber}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 md:p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/10">
                <TrendingUp className="text-emerald-500 w-5 h-5 md:w-7 md:h-7" />
              </div>
              <span className="text-[8px] md:text-[10px] font-mono-custom uppercase tracking-wider font-bold text-emerald-500/60">{t.hero.growth}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 md:p-4 bg-blue-950/20 rounded-xl border border-blue-500/10">
                <Cpu className="text-blue-500 w-5 h-5 md:w-7 md:h-7" />
              </div>
              <span className="text-[8px] md:text-[10px] font-mono-custom uppercase tracking-wider font-bold text-blue-500/60">{t.hero.dev}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
