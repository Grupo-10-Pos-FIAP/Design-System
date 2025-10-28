export interface DropdownItem {
  label: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  trigger?: React.ReactNode;
  items: (DropdownItem | { label: 'divider' })[];
  placeholder?: string;
  onValueChange?: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
}