import { navLinks } from "./navLinks";
import Logo from "../../assets/logo.svg";
import { SignOut } from "@phosphor-icons/react";
import { Button, Container, Footer, NavLink, NavLinkContainer } from "./styles";
import { useUser } from "../../hooks/UserContext";
import { useNavigate, useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  const navigate = useNavigate();

  return (
    <Container>
      <Button asChild onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" />
      </Button>
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname == link.path}
          >
            {link.icon}

            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to={"/login"} onClick={logout}>
          <SignOut />
          <p>Sair</p>
        </NavLink>
      </Footer>
    </Container>
  );
}
