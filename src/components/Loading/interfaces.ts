import { SpinnerProps } from '../Spinner/interfaces';

export interface LoadingProps extends SpinnerProps {
  text?: string;
  overlay?: boolean;
  fullScreen?: boolean;
  className?: string;
}