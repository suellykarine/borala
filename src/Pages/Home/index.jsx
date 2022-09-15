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
  const [currentState, setCurrentState] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  const [filteredEvents, setFilteredEvents] = useState([]);

  const tokenId = JSON.parse(localStorage.getItem("@borala:userId"));

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

  const getClosestEvents = async () => {
    const response    = await api.get("/events/closest/")
    const eventsArray = response.data.results

    setFilteredEvents(eventsArray)
  }

  const getFilteredEvents = async () => {
    const titleFilter   = await api.get(`/events?title=${currentInput}&state=${currentState}`)
    const cityFilter    = await api.get(`/events?city=${currentInput}&state=${currentState}`)

    console.log(cityFilter.data.results, titleFilter.data.results)

    const filteredArray = [
      ...titleFilter.data.results, 
      ...cityFilter.data.results
    ]

    const filteredHash  = {}

    filteredArray.forEach((event) => filteredHash[event.id]=event)

    setFilteredEvents(Object.values(filteredHash))
  }

  useEffect(() => {
    const getEvents = currentState || currentInput 
      ? getFilteredEvents
      : getClosestEvents
    
    getEvents()
    
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
              {currentState
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
                {tokenId === event.user_id && (
                  <S.editIcon onClick={() => editEvent(event)} />
                )}
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
