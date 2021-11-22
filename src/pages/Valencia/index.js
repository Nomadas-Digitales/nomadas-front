import "./valencia.scss";

import { Link, useHistory } from "react-router-dom";

import Header from "Components/Header";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";
import CityDetail from "Components/CityDetail";
import userFetchAllHouse from "../../hooks/userFetchAllHouses";

const Valencia = () => {
  const history = useHistory();

  const id = 1;
  const { result } = userFetchAllHouse(id);
  console.log(result);
  if (result) {
    return (
      <div>
        <Header>
          <Nav>
            <a className="icon-TipoFlechaAtras" onClick={history.goBack}></a>
            <Searcher />
            <span className="icon-TipoMenuHamb falseClick"></span>
          </Nav>
        </Header>
        <div className="houseRoomContainer">
          <Link className="housesLink falseClick" to="/cities/valencia/houses">
            Viviendas
          </Link>

          <span className="roomsLink falseClick">Habitaciones</span>
        </div>
        <CityDetail />
        <h2>VIVIENDAS</h2>
        <section className="housesList">
          {result.map((house, i) => {
            if (i < 4) {
              return (
                <div className="houseDetail">
                  <Link
                    to={`/cities/valencia/houses/detail?propertycode=${house.propertycode}`}
                  >
                    <img src={house.thumbnail} alt={house.address} />
                  </Link>
                  <div className="houseDetailDescription">
                    <div className="houseDetailText">
                      <Link
                        to={`/cities/valencia/houses/detail?propertycode=${house.propertycode}`}
                      >
                        <h3>{house.address}</h3>
                      </Link>

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
            if (i > 4 && i < 9) {
              return (
                <div className="houseDetail">
                  <img
                    src={house.thumbnail}
                    alt={house.address}
                    className="falseClick"
                  />
                  <div className="houseDetailDescription">
                    <div className="houseDetailText">
                      <h3 className="falseClick">{house.address}</h3>
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
        <br />
      </div>
    );
  } else {
    return null;
  }
};

export default Valencia;
