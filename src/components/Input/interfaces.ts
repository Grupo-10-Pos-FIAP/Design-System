import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { IconKeys } from "../Icon/interfaces";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'outlined' | 'filled' | 'transparent';
  status?: 'neutral' | 'success' | 'warning' | 'error';
  label?: string;
  helperText?: string;
  placeholder?: string;
  leadingIcon?: IconKeys;
  trailingIcon?: IconKeys;
  width?: number | string;
  type?: HTMLInputTypeAttribute;
  ariaLabel?: string;
}