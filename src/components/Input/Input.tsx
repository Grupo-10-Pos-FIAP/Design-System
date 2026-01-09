// Input.tsx
import { forwardRef, useRef, useImperativeHandle } from 'react';
import { Icon } from '../Icon/Icon';
import './Input.scss';
import { InputProps } from './interfaces';

type ExtendedInputProps = InputProps & {
  trailingIconOnClick?: () => void;
};
import { joinClassNames } from '@utils/joinClassNames';
import { IconButton } from '../IconButton/IconButton';

const Input = forwardRef<HTMLInputElement, ExtendedInputProps>(
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
      trailingIconOnClick,
      disabled = false,
      className = '',
      style,
      placeholder,
      ariaLabel,
      colorMode = 'default',
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

    // Classes baseadas no colorMode
    const containerClasses = joinClassNames(['input-wrapper', `input-wrapper--${colorMode}`]);

    const labelClasses = joinClassNames([
      'input-label',
      `input-label--${colorMode}`,
      disabled && 'input-label--disabled',
    ]);

    const inputClasses = joinClassNames([
      'input',
      `input--${variant}`,
      `input--${status}`,
      `input--${colorMode}`,
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
        <div className={containerClasses} style={containerStyle}>
          <label className={joinClassNames([labelClasses, 'input-label--radio-checkbox'])}>
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
            <span id={helperTextId} className={`input-helper-text input-helper-text--${status}`}>
              {helperText}
            </span>
          )}
        </div>
      );
    }

    /* Para outros tipos de input (text, date, etc.) */
    return (
      <div className={containerClasses} style={containerStyle}>
        {label && (
          <label className={labelClasses} htmlFor={props.id}>
            {label}
            {props.required && <span className="input-required">*</span>}
          </label>
        )}

        <div className={joinClassNames(['input-container', isDateType && 'input--date', isTimeType && 'input--time'])}>
          {leadingIcon && (
            <Icon
              name={leadingIcon}
              size="small"
              disabled={disabled}
              className={`input-icon input-icon--leading input-icon--${colorMode}`}
            />
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
                `input-icon--${colorMode}`,
                'input-icon--trailing',
                'picker-icon',
                disabled && 'picker-icon--disabled',
              ])}
              disabled={disabled}
              onClick={handlePickerClick}
            />
          )}

          {trailingIcon &&
            (trailingIconOnClick ? (
              <button
                type="button"
                className={`input-icon-button input-icon input-icon--trailing input-icon--${colorMode}`}
                disabled={disabled}
                onClick={trailingIconOnClick}
                tabIndex={disabled ? -1 : 0}
                aria-label={typeof trailingIcon === 'string' ? trailingIcon : 'icon'}>
                <Icon name={trailingIcon} size="small" disabled={disabled} className={`input-icon--${colorMode}`} />
              </button>
            ) : (
              <Icon
                name={trailingIcon}
                className={`input-icon input-icon--trailing input-icon--${colorMode}`}
                size="small"
                disabled={disabled}
              />
            ))}
        </div>

        {helperText && (
          <span
            id={helperTextId}
            className={`input-helper-text input-helper-text--${status} input-helper-text--${colorMode}`}>
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
