
import React from 'react';
import { SKILLS } from '../constants';
import { Code, Server, Shield, Wrench } from 'lucide-react';
import { useLanguage } from '../App';

const Skills: React.FC = () => {
  // Added lang to the destructuring of useLanguage to fix line 14 error
  const { lang, t } = useLanguage();
  
  const categories = [
    { title: 'Frontend', items: SKILLS.frontend, icon: <Code className="w-6 h-6 text-cyan-400" /> },
    { title: 'Backend & DB', items: SKILLS.backend, icon: <Server className="w-6 h-6 text-blue-400" /> },
    { title: t.hero.cyber, items: SKILLS.cyber, icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { title: lang === 'es' ? 'Herramientas IT' : 'IT Tools', items: SKILLS.tools, icon: <Wrench className="w-6 h-6 text-orange-400" /> },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono-custom">
            <span className="text-cyan-500">02.</span> <span className="reveal-text">{t.skills.title}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.title} 
              className="group p-8 glass-panel rounded-3xl transition-all hover:-translate-y-2 hover:border-cyan-500/50"
            >
              <div className="mb-6 bg-slate-800/50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-cyan-900/40 transition-all border border-slate-700/50">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 font-mono-custom text-white">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm flex items-center gap-3 group-hover:text-slate-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-500 group-hover:shadow-[0_0_8px_#00f2ff] transition-all flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
