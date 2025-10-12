import { Meta, StoryObj } from "@storybook/react-vite";
import { Loading } from "@components/Loading/Loading";
import { LoadingProps } from "@components/Loading/interface";
import { Button } from "@components/Button/Button";
import { useState } from "react";

const ControlledLoading = (args: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button onClick={() => setIsLoading(true)}>
        Show Loading
      </Button>
      
      <Button variant="outline" onClick={() => setIsLoading(false)}>
        Hide Loading
      </Button>

      {isLoading && <Loading {...args} />}
    </div>
  );
};

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
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
      size: "md",
      color: "primary",
      variant: "default",
    },
  },
};

export const SpinnerVariants: Story = {
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
                  size: "md",
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
  render: () => {
    const sizes = ["sm", "md", "lg"] as const;
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
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <div style={{ position: "relative", padding: "2rem", border: "1px solid #e5e7eb", borderRadius: "8px", minHeight: "200px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>This container will be covered by the loading overlay</p>
          <Button onClick={() => setIsLoading(true)}>Show Overlay Loading</Button>
          <Button variant="outline" onClick={() => setIsLoading(false)}>Hide Loading</Button>
        </div>

        {isLoading && (
          <Loading
            text="Processing..."
            overlay
            spinnerProps={{
              size: "lg",
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
              size: "lg",
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
      size: "md",
      color: "primary",
      variant: "default",
    },
  },
};