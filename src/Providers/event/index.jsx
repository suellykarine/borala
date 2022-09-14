import { createContext, useContext } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  // const removeEvent = (id) => {
  //   api.delete(`/events/${id}`)
  // };

  const history  = useHistory()

  const formatData = (data) => {
    const formatedData = {...data}

    if (data.category){
      formatedData.categories = [data.category]

      delete formatedData.category
    }

    return formatedData
  }

  const removeEvent = (id) => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));
    const config = {
      headers: {
        Authorization: `Token ${token}`,
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
    const formatedData = formatData(data)

    const token = JSON.parse(localStorage.getItem("@borala:token"));
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    api
      .post("/events/", formatedData, config)
      .then((response) => {
        history.push("/myEvents");
        toast.success(`Evento cadastrado!`);
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
        Authorization: `Token ${token}`,
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
    const formatedData = formatData(data)

    const token = JSON.parse(localStorage.getItem("@borala:token"));
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    api
      .patch(`/events/${data.id}/`, formatedData, config)
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
