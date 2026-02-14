
import React from 'react';
import { Project, Certification } from './types';

export const getProjects = (lang: 'en' | 'es'): Project[] => [
  {
    id: 'betelgeuse-system',
    title: lang === 'es' ? 'Sistema de Gestión de Turnos Web' : 'Web Appointment Management System',
    description: lang === 'es'
      ? 'Sistema integral de gestión de turnos y clientes con calendarios dinámicos y seguridad avanzada.'
      : 'Comprehensive appointment and customer management system with dynamic calendars and advanced security.',
    tech: ['Node.js', 'Express', 'MySQL', 'bcrypt', 'JWT', 'React', 'React-Big-Calendar', 'React-Bootstrap', 'Axios'],
    logro: lang === 'es' ? 'Gestión en tiempo real con cifrado de grado bancario.' : 'Real-time management with banking-grade encryption.',
    url: 'https://www.youtube.com/watch?v=0YM8iEyI18M',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'betelgeuse-web',
    title: 'Betelgeuse Web',
    description: lang === 'es'
      ? 'Landing page comercial optimizada para la conversión y presentación del ecosistema Betelgeuse.'
      : 'Commercial landing page optimized for conversion and presentation of the Betelgeuse ecosystem.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    logro: lang === 'es' ? 'Alta tasa de retención de usuarios.' : 'High user retention rate.',
    url: 'https://betelgeusee.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tekohatech',
    title: 'Tekohatech Agency',
    description: lang === 'es'
      ? 'Sitio oficial de la agencia de desarrollo y ciberseguridad Tekohatech.'
      : 'Official site of the Tekohatech development and cybersecurity agency.',
    tech: ['Astro', 'JavaScript', 'HTML', 'CSS'],
    logro: lang === 'es' ? 'Arquitectura estática ultrarrápida y SEO optimizado.' : 'Ultra-fast static architecture and optimized SEO.',
    url: 'https://tekohatech.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sonic-runner',
    title: 'Sonic Runner 2D',
    description: lang === 'es'
      ? 'Videojuego web de plataformas en 2D con físicas rítmicas desarrollado para una experiencia arcade fluida.'
      : '2D platformer web game with rhythmic physics developed for a smooth arcade experience.',
    tech: ['Kaplay JS', 'JavaScript', 'HTML5', 'CSS3'],
    logro: lang === 'es' ? 'Experiencia de juego fluida a 60 FPS en navegador.' : 'Smooth 60 FPS browser gaming experience.',
    url: 'https://sonic-runner1.netlify.app/',
    imageUrl: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'invitaciones-pro',
    title: lang === 'es' ? 'Invitaciones Web Pro' : 'Pro Web Invitations',
    description: lang === 'es' 
      ? 'Sistema de invitaciones digitales interactivas con efectos visuales y gestión de invitados.' 
      : 'Interactive digital invitation system with visual effects and guest management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    logro: lang === 'es' ? 'Carga ultrarrápida y diseño responsive móvil.' : 'Ultra-fast loading and mobile responsive design.',
    url: 'https://invi-cumple2.netlify.app/',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'educacion-vial',
    title: 'Educación Vial Kids',
    description: lang === 'es'
      ? 'Portal educativo diseñado para la enseñanza lúdica de seguridad vial mediante Astro.'
      : 'Educational portal designed for playful road safety teaching using Astro.',
    tech: ['Astro', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    logro: lang === 'es' ? 'Arquitectura estática de alto rendimiento.' : 'High-performance static architecture.',
    url: 'https://educacion-vial-kids.netlify.app/',
    imageUrl: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paliachi',
    title: 'Paliachi Helados',
    description: lang === 'es'
      ? 'Estrategia digital y diseño para heladería artesanal con enfoque en SEO local y UX.'
      : 'Digital strategy and design for artisanal ice cream shop with local SEO and UX focus.',
    tech: ['WordPress', 'Elementor', 'Jetpack', 'SEO Local'],
    logro: lang === 'es' ? 'Posicionamiento estratégico en búsquedas locales.' : 'Strategic positioning in local searches.',
    url: 'https://www.youtube.com/watch?v=x_ke1nDUEiI',
    imageUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    id: 'univ-cyber-2026', 
    name: 'University Course in Cybersecurity (130h)', 
    issuer: 'UNDEF (AR) / Cisco / UAZ (MX) / Univ. Mayor (CL) / INCIBE (GT) / UCACUE (EC)', 
    year: '2026', 
    category: 'cyber' 
  },
  { id: 'cyberops', name: 'CyberOps Associate', issuer: 'Cisco Networking Academy', year: '2025', category: 'cyber' },
  { id: 'cyber-fund', name: 'Cybersecurity Fundamentals', issuer: 'Cisco', year: '2025', category: 'cyber' },
  { id: 'cyber-tech', name: 'Cybersecurity Technician', issuer: 'Cybersecurity Academy', year: '2025', category: 'cyber' },
  { id: 'kali', name: 'Kali Linux 101 Online', issuer: 'Kali Linux', year: '2025', category: 'cyber' },
  { id: 'bun-react', name: 'App Creation with Bun and React', issuer: 'DonWeb', year: '2025', category: 'dev' },
  { id: 'net-ess', name: 'Networking Essentials', issuer: 'Cisco', year: '2025', category: 'cyber' },
  { id: 'google-it', name: 'IT Support Professional Certificate', issuer: 'Google', year: '2024', category: 'dev' },
  { id: 'fullstack-sm', name: 'Full-Stack Web Development', issuer: 'Silicon Misiones', year: '2023', category: 'dev' },
  { id: 'hubspot-crm', name: 'Introduction to CRM with HubSpot', issuer: 'Coursera', year: '2025', category: 'business' },
  { id: 'google-ai-mkt', name: 'AI in Marketing', issuer: 'Santander', year: '2025', category: 'business' },
  { id: 'mkt-pub', name: 'Higher Technician in Marketing and Advertising', issuer: 'INCADE', year: '2016', category: 'business' }
];

export const SKILLS = {
  frontend: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'JavaScript (ES6+)'],
  backend: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MySQL', 'REST APIs'],
  cyber: ['Kali Linux', 'Arch Linux', 'Ubuntu/Debian', 'CyberOps', 'Audits', 'Hardening', 'DFIR'],
  tools: ['Docker', 'Gemini CLI', 'Qwen CLI', 'VS Code', 'Git/GitHub', 'VirtualBox', 'Linux (Debian/Ubuntu)']
};
