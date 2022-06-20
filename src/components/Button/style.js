import styled from "styled-components";

export const Container = styled.button`
  background: var(--darkblue);
  color: var(--white);
  border-radius: 15px;
  border: none;
  min-width: 240px;
  max-width: 352px;
  height: 60px;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  margin-top: 20px;

  @media (min-width: 768px) {
    height: ${(props) => (props.height ? props.height : "60px")};

    width: ${(props) => (props.width ? props.width : "352px")};
  }
`;
