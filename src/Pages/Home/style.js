import styled from "styled-components";
import navImage from "../../assets/NavHomeImg.svg";
import { FiEdit } from "react-icons/fi";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;

  img {
    width: 180px;
  }

  .Menu {
    width: 47px;
  }
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 120px);
`;

export const NavImgDiv = styled.div`
  width: 100%;
  min-height: 120px;
  background-image: url(${navImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    color: var(--white);
    font-weight: 600;
    width: 74%;
    margin-left: 5%;
  }

  img {
    width: 25%;
    margin-left: 2px;
  }

  @media (min-height: 844px) {
    min-height: 250px;
  }

  @media (min-width: 768px) {
    height: 300px;

    div {
      width: 42%;
      font-size: 23px;
    }
  }
  @media (min-width: 1024px) {
    height: 400px;

    div {
      width: 50%;
      font-size: 43px;
    }
  }
  @media (min-width: 1440px) {
    height: 420px;

    div {
      width: 33%;
      font-size: 53px;
    }
  }
`;

export const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 30px 0px 30px;

  h2 {
    margin-left: 15px;
    text-transform: uppercase;
    font-size: 35px;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 30px;

    h2 {
      font-size: 20px;
    }
  }
`;

export const CardBox = styled.div`
  display: flex;
  height: auto;
  overflow-x: scroll;
  margin-left: 30px;

  img {
    width: 150px;
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
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 2%;
  flex-direction: column;
  height: 280px;

  img {
    height: 150px;
    object-fit: cover;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const cardDescription = styled.div`
  h3 {
    color: var(--darkblue);
    font-size: 12px;
    width: 75px;
    margin: 5px 10px;
    text-transform: capitalize;
  }
  div {
    display: flex;
    margin: 15px 10px;
    flex-direction: column;
  }
  h4 {
    color: var(--orange);
    margin-right: 3px;
    font-size: 12px;
    text-transform: capitalize;
  }
  h5 {
    color: var(--blue);
    font-size: 12px;
    margin-top: 20px;
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 18px;
      width: 200px;
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

export const copyrightSpan = styled.span`
  color: var(--darkblue);
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
`;

export const editIcon = styled(FiEdit)`
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 50;
  left: 150px;
  top: -240px;
  margin-top: -30px;
  margin-left: -30px;
  color: var(--white);
  filter: drop-shadow(1px 1px 0 #000);

  &:hover {
    cursor: pointer;
    color: var(--orange);
  }

  @media (min-width: 768px) {
    left: -200px;
    top: -40px;
  }
`;
