import { type HTMLAttributes, type ReactNode, useState } from 'react';
import { X } from 'lucide-react';
import './Card.scss';

export interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: 'elevated' | 'outlined' | 'flat';
  children?: ReactNode;
  className?: string;
  closable?: boolean;
  onClose?: () => void;
}

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
              <X size={18} />
            </button>
          )}
        </div>
      )}

      <div className="card__content card__content--dashed">{children}</div>
    </div>
  );
};

Card.Section = CardSection;
