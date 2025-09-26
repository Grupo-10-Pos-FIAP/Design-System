import { icons } from 'lucide-react';
import { ComponentProps } from 'react';

type LucideIcons = keyof typeof icons;
type IconKeys = LucideIcons;

interface IconProps extends ComponentProps<'svg'> {
  /**
   * Os estilos prefixados de ícone.
   */
  name: IconKeys;
  /**
   * O token de cor do ícone.
   */
  color?: 'base' | 'primary' | 'secondary';
  /**
   * O tamanho do ícone.
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  /**
   * Desabilita o ícone.
   */
  disabled?: boolean;
}

export type { IconProps, LucideIcons, IconKeys };