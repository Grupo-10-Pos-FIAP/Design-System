import { Meta, StoryObj } from "@storybook/react-vite";
import { Loading } from "@components/Loading/Loading";
import { LoadingProps } from "@components/Loading/interfaces";
import { Button } from "@components/Button/Button";
import { useState } from "react";

const ControlledLoading = (args: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button onClick={() => setIsLoading(true)}>
        Show Loading
      </Button>
      
      <Button variant="outlined" onClick={() => setIsLoading(false)}>
        Hide Loading
      </Button>

      {isLoading && <Loading {...args} />}
    </div>
  );
};

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de loading para indicar processos em andamento com diferentes variantes.',
      },
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "Texto exibido abaixo do spinner",
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    overlay: {
      control: "boolean",
      description: "Exibir como overlay sobre o elemento pai",
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullScreen: {
      control: "boolean",
      description: "Exibir como loading em tela cheia",
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do spinner',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'alert', 'success', 'neutral'],
      description: 'Cor do spinner',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      control: 'select',
      options: ['circle', 'dots', 'ring', 'pulse'],
      description: 'Variante visual do spinner',
      table: {
        defaultValue: { summary: 'circle' },
      },
    },
  },
  args: {
    text: "Loading...",
    size: "medium",
    color: "primary",
    variant: "circle",
    overlay: false,
    fullScreen: false,
  },
  render: (args) => <ControlledLoading {...args} />,
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Loading text="Loading..." />`
      }
    }
  }
};

export const SpinnerVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Diferentes variantes visuais do spinner.',
      },
      source: {
        code: `
// Circle (padrão)
<Loading text="Loading with circle spinner..." variant="circle" />

// Dots
<Loading text="Loading with dots spinner..." variant="dots" />

// Ring  
<Loading text="Loading with ring spinner..." variant="ring" />

// Pulse
<Loading text="Loading with pulse spinner..." variant="pulse" />`
      }
    }
  },
  render: () => {
    const variants = ["circle", "dots", "ring", "pulse"] as const;
    const [activeVariant, setActiveVariant] = useState<string | null>(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem" }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Button onClick={() => setActiveVariant(variant)}>
              Show {variant} spinner
            </Button>
            {activeVariant === variant && (
              <Loading
                text={`Loading with ${variant} spinner...`}
                variant={variant}
              />
            )}
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tamanhos disponíveis para o loading.',
      },
      source: {
        code: `
// Small
<Loading text="Loading (small)..." size="small" />

// Medium  
<Loading text="Loading (medium)..." size="medium" />

// Large
<Loading text="Loading (large)..." size="large" />`
      }
    }
  },
  render: () => {
    const sizes = ["small", "medium", "large"] as const;
    const [activeSize, setActiveSize] = useState<string | null>(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem" }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Button onClick={() => setActiveSize(size)}>
              Show {size} size
            </Button>
            {activeSize === size && (
              <Loading
                text={`Loading (${size})...`}
                size={size}
              />
            )}
          </div>
        ))}
      </div>
    );
  },
};

export const WithOverlay: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading como overlay sobre o conteúdo existente.',
      },
      source: {
        code: `
<div style={{ position: "relative", minHeight: "200px" }}>
  {/* Conteúdo da aplicação */}
  <p>Conteúdo da aplicação que será coberto pelo overlay</p>
  
  <Loading
    text="Processing..."
    overlay
    size="large"
    variant="ring"
  />
</div>`
      }
    }
  },
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <div style={{ position: "relative", padding: "2rem", border: "1px solid #e5e7eb", borderRadius: "8px", minHeight: "200px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>This container will be covered by the loading overlay</p>
          <Button onClick={() => setIsLoading(true)}>Show Overlay Loading</Button>
          <Button variant="outlined" onClick={() => setIsLoading(false)}>Hide Loading</Button>
        </div>

        {isLoading && (
          <Loading
            text="Processing..."
            overlay
            size="large"
            variant="ring"
          />
        )}
      </div>
    );
  },
};

export const FullScreen: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading em tela cheia, ideal para carregamento de aplicação.',
      },
      source: {
        code: `
<Loading
  text="Loading application..."
  fullScreen
  size="large"
  variant="circle"
/>`
      }
    }
  },
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>Full screen loading example</p>
          <Button onClick={() => setIsLoading(true)}>Show Full Screen Loading</Button>
        </div>

        {isLoading && (
          <Loading
            text="Loading application..."
            fullScreen
            size="large"
            variant="circle"
          />
        )}
      </div>
    );
  },
};

export const WithoutText: Story = {
  args: {
    text: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading apenas com o spinner, sem texto.',
      },
      source: {
        code: '<Loading />'
      }
    }
  },
};

export const CustomText: Story = {
  args: {
    text: "Carregando dados...",
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading com texto personalizado.',
      },
      source: {
        code: '<Loading text="Carregando dados..." />'
      }
    }
  },
};

export const DifferentColors: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Diferentes cores disponíveis para o loading.',
      },
      source: {
        code: `
// Primary (padrão)
<Loading text="Loading primary..." color="primary" />

// Secondary
<Loading text="Loading secondary..." color="secondary" />

// Success
<Loading text="Loading success..." color="success" />

// Alert
<Loading text="Loading alert..." color="alert" />

// Neutral
<Loading text="Loading neutral..." color="neutral" />`
      }
    }
  },
  render: () => {
    const colors = ["primary", "secondary", "success", "alert", "neutral"] as const;
    const [activeColor, setActiveColor] = useState<string | null>(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem" }}>
        {colors.map((color) => (
          <div key={color} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Button onClick={() => setActiveColor(color)}>
              Show {color} color
            </Button>
            {activeColor === color && (
              <Loading
                text={`Loading ${color}...`}
                color={color}
              />
            )}
          </div>
        ))}
      </div>
    );
  },
};

export const Combinations: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Combinações de diferentes propriedades do loading.',
      },
      source: {
        code: `
// Overlay com ring spinner
<Loading 
  text="Processando..." 
  overlay 
  variant="ring" 
  color="success" 
/>

// Fullscreen com pulse  
<Loading 
  text="Inicializando..." 
  fullScreen 
  variant="pulse"
  size="large"
/>

// Small loading sem overlay
<Loading 
  text="Carregando..." 
  size="small" 
  color="secondary" 
/>`
      }
    }
  },
  render: () => {
    const combinations = [
      { text: "Processando...", overlay: true, variant: "ring" as const, color: "success" as const },
      { text: "Inicializando...", fullScreen: true, variant: "pulse" as const, size: "large" as const },
      { text: "Carregando...", size: "small" as const, color: "secondary" as const },
    ];
    
    const [activeCombination, setActiveCombination] = useState<number | null>(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem" }}>
        {combinations.map((combo, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Button onClick={() => setActiveCombination(index)}>
              Show Combination {index + 1}
            </Button>
            {activeCombination === index && (
              <div style={combo.fullScreen ? {} : { position: "relative", minHeight: "150px", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "1rem" }}>
                <Loading {...combo} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  },
};
