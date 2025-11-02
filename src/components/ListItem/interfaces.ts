import { IconKeys } from '../Icon/Icon';

export interface ListItemProps {
  label: string;
  icon?: IconKeys;
  isActive?: boolean;
  onClick: () => void;
}
