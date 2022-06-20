import styled, { keyframes } from "styled-components";
import SignupImage from "../../assets/signup.svg";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export const AiEye = styled(AiFillEye)`
  color: var(--grey);
  position: relative;
  top: -32px;
  left: 100px;
  cursor: pointer;
  @media (min-width: 728px) {
    top: -32px;
    left: 140px;
  }
`;
export const AiEyeInvisible = styled(AiFillEyeInvisible)`
  color: var(--grey);
  position: relative;
  top: -32px;
  left: 100px;
  cursor: pointer;
  @media (min-width: 728px) {
    top: -32px;
    left: 140px;
  }
`;


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    background: url(${SignupImage}) no-repeat center var(--lightblue);
    background-size: contain;
  }
  @media (min-width: 1300px) {
    background-size: auto auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 768px;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const appearFromRight = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
}

to { 
    opacity: 1;
    transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 300px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
    }

    > div {
      margin-top: 16px;
    }

    p {
      margin-top: 8px;
      color: var(--darkblue);
      font-weight: bold;
    }

    a {
      font-weight: bold;
      color: var(--blue);
    }
    img {
      width: 17%;
    }
  }

  button {
    :hover {
      cursor: pointer;
      opacity: 70%;
    }
  }

  @media (min-width: 768px){
    form {
      width: 340px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ErrorSpan = styled.span`
  color: var(--orange);
  background-color: var(--white);
  padding: 0 5px;
  z-index: 50;
  position: relative;
  top: -10px;
  margin-bottom: -20px;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;