import { Slot } from "@radix-ui/react-slot"
import "./Button.scss"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "default", size = "md", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={`btn btn--${variant} btn--${size} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"