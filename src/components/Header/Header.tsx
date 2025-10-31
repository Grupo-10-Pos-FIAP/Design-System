import "./Header.scss";
import { HeaderProps } from "./interfaces";

function Header({ 
  avatar, 
  logo, 
  onLogoClick, 
  onAvatarClick,
  className = "" 
}: HeaderProps) {
  const renderLogo = () => {
    if (typeof logo === "string") {
      return (
        <img 
          src={logo} 
          alt="Logo" 
          className="header__logo-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            console.warn('Logo image failed to load:', logo);
          }}
        />
      );
    }
    
    return logo;
  };

  return (
    <header className={`header ${className}`}>
      <div 
        className="header__logo"
        onClick={onLogoClick}
        role={onLogoClick ? "button" : undefined}
        tabIndex={onLogoClick ? 0 : undefined}
        onKeyDown={(e) => {
          if (onLogoClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onLogoClick();
          }
        }}
      >
        {renderLogo()}
      </div>

      {avatar && (
        <div 
          className="header__avatar"
          onClick={onAvatarClick}
          role={onAvatarClick ? "button" : undefined}
          tabIndex={onAvatarClick ? 0 : undefined}
          onKeyDown={(e) => {
            if (onAvatarClick && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onAvatarClick();
            }
          }}
        >
          {avatar}
        </div>
      )}
    </header>
  );
}

Header.displayName = 'Header';

export { Header };
export type { HeaderProps } from './interfaces';