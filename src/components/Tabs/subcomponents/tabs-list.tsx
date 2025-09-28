import { Tabs as RTabs } from 'radix-ui';
import { useMemo } from 'react';

import { useTabs } from '../tabs-context';
import { TabScrollerButton } from './tabs-scroll-buttons';

interface TabsListProps {
  children?: React.ReactNode;
  scrollable?: boolean;
}

function TabsList({
  children,
  scrollable = false,
}: TabsListProps) {
  const { activeTab, tabValues } = useTabs();

  const enabledTabValues = useMemo(() => {
    const allTabs = Array.from(
      document.querySelectorAll('[role="tab"]'),
    ) as HTMLButtonElement[];

    return tabValues.filter((value) => {
      const tab = allTabs.find(
        (el) =>
          el.getAttribute('data-value') === value ||
          el.getAttribute('value') === value,
      );
      const isDisabled =
        tab?.disabled || tab?.getAttribute('aria-disabled') === 'true';
      return !isDisabled;
    });
  }, [tabValues]);

  const currentIndex = enabledTabValues.findIndex((v) => v === activeTab);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === enabledTabValues.length - 1;

  const shouldShowLeftButton = scrollable && !!activeTab && !isFirst;
  const shouldShowRightButton = scrollable && !!activeTab && !isLast;

  return (
    <div className="tabs__list">
      {shouldShowLeftButton && (
        <TabScrollerButton kind="previous" />
      )}
      <RTabs.List role="tablist" className="tabs__list__items">
        {children}
      </RTabs.List>
      {shouldShowRightButton && <TabScrollerButton kind="next"/>}
    </div>
  );
}

export { TabsList };
export type { TabsListProps };
