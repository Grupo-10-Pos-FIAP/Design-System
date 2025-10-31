import { SpinnerProps } from '../Spinner/interfaces';

export interface LoadingProps {
  text?: string;
  overlay?: boolean;
  fullScreen?: boolean;
  className?: string;
  spinnerProps?: SpinnerProps;
}