    
import React from "react";
import { Meta } from "@storybook/react";
import DropdownDemo from "../components/Dropdown/Dropdown";

const meta: Meta<typeof DropdownDemo> = {
  title: "Components/Dropdown",
  component: DropdownDemo,
  parameters: {
    docs: {
      description: {
        component: `
Dropdown Radix UI com suporte a:

- Tamanhos: small, medium, large
- Itens normais
- Checkbox
- Radio
- Submenus
- RightSlot (atalhos ou indicadores)
        `,
      },
    },
  },
};

export default meta;

export const Default = () => <DropdownDemo size="medium" />;
export const Small = () => <DropdownDemo size="small" />;
export const Large = () => <DropdownDemo size="large" />;
