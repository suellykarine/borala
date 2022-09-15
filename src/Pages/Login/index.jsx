import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import BoraLaLogo from "../../assets/boralalogo.png";
import Button from "../../components/Button";
import { useAuthenticated } from "../../Providers/authenticated";
import "./style";
import {
  AiEye,
  AiEyeInvisible,
  AnimationContainer,
  Background,
  ButtonLogin,
  Container,
  Content,
  Error,
  ErrorSpan,
  Inputs,
  InputsP,
} from "./style";
import "./style.js";

const Login = () => {
  const [visible, setVisible] = useState(true);

  const passwordVisible = () => {
    setVisible(!visible);
  };

  const { login } = useAuthenticated();

  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data) => {
    console.log(data)
    login(data, history);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <div>
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1>LOGIN</h1>
              <p>
                Não tem uma conta <img src={BoraLaLogo} alt="borala"></img> ?
                Faça seu <Link to="/signup">Cadastro</Link>
              </p>
              <p className="Home">
                Você não é uma empresa <img src={BoraLaLogo} alt="borala"></img>{" "}
                ? Entre na <Link to="/">Home</Link>
              </p>
              <Inputs type="text" placeholder="LOGIN" {...register("username")} />

              {errors.username && <ErrorSpan>{errors.username.message}</ErrorSpan>}
              <InputsP
                type={visible ? "password" : "text"}
                placeholder="SENHA"
                {...register("password")}
              />
              <Error>{errors.password?.message}</Error>
              {visible ? (
                <AiEye onClick={passwordVisible} />
              ) : (
                <AiEyeInvisible onClick={passwordVisible} />
              )}
              <ButtonLogin>
                <Button type="submit">ENTRAR</Button>
              </ButtonLogin>
            </form>
          </div>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
