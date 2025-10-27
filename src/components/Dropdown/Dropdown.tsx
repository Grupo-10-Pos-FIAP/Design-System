import { DropdownMenu } from 'radix-ui';
import { Icon } from '@components/Icon/Icon';
import { useState } from 'react';
import './Dropdown.scss';
import { DropdownItem, DropdownProps } from './interfaces';

export const Dropdown = ({ 
  trigger, 
  items,
  placeholder = "Selecione uma opção",
  onValueChange
}: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item);
    if (item.onClick) {
      item.onClick();
    }
    if (item.value && onValueChange) {
      onValueChange(item.value);
    }
  };

  const defaultTrigger = (
    <button className={`dropdown-default-trigger ${selectedItem ? 'has-selection' : ''}`}>
      <span className={`dropdown-trigger-text ${selectedItem ? 'selected' : ''}`}>
        {selectedItem ? selectedItem.label : placeholder}
      </span>
      <Icon name="ChevronDown" size="small" className="dropdown-chevron" />
    </button>
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger || defaultTrigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content 
        className="dropdown-menu" 
        sideOffset={4}
        align="start"
      >       
        {items.map((item, index) => {
          if ('label' in item && item.label === 'divider') {
            return (
              <DropdownMenu.Separator 
                key={index} 
                className="dropdown-separator" 
              />
            );
          }

          const dropdownItem = item as DropdownItem;
          const isSelected = selectedItem?.value === dropdownItem.value;
          
          return (
            <DropdownMenu.Item
              key={index}
              className={`dropdown-item ${dropdownItem.disabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={dropdownItem.disabled ? undefined : () => handleItemClick(dropdownItem)}
              disabled={dropdownItem.disabled}
            >
              <div className="dropdown-item-content">
                {dropdownItem.icon && <span className="dropdown-icon">{dropdownItem.icon}</span>}
                <span className="dropdown-label">{dropdownItem.label}</span>
              </div>
            </DropdownMenu.Item>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};