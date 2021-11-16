import "./cities.scss";
import { Link } from "react-router-dom";
import ComboBox from "../../Components/ComboBox";
const Cities = () => {
  return (
    <section>
      <section className="headerCity">
        <section className="navContainer">
          <div className="searchContainer1">
            <ComboBox className="searchInput" />
            <input type="text" className="searchInput" placeholder="Buscar" />
          </div>
          <p>¿AÚN NO HAS DECIDIDO?</p>
          <Link className="link">
            <button className="housesButton1">
              ¡TE <br />
              ACONSEJAMOS!
            </button>
          </Link>
        </section>
      </section>

      <div class="contenedorPrincipal">
        <div class="contenedorFila">
          <img
            src="https://images.adsttc.com/media/images/5ec7/e38f/b357/6579/0d00/00ce/newsletter/bionyl-1.jpg?1590158218"
            alt="foto"
            width="150"
            height="170"
          />
          <div class="contenedorTextos">
            <Link to="/cities/valencia">
              <p>Valencia</p>
              <p>1.254 Viviendas</p>
              <p>2184€/mes</p>
              <div class="contenedorIconos">
                <p>un icono</p>
                <p>el otro</p>
              </div>
            </Link>
          </div>
        </div>
        <div class="contenedorFila">
          <img
            src="https://images.adsttc.com/media/images/5ec7/e38f/b357/6579/0d00/00ce/newsletter/bionyl-1.jpg?1590158218"
            alt="foto"
            width="150"
            height="170"
          />
          <div class="contenedorTextos">
            <Link to="/cities/valencia">
              <p>Valencia</p>
              <p>1.254 Viviendas</p>
              <p>2184€/mes</p>
              <div class="contenedorIconos">
                <p>un icono</p>
                <p>el otro</p>
              </div>
            </Link>
          </div>
        </div>
        <div class="contenedorFila">
          <img
            src="https://images.adsttc.com/media/images/5ec7/e38f/b357/6579/0d00/00ce/newsletter/bionyl-1.jpg?1590158218"
            alt="foto"
            width="150"
            height="170"
          />
          <div class="contenedorTextos">
            <p>Valencia</p>
            <p>1.254 Viviendas</p>
            <p>2184€/mes</p>
            <div class="contenedorIconos">
              <p>un icono</p>
              <p>el otro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
