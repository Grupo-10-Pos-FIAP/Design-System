import { createContext, useContext } from 'react';

interface TabContext {
  activeTab?: string;
  setActiveTab: (value: string) => void;
  registerTab: (value: string) => void;
  tabValues: string[];
}

export const TabContext = createContext<TabContext | null>(null);

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
};
