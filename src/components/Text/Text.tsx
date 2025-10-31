import React from 'react';
import { TextProps } from './interfaces';
import './Text.scss';

const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'base',
  weight,
  align = 'left',
  as = 'p',
  letterSpacing,
  className = '',
  truncate = false,
  maxLines,
  children,
  style,
  ...props
}) => {
  const Component = as;

  const classes = [
    'text-component',
    `text-${variant}`,
    color && !color.startsWith('#') && !color.startsWith('rgb') ? `color-${color}` : '',
    weight ? `weight-${weight}` : '',
    `align-${align}`,
    letterSpacing ? `letter-spacing-${letterSpacing}` : '',
    truncate ? 'truncate' : '',
    maxLines ? `max-lines-${maxLines}` : '',
    className
  ].filter(Boolean).join(' ');

  const inlineStyle: React.CSSProperties = {
    ...(color && (color.startsWith('#') || color.startsWith('rgb')) ? { color } : {}),
    ...style
  };

  return (
    <Component 
      className={classes}
      style={inlineStyle}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.displayName = 'Text';

export { Text };
export type { TextProps };