import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres.")
        .required("A senha é obrigatória"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais.")
        .required("Confirme sua senha"),
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
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 200 || status === 201) {
        console.log("aaaa");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        toast.success("Conta criada com sucesso. Efetue seu Login!");
      } else if (status === 409) {
        toast.error("Email já cadastrado! Faça o login para continuar.");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("⚠️ Falha no sistema! Tente novamente.");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger"></img>
      </LeftContainer>
      <RightContainer>
        <Tittle>
          <span>Criar Conta</span>
        </Tittle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
          </InputContainer>

          <Button type="submit">Registrar</Button>
        </Form>
        <P>
          Já possui conta? <Link>Clique aqui</Link>.
        </P>
      </RightContainer>
    </Container>
  );
}
