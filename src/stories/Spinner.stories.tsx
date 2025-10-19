import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '@components/Spinner/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          O **Spinner** é um componente visual de carregamento utilizado para indicar que uma ação está em andamento.  
          Ele pode ser usado de forma independente ou em conjunto com outros componentes (ex: **IconButton**) para reforçar o estado de *loading*.  
          Agora o componente conta com diferentes **variantes visuais** (\`default\`, \`pulse\`, \`dots\` e \`ring\`) que podem ser utilizadas de acordo com o contexto da aplicação.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    variant: 'default',
    ariaLabel: 'Carregando...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
      <Spinner size="sm" color="primary" variant="default" ariaLabel="Carregando pequeno" />
      <Spinner size="md" color="primary" variant="default" ariaLabel="Carregando médio" />
      <Spinner size="lg" color="primary" variant="default" ariaLabel="Carregando grande" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo dos três tamanhos disponíveis: `sm`, `md` e `lg`.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Spinner size="md" color="secondary" variant="dots" ariaLabel="Carregando secundário" />
      <Spinner size="md" color="primary" variant="ring" ariaLabel="Carregando alerta" />
      <Spinner size="md" color="success" variant="pulse" ariaLabel="Carregando sucesso" />
      <Spinner size="md" color="alert" variant="default" ariaLabel="Carregando primário" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de todas as variações de cor suportadas pelo componente.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" color="primary" variant="default" ariaLabel="Default" />
        <div>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" color="primary" variant="pulse" ariaLabel="Pulse" />
        <div>Pulse</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" color="primary" variant="dots" ariaLabel="Dots" />
        <div>Dots</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="lg" color="primary" variant="ring" ariaLabel="Ring" />
        <div>Ring</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstração das quatro variantes disponíveis: `default`, `pulse`, `dots` e `ring`.',
      },
    },
  },
};
