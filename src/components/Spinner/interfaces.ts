import React from 'react';

export type SpinnerVariant = 'default' | 'dots' | 'ring' | 'pulse';
export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerColor = 'primary' | 'secondary' | 'alert' | 'success' | 'neutral';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  color?: SpinnerColor;
  variant?: SpinnerVariant;
  ariaLabel?: string;
}
