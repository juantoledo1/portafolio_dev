
import React from 'react';
import { Project, Certification } from './types';

export const getProjects = (lang: 'en' | 'es'): Project[] => [
  {
    id: 'invitaciones-corp',
    title: lang === 'es' ? 'Invitaciones Web Corporativas' : 'Corporate Web Invitations',
    description: lang === 'es' 
      ? 'Plataforma de invitaciones digitales interactivas, seguras y de alto impacto visual para eventos empresariales.' 
      : 'Interactive, secure, and visually high-impact digital invitation platform for corporate events.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    logro: lang === 'es' ? 'Aumentó la tasa de asistencia en un 45%.' : 'Increased attendance rate by 45%.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'betelgeuse',
    title: 'Betelgeuse',
    description: lang === 'es'
      ? 'Sistema de Gestión Comercial Full-Stack para gestión de clientes y turnos en tiempo real.'
      : 'Full-Stack Commercial Management System for real-time customer and appointment management.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'MySQL'],
    logro: lang === 'es' ? 'Optimizó la retención de clientes en un 70%.' : 'Optimized customer retention by 70%.',
    url: 'https://betelgeusee.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tekohatech',
    title: 'Tekohatech',
    description: lang === 'es'
      ? 'Landing Pages B2B enfocadas en SEO y rendimiento para servicios de desarrollo.'
      : 'B2B Landing Pages focused on SEO and performance for development services.',
    tech: ['Astro', 'Tailwind CSS'],
    logro: lang === 'es' ? 'Optimización de performance y ventas.' : 'Performance and sales optimization.',
    url: 'https://tekohatech.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paliachi',
    title: 'Paliachi',
    description: lang === 'es'
      ? 'Rediseño UX/UI y optimización de plataforma web para heladerías reconocidas.'
      : 'UX/UI Redesign and web platform optimization for renowned ice cream shops.',
    tech: ['WordPress', 'UX/UI Research', 'SEO Local'],
    url: 'https://paliachi.com',
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
