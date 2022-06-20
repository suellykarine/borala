import styled from "styled-components";
export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: ${(props) =>
    props.errorMsg ? "2px solid var(--orange)" : "2px solid var(--darkblue)"};
  padding: 1rem;
  height: 52px;
  width: 80%;
  transition: 0.4s;
  margin-top: 25px;
  @media (min-width: 768px) {
    width: 338px;
    margin-top: 20px;
  }
`;
export const Inputs = styled.input`
  background: transparent;
  align-items: center;
  flex: 1;
  border: 0;
  width: 100%;
  height: 100%;
`;
