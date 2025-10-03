// src/components/Dialog/Dialog.tsx
import React from 'react';
import { DialogProps } from './Interface';
import './Dialog.scss';

export const Dialog: React.FC<DialogProps> = ({
  title,
  isOpen,
  onClose,
  options,
  onSelect,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog-box">
        <header className="dialog-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </header>

        <div className="dialog-content">{children}</div>

        <div className="dialog-options">
          {options.map((opt) => (
            <button key={opt} className="dialog-option" onClick={() => onSelect(opt)}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
