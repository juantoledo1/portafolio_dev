
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono-custom flex items-center gap-3">
              <span className="text-cyan-500">01.</span> <span className="reveal-text">PROYECTOS_DESTACADOS</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Soluciones integrales que demuestran la fusión entre código seguro y alto rendimiento comercial.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="h-1 w-32 bg-cyan-500 shadow-[0_0_10px_#00f2ff] rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group glass-panel rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition-all transform hover:scale-110"
                   >
                     <ExternalLink className="w-6 h-6 text-white" />
                   </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <Code2 className="w-6 h-6 text-cyan-500/40" />
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                {project.logro && (
                   <div className="mb-6 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-400 font-mono-custom">
                     <span className="font-bold">[EXITO]:</span> {project.logro}
                   </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] uppercase font-mono-custom px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50"
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
