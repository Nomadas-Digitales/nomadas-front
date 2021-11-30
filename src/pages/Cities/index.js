import "./cities.scss";
import imgBarcelona from "../../static/Barcelona.jpg";
import imgAsturias from "../../static/Asturias.jpg";
import imgCadiz from "../../static/Cadiz.jpg";
import imgMalaga from "../../static/Malaga.jpg";
import imgMadrid from "../../static/MADRID.jpg";
import imgMallorca from "../../static/Mallorca.jpg";
import imgGranada from "../../static/GRANADA.jpg";
import imgValencia from "../../static/FONDO-VALENCIA.jpg";

import { Link, useLocation } from "react-router-dom";
// import ComboBox from "../../Components/ComboBox";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";

const Cities = (props) => {
  const location = useLocation();

  const goBackUrl = () => {
    const locationState = props.location.state;
    return locationState ? locationState.goBackPath : "/home";
  };

  return (
    <section>
      <header className="headerCities">
        <Nav>
          <Link className="icon-TipoFlechaAtras" to={goBackUrl()} />
          <Searcher />
          <span className="icon-TipoMenuHamb falseClick"></span>
        </Nav>
        <h1>¿AÚN NO TE HAS DECIDIDO?</h1>
        <button>¡Te aconsejamos!</button>
      </header>

      <main class="mainCities">
        <section class="sectionCity">
          <div className="contentImg">
            <Link to="/cities/valencia">
              <img src={imgValencia} alt="fotografía de Valencia" />
            </Link>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <Link to="/cities/valencia">
                <h2>VALENCIA</h2>
              </Link>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>2.563 Vivienda</p>
            <p>2.186€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>4,07</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>34Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="sectionCity">
          <div className="contentImg">
            <a>
              <img src={imgGranada} alt="Fotografía de Granada" />
            </a>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <a>
                <h2>GRANADA</h2>
              </a>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>1.635 Vivienda</p>
            <p>2.317€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>3,05</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>25Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="sectionCity">
          <div className="contentImg">
            <a>
              <img src={imgMalaga} alt="Fotografía de Málaga" />
            </a>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <a>
                <h2>MÁLAGA</h2>
              </a>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>1.635 Vivienda</p>
            <p>2.318€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>3.54</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>31Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="sectionCity">
          <div className="contentImg">
            <a>
              <img src={imgMadrid} alt="Fotografía de Madrid" />
            </a>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <a>
                <h2>MADRID</h2>
              </a>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>12.937 Vivienda</p>
            <p>2.591€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>3.89</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>34Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="sectionCity">
          <div className="contentImg">
            <a>
              <img src={imgMallorca} alt="Fotografía de Mallorca" />
            </a>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <a>
                <h2>MALLORCA</h2>
              </a>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>1.874 Vivienda</p>
            <p>3.295€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>3,26</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>29Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="sectionCity">
          <div className="contentImg">
            <a>
              <img src={imgBarcelona} alt="foto" />
            </a>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <a>
                <h2>BARCELONA</h2>
              </a>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>6.591 Vivienda</p>
            <p>2.680€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>4,17</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>29Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="sectionCity">
          <div className="contentImg">
            <span className="falseClick">
              <img src={imgCadiz} alt="foto" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <a>
                <h2>CÁDIZ</h2>
              </a>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>1.245 Vivienda</p>
            <p>2.184€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>4,60</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>34Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>

        <section class="sectionCity">
          <div className="contentImg">
            <a>
              <img src={imgAsturias} alt="foto" />
            </a>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <a>
                <h2>OVIEDO</h2>
              </a>
              <a>
                <span className="icon-TipoCorazon"></span>
              </a>
            </div>
            <p>1.245 Vivienda</p>
            <p>2.184€/mes</p>
            <div class="contentIcons">
              <div class="contentIconFirst">
                <p>4,60</p>
                <span class="icon-Tipofavoritos"></span>
              </div>
              <div class="contentIconSecond">
                <p>34Mpbs</p>
                <span class="icon-TipoWIFI"></span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Cities;
