import { Route, Routes } from "react-router-dom";

import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";
import { Menu } from "../containers/Menu";
import Cart from "../containers/Cart";
import Checkout from "../containers/Checkout";
import CompletePayment from "../containers/CompletePayment";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { Admin } from "../containers/Admin";
import { Products } from "../containers/Admin/Products";
import { Orders } from "../containers/Admin/Orders";
import { NewProduct } from "../containers/Admin/NewProduct";
import { EditProduct } from "../containers/Admin/EditProduct";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novo-produto" element={<NewProduct />} />
        <Route path="/admin/editar-produto" element={<EditProduct />} />
        <Route path="/admin/produtos" element={<Products />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
