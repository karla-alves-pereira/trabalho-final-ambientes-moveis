# Mini Sistema de Controle de Estoque

## Sobre o projeto

Este projeto foi desenvolvido como trabalho final da disciplina de Programação para Ambientes Móveis.

O aplicativo consiste em um mini sistema de gerenciamento de estoque, permitindo o cadastro, a consulta e a saída de produtos, com atualização dinâmica das quantidades disponíveis.

## Funcionalidades

- Autenticação simulada de usuários.
- Validação dos campos de login.
- Indicador de carregamento durante a autenticação.
- Cadastro de produtos com nome, preço e quantidade inicial.
- Listagem dos produtos cadastrados.
- Alerta de estoque baixo para produtos com cinco unidades ou menos.
- Busca e filtragem de produtos pelo nome.
- Seleção de produtos.
- Registro de saída de produtos.
- Validação da quantidade disponível.
- Atualização automática do estoque.

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Context API
- React Hooks (useState e useContext)
- StyleSheet
- Expo Vector Icons
- React Native Picker

## Organização do projeto

- `src/components/`: componentes reutilizáveis.
- `src/pages/`: telas do aplicativo.
- `src/routes/`: configuração das rotas e navegação.
- `src/context/`: gerenciamento global do estoque.
- `src/global/`: recursos globais do aplicativo.

A estilização das telas e dos componentes é organizada em arquivos separados, utilizando StyleSheet.create.

## Como executar o projeto

É necessário possuir o Node.js e o npm instalados.

### 1. Instalar as dependências

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

### 2. Iniciar o aplicativo

```bash
npx expo start
```

Para executar o aplicativo no navegador, pressione a tecla `w` após a inicialização do Expo.

Também é possível executar o aplicativo em um dispositivo móvel compatível por meio do Expo Go.

## Credenciais de acesso

Para acessar o sistema, utilize as seguintes credenciais de teste:

- **E-mail:** admin@estoque.com
- **Senha:** 123456

A autenticação é simulada, não sendo necessária a criação de uma conta.

## Armazenamento dos dados

Os dados são armazenados temporariamente na memória do aplicativo, utilizando Context API e useState.

Conforme os requisitos da atividade, não foi implementado um banco de dados. Dessa forma, os dados são reiniciados quando o aplicativo é recarregado.

## Finalidade acadêmica

O projeto foi desenvolvido para fins acadêmicos, aplicando conceitos de desenvolvimento de aplicações móveis, navegação, componentização, tipagem estática e gerenciamento de estados.
