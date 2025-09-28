import { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'size'> {
  /**
   * Name of the icon from lucide-react library
   */
  name: string;
  
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
