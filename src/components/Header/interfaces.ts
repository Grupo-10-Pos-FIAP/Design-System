export interface HeaderProps {
  avatar?: React.ReactNode;
  logo: string | React.ReactNode;
  onLogoClick?: () => void;
  onAvatarClick?: () => void;
  className?: string;
}