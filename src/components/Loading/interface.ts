import { SpinnerProps } from '../Spinner/interface';

export interface LoadingProps {
  text?: string;
  overlay?: boolean;
  fullScreen?: boolean;
  className?: string;
  spinnerProps?: SpinnerProps;
}