import "./cities.scss";
import { Link } from "react-router-dom";
const Cities = () => {
  return (
    <section>
      <section className="header">
        <section className="navContainer">
          <div className="searchContainer1">
            <input type="text" className="searchInput" placeholder="Buscar" />
          </div>
          <p>¿Aún no te has decidido?</p>

          <Link className="link">
            <button className="housesButton1">
              ¡TE <br />
              ACONSEJAMOS!
            </button>
          </Link>
        </section>
      </section>
      <main>
        <ul>
          <li className="city">
            <div>
              <img
                alt="foto"
                src="https://images.adsttc.com/media/images/5ec7/e38f/b357/6579/0d00/00ce/newsletter/bionyl-1.jpg?1590158218"
              />
            </div>
            <div>
              <h2>Valencia</h2>
              <p>dsffsdfsdfsdfsdfsd</p>
              <p>Valoración</p>
            </div>
          </li>
          <li className="city">
            <div>
              <img
                alt="foto"
                src="https://images.adsttc.com/media/images/5ec7/e38f/b357/6579/0d00/00ce/newsletter/bionyl-1.jpg?1590158218"
              />
            </div>
            <div>
              <h2>Valencia</h2>
              <p>dsffsdfsdfsdfsdfsd</p>
              <p>Valoración</p>
            </div>
          </li>
          <li className="city">
            <div>
              <img
                alt="foto"
                src="https://images.adsttc.com/media/images/5ec7/e38f/b357/6579/0d00/00ce/newsletter/bionyl-1.jpg?1590158218"
              />
            </div>
            <div>
              <h2>Valencia</h2>
              <p>dsffsdfsdfsdfsdfsd</p>
              <p>Valoración</p>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Cities;
