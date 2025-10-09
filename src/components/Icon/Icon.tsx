import { forwardRef, useMemo } from 'react';
import { IconProps } from './interfaces';
import { icons } from 'lucide-react';
import './Icon.scss';

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ 
    name, 
    color = 'base', 
    size = 'medium', 
    disabled = false,
    ...props 
  }, ref) => {

    const SelectedIcon = useMemo(
      () => icons[name as keyof typeof icons],
      [name],
    );

    const sizeMap = {
      'extra-small': 16,
      'small': 20,
      'medium': 24,
      'large': 32,
      'extra-large': 40
    };

    const iconSize = sizeMap[size];

    const iconClasses = [
      'icon',
      `icon--${color}`,
      `icon--${size}`,
      disabled && 'icon--disabled',
    ].filter(Boolean).join(' ');

    if (!SelectedIcon) {
      console.warn(`Icon "${name}" not found in lucide-react`);
      return null;
    }

    return (
      <SelectedIcon
        aria-disabled={disabled}
        ref={ref}
        size={iconSize}
        className={iconClasses}
        {...props}
      />
    );
  },
);

Icon.displayName = 'Icon';

export { Icon };
export type { IconProps } from './interfaces';
