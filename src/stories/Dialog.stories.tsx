import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@components/Dialog/Dialog';
import { Button } from '@components/Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
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
  showCloseButton={true}
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
    position: 'center',
    size: 'medium',
    contentAlign: 'center',
    overlay: true,
    overlayOpacity: 0.25,
    closeOnOverlayClick: true,
    showCloseButton: true,
    title: 'Dialog padrão',
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
