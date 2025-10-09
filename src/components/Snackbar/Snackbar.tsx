import * as Toast from "@radix-ui/react-toast"
import { SnackbarProps } from "./interface"
import "./Snackbar.scss"
import { CheckCircle, AlertTriangle, Info, XCircle, X } from 'lucide-react'; 

const variantIconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

export const Snackbar = ({
  message,
  variant = "info",
  open,
  onOpenChange,
  duration = 4000,
}: SnackbarProps) => {
  if (open === undefined || onOpenChange === undefined) {
    console.warn("Snackbar: 'open' and 'onOpenChange' must be provided for external control.")
  }

  const Icon = variantIconMap[variant];

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className={`snackbar snackbar--${variant}`}
        open={open}
        onOpenChange={onOpenChange}
        duration={duration}
      >
        <div className="snackbar__content"> 
          <Icon className="snackbar__icon" size={20} />
          <Toast.Description className="snackbar__message">
            {message}
          </Toast.Description>
        </div>
        <Toast.Close className="snackbar__close" aria-label="Close"><X /></Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="snackbar__viewport" />
    </Toast.Provider>
  )
}
