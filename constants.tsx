
import React from 'react';
import { Project, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'invitaciones-corp',
    title: 'Invitaciones Web Corporativas',
    description: 'Plataforma de invitaciones digitales interactivas, seguras y de alto impacto visual para eventos empresariales de alto nivel.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    logro: 'Aumentó la tasa de confirmación de asistencia en un 45%.',
    url: '#',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'betelgeuse',
    title: 'Betelgeuse',
    description: 'Sistema de Gestión Comercial Full-Stack para gestión de clientes y turnos en tiempo real.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'MySQL'],
    logro: 'Optimizó la retención de clientes en un 70%.',
    url: 'https://betelgeusee.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tekohatech',
    title: 'Tekohatech',
    description: 'Landing Pages B2B. Plataforma de servicios de desarrollo a medida enfocada en SEO y rendimiento.',
    tech: ['Astro', 'Tailwind CSS'],
    logro: 'Optimización de performance (SEO) y conversión de ventas.',
    url: 'https://tekohatech.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paliachi',
    title: 'Paliachi',
    description: 'Rediseño UX/UI y optimización de plataforma web para una de las heladerías más reconocidas.',
    tech: ['WordPress', 'UX/UI Research', 'SEO Local'],
    url: 'https://paliachi.com',
    imageUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    id: 'univ-cyber-2026', 
    name: 'Curso Universitario en Ciberseguridad (130h)', 
    issuer: 'UNDEF (AR) / Cisco / UAZ (MX) / Univ. Mayor (CL) / INCIBE (GT) / UCACUE (EC)', 
    year: '2026', 
    category: 'cyber' 
  },
  { id: 'cyberops', name: 'CyberOps Associate', issuer: 'Cisco Networking Academy', year: '2025', category: 'cyber' },
  { id: 'cyber-fund', name: 'Fundamentos de Ciberseguridad', issuer: 'Cisco', year: '2025', category: 'cyber' },
  { id: 'cyber-tech', name: 'Técnico en Ciberseguridad', issuer: 'Academia de Ciberseguridad', year: '2025', category: 'cyber' },
  { id: 'kali', name: 'Kali Linux 101 Online', issuer: 'Kali Linux', year: '2025', category: 'cyber' },
  { id: 'bun-react', name: 'Creación de Apps con Bun y React', issuer: 'DonWeb', year: '2025', category: 'dev' },
  { id: 'net-ess', name: 'Networking Essentials', issuer: 'Cisco', year: '2025', category: 'cyber' },
  { id: 'google-it', name: 'Fundamentos de Soporte Técnico', issuer: 'Google', year: '2024', category: 'dev' },
  { id: 'fullstack-sm', name: 'Desarrollo Web Full-Stack', issuer: 'Silicon Misiones', year: '2023', category: 'dev' },
  { id: 'hubspot-crm', name: 'Introducción al CRM con HubSpot', issuer: 'Coursera', year: '2025', category: 'business' },
  { id: 'google-ai-mkt', name: 'IA Práctica para Marketing', issuer: 'Santander', year: '2025', category: 'business' },
  { id: 'mkt-pub', name: 'Técnico Superior en Marketing y Publicidad', issuer: 'INCADE', year: '2016', category: 'business' }
];

export const SKILLS = {
  frontend: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'JavaScript (ES6+)'],
  backend: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MySQL', 'REST APIs'],
  cyber: ['Kali Linux', 'Arch Linux', 'Ubuntu/Debian', 'CyberOps', 'Auditorías', 'Hardening', 'DFIR'],
  tools: ['Docker', 'Gemini CLI', 'Qwen CLI', 'VS Code', 'Git/GitHub', 'VirtualBox', 'Linux (Debian/Ubuntu)']
};
