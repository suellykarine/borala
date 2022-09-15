import { useEffect, useState } from "react";
import LogoNav from "../../assets/boralanav.png";
import LocationLogo from "../../assets/locationVector.svg";
import CardEvent from "../../components/CardEvent";
import { MenuDesktop } from "../../components/MenuDesktop";
import { MenuMobile } from "../../components/MenuMobile";
import Logo from "../../img/boralalogo.png";
import api from "../../service/api";
import * as S from "./style";

//import jwtDecode from "jwt-decode";
import { useEvent } from "../../Providers/event";

const Home = () => {
  const [currentState, setCurrentState] = useState("Selecione seu Estado");
  const [currentInput, setCurrentInput] = useState("");

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [events, setEvents] = useState([]);

  const token = JSON.parse(localStorage.getItem("@borala:token"));

  //const tokenId = token ? Number(jwtDecode(token).sub) : null;

  const { editEvent } = useEvent();

  const states = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goías",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraíma",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins",
  };

  useEffect(() => {
    api
      .get("/events")
      .then((response) => {
        setEvents(response.data.results);
        setFilteredEvents(response.data.results);
        console.log(response.data);
      })
      .catch((response) => console.log(response));
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events
        .filter(
          (event) =>
            event.city.toUpperCase().includes(currentInput.toUpperCase()) ||
            event.name.toUpperCase().includes(currentInput.toUpperCase())
        )
        .filter((eventState) =>
          currentState !== "Selecione seu Estado"
            ? eventState.state === currentState
            : true
        )
    );
  }, [currentState, currentInput]);

  return (
    <div>
      <S.Header>
        <figure>
          <img src={Logo} alt="Logo"></img>
        </figure>
        <MenuDesktop
          setCurrentState={setCurrentState}
          setCurrentInput={setCurrentInput}
        />
        <MenuMobile
          setCurrentState={setCurrentState}
          setCurrentInput={setCurrentInput}
        />
      </S.Header>
      <S.DivMain>
        <main>
          <S.NavImgDiv>
            <div>
              OS MELHORES EVENTOS DO BRASIL,
              <img src={LogoNav} alt="logoNav"></img>
            </div>
          </S.NavImgDiv>
          <S.LocationDiv>
            <img src={LocationLogo} alt="location"></img>
            <h2>
              {currentState !== "Selecione seu Estado"
                ? states[currentState]
                : "Selecione seu Estado"}
            </h2>
          </S.LocationDiv>
          <S.CardBox>
            {filteredEvents?.map((event) => (
              <S.CardBoxDiv key={event.id}>
                <img
                  src={event.image_url}
                  alt={event.title}
                  onClick={() => window.location.assign(event.site_url)}
                />
                <S.cardDescription>
                  <CardEvent
                    date={event.date.split("-").reverse().join("/")}
                    //address={event.address}
                    name={event.title}
                    city={event.address.city}
                    state={event.address.state}
                  />
                </S.cardDescription>
                {/* {tokenId === event.user && (
                  <S.editIcon onClick={() => editEvent(event)} />
                )} */}
              </S.CardBoxDiv>
            ))}
          </S.CardBox>
        </main>
        <S.copyrightSpan>Copyright &#169; 2022 boralá</S.copyrightSpan>
      </S.DivMain>
    </div>
  );
};

export default Home;
