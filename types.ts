import { LucideIcon } from 'lucide-react';

export interface ToolItem {
  name: string;
  isNew?: boolean;
}

export interface ToolCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  tools: ToolItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}