import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@components/Text/Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: ['caption', 'small', 'body', 'subtitle', 'title', 'h4', 'h3', 'h2', 'h1', 'h5'],
      description: 'Variante tipográfica do texto'
    },
    color: {
      control: 'select',
      options: [
        'base', 'white', 'black', 'disabled',
        'primary', 'secondary', 'soft',
        'success', 'warning', 'error', 'info', 'link',
        'gray100', 'gray200', 'gray300', 'gray400', 'gray500',
        'gray600', 'gray700', 'gray800', 'gray900'
      ],
      description: 'Cor do texto'
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Peso da fonte'
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Alinhamento do texto'
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
      description: 'Elemento HTML a ser renderizado'
    },
    letterSpacing: {
      control: 'select',
      options: ['tightest', 'tight', 'normal', 'relaxed', 'wide', 'wider'],
      description: 'Espaçamento entre letras'
    },
    truncate: {
      control: 'boolean',
      description: 'Se o texto deve ser truncado com ellipsis'
    },
    maxLines: {
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Número máximo de linhas'
    },
  },
  args: {
    variant: 'body',
    color: 'base',
    children: 'Texto de exemplo padrão',
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const AllVariants: Story = {
  args: {
    children: 'Texto de exemplo',
  },
  render: (args) => {
    const variants = [
      { variant: 'caption', label: 'Caption - 12px regular' },
      { variant: 'small', label: 'Small - 14px regular' },
      { variant: 'body', label: 'Body - 16px regular' },
      { variant: 'subtitle', label: 'Subtitle - 18px medium' },
      { variant: 'title', label: 'Title - 20px semibold' },
      { variant: 'h4', label: 'H4 - 22px semibold' },
      { variant: 'h3', label: 'H3 - 24px bold' },
      { variant: 'h2', label: 'H2 - 26px bold' },
      { variant: 'h1', label: 'H1 - 28px bold' },
      { variant: 'h5', label: 'H5 - 30px bold' },
    ] as const;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '400px'
      }}>
        {variants.map(({ variant, label }) => (
          <div key={variant} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text {...args} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Text>
            <span style={{ fontSize: '14px', color: '#666' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const ColorVariants: Story = {
  args: {
    variant: 'body',
    children: 'Texto de exemplo',
  },
  render: (args) => {
    const colors = [
      { color: 'base', label: 'Base', bg: 'transparent' },
      { color: 'primary', label: 'Primary', bg: 'transparent' },
      { color: 'secondary', label: 'Secondary', bg: 'transparent' },
      { color: 'success', label: 'Success', bg: 'transparent' },
      { color: 'warning', label: 'Warning', bg: 'transparent' },
      { color: 'error', label: 'Error', bg: 'transparent' },
      { color: 'info', label: 'Info', bg: 'transparent' },
      { color: 'white', label: 'White', bg: '#1a1a1a' },
      { color: 'black', label: 'Black', bg: '#f0f0f0' },
      { color: 'disabled', label: 'Disabled', bg: 'transparent' },
    ] as const;

    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '500px'
      }}>
        {colors.map(({ color, label, bg }) => (
          <div 
            key={color} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px',
              padding: '16px',
              backgroundColor: bg,
              borderRadius: '4px'
            }}
          >
            <Text {...args} color={color} weight="semibold">
              {label}
            </Text>
            <Text {...args} color={color}>
              Texto de exemplo em {color}
            </Text>
          </div>
        ))}
      </div>
    );
  },
};

export const WeightVariants: Story = {
  args: {
    variant: 'body',
    children: 'Texto de exemplo',
  },
  render: (args) => {
    const weights = [
      { weight: 'regular', label: 'Regular' },
      { weight: 'medium', label: 'Medium' },
      { weight: 'semibold', label: 'Semibold' },
      { weight: 'bold', label: 'Bold' },
    ] as const;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '300px'
      }}>
        {weights.map(({ weight, label }) => (
          <div key={weight} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text {...args} weight={weight}>
              Texto com peso {weight}
            </Text>
            <span style={{ fontSize: '14px', color: '#666', textTransform: 'capitalize' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const AlignmentVariants: Story = {
  args: {
    variant: 'body',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  render: (args) => {
    const alignments = [
      { align: 'left', label: 'Alinhado à esquerda' },
      { align: 'center', label: 'Centralizado' },
      { align: 'right', label: 'Alinhado à direita' },
      { align: 'justify', label: 'Justificado' },
    ] as const;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '400px'
      }}>
        {alignments.map(({ align, label }) => (
          <div key={align}>
            <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
              {label}:
            </Text>
            <Text {...args} align={align} style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '4px' }}>
              {args.children}
            </Text>
          </div>
        ))}
      </div>
    );
  },
};

export const TruncateExample: Story = {
  args: {
    variant: 'body',
    truncate: true,
    children: 'Este é um texto muito longo que será truncado com ellipsis no final porque não cabe no container',
  },
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px', 
      padding: '32px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '300px'
    }}>
      <div>
        <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
          Texto truncado:
        </Text>
        <Text {...args} style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '4px' }} />
      </div>
      
      <div>
        <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
          Texto normal:
        </Text>
        <Text 
          {...args} 
          truncate={false}
          style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '4px' }}
        >
          Este é um texto normal que quebra em múltiplas linhas
        </Text>
      </div>
    </div>
  ),
};

export const MaxLinesExample: Story = {
  args: {
    variant: 'body',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  render: (args) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px', 
      padding: '32px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      minWidth: '600px'
    }}>
      {([1, 2, 3, 4] as const).map((lines) => (
        <div key={lines}>
          <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
            Max Lines: {lines}
          </Text>
          <Text 
            {...args}
            maxLines={lines} 
            style={{ 
              border: '1px solid #e0e0e0', 
              padding: '12px', 
              borderRadius: '4px',
              height: '120px'
            }}
          />
        </div>
      ))}
    </div>
  ),
};

export const LetterSpacingVariants: Story = {
  args: {
    variant: 'title',
    children: 'Tipografia com espaçamento',
  },
  render: (args) => {
    const spacings = [
      { spacing: 'tightest', label: 'Mais Apertado' },
      { spacing: 'tight', label: 'Apertado' },
      { spacing: 'normal', label: 'Normal' },
      { spacing: 'relaxed', label: 'Relaxado' },
      { spacing: 'wide', label: 'Amplo' },
      { spacing: 'wider', label: 'Mais Amplo' },
    ] as const;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '400px'
      }}>
        {spacings.map(({ spacing, label }) => (
          <div key={spacing}>
            <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
              {label}:
            </Text>
            <Text {...args} letterSpacing={spacing} style={{ borderBottom: '2px solid #e0e0e0', paddingBottom: '8px' }}>
              {args.children} {spacing}
            </Text>
          </div>
        ))}
      </div>
    );
  },
};

export const CustomElement: Story = {
  args: {
    variant: 'body',
    color: 'primary',
    children: 'Este texto pode ser renderizado como diferentes elementos HTML',
  },
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px', 
      padding: '32px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      minWidth: '400px'
    }}>
      <div>
        <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
          Como parágrafo (padrão):
        </Text>
        <Text {...args} as="p" style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '4px' }} />
      </div>
      
      <div>
        <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
          Como span (inline):
        </Text>
        <div style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '4px' }}>
          Texto antes <Text {...args} as="span" /> texto depois
        </div>
      </div>
      
      <div>
        <Text variant="small" color="gray600" style={{ marginBottom: '8px' }}>
          Como label:
        </Text>
        <Text {...args} as="label" style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '4px', display: 'block' }} />
      </div>
    </div>
  ),
};