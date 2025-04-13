# 🍔 DevBurguer Interface

Interface web desenvolvida como parte do projeto de conclusão do curso **DevClub**, para consumo da **DevBurguer API**. Essa aplicação simula o painel de controle de pedidos de uma hamburgueria.

---

## 🧾 Descrição

O objetivo da aplicação é permitir o gerenciamento visual dos pedidos feitos na hamburgueria. A interface consome a API REST criada no projeto backend, exibindo os pedidos em tempo real e possibilitando a atualização de status.

---

## 🖥️ Funcionalidades

- ✅ Criar pedido com nome do cliente e pedido
- 📋 Visualizar lista de pedidos com status
- 🔄 Atualizar status do pedido para "Pronto"
- ❌ Deletar pedido da lista

---

## 🛠️ Tecnologias utilizadas

- **React JS**
- **Vite**
- **JavaScript**
- **Axios**
- **Styled Components**
- **React Icons**

---

## 📁 Estrutura de pastas

```bash
src/
  ├── assets/          # Ícones e imagens
  ├── components/      # Componentes reutilizáveis (ex: CardPedido)
  ├── pages/           # Página principal da aplicação
  ├── services/        # Configuração do axios (base da API)
  ├── styles/          # Estilizações globais e reset
  └── main.jsx         # Ponto de entrada da aplicação
```

---

## 📦 Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/LuanRebuli/devburguer-interface.git
cd devburguer-interface
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

> 💡 Lembre-se de iniciar também a [DevBurguer API](https://github.com/LuanRebuli/devburguer-api) para a interface funcionar corretamente.

---

## 🔗 Comunicação com a API

A interface se comunica com a API REST via **Axios**, utilizando `http://localhost:3001` como baseURL. Certifique-se de que a API esteja rodando localmente.

---

## 📚 Conclusão do Curso

Esta interface faz parte do projeto final do **DevClub**, com foco em consolidar conhecimentos de frontend, integração com APIs, componentização e estilização com Styled Components.

---

## 👨‍💻 Desenvolvido por

[Luan Rebuli](https://github.com/LuanRebuli)
