import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
