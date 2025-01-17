import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from "./styles";

import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();

  const { pathname } = useResolvedPath();

  useEffect(() => {
    const userData = localStorage.getItem("devburger:userData");
    if (!userData) {
      navigate("/login");
    }
  }, [navigate]);

  const userData = localStorage.getItem("devburger:userData");
  const parsedData = userData ? JSON.parse(userData) : null;
  const isAdmin = parsedData?.admin;

  function logoutUser() {
    logout();
    navigate("/login");
  }
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to={"/"} $isActive={pathname === "/"}>
              Home
            </HeaderLink>
            <hr />
            <HeaderLink to={"/cardapio"} $isActive={pathname === "/cardapio"}>
              Cardápio
            </HeaderLink>
            <hr />
            {isAdmin ? (
              <HeaderLink to={"admin/pedidos"}>Painel</HeaderLink>
            ) : (
              <></>
            )}
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#fff" size={24} />
            <HeaderLink to={"/carrinho"}>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
};

export default Header;
