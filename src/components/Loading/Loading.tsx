import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { LoadingProps } from './interfaces';
import './Loading.scss';

const Loading: React.FC<LoadingProps> = ({
  text,
  overlay = false,
  fullScreen = false,
  className = '',
  size = 'medium',
  color = 'primary',
  variant = 'circle',
  ariaLabel,
  ...restSpinnerProps
}) => {
  const loadingClasses = [
    "loading",
    overlay && "loading--overlay",
    fullScreen && "loading--full-screen",
    className
  ]
    .filter(Boolean)
    .join(' ');

  const loadingContent = (
    <div className={loadingClasses}>
      <div className="loading--content">
        <Spinner 
          size={size}
          color={color}
          variant={variant}
          ariaLabel={ariaLabel}
          {...restSpinnerProps}
        />
        {text && <span className="loading--text">{text}</span>}
      </div>
    </div>
  );

  return loadingContent;
};

Loading.displayName = 'Loading';

export { Loading };
export type { LoadingProps } from './interfaces';