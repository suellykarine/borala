import styled from "styled-components";

export const DisplayMenuDesk = styled.div `
  display: none;

  @media (min-width: 1024px){
    display: flex;
    align-items: center;
    gap: 30px;
    
    a {
      color: var(--darkblue);
      font-size: 14px;
      display: flex;
      justify-content: center;
      width: 120px;

      :hover {
        cursor: pointer;
        border: 1px solid var(--darkblue);
        border-radius: 20px;
      }
    }
  }
`

export const DivSelect = styled.div `
  display: flex;
  width: 14%;
  justify-content: center;
  border: 1px solid var(--white);
  border-radius: 20px;

  select {
    background: none;
    color: var(--darkblue);
    border: none;
    padding: 10px 3px;
    font-size: 13px;
    width: 100%;
  }

`

export const DivInput = styled.div `
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 14px;
  border: 1px solid var(--darkblue);
  border-radius: 20px;

  input {
    background: none;
    color: var(--darkblue);
    flex: 1;
    border: none;
    font-size: 13px;
    
    ::placeholder {
      color: var(--darkblue);
      opacity: 85%;
      width: 100%;
      font-size: 10px;
    }
  }
`

export const DivButton = styled.div `
  button {
    background: var(--darkblue);
    color: var(--white);
    border: 1px solid var(--white);
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 20px;

    :hover {
      opacity: 70%;
      cursor: pointer;
    }
  }
`