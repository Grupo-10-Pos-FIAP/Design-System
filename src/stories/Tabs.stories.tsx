import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Tabs } from '@components/Tabs/Tabs';
import { TabsRootProps } from '@components/Tabs/subcomponents/tabs';
import { TabsTriggerProps } from '@components/Tabs/subcomponents/tabs-trigger';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs = [
  {
    value: 'tab1',
    label: 'Tab 1',
    content: <h1>Tab 1</h1>,
  },
  {
    value: 'tab2',
    label: 'Tab 2',
    disabled: true,
    content: <h1>Tab 2</h1>,
  },
  {
    value: 'tab3',
    label: 'Tab 3',
    content: <h1>Tab 3</h1>,
  },
  {
    value: 'tab4',
    label: 'Tab 4',
    content: <h1>Tab 4</h1>,
  },
  {
    value: 'tab5',
    label: 'Tab 5',
    content: <h1>Tab 5</h1>,
  },
  {
    value: 'tab6',
    label: 'Tab 6',
    content: <h1>Tab 6</h1>,
  },
  {
    value: 'tab7',
    label: 'Tab 7',
    content: <h1>Tab 7</h1>,
  },
] satisfies (TabsTriggerProps & { content: React.ReactNode })[];

export const Default: Story = {
  args: {} satisfies TabsRootProps,
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('');

    return (
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <Tabs.List scrollable>
          {tabs.map((tab) => (
            <Tabs.Trigger key={tab.value} value={tab.value} disabled={tab.disabled} label={tab.label} />
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedTab, setSelectedTab] = useState<string>('');

<Tabs value={selectedTab} onValueChange={setSelectedTab}>
  <Tabs.List scrollable>
    <Tabs.Trigger
      label="Tab 1"
      value="tab1"
    />
    <Tabs.Trigger
      disabled
      label="Tab 2"
      value="tab2"
    />
    <Tabs.Trigger
      label="Tab 3"
      value="tab3"
    />
    <Tabs.Trigger
      label="Tab 4"
      value="tab4"
    />
    <Tabs.Trigger
      label="Tab 5"
      value="tab5"
    />
    <Tabs.Trigger
      label="Tab 6"
      value="tab6"
    />
    <Tabs.Trigger
      badge={{
        size: 'default',
        value: 900,
      }}
      icon="AirVent"
      label="Tab 7"
      value="tab7"
    />
  </Tabs.List>
  <Tabs.Content value="tab1">
    <h1>Tab 1</h1>
  </Tabs.Content>
  <Tabs.Content value="tab2">
    <h1>Tab 2</h1>
  </Tabs.Content>
  <Tabs.Content value="tab3">
    <h1>Tab 3</h1>
  </Tabs.Content>
  <Tabs.Content value="tab4">
    <h1>Tab 4</h1>
  </Tabs.Content>
  <Tabs.Content value="tab5">
    <h1>Tab 5</h1>
  </Tabs.Content>
  <Tabs.Content value="tab6">
    <h1>Tab 6</h1>
  </Tabs.Content>
  <Tabs.Content value="tab7">
    <h1>Tab 7</h1>
  </Tabs.Content>
</Tabs>
`,
      },
    },
  },
};
