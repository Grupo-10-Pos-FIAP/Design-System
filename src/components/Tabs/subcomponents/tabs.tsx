import { useState, useEffect } from 'react';
import { Tabs as RTabs } from 'radix-ui';
import { TabContext } from '../tabs-context';
import { joinClassNames } from '@utils/joinClassNames';

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
  /**
   * Width of the tabs container. Can be specified in px, %, rem, em, vw, vh, etc.
   * @default "100%"
   * @example "100%", "500px", "50rem", "80vw"
   */
  width?: string;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Additional CSS styles
   */
  style?: React.CSSProperties;
}

function TabsRoot({
  children,
  defaultValue,
  value: valueProp,
  onValueChange,
  width = "100%",
  className,
  style,
}: TabsRootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [tabValues, setTabValues] = useState<string[]>([]);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledValue;

  useEffect(() => {
    if (!isControlled && !uncontrolledValue && tabValues.length > 0) {
      setUncontrolledValue(tabValues[0]);
    }
  }, [tabValues, isControlled, uncontrolledValue]);

  const setValue = isControlled ? onValueChange! : setUncontrolledValue;

  const registerTab = (newValue: string) => {
    setTabValues((prev) =>
      prev.includes(newValue) ? prev : [...prev, newValue],
    );
  };

  const finalValue = value || (tabValues.length > 0 ? tabValues[0] : defaultValue);

  return (
    <TabContext.Provider
      value={{
        activeTab: finalValue,
        setActiveTab: setValue,
        registerTab,
        tabValues,
      }}
    >
      <RTabs.Root
        role="tab"
        className={joinClassNames(['tabs', className])}
        style={{ width, ...style }}
        orientation="horizontal"
        defaultValue={defaultValue}
        value={finalValue}
        onValueChange={onValueChange}
      >
        {children}
      </RTabs.Root>
    </TabContext.Provider>
  );
}

export { TabsRoot };
export type { TabsRootProps };
