import { IconKeys } from "../Icon/interfaces";

export interface DropdownItemProps {
  label: string;
  value?: string;
  icon?: IconKeys;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  items: (DropdownItemProps | { label: 'divider' })[];
  placeholder?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  width?: string | number;
  status?: 'neutral' | 'success' | 'warning' | 'error';
  helperText?: string;
}
