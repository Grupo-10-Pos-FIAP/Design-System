import { LucideIcon } from 'lucide-react';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: LucideIcon;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'alert' | 'success';
  size?: 'sm' | 'md' | 'lg';
  'aria-label': string;
  className?: string;
}
