import { Link } from "react-router-dom";
import styled from "styled-components";

export const DisplayMenuMob = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const HandleMenu = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  background-color: var(--darkblue);
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 18px;
  width: 100%;
  height: calc(100vh - 70px);
  right: 0;
  top: 120px;
  position: absolute;
  z-index: 51;
  animation: AppearFromRight 1s;

  a {
    color: var(--white);
    margin: 5px;
    font-size: 14px;
  }

  @keyframes AppearFromRight {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`;

export const LinkStyled = styled(Link)`
  border: 1px var(--white) solid;
  padding: 10px 5px 10px 20px;
  border-radius: 20px;
  &:hover {
    color: var(--darkblue);
    background-color: var(--white);
  }
`;

export const DivSelect = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border: 1px solid var(--white);
  border-radius: 20px;

  select {
    background: none;
    color: var(--white);
    margin-top: 5px;
    border: none;
    padding: 10px 3px;
    font-size: 13px;
    width: 95%;
    &:focus {
      color: #000;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 14px;
  border: 1px solid var(--white);
  border-radius: 20px;

  input {
    background: none;
    color: var(--white);
    flex: 1;
    border: none;
    font-size: 13px;

    ::placeholder {
      color: var(--white);
      opacity: 45%;
    }
  }
`;

export const DivButton = styled.div`
  button {
    background: none;
    color: var(--white);
    border: 1px solid var(--white);
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 20px;
    &:hover {
      color: var(--darkblue);
      background-color: var(--white);
    }
  }
`;
export const copyrightSpan = styled.span`
  color: var(--white);
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
`;
