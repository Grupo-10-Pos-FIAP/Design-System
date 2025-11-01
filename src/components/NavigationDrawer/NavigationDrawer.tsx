import { useState, useEffect, FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import './NavigationDrawer.scss';
import type { NavigationDrawerProps, NavDrawerHeaderProps, NavDrawerFooterProps } from './interfaces';

export const NavigationDrawerHeader: FC<NavDrawerHeaderProps> = ({ children, className = '' }) => {
  const headerClasses = ['navdrawer__header', className].filter(Boolean).join(' ');
  return <div className={headerClasses}>{children}</div>;
};

export const NavigationDrawerFooter: FC<NavDrawerFooterProps> = ({ children, className = '' }) => {
  const footerClasses = ['navdrawer__footer', className].filter(Boolean).join(' ');
  return <div className={footerClasses}>{children}</div>;
};

const NavigationDrawer: FC<NavigationDrawerProps> & {
  Header: typeof NavigationDrawerHeader;
  Footer: typeof NavigationDrawerFooter;
} = ({
  open = false,
  onClose,
  items,
  position = 'left',
  size = 'medium',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
  header,
  footer,
}) => {
  const [isVisible, setIsVisible] = useState(open);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={`navdrawer-overlay ${overlayClassName} ${isVisible ? 'navdrawer-overlay--visible' : ''}`}
        onClick={closeOnOverlayClick ? handleClose : undefined}
        role="presentation"
        aria-hidden="true"
      />

      <aside
        className={`navdrawer navdrawer--${position} navdrawer--${size} ${className} ${
          isVisible ? 'navdrawer--open' : ''
        }`}
        role="navigation"
        aria-label="Menu de navegação"
        aria-hidden={!isVisible}>
        {showCloseButton && (
          <button className="navdrawer__close-btn" onClick={handleClose} aria-label="Fechar menu" type="button">
            <Icon name="X" size="medium" />
          </button>
        )}

        {header && <div className="navdrawer__header">{header}</div>}

        <nav className="navdrawer__content">
          <ul className="navdrawer__list" role="list">
            {items.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openSubmenus[item.label] || false;

              const handleItemClick = () => {
                if (hasChildren) {
                  toggleSubmenu(item.label);
                }
                item.onClick?.();
                if (!hasChildren) {
                  handleClose();
                }
              };

              const ButtonOrLink = item.href ? 'a' : 'button';

              return (
                <li
                  key={`${item.label}-${index}`}
                  className={`navdrawer__item ${isOpen ? 'navdrawer__item--open' : ''}`}
                  role="listitem">
                  <ButtonOrLink
                    className={`navdrawer__button 
                    ${item.active ? 'navdrawer__button--active' : ''} 
                    ${item.disabled ? 'navdrawer__button--disabled' : ''}`}
                    {...(item.href
                      ? { href: item.href }
                      : {
                          onClick: item.disabled ? undefined : handleItemClick,
                        })}
                    type={item.href ? undefined : 'button'}
                    aria-label={item.label}
                    aria-current={item.active ? 'page' : undefined}
                    disabled={item.disabled}
                    aria-disabled={item.disabled}>
                    {item.icon && (
                      <span className="navdrawer__icon" aria-hidden="true">
                        <Icon name={item.icon} size="small" />
                      </span>
                    )}
                    <span className="navdrawer__label">{item.label}</span>
                    {hasChildren && (
                      <span
                        className={`navdrawer__chevron ${isOpen ? 'navdrawer__chevron--open' : ''}`}
                        aria-hidden="true">
                        <Icon name="ChevronDown" size="extra-small" />
                      </span>
                    )}
                  </ButtonOrLink>

                  {hasChildren && isOpen && (
                    <ul className="navdrawer__submenu" role="list">
                      {item.children?.map((sub, subIndex) => {
                        const SubButtonOrLink = sub.href ? 'a' : 'button';

                        return (
                          <li key={`${sub.label}-${subIndex}`} className="navdrawer__subitem" role="listitem">
                            <SubButtonOrLink
                              className={`navdrawer__subbutton 
                              ${sub.active ? 'navdrawer__subbutton--active' : ''} 
                              ${sub.disabled ? 'navdrawer__subbutton--disabled' : ''}`}
                              {...(sub.href
                                ? { href: sub.href }
                                : {
                                    onClick: sub.disabled ? undefined : sub.onClick,
                                  })}
                              type={sub.href ? undefined : 'button'}
                              aria-label={sub.label}
                              aria-current={sub.active ? 'page' : undefined}
                              disabled={sub.disabled}
                              aria-disabled={sub.disabled}>
                              {sub.icon && (
                                <span className="navdrawer__icon" aria-hidden="true">
                                  <Icon name={sub.icon} size="extra-small" />
                                </span>
                              )}
                              <span className="navdrawer__label">{sub.label}</span>
                            </SubButtonOrLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        {footer && <div className="navdrawer__footer">{footer}</div>}
      </aside>
    </>
  );
};

NavigationDrawer.Header = NavigationDrawerHeader;
NavigationDrawer.Footer = NavigationDrawerFooter;
NavigationDrawer.displayName = 'NavigationDrawer';

export { NavigationDrawer };
export type { NavigationDrawerProps } from './interfaces';