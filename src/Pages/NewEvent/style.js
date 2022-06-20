import styled from "styled-components";
import CoverImg from "../../assets/vectorcantoraevento.png";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  @media (min-width: 764px) {
    padding: 0 40px;
  }
`;

export const SpanNovoEvento = styled.span`
  color: var(--orange);
  font-weight: bold;
  font-size: 14px;

  a {
    color: var(--darkblue);

    :hover {
      cursor: pointer;
      opacity: 70%;
    }
  }

  @media (min-width: 764px) {
    font-size: 24px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 40px;
  @media (min-width: 764px) {
    width: 180px;
    height: 50px;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${CoverImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  max-height: 500px;
  @media (min-width: 764px) {
    height: 500px;
  }
`;

export const Form = styled.form`
  > button {
    display: block;
    margin: 20px auto 0 auto;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 764px) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(odd) {
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  background: var(--white);
  border-radius: 10px;
  border: ${(props) =>
    props.errorMsg ? "2px solid var(--orange)" : "2px solid var(--darkblue)"};
  padding: 0.5rem 1rem;
  height: 52px;
  width: 80%;
  transition: 0.4s;
  margin-top: 25px;

  font-family: "Nunito", sans-serif;
  font-size: 1rem;

  @media (min-width: 764px) {
    width: 338px;
    margin-top: 20px;
  }
`;

export const ErrorSpan = styled.span`
  color: var(--orange);
  background-color: var(--white);
  padding: 0 5px;
  z-index: 50;
  position: relative;
  top: -10px;
  margin-bottom: -20px;
  @media (min-width: 1024px) {
  }
`;

export const ImgEvent = styled.img`
  width: 200px;
  display: block;
  height: auto;
  margin: 20px auto 0 auto;
  border-radius: 20px;
`;
