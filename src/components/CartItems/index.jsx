import Table from "../Table";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { ButtonGroup, EmptyCart, ProductImage, TrashImg } from "./styles";
import TrashIcon from "../../assets/trash.svg";

export const CartItems = () => {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();
  console.log(cartProducts);
  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Produtos</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt="" />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{formatPrice(product.price)}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <strong>{formatPrice(product.quantity * product.price)}</strong>
              </Table.Td>
              <Table.Td>
                <TrashImg
                  src={TrashIcon}
                  alt="lixeira"
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
};
