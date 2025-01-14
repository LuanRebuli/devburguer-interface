import { List, ListPlus, Receipt } from "@phosphor-icons/react";

export const navLinks = [
  {
    id: 1,
    label: "Pedidos",
    path: "/admin/pedidos",
    icon: <Receipt />,
  },
  {
    id: 2,
    label: "Produtos",
    path: "/admin/produtos",
    icon: <List />,
  },
  {
    id: 3,
    label: "Adicionar Produtos",
    path: "/admin/novo-produto",
    icon: <ListPlus />,
  },
];
