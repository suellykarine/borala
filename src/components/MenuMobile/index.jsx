import * as S from "./style.js";
import Menu from "../../img/menu3barras.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const MenuMobile = ({ setCurrentState, setCurrentInput }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <S.DisplayMenuMob open={isOpen}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <figure>
          <img className="Menu" src={Menu} alt="Menu"></img>
        </figure>
      </div>
      <S.HandleMenu isOpen={isOpen}>
        <S.LinkStyled to="/newEvent">NOVO EVENTO</S.LinkStyled>
        <S.LinkStyled to="/about">SOBRE</S.LinkStyled>
        <S.DivSelect>
          <select
            onChange={(event) => setCurrentState(event.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              ESTADO
            </option>
            <option value="Selecione seu Estado">TODOS</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </S.DivSelect>
        <S.DivInput>
          <FaSearch color="var(--white)" />
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
        <S.copyrightSpan>Copyright &#169; 2022 boralá</S.copyrightSpan>
      </S.HandleMenu>
    </S.DisplayMenuMob>
  );
};
