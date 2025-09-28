import { ComponentProps } from 'react';

import { Icon } from '../../Icon';
import { useTabs } from '../tabs-context';
import { joinClassNames } from '@src/utils/joinClassNames';

interface TabScrollerButtonProps extends ComponentProps<'button'> {
  kind: 'previous' | 'next';
}

function TabScrollerButton({
  kind,
  ...props
}: TabScrollerButtonProps) {
  const { activeTab, setActiveTab, tabValues } = useTabs();

  const handleClick = () => {
    const currentIndex = tabValues.findIndex((v) => v === activeTab);
    if (currentIndex === -1) return;

    const step = kind === 'previous' ? -1 : 1;
    let attempts = 0;
    let nextIndex = currentIndex;

    while (attempts < tabValues.length) {
      nextIndex += step;

      const nextValue = tabValues[nextIndex];

      const allTabs = Array.from(
        document.querySelectorAll('[role="tab"]'),
      ) as HTMLButtonElement[];

      const nextTab = allTabs.find(
        (tab) =>
          tab.getAttribute('data-value') === nextValue ||
          tab.getAttribute('value') === nextValue,
      );

      const isDisabled =
        nextTab?.disabled || nextTab?.getAttribute('aria-disabled') === 'true';

      if (!isDisabled && nextTab) {
        setActiveTab(nextValue);

        nextTab.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });

        return;
      }

      attempts++;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={joinClassNames([
        'tabs__scroller-button',
        kind === 'previous'
          ? 'tabs__scroller-button__left'
          : 'tabs__scroller-button__right',
      ])}
      {...props}
    >
      <Icon name={kind === 'previous' ? 'ChevronLeft' : 'ChevronRight'} />
    </button>
  );
}

export { TabScrollerButton };
export type { TabScrollerButtonProps };
