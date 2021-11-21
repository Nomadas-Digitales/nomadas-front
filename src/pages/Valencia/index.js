import "./valencia.scss";

import { Link } from "react-router-dom";

import Header from "Components/Header";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";
import CityDetail from "Components/CityDetail";
import userFetchAllHouse from "../../hooks/userFetchAllHouses";

const Valencia = () => {
  const id = 1;
  const { result } = userFetchAllHouse(id);
  console.log(result);
  if (result) {
    return (
      <div>
        <Header>
          <Nav>
            <Link className="icon-TipoFlechaAtras"></Link>
            <Searcher />
            <Link className="icon-TipoMenuHamb"></Link>
          </Nav>
        </Header>
        <CityDetail />
        <h2>VIVIENDAS</h2>
        <section className="housesList">
          {result.map((house, i) => {
            if (i < 4) {
              return (
                <div className="houseDetail">
                  <img src={house.thumbnail} alt={house.address} />
                  <div className="houseDetailDescription">
                    <div className="houseDetailText">
                      <h3>{house.address}</h3>
                      <p>{house.price}€/mes</p>
                      <div className="houseDetailTextIcon">
                        <p>{house.score}</p>
                        <span className="icon-Tipofavoritos"></span>
                      </div>
                    </div>
                    <div className="houseDetailIcon">
                      <span className="icon-TipoCorazon"></span>
                    </div>
                  </div>
                </div>
              );
            } else return null;
          })}
        </section>
        <h2>HABITACIONES</h2>
        <section className="housesList">
          {result.map((house, i) => {
            if (i > 4 && i<9) {
              return (
                <div className="houseDetail">
                  <img src={house.thumbnail} alt={house.address} />
                  <div className="houseDetailDescription">
                    <div className="houseDetailText">
                      <h3>{house.address}</h3>
                      <p>{house.price}€/mes</p>
                      <div className="houseDetailTextIcon">
                        <p>{house.score}</p>
                        <span className="icon-Tipofavoritos"></span>
                      </div>
                    </div>
                    <div className="houseDetailIcon">
                      <span className="icon-TipoCorazon"></span>
                    </div>
                  </div>
                </div>
              );
            } else return null;
          })}
        </section>
        <br/>
      </div>
    );
  } else {
    return null;
  }
};

export default Valencia;
