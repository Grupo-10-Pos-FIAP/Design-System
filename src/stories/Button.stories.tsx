import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined', 'negative'],
    },
    width: {
      control: { type: 'text' },
      description: 'Largura do botão (ex: 100%, 200px, 50%)',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do botão',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback quando o botão é clicado',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Botão com múltiplas variações e suporte a largura customizada.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    disabled: false,
    width: '179px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão primário com estilo padrão da marca.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão secundário para ações menos proeminentes.',
      },
    },
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão com borda e fundo transparente.',
      },
    },
  },
};

export const Negative: Story = {
  args: {
    children: 'Negative Button',
    variant: 'negative',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão para ações destrutivas ou negativas.',
      },
    },
  },
};

export const WithCustomWidth: Story = {
  args: {
    children: 'Custom Width Button',
    variant: 'primary',
    width: '300px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão com largura customizada de 300px.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    width: '100%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão que ocupa 100% da largura disponível.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão desabilitado - não pode ser interagido.',
      },
    },
  },
};
