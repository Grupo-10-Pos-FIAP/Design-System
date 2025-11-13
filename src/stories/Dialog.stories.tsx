import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@components/Dialog/Dialog';
import { Button } from '@components/Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the dialog',
    },
    onClose: {
      action: 'onClose',
      description: 'Callback function when dialog is closed',
    },
    children: {
      control: 'text',
      description: 'Dialog content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    position: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'left', 'right'],
      description: 'Position of the dialog on the screen',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'fullscreen'],
      description: 'Predefined size variants',
    },
    contentAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the content',
    },
    headerAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the header content',
    },
    bodyAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the body content',
    },
    footerAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the footer content',
    },
    overlay: {
      control: 'boolean',
      description: 'Show/hide the overlay background',
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Opacity level of the overlay (0 to 1)',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Close dialog when clicking on overlay',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show/hide the close button',
    },
    title: {
      control: 'text',
      description: 'Dialog title text',
    },
    description: {
      control: 'text',
      description: 'Dialog description text',
    },
    width: {
      control: 'text',
      description: 'Custom width (e.g., "500px", "80%")',
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width (e.g., "500px", "80%")',
    },
    fullScreenBreakpoint: {
      control: 'number',
      description: 'Breakpoint in pixels for fullscreen mode on mobile',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

const DialogTemplate = (args: React.ComponentProps<typeof Dialog>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Dialog</Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeader>
          <h3>{args.title ?? 'Exemplo de Dialog'}</h3>
        </DialogHeader>
        <DialogBody>
          <p>Este é um exemplo de conteúdo do Dialog.</p>
          <p>Posição: {args.position}</p>
          <p>Tamanho: {args.size}</p>
          <p>Alinhamento: {args.contentAlign}</p>
        </DialogBody>
        <DialogFooter align={args.footerAlign ?? 'end'}>
          <Button variant="outlined" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={() => setIsOpen(false)}>Confirmar</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

const defaultDialogCode = `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="medium"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
>
  <DialogHeader>
    <h3>Dialog padrão</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
`;

export const Default: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    title: 'Dialog padrão',
    position: 'center',
    size: 'medium',
    contentAlign: 'center',
    overlay: true,
    overlayOpacity: 0.25,
    closeOnOverlayClick: true,
    showCloseButton: false,
    isOpen: false,
  },
  parameters: {
    docs: {
      source: {
        code: defaultDialogCode,
      },
    },
  },
};

export const TopDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    position: 'top',
    title: 'Dialog no topo',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="top"
  size="medium"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Dialog no topo</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: top</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const BottomDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    position: 'bottom',
    title: 'Dialog na parte inferior',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="bottom"
  size="medium"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Dialog na parte inferior</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: bottom</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const LeftDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    position: 'left',
    size: 'large',
    title: 'Dialog à esquerda (drawer)',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="left"
  size="large"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Dialog à esquerda (drawer)</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: left</p>
    <p>Tamanho: large</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const RightDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    position: 'right',
    size: 'large',
    title: 'Dialog à direita (drawer)',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="right"
  size="large"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Dialog à direita (drawer)</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: right</p>
    <p>Tamanho: large</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const LargeDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    size: 'large',
    title: 'Dialog grande',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="large"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Dialog grande</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: large</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const ExtraLargeDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    size: 'extra-large',
    title: 'Dialog extra grande',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="extra-large"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Dialog extra grande</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: xl</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const StartAligned: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    contentAlign: 'start',
    title: 'Conteúdo alinhado à esquerda',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="medium"
  contentAlign="start"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Conteúdo alinhado à esquerda</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: start</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const EndAligned: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    contentAlign: 'end',
    title: 'Conteúdo alinhado à direita',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="medium"
  contentAlign="end"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Conteúdo alinhado à direita</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: end</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const FooterCentered: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    footerAlign: 'center',
    title: 'Footer centralizado',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="medium"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Footer centralizado</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="center">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const NoOverlay: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    overlay: false,
    overlayOpacity: 0,
    title: 'Dialog sem overlay',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="medium"
  contentAlign="center"
  overlay={false}
  overlayOpacity={0}
  closeOnOverlayClick={true}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Dialog sem overlay</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const NoCloseOnOverlayClick: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    closeOnOverlayClick: false,
    title: 'Overlay não fecha',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="medium"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={false}
  showCloseButton={true}
>
  <DialogHeader>
    <h3>Overlay não fecha</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: medium</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};

export const FullScreenResponsive: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    fullScreenBreakpoint: 1024,
    size: 'extra-large',
    title: 'Dialog responsivo em tela cheia',
    showCloseButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog
  isOpen={true}
  onClose={() => {}}
  position="center"
  size="extra-large"
  contentAlign="center"
  overlay={true}
  overlayOpacity={0.25}
  closeOnOverlayClick={true}
  showCloseButton={true}
  fullScreenBreakpoint={1024}
>
  <DialogHeader>
    <h3>Dialog responsivo em tela cheia</h3>
  </DialogHeader>
  <DialogBody>
    <p>Este é um exemplo de conteúdo do Dialog.</p>
    <p>Posição: center</p>
    <p>Tamanho: xl</p>
    <p>Alinhamento: center</p>
  </DialogBody>
  <DialogFooter align="end">
    <Button variant="outlined" onClick={() => {}}>
      Cancelar
    </Button>
    <Button onClick={() => {}}>
      Confirmar
    </Button>
  </DialogFooter>
</Dialog>
        `,
      },
    },
  },
};
