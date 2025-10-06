import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { LoadingProps } from './interface';
import './Loading.scss';

export const Loading: React.FC<LoadingProps> = ({
  text,
  overlay = false,
  fullScreen = false,
  className = '',
  spinnerProps
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
        <Spinner {...spinnerProps} />
        {text && <span className="loading--text">{text}</span>}
      </div>
    </div>
  );

  return loadingContent;
};