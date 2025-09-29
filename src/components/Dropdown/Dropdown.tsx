import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  options: string[];
  label?: string;
  onSelect?: (value: string) => void;
  size?: "small" | "medium" | "large"; // nova prop para tamanho
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  onSelect,
  size = "medium", // padrão
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown ${size}`} ref={dropdownRef}>
      {label && <span className="dropdown-label">{label}</span>}
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected || "Opções..."} 
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </div>
      <ul className={`dropdown-list ${isOpen ? "open" : ""}`}>
        {options.map((option, idx) => (
          <li
            key={idx}
            className="dropdown-item"
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
