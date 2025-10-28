import { Meta, StoryObj } from '@storybook/react-vite';
import { Snackbar } from '@components/Snackbar/Snackbar';
import { SnackbarProps } from '@components/Snackbar/interface';
import { Button } from '@components/Button/Button';
import { useState } from 'react';

const ControlledSnackbar = (args: SnackbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>

      <Snackbar {...args} open={open} onOpenChange={setOpen} />
    </div>
  );
};

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    message: {
      control: 'text',
      description: 'Message shown in the snackbar',
      defaultValue: 'Operation completed successfully!',
    },
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Type of snackbar',
    },
    duration: {
      control: { type: 'number' },
      description: 'Duration (ms) until it disappears',
      defaultValue: 4000,
    },
  },
  render: (args) => <ControlledSnackbar {...args} />,
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {
    message: 'Operation completed successfully!',
    variant: 'success',
    duration: 4000,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="Operation completed successfully!"
  variant="success"
  duration={4000}
/>`
      }
    }
  },
};

export const VariantsOverview: Story = {
  parameters: {
    docs: {
      source: {
        code: `// Todas as variantes disponíveis
<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="Saved successfully!"
  variant="success"
  duration={4000}
/>

<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="Connection error."
  variant="error"
  duration={4000}
/>

<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="New update available."
  variant="info"
  duration={4000}
/>

<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="Risk of data loss."
  variant="warning"
  duration={4000}
/>`
      }
    }
  },
  render: () => {
    const variants: SnackbarProps['variant'][] = ['success', 'error', 'info', 'warning'];

    const [openVariant, setOpenVariant] = useState<string | null>(null);

    const messages = {
      success: 'Saved successfully!',
      error: 'Connection error.',
      info: 'New update available.',
      warning: 'Risk of data loss.',
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
        }}>
        {variants.map((variant: 'info' | 'success' | 'warning' | 'error' | undefined) => (
          <div key={variant}>
            <Button onClick={() => setOpenVariant(variant ?? null)}>Show {variant}</Button>
            <Snackbar
              variant={variant}
              message={messages[variant ?? 'info']}
              open={openVariant === variant}
              onOpenChange={(open) => !open && setOpenVariant(null)}
              duration={4000}
            />
          </div>
        ))}
      </div>
    );
  },
};

export const Info: Story = {
  args: {
    message: 'New update available.',
    variant: 'info',
    duration: 4000,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="New update available."
  variant="info"
  duration={4000}
/>`
      }
    }
  },
};

export const Success: Story = {
  args: {
    message: 'Saved successfully!',
    variant: 'success',
    duration: 4000,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="Saved successfully!"
  variant="success"
  duration={4000}
/>`
      }
    }
  },
};

export const Warning: Story = {
  args: {
    message: 'Risk of data loss.',
    variant: 'warning',
    duration: 4000,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="Risk of data loss."
  variant="warning"
  duration={4000}
/>`
      }
    }
  },
};

export const Error: Story = {
  args: {
    message: 'Connection error.',
    variant: 'error',
    duration: 4000,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="Connection error."
  variant="error"
  duration={4000}
/>`
      }
    }
  },
};

export const CustomDuration: Story = {
  args: {
    message: 'This message will disappear in 2 seconds',
    variant: 'info',
    duration: 2000,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="This message will disappear in 2 seconds"
  variant="info"
  duration={2000}
/>`
      }
    }
  },
};

export const LongMessage: Story = {
  args: {
    message: 'This is a very long message that should wrap properly in the snackbar component to ensure good user experience.',
    variant: 'info',
    duration: 6000,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="This is a very long message that should wrap properly in the snackbar component to ensure good user experience."
  variant="info"
  duration={6000}
/>`
      }
    }
  },
};

export const WithoutAutoHide: Story = {
  args: {
    message: 'This snackbar will not auto-hide',
    variant: 'warning',
    duration: 0,
  },
  parameters: {
    docs: {
      source: {
        code: `<Snackbar
  open={true}
  onOpenChange={() => {}}
  message="This snackbar will not auto-hide"
  variant="warning"
  duration={0}
/>`
      }
    }
  },
};

// Story para mostrar uso com estado controlado
export const ControlledExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `// Exemplo de uso controlado
const [snackbarOpen, setSnackbarOpen] = useState(false);

return (
  <div>
    <Button onClick={() => setSnackbarOpen(true)}>
      Show Snackbar
    </Button>
    
    <Snackbar
      open={snackbarOpen}
      onOpenChange={setSnackbarOpen}
      message="Operation completed!"
      variant="success"
      duration={4000}
    />
  </div>
);`
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button onClick={() => setOpen(true)}>Show Controlled Snackbar</Button>

        <Snackbar
          open={open}
          onOpenChange={setOpen}
          message="Operation completed!"
          variant="success"
          duration={4000}
        />
      </div>
    );
  },
};