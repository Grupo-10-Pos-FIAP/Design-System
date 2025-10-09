import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { ButtonProps } from "./interface"
import "./Button.scss"

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