import { ReactNode } from 'react';
import { IconKeys } from '@components/Icon/interfaces';

export type NavDrawerPosition = 'left' | 'right';
export type NavDrawerSize = 'small' | 'medium' | 'large' | 'full';

export interface NavDrawerItem {
  label: string;
  icon?: IconKeys;
  onClick?: () => void;
  href?: string;
  children?: NavDrawerItem[];
  active?: boolean;
  disabled?: boolean;
}

export interface NavigationDrawerProps {
  open?: boolean;
  onClose?: () => void;
  items: NavDrawerItem[];
  position?: NavDrawerPosition;
  size?: NavDrawerSize;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  overlayClassName?: string;
}

export interface NavDrawerHeaderProps {
  children?: ReactNode;
  className?: string;
}

export interface NavDrawerFooterProps {
  children?: ReactNode;
  className?: string;
}
