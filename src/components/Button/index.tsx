import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import './styles.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    leftIcon?: ReactNode;
    label: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', leftIcon, disabled = false, ...rest }) => {
    const buttonClasses = [
        'button',
        variant === 'primary' ? 'button--primary' : 'button--secondary',
        disabled ? 'button--disabled' : 'button--enable',
    ].join(' ');

    return (
        <button type="button" disabled={disabled} className={buttonClasses} {...rest}>
            {leftIcon}
            {label}
        </button>
    );
};


