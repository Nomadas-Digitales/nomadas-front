import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFetchFilteredHouses } from "hooks/useFetchFilteredHouses";

import HouseCard from "Components/HouseCard";
import Header from "Components/Header";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";
import "./houses.scss";
import context from "store/context";
import errorImg from "static/Imagen error.png";

const Houses = () => {
  const { filterValues } = useContext(context);
  const history = useHistory();

  const houses = useFetchFilteredHouses(filterValues);

  const isFilterEmpty = Object.keys(filterValues).length === 0;

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
        <span className="housesButton falseClick">Viviendas</span>

        <span className="roomsLink falseClick">Habitaciones</span>
      </div>
      <section className="filterContainer">
        <div className={isFilterEmpty ? "" : "filters"}>
          <span className="icon-TipoFiltros"></span>
          <Link to="/cities/valencia/houses/filters">Fitros</Link>
        </div>
        <div>
          <span className="icon-TipoMapa"></span>
          <span className="map falseClick">Ver mapa</span>
        </div>
        <div>
          <span className="icon-TipoOrden"></span>
          <span className="order falseClick">Ordenar</span>
        </div>
      </section>
      {houses.length !== 0 ? (
        <section className="catalogueContainer">
          {houses.map((house, i) => {
            return <HouseCard key={i} {...house} />;
          })}
        </section>
      ) : (
        <div>
          <div className="errorImgFrame">
            <img src={errorImg} className="errorImg" />
            <p className="notFoundMessage">¡Ups!</p>
            <p className="notFoundMessage">No se han encontrado resultados.</p>
            <p className="notFoundMessage">
              Modifique los criterios de búsqueda.
            </p>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Houses;
