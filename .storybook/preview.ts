import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.scss';

const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
  parameters: {
    layout: 'centered',

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

  },
};

export default preview;
