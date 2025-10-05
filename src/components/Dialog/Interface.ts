
import { ReactNode } from 'react';

export interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  options: string[];
  onSelect: (option: string) => void;
  children?: ReactNode;
}