import { InputHTMLAttributes } from "react";
import { IconName } from "../Icon/interfaces";

export type InputVariant = 'default' | 'filled' | 'outlined';
export type InputSize = 'small' | 'medium' | 'large';
export type InputStatus = 'default' | 'success' | 'warning' | 'error';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  status?: InputStatus;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  startIcon?: IconName;
  endIcon?: IconName;
}