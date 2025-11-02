import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '@components/IconButton/IconButton';
import { iconKeys } from '@utils/iconKeys';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'select',
      options: iconKeys,
      description: 'Ícone a ser exibido no botão',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'transparent'],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do botão',
    },
    'aria-label': {
      control: 'text',
      description: 'Label de acessibilidade para o botão',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: 'Heart',
    size: 'medium',
    variant: 'primary',
    'aria-label': 'Curtir',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    icon: 'Settings',
    variant: 'secondary',
    'aria-label': 'Configurações',
  },
};

export const Outlined: Story = {
  args: {
    icon: 'User',
    variant: 'outlined',
    'aria-label': 'Perfil',
  },
};

export const Transparent: Story = {
  args: {
    icon: 'Search',
    variant: 'transparent',
    'aria-label': 'Pesquisar',
  },
};

export const Small: Story = {
  args: {
    icon: 'Plus',
    size: 'small',
    'aria-label': 'Adicionar pequeno',
  },
};

export const Medium: Story = {
  args: {
    icon: 'Plus',
    size: 'medium',
    variant: 'primary',
    'aria-label': 'Adicionar',
  },
};

export const Large: Story = {
  args: {
    icon: 'Plus',
    size: 'large',
    'aria-label': 'Adicionar grande',
  },
};

export const Disabled: Story = {
  args: {
    icon: 'Heart',
    variant: 'primary',
    disabled: true,
    'aria-label': 'Curtir (desabilitado)',
  },
};
