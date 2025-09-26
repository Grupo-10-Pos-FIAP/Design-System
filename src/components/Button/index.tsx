import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import './styles.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  size?: string;
  variant?: 'primary' | 'secondary';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const Button = ({
  label,
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...rest
}: ButtonProps) => {
  const buttonClasses = ['button', `button--${variant}`, className, disabled ? 'button--disabled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" disabled={disabled} className={buttonClasses} {...rest}>
      {leftIcon}
      {label || children}
      {rightIcon}
    </button>
  );
};
