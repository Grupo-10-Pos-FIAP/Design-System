import { IconKeys } from '@components/Icon/interfaces';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconKeys;
  variant?: 'primary' | 'secondary' | 'outlined' | 'transparent' ;
  size?: 'small' | 'medium' | 'large';
}
