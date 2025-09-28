import { Tabs as RTabs } from 'radix-ui';

interface TabsContentProps {
  /**
   * The content to be displayed in the tab.
   */
  children: React.ReactNode;

  /**
   * The value of the tab associated with this content.
   */
  value: string;
}

function TabsContent({ children, value }: TabsContentProps) {
  return <RTabs.Content value={value}>{children}</RTabs.Content>;
}

export { TabsContent };
export type { TabsContentProps };
