import Logo from "../../img/boralalogo.png";
import Equipe from "../../img/pageabout.png";
import * as S from "./style";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <S.Container>
        <div>
          <S.Header>
            <figure>
              <Link to ="/">
                <img src={Logo} alt="Logo">
                </img>
              </Link>
            </figure>
            <h2>SOBRE</h2>
          </S.Header>
          <S.divImg>
            <div>
              <img src={Equipe} alt="About us"></img>
            </div>
          </S.divImg>
          <div>
            <S.cardOne>
              <S.cardOneFirstSon>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02FJF4TBFX-1e469393a2ba-512"
                  alt=""
                ></img>
                <S.cardOneSecondSon>
                  <S.cardDescription>
                    <h3>Pedro Yvo Lucas</h3>
                      <div>
                        <h4>Tech Leader</h4>
                          <h5>(TL)</h5>
                      </div>
                  </S.cardDescription>
                  <S.cardOneThirdSon>
                    <a
                      type="button"
                      href="https://www.linkedin.com/in/pedro-yvo-lucas-98a6a11b0/?trk=public_profile_browsemaporiginalSubdomain=br"
                    >
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a
                      type="button"
                      href="https://github.com/pedrokaa2"
                    >
                      {" "}
                      <FaGithub />
                    </a>
                  </S.cardOneThirdSon>
                </S.cardOneSecondSon>
              </S.cardOneFirstSon>
              <S.cardOneFirstSon>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02LSDTA61M-fb3fc13059c3-512"
                  alt=""
                ></img>
                <S.cardOneSecondSon>
                <S.cardDescription>
                    <h3>William Hans</h3>
                      <div>
                        <h4>Scrum Master</h4>
                          <h5>(SM)</h5>
                      </div>
                  </S.cardDescription>
                  <S.cardOneThirdSon>
                    <a
                      type="button"
                      href="https://www.linkedin.com/in/william-damasio-62a6841a2/"
                    >
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a
                      type="button"
                      href="https://github.com/WHansD"
                    >
                      {" "}
                      <FaGithub />
                    </a>
                  </S.cardOneThirdSon>
                </S.cardOneSecondSon>
              </S.cardOneFirstSon>
              <S.cardOneFirstSon>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02LFB1TUET-6088027bf5f8-512"
                  alt=""
                ></img>
                <S.cardOneSecondSon>
                <S.cardDescription>
                    <h3>Rafael Halquema</h3>
                      <div>
                        <h4>Product Owner</h4>
                          <h5>(PO)</h5>
                      </div>
                  </S.cardDescription>
                  <S.cardOneThirdSon>
                    <a
                      type="button"
                      href="https://www.linkedin.com/in/rafael-francisco-halquema-dos-santos-398443137/"
                    >
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a
                      type="button"
                      href="https://github.com/rafaelfhsantos"
                    >
                      {" "}
                      <FaGithub />
                    </a>
                  </S.cardOneThirdSon>
                </S.cardOneSecondSon>
              </S.cardOneFirstSon>
            </S.cardOne>
          </div>
          <div>
          <S.cardOne>
              <S.cardOneFirstSon>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02N88F8NU8-ddfe17f67038-512"
                  alt=""
                ></img>
                <S.cardOneSecondSon>
                  <S.cardDescription>
                    <h3>Suélly Araújo</h3>
                      <div>
                        <h4>Quality Assurance</h4>
                          <h5>(QA)</h5>
                      </div>
                  </S.cardDescription>
                  <S.cardOneThirdSon>
                    <a
                      type="button"
                      href="https://www.linkedin.com/in/su%C3%A9lly-araujo-532409b9"
                    >
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a
                      type="button"
                      href="https://github.com/suellykarine"
                    >
                      {" "}
                      <FaGithub />
                    </a>
                  </S.cardOneThirdSon>
                </S.cardOneSecondSon>
              </S.cardOneFirstSon>
              <S.cardOneFirstSon>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02FTMDCABE-d62ae21856ef-512"
                  alt=""
                ></img>
                <S.cardOneSecondSon>
                <S.cardDescription>
                    <h3>Vinicius Nunes</h3>
                      <div>
                        <h4>Quality Assurance</h4>
                          <h5>(QA)</h5>
                      </div>
                  </S.cardDescription>
                  <S.cardOneThirdSon>
                    <a
                      type="button"
                      href="https://www.linkedin.com/in/vinicius-nunes-9584a823b/"
                    >
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a
                      type="button"
                      href="https://github.com/AcasaDAcolina"
                    >
                      {" "}
                      <FaGithub />
                    </a>
                  </S.cardOneThirdSon>
                </S.cardOneSecondSon>
              </S.cardOneFirstSon>
              <S.cardOneFirstSon>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02A15HQQB1-29781156b668-512"
                  alt=""
                ></img>
                <S.cardOneSecondSon>
                <S.cardDescription>
                    <h3>Lucas Corrêa</h3>
                      <div>
                        <h4>Quality Assurance</h4>
                          <h5>(QA)</h5>
                      </div>
                  </S.cardDescription>
                  <S.cardOneThirdSon>
                    <a
                      type="button"
                      href="https://www.linkedin.com/in/lucas-corr%C3%AAa-de-oliveira-a28789214/"
                    >
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a
                      type="button"
                      href="https://github.com/lucascorreaog"
                    >
                      {" "}
                      <FaGithub />
                    </a>
                  </S.cardOneThirdSon>
                </S.cardOneSecondSon>
              </S.cardOneFirstSon>
            </S.cardOne>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default About;

