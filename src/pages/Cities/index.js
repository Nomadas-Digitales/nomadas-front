import "./cities.scss";
import imgBarcelona from "../../static/Barcelona.jpg";
import imgAsturias from "../../static/Asturias.jpg";
import imgCadiz from "../../static/Cadiz.jpg";
import imgMalaga from "../../static/Malaga.jpg";
import imgMadrid from "../../static/MADRID.jpg";
import imgMallorca from "../../static/Mallorca.jpg";
import imgGranada from "../../static/GRANADA.jpg";
import imgValencia from "../../static/FONDO-VALENCIA.jpg";

import { Link, useHistory, useLocation } from "react-router-dom";
// import ComboBox from "../../Components/ComboBox";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";

const Cities = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <section>
      <header className="headerCities">
        <Nav>
          <a className="icon-TipoFlechaAtras" onClick={history.goBack}></a>
          <Searcher />
          <span className="icon-TipoMenuHamb falseClick"></span>
        </Nav>
        <h1>¿AÚN NO TE HAS DECIDO?</h1>
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
              <Link
                to={{
                  pathname: "/cities/valencia/houses/favorite",
                  state: { prevPath: location.pathname },
                }}
              >
                <span className="icon-TipoCorazon"></span>
              </Link>
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
            <Link to="/cities/valencia">
              <img src={imgGranada} alt="Fotografía de Granada" />
            </Link>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <Link to="/cities/valencia">
                <h2>GRANADA</h2>
              </Link>
              <Link to="/cities/valencia/houses/favorite">
                <span className="icon-TipoCorazon"></span>
              </Link>
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
            <span className="falseClick">
              <img src={imgMalaga} alt="Fotografía de Málaga" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>MÁLAGA</h2>
              </span>
              <Link to="/cities/valencia/houses/favorite">
                <span className="icon-TipoCorazon"></span>
              </Link>
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
            <span className="falseClick">
              <img src={imgMadrid} alt="Fotografía de Madrid" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>MADRID</h2>
              </span>
              <Link to="/cities/valencia/houses/favorite">
                <span className="icon-TipoCorazon"></span>
              </Link>
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
            <span className="falseClick">
              <img src={imgMallorca} alt="Fotografía de Mallorca" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>MALLORCA</h2>
              </span>
              <Link to="/cities/valencia/houses/favorite">
                <span className="icon-TipoCorazon"></span>
              </Link>
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
            <span className="falseClick">
              <img src={imgBarcelona} alt="foto" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>BARCELONA</h2>
              </span>
              <Link to="/cities/valencia/houses/favorite">
                <span className="icon-TipoCorazon"></span>
              </Link>
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
              <span className="falseClick">
                <h2>CÁDIZ</h2>
              </span>
              <Link to="/cities/valencia/houses/favorite">
                <span className="icon-TipoCorazon"></span>
              </Link>
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
            <span className="falseClick">
              <img src={imgAsturias} alt="foto" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>OVIEDO</h2>
              </span>
              <Link to="/cities/valencia/houses/favorite">
                <span className="icon-TipoCorazon"></span>
              </Link>
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
