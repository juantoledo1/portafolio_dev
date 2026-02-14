import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  logro?: string;
  url: string;
  imageUrl: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: 'cyber' | 'dev' | 'business';
}

export interface TerminalCommand {
  command: string;
  description: string;
  // Use React.ReactNode to resolve the 'Cannot find namespace JSX' error and provide a standard type for renderable content
  action: () => React.ReactNode;
}