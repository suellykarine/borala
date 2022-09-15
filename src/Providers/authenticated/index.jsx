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

  const login = async (data, history) => {
    
    try{
      const loginResponse   = await api.post("/login/", data)
      const profileResponse = await api.get("/profile/", {
        headers: {
          Authorization: `Token ${loginResponse.data.token}` 
        }
      });

      const { token } = loginResponse.data;
      const { id    } = profileResponse.data;

      localStorage.setItem("@borala:token", JSON.stringify(token));
      localStorage.setItem("@borala:userId", JSON.stringify(id));
      
      setAuthenticated(true);

      history.push("/");
      toast.success("Login efetuado com sucesso");
    }
    catch(err){
      toast.error("Login ou senha incorretos")
    }
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
