import { SVGProps } from 'react';
import { icons } from 'lucide-react';

export type LucideIcons = keyof typeof icons;

export type FilledIcons = 'HeartFilled';

export type IconKeys = LucideIcons | FilledIcons;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'size'> {
  /**
   * Name of the icon from lucide-react library
   */
  name: IconKeys;

  /**
   * Color variant of the icon
   * @default 'base'
   */
  color?:
    | 'base'
    | 'white'
    | 'black'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'soft'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'gray100'
    | 'gray200'
    | 'gray300'
    | 'gray400'
    | 'gray500'
    | 'gray600'
    | 'gray700'
    | 'gray800'
    | 'gray900';

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
