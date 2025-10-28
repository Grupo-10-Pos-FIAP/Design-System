import { forwardRef } from 'react';
import { ButtonProps } from './interface';
import './Button.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', disabled = false, width, ...props }, ref) => {
    const buttonStyle = width ? { width } : {};

    return (
      <button 
        ref={ref} 
        className={`btn btn--${variant}`} 
        disabled={disabled} 
        style={buttonStyle}
        {...props} 
      />
    );
  }
);

Button.displayName = 'Button';