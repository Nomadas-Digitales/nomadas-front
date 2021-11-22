import "./cities.scss";
import imgBarcelona from "../../static/Barcelona.jpg";
import imgAsturias from "../../static/Asturias.jpg";
import imgCadiz from "../../static/Cadiz.jpg";
import imgMalaga from "../../static/Malaga.jpg";
import imgMallorca from "../../static/Mallorca.jpg";
import imgValencia from "../../static/FONDO-VALENCIA.jpg";

import { Link, useHistory } from "react-router-dom";
// import ComboBox from "../../Components/ComboBox";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";

const Cities = () => {
  const history = useHistory();

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
              <img src={imgValencia} alt="foto" />
            </Link>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <Link to="/cities/valencia">
                <h2>VALENCIA</h2>
              </Link>
              <span className="icon-TipoCorazon"></span>
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
              <img src={imgCadiz} alt="foto" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>CÁDIZ</h2>
              </span>
              <span className="icon-TipoCorazon"></span>
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
              <img src={imgMalaga} alt="foto" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>MÁLAGA</h2>
              </span>
              <span className="icon-TipoCorazon"></span>
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
              <span className="icon-TipoCorazon"></span>
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
              <img src={imgMallorca} alt="foto" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>MALLORCA</h2>
              </span>
              <span className="icon-TipoCorazon"></span>
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
              <img src={imgBarcelona} alt="foto" />
            </span>
          </div>
          <div class="contentText">
            <div class="contentTextHeader">
              <span className="falseClick">
                <h2>BARCELONA</h2>
              </span>
              <span className="icon-TipoCorazon"></span>
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
