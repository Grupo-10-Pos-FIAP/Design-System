import React from "react";
import "./styles.scss";

import { type ReactNode } from "react";

export interface StorybookTestPreviewProps {
  children: ReactNode;
}

export const StorybookTestPreview: React.FC<StorybookTestPreviewProps> = ({
  children,
}) => {

  const previewClasses = [
    "preview-container",
  ].join(" ");

  return (
    <div className={previewClasses}>
      <div className="preview-header">
        <button
          style={{
            border: "none",
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
        >
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6899 17.92V5.91999C13.2812 5.91999 14.8073 6.55213 15.9325 7.67734C17.0577 8.80256 17.6899 10.3287 17.6899 11.92C17.6899 13.5113 17.0577 15.0374 15.9325 16.1626C14.8073 17.2878 13.2812 17.92 11.6899 17.92ZM19.6899 15.23L22.9999 11.92L19.6899 8.60998V3.91999H14.9999L11.6899 0.609985L8.37988 3.91999H3.68988V8.60998L0.379883 11.92L3.68988 15.23V19.92H8.37988L11.6899 23.23L14.9999 19.92H19.6899V15.23Z"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
};
