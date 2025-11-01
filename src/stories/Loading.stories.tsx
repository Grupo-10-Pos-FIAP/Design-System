import { Meta, StoryObj } from "@storybook/react-vite";
import { Loading } from "@components/Loading/Loading";
import { LoadingProps } from "@components/Loading/interfaces";
import { Button } from "@components/Button/Button";
import { useState } from "react";
import { SpinnerColor } from "@components/Spinner/interfaces";

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
  argTypes: {
    text: {
      control: "text",
      description: "Text shown below the loader",
      defaultValue: "Loading...",
    },
    overlay: {
      control: "boolean",
      description: "Show as overlay on parent element",
      defaultValue: false,
    },
    fullScreen: {
      control: "boolean",
      description: "Show as full screen loading",
      defaultValue: false,
    },
  },
  render: (args) => <ControlledLoading {...args} />,
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    text: "Loading...",
    spinnerProps: {
      size: "medium",
      color: "primary",
      variant: "default",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Loading 
  text="Loading..." 
  spinnerProps={{
    size: "medium",
    color: "primary", 
    variant: "default"
  }} 
/>`
      }
    }
  },
};

export const SpinnerVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Loading 
  text="Loading with default spinner..." 
  spinnerProps={{
    size: "medium",
    color: "primary",
    variant: "default"
  }} 
/>

<Loading 
  text="Loading with dots spinner..." 
  spinnerProps={{
    size: "medium", 
    color: "primary",
    variant: "dots"
  }} 
/>

<Loading 
  text="Loading with ring spinner..." 
  spinnerProps={{
    size: "medium",
    color: "primary", 
    variant: "ring"
  }} 
/>

<Loading 
  text="Loading with pulse spinner..." 
  spinnerProps={{
    size: "medium",
    color: "primary",
    variant: "pulse" 
  }} 
/>`
      }
    }
  },
  render: () => {
    const variants = ["default", "dots", "ring", "pulse"] as const;
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
                spinnerProps={{
                  size: "medium",
                  color: "primary",
                  variant: variant,
                }}
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
      source: {
        code: `
<Loading 
  text="Loading (small)..." 
  spinnerProps={{
    size: "small",
    color: "primary",
    variant: "default"
  }} 
/>

<Loading 
  text="Loading (medium)..." 
  spinnerProps={{
    size: "medium",
    color: "primary", 
    variant: "default"
  }} 
/>

<Loading 
  text="Loading (large)..." 
  spinnerProps={{
    size: "large",
    color: "primary",
    variant: "default"
  }} 
/>`
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
                spinnerProps={{
                  size: size,
                  color: "primary",
                  variant: "default",
                }}
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
      source: {
        code: `
<div style={{ position: "relative", minHeight: "200px" }}>
  {/* Conteúdo da aplicação */}
  <p>Conteúdo da aplicação que será coberto pelo overlay</p>
  
  <Loading
    text="Processing..."
    overlay
    spinnerProps={{
      size: "large",
      color: "primary", 
      variant: "ring"
    }}
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
            spinnerProps={{
              size: "large",
              color: "primary",
              variant: "ring",
            }}
          />
        )}
      </div>
    );
  },
};

export const FullScreen: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Loading
  text="Loading application..."
  fullScreen
  spinnerProps={{
    size: "large",
    color: "primary",
    variant: "default"
  }}
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
            spinnerProps={{
              size: "large",
              color: "primary",
              variant: "default",
            }}
          />
        )}
      </div>
    );
  },
};

export const WithoutText: Story = {
  args: {
    spinnerProps: {
      size: "medium",
      color: "primary",
      variant: "default",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Loading 
  spinnerProps={{
    size: "medium",
    color: "primary",
    variant: "default"
  }} 
/>`
      }
    }
  },
};

export const CustomText: Story = {
  args: {
    text: "Carregando dados...",
    spinnerProps: {
      size: "medium",
      color: "primary",
      variant: "default",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Loading 
  text="Carregando dados..." 
  spinnerProps={{
    size: "medium",
    color: "primary",
    variant: "default"
  }} 
/>`
      }
    }
  },
};

export const DifferentColors: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Loading 
  text="Loading primary..." 
  spinnerProps={{
    size: "medium",
    color: "primary",
    variant: "default"
  }} 
/>

<Loading 
  text="Loading secondary..." 
  spinnerProps={{
    size: "medium",
    color: "secondary", 
    variant: "default"
  }} 
/>

<Loading 
  text="Loading success..." 
  spinnerProps={{
    size: "medium",
    color: "success",
    variant: "default"
  }} 
/>`
      }
    }
  },
  render: () => {
    const colors = ["primary", "secondary", "success", "warning", "error"] as SpinnerColor[];
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
                spinnerProps={{
                  size: "medium",
                  color: color,
                  variant: "default",
                }}
              />
            )}
          </div>
        ))}
      </div>
    );
  },
};