import "./Header.scss";

interface HeaderProps {
  avatar?: React.ReactNode;
}

export function Header({ avatar }: HeaderProps) {
  return (
    <header className="header">
      {/* Logo */}
        <div className="header__logo">
            <img src="/vite.svg" alt="Logo da empresa" />
        </div>

        {/* Avatar do usuário */}
        <div className="header__avatar">{avatar}</div>
    </header>
  );
}
