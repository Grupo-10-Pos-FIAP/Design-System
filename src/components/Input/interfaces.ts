import { InputHTMLAttributes } from "react";
import { IconName } from "../Icon/interfaces";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  status?: 'default' | 'success' | 'warning' | 'error';
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  startIcon?: IconName;
  endIcon?: IconName;
}