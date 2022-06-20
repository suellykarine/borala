import styled from "styled-components";
import EventImg from "../../assets/boralaquadroedicao.png";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;

  span {
    text-transform: uppercase;
    color: var(--darkblue);
    font-weight: 800;
  }

  @media (min-width: 764px) {
    padding: 0 40px;
  }
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const Li = styled.div``;

export const Logo = styled.img`
  width: 150px;
  height: 40px;
  @media (min-width: 764px) {
    width: 180px;
    height: 50px;
  }
`;

export const SpanMeusEventos = styled.span`
  color: var(--orange);
  font-weight: bold;
  font-size: 14px;

  a {
    color: var(--darkblue);
  }

  @media (min-width: 764px) {
    font-size: 24px;
  }
`;

export const ImgEvent = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: var(--somewhatblue);
  background-image: url(${EventImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-height: 500px;
`;

export const CardBox = styled.div`
  display: flex;
  height: auto;
  overflow-x: scroll;
  margin-left: 30px;

  img {
    width: 150px;
  }

  @media (min-width: 490px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-height: 844px) {
    align-items: center;
    margin-left: 0;

    img {
      width: 160px;
    }
  }
`;

export const CardBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  margin-left: 2%;
  flex-direction: column;
  height: 280px;

  img {
    height: 150px;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CardDescription = styled.div`
  h3 {
    color: var(--darkblue);
    font-size: 12px;
    width: 75px;
    margin: 15px 0;
    text-transform: capitalize;
    text-align: center;
  }
  h4 {
    color: var(--orange);
    font-size: 12px;
    text-align: center;
  }
  h5 {
    color: var(--blue);
    font-size: 12px;
    margin-top: 20px;
    margin-left: 10px;
    text-align: center;
  }

  @media (min-width: 1200px) {
    h3,
    h4,
    h5 {
      font-size: 14px;
    }
  }

  @media (min-height: 844px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-top: 5px;
    }

    h3,
    div {
      flex-direction: column;
      width: 160px;
    }

    h3,
    h4,
    h5 {
      font-size: 14px;
    }
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EditButton = styled.button`
  padding: 0 5px;
  background-color: var(--white);
  border-radius: 5px;
  border: 1px var(--darkblue) solid;
  &:hover {
    background-color: var(--darkblue);
    border: 1px var(--white) solid;
    color: var(--white);
  }
`;

export const RemoveButton = styled.button`
  padding: 0 5px;
  margin-top: 5px;
  background-color: var(--white);
  border-radius: 5px;
  border: 1px var(--orange) solid;
  color: var(--orange);
  &:hover {
    background-color: var(--orange);
    border: 1px var(--white) solid;
    color: var(--white);
  }
`;

export const ConfirmModal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalMaterial = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding-bottom: 10px;
  border: none;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const ModalLock = styled.span`
  color: white;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  margin-bottom: 10px;
  padding: 5px 16px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  background-color: var(--darkblue);
  color: white;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2px 16px;
`;

export const YesButton = styled.div`
  color: var(--white);
  background-color: var(--darkblue);
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: var(--darkblue);
    background-color: var(--white);
    border: 1px solid var(--darkblue);
  }
`;

export const NoButton = styled.div`
  color: var(--white);
  background-color: var(--orange);
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: var(--orange);
    background-color: var(--white);
    border: 1px solid var(--orange);
  }
`;
