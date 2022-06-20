import * as S from "./style.js";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const MenuDesktop = ({ setCurrentState, setCurrentInput }) => {
  const history = useHistory();

  return (
    <S.DisplayMenuDesk>
      <Link to="/newEvent">NOVO EVENTO</Link>
      <Link to="/about">SOBRE</Link>
      <S.DivSelect>
        <select
          onChange={(event) => setCurrentState(event.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            ESTADO
          </option>
          <option value="Selecione seu Estado">TODOS</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>
      </S.DivSelect>
      <S.DivInput>
        <FaSearch color="var(--darkblue)" />
        <input
          type="text"
          placeholder="EVENTO ou CIDADE"
          onChange={(event) => setCurrentInput(event.target.value)}
        />
      </S.DivInput>
      <S.DivButton>
        {localStorage.getItem("@borala:token") ? (
          <button
            onClick={() => {
              history.push("/login");
              localStorage.removeItem("@borala:token");
            }}
          >
            SAIR
          </button>
        ) : (
          <button
            onClick={() => {
              history.push("/login");
            }}
          >
            ENTRAR
          </button>
        )}
      </S.DivButton>
    </S.DisplayMenuDesk>
  );
};
