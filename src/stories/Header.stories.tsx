import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "@components/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const UserAvatar = () => (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "#555",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
  >
    U
  </div>
);

const Logo = () => (
  <img 
    src="/logo.svg" 
    alt="Logo" 
    style={{ height: "40px", width: "auto" }}
  />
);

export const Default: Story = {
  args: {
    avatar: <UserAvatar />,
    logo: <Logo />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Header 
  avatar={
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#555",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      U
    </div>
  }
  logo={
    <img 
      src="/logo.svg" 
      alt="Logo" 
      style={{ height: "40px", width: "auto" }}
    />
  }
/>
        `.trim()
      }
    }
  },
};

export const WithSvgUrl: Story = {
  args: {
    avatar: <UserAvatar />,
    logo: "/logo.svg",
  },
  parameters: {
    docs: {
      source: {
        code: `
<Header 
  avatar={<UserAvatar />}
  logo="/logo.svg"
/>
        `.trim()
      }
    }
  },
};

export const WithClickActions: Story = {
  args: {
    avatar: <UserAvatar />,
    logo: "/logo.svg",
    onLogoClick: () => console.log("Logo clicked!"),
    onAvatarClick: () => console.log("Avatar clicked!"),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Header 
  avatar={<UserAvatar />}
  logo="/logo.svg"
  onLogoClick={() => console.log("Logo clicked!")}
  onAvatarClick={() => console.log("Avatar clicked!")}
/>
        `.trim()
      }
    }
  },
};

export const WithoutAvatar: Story = {
  args: {
    logo: "/logo.svg",
    onLogoClick: () => console.log("Logo clicked!"),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Header 
  logo="/logo.svg"
  onLogoClick={() => console.log("Logo clicked!")}
/>
        `.trim()
      }
    }
  },
};