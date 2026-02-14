
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Send, Languages } from 'lucide-react';
import { useLanguage } from '../App';

const Navigation: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.projects, id: 'projects' },
    { name: t.nav.skills, id: 'skills' },
    { name: t.nav.certs, id: 'certs' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none z-[900]"></div>

      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[1000] transition-all duration-500 rounded-2xl border ${
        scrolled 
        ? 'bg-slate-900/80 backdrop-blur-xl border-cyan-500/30 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent border-transparent py-5'
      }`}>
        <div className="px-6 md:px-10 flex items-center justify-between">
          <button 
            onClick={(e) => scrollToSection(e, 'home')}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(8,145,178,0.5)] group-hover:scale-110 transition-transform text-xs">
              J
            </div>
            <span className="text-white font-bold text-sm md:text-xl font-mono-custom tracking-tighter group-hover:text-cyan-400 transition-colors">
              JUAN_TOLEDO<span className="text-cyan-500">.sh</span>
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-1 bg-slate-950/20 p-1 rounded-xl border border-white/5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all font-mono-custom cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 hover:bg-cyan-900/40 border border-white/5 hover:border-cyan-500/30 rounded-lg text-[10px] font-bold text-cyan-400 transition-all cursor-pointer"
            >
              <Languages size={14} />
              {lang.toUpperCase()}
            </button>
            <div className="h-4 w-[1px] bg-slate-700 mx-1"></div>
            <a href="https://github.com/juantoledo1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_15px_rgba(8,145,178,0.4)] cursor-pointer"
            >
              {t.nav.cta}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
             <button 
                onClick={toggleLang}
                className="p-2 rounded-lg text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 text-xs font-bold"
              >
                {lang.toUpperCase()}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 transition-all active:scale-90"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`md:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[1100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div 
        className={`md:hidden fixed top-0 right-0 h-screen w-[280px] bg-slate-900 border-l border-cyan-500/20 z-[1200] transition-transform duration-500 ease-out shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 flex-1">
          <div className="flex justify-between items-center mb-12">
            <span className="text-cyan-500 font-mono-custom font-bold">MENU</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white p-2">
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {links.map((link, index) => (
              <button
                key={link.id}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-left group"
              >
                <span className="text-cyan-500/40 font-mono-custom text-xs mr-3">0{index + 1}.</span>
                <span className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{link.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-white/5 space-y-6">
          <div className="flex gap-4">
            <a href="https://github.com/juantoledo1" className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 transition-all"><Github size={20} /></a>
            <a href="https://linkedin.com/in/juantoledo1" className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-blue-400 transition-all"><Linkedin size={20} /></a>
          </div>
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="w-full py-4 bg-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <Send size={18} /> {t.nav.cta.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
