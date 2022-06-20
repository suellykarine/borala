import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthenticated } from "../../Providers/authenticated";
import "./style";
import Button from "../../components/Button";
import BoraLaLogo from "../../assets/boralalogo.png";
import "./style.js";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Inputs,
  InputsP,
  Error,
  ButtonLogin,
  AiEye,
  AiEyeInvisible,
  ErrorSpan,
} from "./style";

const Login = () => {
  const [visible, setVisible] = useState(true);

  const passwordVisible = () => {
    setVisible(!visible);
  };

  const { login } = useAuthenticated();

  const history = useHistory();

  const formSchema = yup.object().shape({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data) => {
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
              <Inputs type="text" placeholder="EMAIL" {...register("email")} />

              {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
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
