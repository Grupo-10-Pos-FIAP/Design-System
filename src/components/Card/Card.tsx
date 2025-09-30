import { useState } from 'react';
import { Icon } from '@components/Icon/Icon';
import './Card.scss';

import type { CardProps, CardSectionProps } from './interface';

export const CardSection = ({ children, className = '' }: CardSectionProps) => {
  const sectionClasses = ['card__section', className].filter(Boolean).join(' ');

  return <div className={sectionClasses}>{children}</div>;
};

export const Card = ({
  title,
  variant = 'elevated',
  children,
  className = '',
  closable = false,
  onClose,
  ...rest
}: CardProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const cardClasses = ['card', `card--${variant}`, className].filter(Boolean).join(' ');

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 200);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={cardClasses} {...rest}>
      {(title || closable) && (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {closable && (
            <button className="card__close-button" onClick={handleClose} aria-label="Fechar card" type="button">
              <Icon name="X" color="black" />
            </button>
          )}
        </div>
      )}

      <div className="card__content card__content--dashed">{children}</div>
    </div>
  );
};

Card.Section = CardSection;
