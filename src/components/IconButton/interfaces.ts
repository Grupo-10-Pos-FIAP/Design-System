import { IconName } from '@components/Icon/interfaces';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'alert' | 'success';
  size?: 'small' | 'medium' | 'large';
  'aria-label': string;
  className?: string;
}
