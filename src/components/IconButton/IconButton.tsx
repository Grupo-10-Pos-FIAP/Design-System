import { forwardRef } from 'react';
import { IconButtonProps } from './interface';
import './IconButton.scss';
import { Icon } from '../Icon/Icon';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { icon, variant = 'default', size = 'md', className = '', disabled = false, 'aria-label': ariaLabel, ...props },
    ref
  ) => {
    const classes = ['icon-btn', `icon-btn--${variant}`, `icon-btn--${size}`, className].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classes} disabled={disabled} aria-label={ariaLabel} type="button" {...props}>
        {icon && <Icon name={icon} className="icon-btn__icon" aria-hidden="true" />}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
