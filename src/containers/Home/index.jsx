import { Banner, Container, Content } from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-Vindo!</h1>
      </Banner>
      <Container>
        <Content>
          <div>Carrossel Categorias</div>
          <div>Carrossel Produtos</div>
        </Content>
      </Container>
    </main>
  );
}
