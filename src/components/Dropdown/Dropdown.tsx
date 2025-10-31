import { DropdownMenu } from 'radix-ui';
import { Icon } from '@components/Icon/Icon';
import { useState } from 'react';
import './Dropdown.scss';
import { DropdownItemProps, DropdownProps } from './interfaces';

const Dropdown = ({ 
  items,
  placeholder = "Selecione uma opção",
  onValueChange,
  label,
  width = 'auto',
  status = 'default',
  helperText
}: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<DropdownItemProps | null>(null);

  const handleItemClick = (item: DropdownItemProps) => {
    setSelectedItem(item);
    if (item.onClick) {
      item.onClick();
    }
    if (item.value && onValueChange) {
      onValueChange(item.value);
    }
  };

  const trigger = (
    <button 
      className={`dropdown-default-trigger ${selectedItem ? 'has-selection' : ''} ${status !== 'default' ? `dropdown-default-trigger--${status}` : ''}`}
      style={{ width }}
    >
      <span className={`dropdown-trigger-text ${selectedItem ? 'selected' : ''}`}>
        {selectedItem ? selectedItem.label : placeholder}
      </span>
      <Icon name="ChevronDown" size="small" className="dropdown-chevron" />
    </button>
  );

  return (
    <div className="dropdown-wrapper" style={{ width }}>
      {label && (
        <label className="dropdown-label">
          {label}
        </label>
      )}
      
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          {trigger}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content 
          className="dropdown-menu" 
          sideOffset={4}
          align="start"
          style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}
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

            const dropdownItem = item as DropdownItemProps;
            const isSelected = selectedItem?.value === dropdownItem.value;
            
            return (
              <DropdownMenu.Item
                key={index}
                className={`dropdown-item ${dropdownItem.disabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={dropdownItem.disabled ? undefined : () => handleItemClick(dropdownItem)}
                disabled={dropdownItem.disabled}
              >
                <div className="dropdown-item-content">
                  {dropdownItem.icon && <Icon name={dropdownItem.icon} size='small' className="dropdown-icon" />}
                  <span className="dropdown-item-label">{dropdownItem.label}</span>
                </div>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {helperText && (
        <span className={`dropdown-helper-text dropdown-helper-text--${status}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

export { Dropdown };
export type { DropdownProps } from './interfaces';