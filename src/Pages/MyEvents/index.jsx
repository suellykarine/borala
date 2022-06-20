import { useState } from "react";
import * as S from "./style";

import { useEffect } from "react";
import { useEvent } from "../../Providers/event";
import {
  Logo,
  SpanMeusEventos,
  ImgEvent,
  UL,
  DivContainer,
  EditButton,
  RemoveButton,
  ModalMaterial,
  ConfirmModal,
  ModalTitle,
  ModalLock,
  ModalBody,
  YesButton,
  NoButton,
} from "./style";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/boralalogo.png";

const MyEvents = () => {
  const { eventList, editEvent, removeEvent } = useEvent();
  const [myEvents, setmyEvents] = useState([]);

  const [displayModal, setDisplayModal] = useState(false);
  const [eventModalName, setEventModalName] = useState("");
  const [eventId, setEventId] = useState(null);

  useEffect(() => {
    eventList().then((listaEventos) => {
      setmyEvents(listaEventos);
    });
  }, []);

  function handleRemove(id, name) {
    setDisplayModal(true);
    setEventModalName(name);
    setEventId(id);
  }

  return (
    <div>
      {displayModal && (
        <ConfirmModal
          onClick={(e) =>
            e.target === e.currentTarget && setDisplayModal(false)
          }
        >
          <ModalMaterial>
            <ModalTitle>
              <h2>Tem certeza que deseja excluir o evento {eventModalName}?</h2>
              <ModalLock onClick={() => setDisplayModal(false)}>
                &times;
              </ModalLock>
            </ModalTitle>
            <ModalBody>
              <YesButton onClick={() => removeEvent(eventId)}>Sim</YesButton>
              <NoButton onClick={() => setDisplayModal(false)}>Não</NoButton>
            </ModalBody>
          </ModalMaterial>
        </ConfirmModal>
      )}
      <S.Header>
        <Link to="/">
          <Logo src={LogoImg} alt="logo borala" />
        </Link>
        <SpanMeusEventos>MEUS EVENTOS</SpanMeusEventos>
      </S.Header>
      <ImgEvent />

      <S.CardBox>
        <UL>
          {myEvents.map((listEvents) => {
            return (
              <DivContainer key={listEvents.id}>
                <S.CardBoxDiv>
                  <S.Li>
                    <img src={listEvents.imgUrl} alt="img-event" />
                  </S.Li>
                </S.CardBoxDiv>
                <S.CardDescription>
                  <EditButton onClick={() => editEvent(listEvents)}>
                    Editar
                  </EditButton>
                  <S.Li>
                    <h3> {listEvents.name}</h3>
                  </S.Li>
                  <S.Li>
                    <h4>
                      {listEvents.city} - {listEvents.state}
                    </h4>
                  </S.Li>
                  <S.Li>
                    <h5>{listEvents.date.split("-").reverse().join("/")}</h5>
                  </S.Li>

                  <RemoveButton
                    onClick={() => handleRemove(listEvents.id, listEvents.name)}
                  >
                    Excluir
                  </RemoveButton>
                </S.CardDescription>
              </DivContainer>
            );
          })}
        </UL>
      </S.CardBox>
    </div>
  );
};

export default MyEvents;

///
