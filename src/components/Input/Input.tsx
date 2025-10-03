import { forwardRef } from 'react';
import { Icon } from '../Icon/Icon';
import './Input.scss';
import { InputProps } from './interfaces';
import { joinClassNames } from '@utils/joinClassNames';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'medium',
      status = 'default',
      label,
      helperText,
      fullWidth = false,
      startIcon,
      endIcon,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="input-wrapper">
        {label && (
          <label className="input-label" htmlFor={props.id}>
            {label}
          </label>
        )}

        <div className="input-container">
          {startIcon && (
            <span className="input-icon input-icon--start">
              <Icon name={startIcon} size="small" disabled={disabled} />
            </span>
          )}

          <input
            ref={ref}
            className={joinClassNames([
              'input',
              `input--${variant}`,
              `input--${size}`,
              `input--${status}`,
              fullWidth && 'input--full-width',
              disabled && 'input--disabled',
              startIcon && 'input--has-start-icon',
              endIcon && 'input--has-end-icon',
              className,
            ])}
            disabled={disabled}
            aria-invalid={status === 'error'}
            aria-describedby={helperText ? `${props.id}-helper` : undefined}
            {...props}
          />

          {endIcon && (
            <span className="input-icon input-icon--end">
              <Icon name={endIcon} size="small" disabled={disabled} />
            </span>
          )}
        </div>

        {helperText && (
          <span id={`${props.id}-helper`} className={`input-helper-text input-helper-text--${status}`}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
