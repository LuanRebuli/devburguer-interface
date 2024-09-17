import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  P,
  Link,
  RightContainer,
  Tittle,
} from "./styles";

export function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: yup.string().required("A senha é obrigatória"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const {
      data: { token },
    } = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      {
        peding: "Verificando seus dados",
        success: {
          render() {
            setTimeout(() => {
              navigate("/");
            }, 2000);
            return "Seja Bem Vindo(a)";
          },
        },
        error: "E-mail ou password estão incorretos.",
      }
    );

    localStorage.setItem("token", token);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger"></img>
      </LeftContainer>
      <RightContainer>
        <Tittle>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Tittle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <P>
          Não possui conta? <Link>Clique aqui</Link>.
        </P>
      </RightContainer>
    </Container>
  );
}
