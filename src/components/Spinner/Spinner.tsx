import { FC } from 'react';
import { SpinnerProps, SpinnerVariant } from './interfaces';
import './Spinner.scss';

const DefaultSpinner: FC<SpinnerProps> = ({ size, color }) => (
  <div className={`spinner spinner--default spinner--${size} spinner--${color}`} />
);

const DotsSpinner: FC<SpinnerProps> = ({ size, color }) => (
  <div className={`spinner spinner--dots spinner--${size} spinner--${color}`}>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </div>
);

const RingSpinner: FC<SpinnerProps> = ({ size, color }) => {
  const sizeMap = { sm: 35, md: 45, lg: 65 };
  const containerSize = sizeMap[size || 'md'];
  return (
    <div
      className={`spinner spinner--ring spinner--${size} spinner--${color}`}
      style={{ width: containerSize, height: containerSize }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className="ring" />
      ))}
    </div>
  );
};

const PulseSpinner: FC<SpinnerProps> = ({ size, color }) => {
  const sizeMap = { sm: 35, md: 45, lg: 65 };
  const containerSize = sizeMap[size || 'md'];
  const barHeightMap = { sm: 0.5, md: 0.7, lg: 0.8 };
  const barHeightRatio = barHeightMap[size || 'md'];

  return (
    <div
      className={`spinner spinner--pulse spinner--${size} spinner--${color}`}
      style={{ width: containerSize, height: containerSize }}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="pulse-bar" style={{ height: `${barHeightRatio * 100}%` }} />
      ))}
    </div>
  );
};

const SPINNER_VARIANTS: Record<SpinnerVariant, FC<SpinnerProps>> = {
  default: DefaultSpinner,
  dots: DotsSpinner,
  ring: RingSpinner,
  pulse: PulseSpinner,
};

const Spinner: FC<SpinnerProps> = ({
  variant = 'default',
  size = 'md',
  color = 'primary',
  ariaLabel = 'Carregando...',
  ...props
}) => {
  const VariantComponent = SPINNER_VARIANTS[variant];
  return <VariantComponent size={size} color={color} role="status" aria-label={ariaLabel} {...props} />;
};

Spinner.displayName = 'Spinner';

export { Spinner };
export type { SpinnerProps } from './interfaces';
