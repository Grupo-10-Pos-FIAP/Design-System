import { Tabs as RTabs } from 'radix-ui';
import { joinClassNames } from '@utils/joinClassNames';

interface TabsListProps {
  children?: React.ReactNode;
  scrollable?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Additional CSS styles
   */
  style?: React.CSSProperties;
}

function TabsList({
  children,
  className,
  style,
}: TabsListProps) {
  return (
    <div 
      className={joinClassNames(['tabs__list', className])}
      style={style}
    >
      <RTabs.List 
        role="tablist" 
        className="tabs__list__items"
        style={{ width: '100%' }}
      >
        {children}
      </RTabs.List>
    </div>
  );
}

export { TabsList };
export type { TabsListProps };