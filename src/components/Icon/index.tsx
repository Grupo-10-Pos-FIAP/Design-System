import { icons } from 'lucide-react';
import { LegacyRef, forwardRef, useMemo } from 'react';
import { IconProps } from './interfaces';

const Icon = forwardRef<LegacyRef<SVGSVGElement>, IconProps>(
  ({ name, color = 'base', size = 'medium', disabled, ...props }, ref) => {

    const SelectedIcon = useMemo(
      () => icons[name as keyof typeof icons],
      [name],
    );

    const colorMap = {
      base: 'var(--color-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)'
    };

    const disabledColorMap = {
      base: 'var(--color-base-disabled)',
      primary: 'var(--color-primary-disabled)',
      secondary: 'var(--color-secondary-disabled)'
    };

    const sizeMap = {
      'extra-small': 16,
      'small': 20,
      'medium': 24,
      'large': 32,
      'extra-large': 40
    };

    const iconColor = disabled ? disabledColorMap[color] : colorMap[color];
    const iconSize = sizeMap[size];

    if (!SelectedIcon) {
      console.warn(`Icon "${name}" not found in either lucide-react`);
      return null;
    }

    return (
      <SelectedIcon
        aria-disabled={disabled}
        ref={ref as LegacyRef<SVGSVGElement>}
        color={iconColor}
        size={iconSize}
        {...props}
      />
    );
  },
);

export { Icon };
export type { IconProps } from './interfaces';
