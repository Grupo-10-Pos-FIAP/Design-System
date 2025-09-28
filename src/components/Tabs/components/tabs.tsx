import { useState } from 'react';
import { Tabs as RTabs } from 'radix-ui';

import { TabContext } from '../tabs-context';

interface TabsRootProps {
  children?: React.ReactNode;
  /**
   * Defines the default active tab when the component initializes.
   */
  defaultValue?: string;
  /**
   * Value of the currently active tab (external control).
   */
  value?: string;
  /**
   * Callback triggered when the active tab changes.
   * @param value The new value of the selected tab.
   */
  onValueChange?: (value: string) => void;
}

function TabsRoot({
  children,
  defaultValue,
  value: valueProp,
  onValueChange,
}: TabsRootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [tabValues, setTabValues] = useState<string[]>([]);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledValue;
  const setValue = isControlled ? onValueChange! : setUncontrolledValue;

  const registerTab = (newValue: string) => {
    setTabValues((prev) =>
      prev.includes(newValue) ? prev : [...prev, newValue],
    );
  };

  return (
    <TabContext.Provider
      value={{
        activeTab: value,
        setActiveTab: setValue,
        registerTab,
        tabValues,
      }}
    >
      <RTabs.Root
        role="tab"
        className="tabs"
        orientation="horizontal"
        activationMode="manual"
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
      >
        {children}
      </RTabs.Root>
    </TabContext.Provider>
  );
}

export { TabsRoot };
export type { TabsRootProps };
