import { Outlet, Navigate } from "react-router-dom";
import { SideNavAdmin } from "../../components/SideNavAdmin";
import { Container } from "./styles";

export function AdminLayout() {
  const userData = localStorage.getItem("devburger:userData");
  const parsedData = userData ? JSON.parse(userData) : null;
  const isAdmin = parsedData?.admin;

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to={"/login"} />
  );
}
