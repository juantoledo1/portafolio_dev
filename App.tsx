
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-white bg-transparent">
      <Navigation />
      
      <main className="relative flex flex-col">
        {/* Secciones con IDs claros y sin solapamientos físicos */}
        <section id="home" className="relative z-10">
          <Hero />
        </section>
        
        <div id="terminal-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-20">
          <Terminal />
        </div>

        <section id="projects" className="relative z-10">
          <Projects />
        </section>

        <section id="skills" className="relative z-10">
          <Skills />
        </section>

        <section id="certs" className="relative z-10">
          <Certifications />
        </section>

        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </main>

      <footer className="py-16 border-t border-cyan-500/10 text-center text-slate-500 text-sm glass-panel relative z-40">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-mono-custom mb-3 text-slate-300">
            &copy; {new Date().getFullYear()} Juan Manuel Toledo. 
          </p>
          <p className="text-xs tracking-widest uppercase opacity-60">
            Full-Stack Developer • Cybersecurity Specialist • Argentina
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
