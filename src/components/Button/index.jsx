import { Container } from "./style";

const Button = ({ children, width, height, type, ...rest }) => {
  return (
    <Container {...rest} type={type} width={width} height={height}>
      {children}
    </Container>
  );
};

export default Button;
