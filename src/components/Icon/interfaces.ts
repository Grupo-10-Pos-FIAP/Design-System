import { SVGProps } from 'react';
import { icons } from 'lucide-react';

type LucideIcons = keyof typeof icons;

export type IconName = LucideIcons;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'size'> {
  /**
   * Name of the icon from lucide-react library
   */
  name: IconName;

  /**
   * Color variant of the icon
   * @default 'base'
   */
  color?: 'base' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'white' | 'black';
  
  /**
   * Size variant of the icon
   * @default 'medium'
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  
  /**
   * Whether the icon is disabled
   * @default false
   */
  disabled?: boolean;
}
