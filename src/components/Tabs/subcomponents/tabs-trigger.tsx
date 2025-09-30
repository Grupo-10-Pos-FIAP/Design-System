import { Tabs as RTabs } from 'radix-ui';
import { useEffect, useRef } from 'react';
import { useTabs } from '../tabs-context';
import { joinClassNames } from '@utils/joinClassNames';

interface TabsTriggerProps {
  /**
   * The label displayed on the tab.
   */
  label: string;

  /**
   * The unique value of the tab, used for identification and control.
   */
  value: string;

  /**
   * Defines whether the tab is disabled, preventing user interaction.
   */
  disabled?: boolean;
}

function TabsTrigger({ label, value, disabled }: TabsTriggerProps) {
  const { registerTab, setActiveTab } = useTabs();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    registerTab(value);
  }, [value, registerTab]);

  return (
    <RTabs.Trigger
      ref={triggerRef}
      value={value}
      data-value={value}
      data-testid="tabs-item"
      className="tabs__tab-item"
      disabled={disabled}
      aria-disabled={disabled}
      onClick={() => setActiveTab(value)}>
      <div className="tabs__tab-item__content">
        <p className={joinClassNames(['tabs__tab-item__label', disabled ? 'disabled' : ''])}>{label}</p>
      </div>
      <div className="tabs__tab-item__tab-border" />
    </RTabs.Trigger>
  );
}

export { TabsTrigger };
export type { TabsTriggerProps };
