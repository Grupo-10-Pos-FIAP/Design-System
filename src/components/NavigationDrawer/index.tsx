import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronRight } from "lucide-react";
import "./styles.scss";

export interface NavigationDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: "mobile" | "tablet" | "desktop";
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  open,
  onOpenChange,
  variant = "mobile",
}) => {
   const navItems = ["Início", "Transação", "Depósito", "Outros serviços"];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={`drawer__overlay drawer__overlay--${variant}`} />
        <Dialog.Content
          className={`drawer__content drawer__content--${variant}`}
          onInteractOutside={(event) => {
            if (variant !== "mobile") event.preventDefault();
          }}
        >
           <nav className={`drawer__nav drawer__nav--${variant}`}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className={`drawer__item drawer__item--${variant}`}
              >
                <span>{item}</span>
                {(variant === "mobile" || variant === "desktop") && (
                  <ChevronRight size={18} strokeWidth={2} />
                )}
              </a>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
