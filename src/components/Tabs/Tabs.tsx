import { TabsRoot, TabsRootProps } from './subcomponents/tabs';
import { TabsContent, TabsContentProps } from './subcomponents/tabs-content';
import { TabsList, TabsListProps } from './subcomponents/tabs-list';
import { TabsTrigger, TabsTriggerProps } from './subcomponents/tabs-trigger';
import './Tabs.scss';

const Tabs = Object.assign(TabsRoot, {
  Content: TabsContent,
  List: TabsList,
  Trigger: TabsTrigger,
});


export { Tabs };
export type {
  TabsRootProps,
  TabsContentProps,
  TabsListProps,
  TabsTriggerProps,
};
