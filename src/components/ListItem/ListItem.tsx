import React from 'react';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { ListItemProps } from './interfaces';
import './ListItem.scss';

const ListItem: React.FC<ListItemProps> = ({ 
  label, 
  icon, 
  isActive = false, 
  onClick 
}) => {
  const listItemClasses = `listItem ${isActive ? 'active' : ''}`;

  return (
    <div
      className={listItemClasses}
      onClick={onClick}
    >
      <div className='content'>
        {icon && (
          <Icon
            name={icon}
            size="extra-small"
            color={isActive ? 'primary' : 'gray700'}
          />
        )}
        <Text
          color={isActive ? 'primary' : 'gray700'}
          variant="body"
          className="font-medium"
        >
          {label}
        </Text>
      </div>

      <Icon
        name="ChevronRight"
        size="extra-small"
        color={isActive ? 'primary' : 'gray700'}
      />
    </div>
  );
};

ListItem.displayName = 'ListItem';

export { ListItem };
export type { ListItemProps } from './interfaces';