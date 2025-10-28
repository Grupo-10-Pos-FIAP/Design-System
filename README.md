# Design System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)

Uma biblioteca de componentes React moderna e acessível para criação de interfaces consistentes e escaláveis. Desenvolvido como projeto acadêmico para a Pós-graduação em Engineering Frontend da FIAP.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é importante ter um token do GitHub (com permissão `read:packages`).

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Sass](https://sass-lang.com)
- [Lucide React Icons](https://lucide.dev/)
- [Radix UI](https://www.radix-ui.com)
- [Vite](https://vite.dev)

## Instalação

### Método 1: Configuração por Projeto (Recomendado)

1. **Crie um arquivo `.npmrc` na raiz do seu projeto:**

```ini
@grupo-10-pos-fiap:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

2. **Configure seu token do GitHub:**

```bash
# Linux/macOS
export NODE_AUTH_TOKEN=ghp_seutokenaqui

# Windows (PowerShell)
$env:NODE_AUTH_TOKEN="ghp_seutokenaqui"

# Windows (CMD)
set NODE_AUTH_TOKEN=ghp_seutokenaqui
```

> **Não tem um token?** [Veja como criar um Personal Access Token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

3. **Instale o pacote:**

```bash
npm install @grupo-10-pos-fiap/design-system
```

### Método 2: Instalação Direta

```bash
npm install @grupo-10-pos-fiap/design-system --registry=https://npm.pkg.github.com/
```

## Uso Básico

```jsx
import { Button, Input } from '@grupo-10-pos-fiap/design-system';

export default function App() {
  return (
    <div>
      <Button variant="primary">Clique aqui</Button>
      <Input placeholder="Digite algo..." />
    </div>
  );
}
```

## Estrutura do Projeto

```text
design-system-base/
├── src/
│   ├── components/          # Componentes React
│   ├── styles/             # Estilos globais e temas
│   ├── utils/              # Utilitários e helpers
├── stories/                # Documentação Storybook
```

## Desenvolvimento

### Executar Localmente

```bash
# Clonar o repositório
git clone https://github.com/grupo-10-pos-fiap/Design-System.git
cd Design-System

# Instalar dependências
npm install

# Desenvolvimento (Vite)
npm run dev

# Storybook (Documentação)
npm run storybook

# Build de produção
npm run build

# Testes
npm run test
```

### Documentação Interativa

Acesse nossa documentação completa no Storybook:
**[https://grupo-10-pos-fiap.github.io/Design-System/](https://grupo-10-pos-fiap.github.io/Design-System/)**

## Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Faça um Fork** do projeto
2. **Crie uma Branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a Branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

## Suporte e Issues

Encontrou um problema ou tem uma sugestão?

- 📝 [Abra uma Issue](https://github.com/grupo-10-pos-fiap/Design-System/issues)
- 📚 [Consulte a Documentação](https://grupo-10-pos-fiap.github.io/Design-System/)
- 💬 Entre em contato com a equipe de desenvolvimento

## Licença

Este projeto é desenvolvido para fins acadêmicos como parte do programa de Pós-graduação em Engineering Frontend da FIAP.

---

**Desenvolvido por Grupo 10 - Pós-graduação em Engineering Frontend FIAP**
