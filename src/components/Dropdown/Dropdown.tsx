import { DropdownProps } from "@components/Dropdown/interfaces";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./Dropdown.scss";


export const Dropdown = ({ trigger, items, className }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={`dropdown-menu ${className || ""}`} sideOffset={5}>
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className={`dropdown-item ${item.disabled ? "disabled" : ""}`}
              onClick={item.disabled ? undefined : item.onClick}
              disabled={item.disabled}
            >
              {item.icon && <span className="dropdown-icon">{item.icon}</span>}
              <span className="dropdown-label">{item.label}</span>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="dropdown-arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
