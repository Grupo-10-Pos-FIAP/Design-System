import { forwardRef } from 'react';
import { ButtonProps } from './interface';
import './Button.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', disabled = false, ...props }, ref) => {
    return <button ref={ref} className={`btn btn--${variant} `} disabled={disabled} {...props} />;
  }
);

Button.displayName = 'Button';
