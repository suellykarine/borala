import { createContext, useContext, useState } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  // const removeEvent = (id) => {
  //   api.delete(`/events/${id}`)
  // };

  const history = useHistory();

  const removeEvent = (id) => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .delete(`/events/${id}`, config)
      .then(() => {
        toast.warning("Evento removido!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado ocorreu!");
      });
  };

  const eventRegister = (data, history) => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));
    data.userId = Number(jwt_decode(token).sub);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .post("/events/", data, config)
      .then((response) => {
        history.push("/myEvents");
        toast.success("Evento cadastrado!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado ocorreu!");
      });
  };

  const eventList = async () => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));

    const userId = JSON.parse(localStorage.getItem("@borala:userId"));
    let dataReturn = [];
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await api
      .get(`/events?userId=${userId}`, config)
      .then((response) => {
        dataReturn = response.data;
      })
      .catch((err) => {
        dataReturn = err.response.data;
      });

    return dataReturn;
  };

  const eventUpdate = (data, history) => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));
    data.userId = Number(jwt_decode(token).sub);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .patch(`/events/${data.id}`, data, config)
      .then((response) => {
        history.push("/");
        toast.success("Evento atualizado!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado ocorreu!");
      });
  };

  function editEvent(event) {
    history.push("/editEvent", event);
  }

  return (
    <EventContext.Provider
      value={{ eventRegister, eventList, eventUpdate, editEvent, removeEvent }}
    >
      {" "}
      {children}{" "}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
