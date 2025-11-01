import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '@components/Spinner/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'default',
    ariaLabel: 'Carregando...',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="primary" variant="default" ariaLabel="Carregando..." />'
      }
    }
  },
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Spinner size="small" color="primary" variant="default" ariaLabel="Carregando pequeno" />
<Spinner size="medium" color="primary" variant="default" ariaLabel="Carregando médio" />
<Spinner size="large" color="primary" variant="default" ariaLabel="Carregando grande" />`
      }
    }
  },
  render: () => (
    <div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
      <Spinner size="small" color="primary" variant="default" ariaLabel="Carregando pequeno" />
      <Spinner size="medium" color="primary" variant="default" ariaLabel="Carregando médio" />
      <Spinner size="large" color="primary" variant="default" ariaLabel="Carregando grande" />
    </div>
  ),
};

export const Colors: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Spinner size="medium" color="secondary" variant="dots" ariaLabel="Carregando secundário" />
<Spinner size="medium" color="primary" variant="ring" ariaLabel="Carregando primário" />
<Spinner size="medium" color="success" variant="pulse" ariaLabel="Carregando sucesso" />
<Spinner size="medium" color="alert" variant="default" ariaLabel="Carregando alerta" />`
      }
    }
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Spinner size="medium" color="secondary" variant="dots" ariaLabel="Carregando secundário" />
      <Spinner size="medium" color="primary" variant="ring" ariaLabel="Carregando primário" />
      <Spinner size="medium" color="success" variant="pulse" ariaLabel="Carregando sucesso" />
      <Spinner size="medium" color="alert" variant="default" ariaLabel="Carregando alerta" />
    </div>
  ),
};

export const Variants: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Spinner size="medium" color="primary" variant="default" ariaLabel="Spinner padrão" />
<Spinner size="medium" color="primary" variant="pulse" ariaLabel="Spinner pulsante" />
<Spinner size="medium" color="primary" variant="dots" ariaLabel="Spinner com pontos" />
<Spinner size="large" color="primary" variant="ring" ariaLabel="Spinner em anel" />`
      }
    }
  },
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="medium" color="primary" variant="default" ariaLabel="Default" />
        <div>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="medium" color="primary" variant="pulse" ariaLabel="Pulse" />
        <div>Pulse</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="medium" color="primary" variant="dots" ariaLabel="Dots" />
        <div>Dots</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="large" color="primary" variant="ring" ariaLabel="Ring" />
        <div>Ring</div>
      </div>
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary',
    variant: 'default',
    ariaLabel: 'Carregando pequeno',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="small" color="primary" variant="default" ariaLabel="Carregando pequeno" />'
      }
    }
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'default',
    ariaLabel: 'Carregando médio',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="primary" variant="default" ariaLabel="Carregando médio" />'
      }
    }
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary',
    variant: 'default',
    ariaLabel: 'Carregando grande',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="large" color="primary" variant="default" ariaLabel="Carregando grande" />'
      }
    }
  },
};

export const PrimaryColor: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'default',
    ariaLabel: 'Carregando primário',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="primary" variant="default" ariaLabel="Carregando primário" />'
      }
    }
  },
};

export const SecondaryColor: Story = {
  args: {
    size: 'medium',
    color: 'secondary',
    variant: 'default',
    ariaLabel: 'Carregando secundário',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="secondary" variant="default" ariaLabel="Carregando secundário" />'
      }
    }
  },
};

export const SuccessColor: Story = {
  args: {
    size: 'medium',
    color: 'success',
    variant: 'default',
    ariaLabel: 'Carregando sucesso',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="success" variant="default" ariaLabel="Carregando sucesso" />'
      }
    }
  },
};

export const AlertColor: Story = {
  args: {
    size: 'medium',
    color: 'alert',
    variant: 'default',
    ariaLabel: 'Carregando alerta',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="alert" variant="default" ariaLabel="Carregando alerta" />'
      }
    }
  },
};

export const DefaultVariant: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'default',
    ariaLabel: 'Spinner padrão',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="primary" variant="default" ariaLabel="Spinner padrão" />'
      }
    }
  },
};

export const PulseVariant: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'pulse',
    ariaLabel: 'Spinner pulsante',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="primary" variant="pulse" ariaLabel="Spinner pulsante" />'
      }
    }
  },
};

export const DotsVariant: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'dots',
    ariaLabel: 'Spinner com pontos',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="medium" color="primary" variant="dots" ariaLabel="Spinner com pontos" />'
      }
    }
  },
};

export const RingVariant: Story = {
  args: {
    size: 'large',
    color: 'primary',
    variant: 'ring',
    ariaLabel: 'Spinner em anel',
  },
  parameters: {
    docs: {
      source: {
        code: '<Spinner size="large" color="primary" variant="ring" ariaLabel="Spinner em anel" />'
      }
    }
  },
};