
import React, { useState, useRef, useEffect } from 'react';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const autoMessages = [
    { text: 'Initializing Toledo_OS v1.0.4...', delay: 400 },
    { text: 'System diagnostics... [SUCCESS]', delay: 800 },
    { text: 'Scanning market opportunities in LATAM...', delay: 1200 },
    { text: '[FOUND] Businesses requiring secure digital scaling.', delay: 1600 },
    { text: '[FOUND] Critical vulnerabilities in common web architectures.', delay: 2000 },
    { text: 'Loading freelance_strategy.sh...', delay: 2400 },
    { text: '------------------------------------------------', delay: 2500 },
    { text: 'SOLUTIONS AVAILABLE FOR YOUR BUSINESS:', delay: 2800 },
    { text: '> Next.js & React: High Performance UI/UX', delay: 3100 },
    { text: '> Node.js & PostgreSQL: Scalable Backends', delay: 3400 },
    { text: '> Security Hardening: Protecting digital assets', delay: 3700 },
    { text: '> Sales Optimization: Tech designed to sell.', delay: 4000 },
    { text: '------------------------------------------------', delay: 4200 },
    { text: 'Status: READY TO UPGRADE YOUR PROJECT.', delay: 4600 },
    { text: 'Type "help" to explore commands.', delay: 5000 }
  ];

  useEffect(() => {
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
  }, []);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const commands: Record<string, () => void> = {
    help: () => setHistory(prev => [...prev, '> help', 'Available: services, hire, whoami, stack, projects, clear, contact']),
    whoami: () => setHistory(prev => [...prev, '> whoami', 'Juan Manuel Toledo: Full-Stack Dev + Cyber Specialist.']),
    services: () => setHistory(prev => [...prev, '> services', '- Custom Web Apps', '- Security Audits', '- Local SEO', '- PostgreSQL Architectures']),
    hire: () => setHistory(prev => [...prev, '> hire', 'Redirecting to contact... WhatsApp: +54 9 376 467-4458']),
    stack: () => setHistory(prev => [...prev, '> stack', 'Next.js, Prisma, PostgreSQL, Docker, Qwen CLI, Arch Linux.']),
    projects: () => setHistory(prev => [...prev, '> projects', 'Explore the grid: Invitations, CMS, and B2B Landings.']),
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
            <div key={i} className={`${line.startsWith('>') ? 'text-cyan-400' : line.startsWith('[FOUND]') || line.includes('[SUCCESS]') ? 'text-emerald-400' : 'text-slate-300'} mb-1 break-words`}>
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
