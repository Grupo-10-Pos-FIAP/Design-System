import { ReactNode } from 'react';

export type AlignOptions = 'start' | 'center' | 'end';
export type DialogPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';
export type DialogSize = 'extra-small' | 'medium' | 'large' | 'extra-large' | 'full';
export type ContentAlign = AlignOptions;

export interface SectionProps {
  children: ReactNode;
  className?: string;
  align?: AlignOptions;
}

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  position?: DialogPosition;
  size?: DialogSize;
  contentAlign?: ContentAlign;
  /* novos: */
  headerAlign?: AlignOptions;
  bodyAlign?: AlignOptions;
  footerAlign?: AlignOptions;
  overlay?: boolean;
  overlayOpacity?: number;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  title?: string;
  description?: string;
  width?: string | number;
  maxWidth?: string | number;
  fullScreenBreakpoint?: number;
}

export interface DialogSectionProps {
  children: ReactNode;
  className?: string;
}
