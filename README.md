# Hospital Portal

Aplicativo mobile para gerenciamento de exames médicos e agendamentos, com foco em segurança e experiência centrada no usuário.

## Overview

**Hospital Portal** é uma aplicação React Native construída com Expo e roteamento via Expo Router. O projeto oferece funcionalidades de autenticação, formulários personalizados e navegação intuitiva para pacientes gerenciarem seus exames e agendamentos médicos.

## Tech Stack

- **Framework**: [Expo](https://expo.dev/) (~54.0.33)
- **Mobile**: [React Native](https://reactnative.dev/) (0.81.5)
- **Roteamento**: [Expo Router](https://expo.github.io/router/) (~6.0.23)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (~5.9.2)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (3.4.19) + [NativeWind](https://www.nativewind.dev/) (4.2.1)
- **Ícones**: [lucide-react-native](https://lucide.dev/guide/packages/lucide-react-native) (0.563.0)
- **Animações**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (~4.1.1)
- **Safe Area**: [react-native-safe-area-context](https://github.com/th3rdEye/react-native-safe-area-context) (~5.6.0)
- **Picker**: [@react-native-picker/picker](https://github.com/react-native-picker/picker) (2.11.1)
- **Ferramentas de Dev**: Prettier, Babel, Metro

## Features

- ✅ Autenticação (login, cadastro, recuperação de senha)
- ✅ Formulários com validações e ícones personalizados
- ✅ Navegação baseada em arquivos (Expo Router)
- ✅ Design responsivo com Tailwind CSS
- ✅ Suporte multiplataforma (iOS, Android, Web)

## Project Structure
hospital-portal/
├── src/
│ ├── app/ # Rotas e telas (Expo Router)
│ │ ├── (auth)/ # Grupo de rotas de autenticação
│ │ │ ├── _layout.tsx
│ │ │ ├── login.tsx
│ │ │ ├── signIn.tsx # Tela de cadastro
│ │ │ └── forgetPassword.tsx
│ │ ├── (dashboard)/ # Grupo de rotas do dashboard
│ │ ├── _layout.tsx
│ │ └── index.tsx
│ ├── components/ # Componentes reutilizáveis
│ │ ├── auth/ # Componentes de autenticação
│ │ ├── ButtonComponent.tsx
│ │ ├── InputComponent.tsx
│ │ ├── IconComponent.tsx
│ │ └── PickerComponent.tsx
│ ├── hooks/ # Custom hooks
│ └── utils/ # Utilitários
├── my-expo-app/ # Configuração do Expo
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── metro.config.js
└── babel.config.js

## Getting Started

### Pré-requisitos

- Node.js (16+)
- pnpm (recomendado) ou npm
- Expo CLI: `npm install -g expo-cli`

### Instalação

```bash
# Instalar dependências
pnpm install
# Iniciar servidor Expo
pnpm start

# Abrir no Android
pnpm android

# Abrir no iOS
pnpm ios

# Versão web
pnpm web

Após executar pnpm start, use o Metro/Expo DevTools para escolher a plataforma desejada.

Scripts Disponíveis
Script	Descrição
pnpm start	Inicia o servidor Expo
pnpm android	Abre no emulador/dispositivo Android
pnpm ios	Abre no simulador iOS
pnpm web	Inicia a versão web
Configuração
Tailwind CSS: tailwind.config.js
TypeScript: tsconfig.json
Babel: babel.config.js
Metro: metro.config.js
Contributing
Siga o padrão TypeScript + NativeWind
Use Prettier para formatação
Abra PRs pequenas e descritivas
Teste suas alterações antes de submeter
License
Proprietary © Aspect Hospital Portal

