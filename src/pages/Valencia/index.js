import "./valencia.scss";

import { Link, useHistory, useLocation } from "react-router-dom";

import Header from "Components/Header";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";
import CityDetail from "Components/CityDetail";
import FavoriteHeart from "Components/FavHeart";
import userFetchAllHouse from "../../hooks/userFetchAllHouses";

const Valencia = (props) => {
  const history = useHistory();
  const location = useLocation();

  const id = 1;
  const { result } = userFetchAllHouse(id);

  const goBackUrl = () => {
    const locationState = props.location.state;
    return locationState ? locationState.goBackPath : "/cities";
  };

  if (result) {
    return (
      <div class="wrapCity">
        <Header>
          <Nav>
            <Link className="icon-TipoFlechaAtras" to={goBackUrl()} />
            <Searcher />
            <span className="icon-TipoMenuHamb falseClick"></span>
          </Nav>
        </Header>
        <div className="houseRoomContainer">
          <Link className="housesLink" to="/cities/valencia/houses">
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
                    to={`/cities/valencia/houses/detail/${house.propertycode}`}
                  >
                    <img src={house.thumbnail} alt={house.address} />
                  </Link>
                  <div className="houseDetailDescription">
                    <div className="houseDetailText">
                      <Link
                        to={`/cities/valencia/houses/detail/${house.propertycode}`}
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
                      <FavoriteHeart propertycode={house.propertycode} />
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
                    <div className="houseDetailText valenciaHousesText">
                      <h3 className="falseClick">{house.address}</h3>
                      <p>{house.price}€/mes</p>
                      <div className="houseDetailTextIcon">
                        <p>{house.score}</p>
                        <span className="icon-Tipofavoritos"></span>
                      </div>
                    </div>
                    <div className="houseDetailIcon valenciaRoomsIcon">
                      <a className="icon-TipoCorazon" />
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
