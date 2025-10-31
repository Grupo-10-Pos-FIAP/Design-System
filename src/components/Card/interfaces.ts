import { type HTMLAttributes, type ReactNode } from 'react';

export interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: 'elevated' | 'outlined' | 'flat';
  children?: ReactNode;
  className?: string;
  closable?: boolean;
  onClose?: () => void;
}
