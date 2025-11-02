import { forwardRef } from 'react';
import { ButtonProps } from './interfaces';
import './Button.scss';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', disabled = false, width = '179px', ...props }, ref) => {
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

export { Button };
export type { ButtonProps } from './interfaces';