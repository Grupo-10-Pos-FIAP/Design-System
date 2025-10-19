import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@components/Dialog/Dialog';
import { Button } from '@components/Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
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
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={() => setIsOpen(false)}>Confirmar</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    position: 'center',
    size: 'md',
    contentAlign: 'center',
    overlay: true,
    overlayOpacity: 0.25,
    closeOnOverlayClick: true,
    showCloseButton: true,
    title: 'Dialog padrão',
  },
  parameters: {
    docs: {
      storyDescription: 'Dialog centralizado com configurações padrão.',
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
      storyDescription: 'Exemplo de dialog fixado no topo da tela.',
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
      storyDescription: 'Exemplo de dialog fixado na parte inferior da tela.',
    },
  },
};

export const LeftDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    position: 'left',
    size: 'lg',
    title: 'Dialog à esquerda (drawer)',
  },
  parameters: {
    docs: {
      storyDescription: 'Exemplo de drawer surgindo a partir da esquerda.',
    },
  },
};

export const RightDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    position: 'right',
    size: 'lg',
    title: 'Dialog à direita (drawer)',
  },
  parameters: {
    docs: {
      storyDescription: 'Exemplo de drawer surgindo a partir da direita.',
    },
  },
};

export const LargeDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    size: 'lg',
    title: 'Dialog grande',
  },
  parameters: {
    docs: {
      storyDescription: 'Exemplo de dialog com tamanho grande (lg).',
    },
  },
};

export const ExtraLargeDialog: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    size: 'xl',
    title: 'Dialog extra grande',
  },
  parameters: {
    docs: {
      storyDescription: 'Exemplo de dialog com tamanho extra grande (xl).',
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
      storyDescription: 'Dialog com conteúdo do corpo alinhado à esquerda.',
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
      storyDescription: 'Dialog com conteúdo do corpo alinhado à direita.',
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
      storyDescription: 'Dialog com botões do rodapé centralizados.',
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
      storyDescription: 'Exemplo de dialog exibido sem camada de overlay.',
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
      storyDescription: 'Dialog configurado para não ser fechado ao clicar fora (overlay).',
    },
  },
};

export const FullScreenResponsive: Story = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    ...Default.args,
    fullScreenBreakpoint: 1024,
    size: 'xl',
    title: 'Dialog responsivo em tela cheia',
  },
  parameters: {
    docs: {
      storyDescription: 'Dialog que se expande para tela cheia em dispositivos menores que 1024px.',
    },
  },
};
