
import React from 'react';
import { getProjects } from '../constants';
import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../App';

const Projects: React.FC = () => {
  const { lang, t } = useLanguage();
  const projects = getProjects(lang);

  return (
    <section id="projects" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-3 font-mono-custom flex items-center gap-2">
              <span className="text-cyan-500">01.</span> <span className="reveal-text">{t.projects.title}</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm md:text-lg">
              {t.projects.desc}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-24 bg-cyan-500 shadow-[0_0_8px_#00f2ff] rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group glass-panel rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-600 rounded-full text-white shadow-lg"
                   >
                     <ExternalLink className="w-5 h-5" />
                   </a>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <Code2 className="w-5 h-5 text-cyan-500/30 flex-shrink-0" />
                </div>
                <p className="text-slate-400 text-xs md:text-sm mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>
                {project.logro && (
                   <div className="mb-5 p-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-[10px] text-emerald-400 font-mono-custom">
                     <span className="font-bold">[{t.projects.success}]:</span> {project.logro}
                   </div>
                )}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] uppercase font-mono-custom px-2 py-1 rounded-md bg-slate-800/40 text-slate-400 border border-slate-700/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
