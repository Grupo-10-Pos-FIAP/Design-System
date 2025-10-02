import React from 'react';
import { DividerProps } from './interfaces';
import { joinClassNames } from '../../utils/joinClassNames';
import './Divider.scss';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  color = 'default',
}) => {
  return (
    <div
      className={joinClassNames([
        'divider',
        `divider--${orientation}`,
      ])}
    >
      <div
        className={joinClassNames([
          'divider__line',
          `divider__line--${orientation}`,
          `divider__line--${color}`,
        ])}
      />
    </div>
  );
};

export { Divider };
export type { DividerProps } from './interfaces';