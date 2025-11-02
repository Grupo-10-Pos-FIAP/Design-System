import { forwardRef, useRef, useImperativeHandle } from 'react';
import { Icon } from '../Icon/Icon';
import './Input.scss';
import { InputProps } from './interfaces';
import { joinClassNames } from '@utils/joinClassNames';
import { IconButton } from '../IconButton/IconButton';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outlined',
      status = 'neutral',
      label,
      helperText,
      width,
      type = 'text',
      leadingIcon,
      trailingIcon,
      disabled = false,
      className = '',
      style,
      placeholder,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const isDateType = ['date', 'datetime-local', 'month', 'week'].includes(type || '');
    const isTimeType = type === 'time';
    const isRadioType = type === 'radio';
    const isCheckboxType = type === 'checkbox';

    const shouldShowCalendarIcon = isDateType && !leadingIcon && !trailingIcon;
    const shouldShowClockIcon = isTimeType && !leadingIcon && !trailingIcon;

    const handlePickerClick = () => {
      inputRef.current?.showPicker?.();
      inputRef.current?.focus();
    };

    const containerStyle = {
      ...style,
      ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    };

    const inputClasses = joinClassNames([
      'input',
      `input--${variant}`,
      `input--${status}`,
      disabled && 'input--disabled',
      leadingIcon && 'input--has-leading-icon',
      trailingIcon && 'input--has-trailing-icon',
      isRadioType && 'input--radio',
      isCheckboxType && 'input--checkbox',
      className,
    ]);

    const helperTextId = helperText && props.id ? `${props.id}-helper` : undefined;

    /* Se for radio ou checkbox, invertemos a estrutura do label */
    if (isRadioType || isCheckboxType) {
      return (
        <div className="input-wrapper" style={containerStyle}>
          <label className={joinClassNames([
            "input-label",
            "input-label--radio-checkbox",
            disabled && "input-label--disabled"
          ])}>
            <input
              ref={inputRef}
              className={inputClasses}
              disabled={disabled}
              type={type}
              aria-label={ariaLabel}
              aria-invalid={status === 'error'}
              aria-describedby={helperTextId}
              {...props}
            />
            <span className="input-radio-checkbox-label">
              {label}
              {props.required && <span className="input-required">*</span>}
            </span>
          </label>

          {helperText && (
            <span 
              id={helperTextId}
              className={`input-helper-text input-helper-text--${status}`}
            >
              {helperText}
            </span>
          )}
        </div>
      );
    }

    /* Para outros tipos de input (text, date, etc.) */
    return (
      <div className="input-wrapper" style={containerStyle}>
        {label && (
          <label className="input-label" htmlFor={props.id}>
            {label}
            {props.required && <span className="input-required">*</span>}
          </label>
        )}

        <div className={joinClassNames([
          "input-container", 
          isDateType && 'input--date', 
          isTimeType && 'input--time'
        ])}>
          {leadingIcon && (
            <span className="input-icon input-icon--leading">
              <Icon 
                name={leadingIcon} 
                size="small" 
                disabled={disabled} 
              />
            </span>
          )}

          <input
            ref={inputRef}
            className={inputClasses}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            aria-label={ariaLabel}
            aria-invalid={status === 'error'}
            aria-describedby={helperTextId}
            {...props}
          />

          {shouldShowCalendarIcon && (
            <IconButton
              icon="Calendar"
              className={joinClassNames([
                'input-icon',
                'input-icon--trailing',
                'picker-icon',
                disabled && 'picker-icon--disabled',
              ])}
              disabled={disabled}
              onClick={handlePickerClick}
            />
          )}

          {shouldShowClockIcon && (
            <IconButton
              icon="Clock"
              className={joinClassNames([
                'input-icon',
                'input-icon--trailing',
                'picker-icon',
                disabled && 'picker-icon--disabled',
              ])}
              disabled={disabled}
              onClick={handlePickerClick}
            />
          )}

          {trailingIcon && (
            <span className="input-icon input-icon--trailing">
              <Icon 
                name={trailingIcon} 
                size="small" 
                disabled={disabled} 
              />
            </span>
          )}
        </div>

        {helperText && (
          <span 
            id={helperTextId}
            className={`input-helper-text input-helper-text--${status}`}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps } from './interfaces';
