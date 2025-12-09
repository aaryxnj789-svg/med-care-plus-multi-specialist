import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}