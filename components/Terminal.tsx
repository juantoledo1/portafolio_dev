
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../App';

const Terminal: React.FC = () => {
  const { lang, t } = useLanguage();
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const autoMessages = [
    { text: t.terminal.init, delay: 400 },
    { text: t.terminal.diag, delay: 800 },
    { text: t.terminal.scan, delay: 1200 },
    { text: t.terminal.found1, delay: 1600 },
    { text: t.terminal.found2, delay: 2000 },
    { text: t.terminal.loading, delay: 2400 },
    { text: '------------------------------------------------', delay: 2500 },
    { text: t.terminal.solutions, delay: 2800 },
    { text: t.terminal.s1, delay: 3100 },
    { text: t.terminal.s2, delay: 3400 },
    { text: t.terminal.s3, delay: 3700 },
    { text: t.terminal.s4, delay: 4000 },
    { text: '------------------------------------------------', delay: 4200 },
    { text: t.terminal.status, delay: 4600 },
    { text: t.terminal.helpTip, delay: 5000 }
  ];

  // Reset terminal when language changes
  useEffect(() => {
    setHistory([]);
    setIsAutoTyping(true);
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    autoMessages.forEach((msg, index) => {
      const timeout = setTimeout(() => {
        setHistory(prev => [...prev, msg.text]);
        if (index === autoMessages.length - 1) {
          setIsAutoTyping(false);
        }
      }, msg.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [lang]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const commands: Record<string, () => void> = {
    help: () => setHistory(prev => [...prev, '> help', t.terminal.helpMsg]),
    whoami: () => setHistory(prev => [...prev, '> whoami', 'Juan Manuel Toledo: Full-Stack Dev + Cyber Specialist.']),
    services: () => setHistory(prev => [...prev, '> services', lang === 'es' ? '- Web Apps a Medida' : '- Custom Web Apps', '- Security Audits', '- Local SEO', '- PostgreSQL Architectures']),
    hire: () => setHistory(prev => [...prev, '> hire', lang === 'es' ? 'Redirigiendo... WhatsApp: +54 9 376 467-4458' : 'Redirecting... WhatsApp: +54 9 376 467-4458']),
    stack: () => setHistory(prev => [...prev, '> stack', 'Next.js, Prisma, PostgreSQL, Docker, Qwen CLI, Arch Linux.']),
    projects: () => setHistory(prev => [...prev, '> projects', lang === 'es' ? 'Explora la cuadrícula de proyectos.' : 'Explore the project grid below.']),
    clear: () => setHistory([]),
    contact: () => setHistory(prev => [...prev, '> contact', 'WhatsApp: +54 9 376 467-4458'])
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAutoTyping) return;
    const cmd = input.toLowerCase().trim();
    if (commands[cmd]) {
      commands[cmd]();
    } else if (cmd !== '') {
      setHistory(prev => [...prev, `> ${input}`, `Error: "${cmd}" is not valid.`]);
    }
    setInput('');
  };

  return (
    <div className="max-w-3xl mx-auto my-12 md:my-16 px-4">
      <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden font-mono-custom text-xs md:text-sm shadow-2xl border-glow-cyan">
        <div className="bg-slate-800 px-4 py-2 flex items-center justify-between gap-2 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-bold truncate">bash — toledo@freelance</span>
          <div className="w-8" />
        </div>
        <div className="p-4 md:p-5 h-[300px] md:h-[400px] overflow-y-auto custom-scrollbar bg-slate-950/80 backdrop-blur-sm">
          {history.map((line, i) => (
            <div key={i} className={`${line.startsWith('>') ? 'text-cyan-400' : line.startsWith('[') ? 'text-emerald-400' : 'text-slate-300'} mb-1 break-words`}>
              {line}
            </div>
          ))}
          {!isAutoTyping && (
            <form onSubmit={handleCommand} className="flex mt-2">
              <span className="text-emerald-500 mr-2 flex-shrink-0">guest@toledo:~$</span>
              <input
                type="text"
                className="bg-transparent border-none outline-none text-cyan-400 flex-1 caret-cyan-500 min-w-0"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />
            </form>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
