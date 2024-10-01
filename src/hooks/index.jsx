import UserProvider from "./UserContext";
import CartProvider from "./CartContext";

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

export default AppProvider;
