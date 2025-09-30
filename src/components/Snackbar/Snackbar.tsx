import React, { useState } from "react";
import { X, CircleCheck, TriangleAlert, Info, XOctagon } from "lucide-react";
import "./Snackbar.scss";


export interface SnackbarProps {
  message: string;
  variant?: "default" |"success" | "error" | "warning" | "info";
  closable?: boolean;
}

const icons = {
  default: null,
  info: <Info />,
  success: <CircleCheck />,
  error: <XOctagon />,
  warning: <TriangleAlert color="black"/>
}

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  variant = "success",
  closable = false,
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`snackbar snackbar--${variant}`}>
      <span className="icon__snackbar">{icons[variant]}</span>
      <span className={`text__snackbar text__snackbar--${variant}`}>{message}</span>
      {closable && (
        <button
          className={`snackbar__close snackbar__close--${variant}`}
          onClick={() => setVisible(false)}
        >
          <X size={18}/>
        </button>
      )}
    </div>
  );
};
