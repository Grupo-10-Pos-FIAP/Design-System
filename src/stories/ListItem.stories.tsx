import { Meta, StoryObj } from "@storybook/react-vite";
import { ListItem , ListItemProps} from "@components/ListItem/ListItem";
import { IconKeys } from "@components/Icon/Icon";
import { useState } from "react";

const ListItemContainer = (args: ListItemProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div style={{ width: "300px" }}>
      <ListItem
        {...args}
        isActive={activeItem === args.label}
        onClick={() => {
          setActiveItem(args.label);
          args.onClick?.();
        }}
      />
    </div>
  );
};

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  argTypes: {
    label: {
      control: "text",
      description: "Texto exibido no item da lista",
    },
    icon: {
      control: "select",
      options: ["Home", "User", "Settings", "Bell", "Mail", "Search", "Heart", "Star"],
      description: "Ícone opcional à esquerda do texto",
    },
    isActive: {
      control: "boolean",
      description: "Estado ativo do item",
    },
    onClick: {
      action: "clicked",
      description: "Função chamada ao clicar no item",
    },
  },
  render: (args) => <ListItemContainer {...args} />,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    label: "Menu Item",
    onClick: () => console.log("Item clicado"),
  },
  parameters: {
    docs: {
      source: {
        code: `<ListItem \n  label="Menu Item" \n  onClick={() => console.log('Item clicado')} \n/>`
      }
    }
  },
};

export const WithIcon: Story = {
  args: {
    label: "Perfil",
    icon: "User",
    onClick: () => console.log("Perfil clicado"),
  },
  parameters: {
    docs: {
      source: {
        code: `<ListItem \n  label="Perfil" \n  icon="User" \n  onClick={() => console.log('Perfil clicado')} \n/>`
      }
    }
  },
};

export const Active: Story = {
  args: {
    label: "Configurações",
    icon: "Settings",
    isActive: true,
    onClick: () => console.log("Configurações clicado"),
  },
  parameters: {
    docs: {
      source: {
        code: `<ListItem \n  label="Configurações" \n  icon="Settings" \n  isActive={true} \n  onClick={() => console.log('Configurações clicado')} \n/>`
      }
    }
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Item sem ícone",
    onClick: () => console.log("Item sem ícone clicado"),
  },
  parameters: {
    docs: {
      source: {
        code: `<ListItem \n  label="Item sem ícone" \n  onClick={() => console.log('Item sem ícone clicado')} \n/>`
      }
    }
  },
};

export const NavigationExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "8px" }}>
  <ListItem
    label="Dashboard"
    icon="Home"
    isActive={true}
    onClick={() => console.log('Dashboard clicado')}
  />
  <ListItem
    label="Perfil"
    icon="User"
    onClick={() => console.log('Perfil clicado')}
  />
  <ListItem
    label="Configurações"
    icon="Settings"
    onClick={() => console.log('Configurações clicado')}
  />
  <ListItem
    label="Notificações"
    icon="Bell"
    onClick={() => console.log('Notificações clicado')}
  />
  <ListItem
    label="Sair"
    onClick={() => console.log('Sair clicado')}
  />
</div>`
      }
    }
  },
  render: () => {
    const [activeItem, setActiveItem] = useState("Dashboard");

    const menuItems = [
      { label: "Dashboard", icon: "Home" as IconKeys },
      { label: "Perfil", icon: "User" as IconKeys },
      { label: "Configurações", icon: "Settings" as IconKeys },
      { label: "Notificações", icon: "Bell" as IconKeys },
      { label: "Sair" },
    ];

    return (
      <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>
    );
  },
};

export const Interactive: Story = {
  args: {
    label: "Item Interativo",
    icon: "Star",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Clique no item para ver a ação no painel de Actions",
      },
    },
  },
};

export const LongText: Story = {
  args: {
    label: "Este é um item de lista com um texto muito longo que deve ser truncado adequadamente",
    icon: "Mail",
    onClick: () => console.log("Item longo clicado"),
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra como o componente lida com textos longos",
      },
      source: {
        code: `<ListItem \n  label="Este é um item de lista com um texto muito longo que deve ser truncado adequadamente" \n  icon="Mail" \n  onClick={() => console.log('Item longo clicado')} \n/>`
      }
    }
  },
};

export const AllIcons: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "8px" }}>
  <ListItem label="Home" icon="Home" onClick={() => {}} />
  <ListItem label="User" icon="User" onClick={() => {}} />
  <ListItem label="Settings" icon="Settings" onClick={() => {}} />
  <ListItem label="Bell" icon="Bell" onClick={() => {}} />
  <ListItem label="Mail" icon="Mail" onClick={() => {}} />
  <ListItem label="Search" icon="Search" onClick={() => {}} />
  <ListItem label="Heart" icon="Heart" onClick={() => {}} />
  <ListItem label="Star" icon="Star" onClick={() => {}} />
</div>`
      }
    }
  },
  render: () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const iconItems = [
      { label: "Home", icon: "Home" as IconKeys },
      { label: "User", icon: "User" as IconKeys },
      { label: "Settings", icon: "Settings" as IconKeys },
      { label: "Bell", icon: "Bell" as IconKeys },
      { label: "Mail", icon: "Mail" as IconKeys },
      { label: "Search", icon: "Search" as IconKeys },
      { label: "Heart", icon: "Heart" as IconKeys },
      { label: "Star", icon: "Star" as IconKeys },
    ];

    return (
      <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {iconItems.map((item) => (
          <ListItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>
    );
  },
};
