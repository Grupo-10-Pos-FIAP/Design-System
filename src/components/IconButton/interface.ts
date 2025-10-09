import { IconName } from '@components/Icon/interfaces';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'alert' | 'success';
  size?: 'sm' | 'md' | 'lg';
  'aria-label': string;
  className?: string;
}
