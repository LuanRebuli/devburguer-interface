import Logo from "../../assets/logo.svg";
import { Banner, Container, Content, Title } from "./styles";

const Cart = () => {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburger" />
      </Banner>

      <Title>Checkout - Pedido</Title>
      <Content>
        {/* <CartItems/>
        <CartResume/> */}
      </Content>
    </Container>
  );
};

export default Cart;
