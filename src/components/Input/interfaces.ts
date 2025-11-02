import { InputHTMLAttributes } from "react";
import { IconKeys } from "../Icon/interfaces";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'filled' | 'outlined';
  status?: 'default' | 'success' | 'warning' | 'error';
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  startIcon?: IconKeys;
  endIcon?: IconKeys;
}