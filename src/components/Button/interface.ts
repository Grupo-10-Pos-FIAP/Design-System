import { ButtonHTMLAttributes } from "react"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}