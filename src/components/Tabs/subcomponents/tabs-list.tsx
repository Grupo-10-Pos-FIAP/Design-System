import { Tabs as RTabs } from 'radix-ui';
interface TabsListProps {
  children?: React.ReactNode;
  scrollable?: boolean;
}

function TabsList({
  children,
}: TabsListProps) {
  return (
    <div className="tabs__list">
      <RTabs.List role="tablist" className="tabs__list__items">
        {children}
      </RTabs.List>
    </div>
  );
}

export { TabsList };
export type { TabsListProps };
