export interface SnackbarProps {
  message: string
  variant?: "info" | "success" | "warning" | "error"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  duration?: number
}
