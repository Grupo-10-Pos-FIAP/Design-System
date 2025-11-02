import { useState, useEffect, FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { ListItem } from '@components/ListItem/ListItem';
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

              return (
                <li
                  key={`${item.label}-${index}`}
                  className={`navdrawer__item ${isOpen ? 'navdrawer__item--open' : ''}`}
                  role="listitem">
                  <ListItem
                    label={item.label}
                    icon={item.icon}
                    isActive={item.active}
                    onClick={handleItemClick}
                  />

                  {hasChildren && isOpen && (
                    <ul className="navdrawer__submenu" role="list">
                      {item.children?.map((sub, subIndex) => (
                        <li key={`${sub.label}-${subIndex}`} className="navdrawer__subitem" role="listitem">
                          <ListItem
                            label={sub.label}
                            icon={sub.icon}
                            isActive={sub.active}
                            onClick={() => sub.onClick}
                          />
                        </li>
                      ))}
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
