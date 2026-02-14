
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ShieldAlert, GraduationCap, Briefcase } from 'lucide-react';

const Certifications: React.FC = () => {
  const cyberCerts = CERTIFICATIONS.filter(c => c.category === 'cyber');
  const devCerts = CERTIFICATIONS.filter(c => c.category === 'dev');
  const businessCerts = CERTIFICATIONS.filter(c => c.category === 'business');

  const Section = ({ title, icon, data }: { title: string, icon: React.ReactNode, data: typeof CERTIFICATIONS }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-slate-200 font-mono-custom">
        <span className="p-2 bg-slate-800/50 rounded-lg">{icon}</span> {title}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((cert) => (
          <div 
            key={cert.id} 
            className="flex items-start gap-5 p-5 glass-panel rounded-2xl hover:border-cyan-500/30 transition-all hover:translate-x-1"
          >
            <div className={`p-3 rounded-xl flex-shrink-0 ${cert.id === 'univ-cyber-2026' ? 'bg-emerald-500/20 text-emerald-400 animate-pulse' : 'bg-slate-800/50 text-slate-500'}`}>
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className={`text-base font-bold mb-1 leading-tight ${cert.id === 'univ-cyber-2026' ? 'text-emerald-400' : 'text-slate-200'}`}>
                {cert.name}
              </h4>
              <p className="text-xs text-slate-500 font-mono-custom">{cert.issuer}</p>
              <p className="text-[10px] text-cyan-500/60 mt-2 font-bold uppercase tracking-widest">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="certs" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 font-mono-custom">
          <span className="text-cyan-500">03.</span> <span className="reveal-text">CERTIFICACIONES</span>
        </h2>

        <Section 
          title="Seguridad & Networking" 
          icon={<ShieldAlert className="text-emerald-400 w-6 h-6" />} 
          data={cyberCerts} 
        />
        
        <Section 
          title="Desarrollo & Tech" 
          icon={<GraduationCap className="text-cyan-400 w-6 h-6" />} 
          data={devCerts} 
        />

        <Section 
          title="Estrategia & Negocios" 
          icon={<Briefcase className="text-blue-400 w-6 h-6" />} 
          data={businessCerts} 
        />
      </div>
    </section>
  );
};

export default Certifications;
