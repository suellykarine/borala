import { createContext, useContext, useEffect, useState } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";

const AuthenticatedContext = createContext([]);

export const AuthenticatedProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  const login = (data, history) => {
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem("@borala:token", JSON.stringify(accessToken));
        localStorage.setItem("@borala:userId", JSON.stringify(user.id));

        setAuthenticated(true);

        history.push("/");
        toast.success("Login efetuado com sucesso");
      })
      .catch((err) => toast.error("email ou senha incorretos"));
  };

  return (
    <AuthenticatedContext.Provider
      value={{ authenticated, setAuthenticated, login }}
    >
      {children}
    </AuthenticatedContext.Provider>
  );
};

export const useAuthenticated = () => useContext(AuthenticatedContext);
