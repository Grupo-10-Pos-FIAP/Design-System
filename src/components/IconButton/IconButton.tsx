import { forwardRef } from 'react';
import { IconButtonProps } from './interface';
import './IconButton.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon: Icon,
      variant = 'default',
      size = 'md',
      loading = false,
      className = '',
      disabled,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const classes = ['icon-btn', `icon-btn--${variant}`, `icon-btn--${size}`, loading && 'icon-btn--loading', className]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        type="button"
        {...props}>
        {Icon && <Icon className="icon-btn__icon" aria-hidden="true" />}

        {loading && (
          <>
            {/* <span className="sr-only">Loading...</span> Optionally include screen reader text for loading state */}
            <div className="icon-btn__spinner" aria-hidden="true" />
          </>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
