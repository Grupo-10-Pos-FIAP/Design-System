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
    content: <h1>Conteúdo da Tab 1</h1>,
  },
  {
    value: 'tab2',
    label: 'Tab 2',
    disabled: true,
    content: <h1>Conteúdo da Tab 2</h1>,
  },
  {
    value: 'tab3',
    label: 'Tab 3',
    content: <h1>Conteúdo da Tab 3</h1>,
  },
  {
    value: 'tab4',
    label: 'Tab 4',
    content: <h1>Conteúdo da Tab 4</h1>,
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
);`
      }
    }
  }
};

export const WithoutScroll: Story = {
  args: {} satisfies TabsRootProps,
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('tab1');

    return (
      <Tabs value={selectedTab} onValueChange={setSelectedTab} width="600px">
        <Tabs.List>
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

<Tabs value={selectedTab} onValueChange={setSelectedTab} width="600px">
    <Tabs.List>
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
);`
      }
    }
  }
};

export const FullPage: Story = {
  args: {} satisfies TabsRootProps,
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('tab1');

    return (
      <div style={{ 
        height: '500px', 
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Tabs 
          value={selectedTab} 
          onValueChange={setSelectedTab}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Trigger key={tab.value} value={tab.value} disabled={tab.disabled} label={tab.label} />
            ))}
          </Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value}>
              <div style={{ 
                height: '100%', 
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5'
              }}>
                {tab.content}
              </div>
            </Tabs.Content>
          ))}
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedTab, setSelectedTab] = useState<string>('tab1');

<div style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
  <Tabs 
    value={selectedTab} 
    onValueChange={setSelectedTab}
    style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
  >
    <Tabs.List>
      <Tabs.Trigger label="Tab 1" value="tab1" />
      <Tabs.Trigger label="Tab 2" value="tab2" />
      <Tabs.Trigger label="Tab 3" value="tab3" />
    </Tabs.List>
    <Tabs.Content value="tab1">
      <div style={{ height: '100%', padding: '20px' }}>
        <h1>Conteúdo da Tab 1</h1>
      </div>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <div style={{ height: '100%', padding: '20px' }}>
        <h1>Conteúdo da Tab 2</h1>
      </div>
    </Tabs.Content>
    <Tabs.Content value="tab3">
      <div style={{ height: '100%', padding: '20px' }}>
        <h1>Conteúdo da Tab 3</h1>
      </div>
    </Tabs.Content>
  </Tabs>
</div>
`,
      },
    },
  },
};

export const CustomWidth: Story = {
  args: {} satisfies TabsRootProps,
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('tab1');

    return (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Tabs 
          value={selectedTab} 
          onValueChange={setSelectedTab}
          width="80%"
          style={{ 
            margin: '0 auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Trigger key={tab.value} value={tab.value} disabled={tab.disabled} label={tab.label} />
            ))}
          </Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value}>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                {tab.content}
              </div>
            </Tabs.Content>
          ))}
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedTab, setSelectedTab] = useState<string>('tab1');

<Tabs 
  value={selectedTab} 
  onValueChange={setSelectedTab}
  width="80%"
  style={{ 
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px'
  }}
>
  <Tabs.List>
    <Tabs.Trigger label="Tab 1" value="tab1" />
    <Tabs.Trigger label="Tab 2" value="tab2" />
    <Tabs.Trigger label="Tab 3" value="tab3" />
  </Tabs.List>
  <Tabs.Content value="tab1">
    <div style={{ padding: '20px' }}>
      <h1>Conteúdo da Tab 1</h1>
    </div>
  </Tabs.Content>
  <Tabs.Content value="tab2">
    <div style={{ padding: '20px' }}>
      <h1>Conteúdo da Tab 2</h1>
    </div>
  </Tabs.Content>
  <Tabs.Content value="tab3">
    <div style={{ padding: '20px' }}>
      <h1>Conteúdo da Tab 3</h1>
    </div>
  </Tabs.Content>
</Tabs>
`,
      },
    },
  },
};

export const FixedWidth: Story = {
  args: {} satisfies TabsRootProps,
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('tab1');

    return (
      <div style={{ padding: '20px' }}>
        <Tabs 
          value={selectedTab} 
          onValueChange={setSelectedTab}
          width="400px"
          style={{ 
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Trigger key={tab.value} value={tab.value} disabled={tab.disabled} label={tab.label} />
            ))}
          </Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value}>
              <div style={{ padding: '20px' }}>
                {tab.content}
              </div>
            </Tabs.Content>
          ))}
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedTab, setSelectedTab] = useState<string>('tab1');

<Tabs 
  value={selectedTab} 
  onValueChange={setSelectedTab}
  width="400px"
>
  <Tabs.List>
    <Tabs.Trigger label="Tab 1" value="tab1" />
    <Tabs.Trigger label="Tab 2" value="tab2" />
    <Tabs.Trigger label="Tab 3" value="tab3" />
  </Tabs.List>
  <Tabs.Content value="tab1">
    <h1>Conteúdo da Tab 1</h1>
  </Tabs.Content>
  <Tabs.Content value="tab2">
    <h1>Conteúdo da Tab 2</h1>
  </Tabs.Content>
  <Tabs.Content value="tab3">
    <h1>Conteúdo da Tab 3</h1>
  </Tabs.Content>
</Tabs>
`,
      },
    },
  },
};