import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFetchFilteredHouses } from "hooks/useFetchFilteredHouses";

import HouseCard from "Components/HouseCard";
import Header from "Components/Header";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";
import "./catalogue.scss";

const SearchedHouse = () => {
  const [filters, setFilters] = useState({
    distance: "",
    priceMin: "",
    priceMax: "",
    distanceBeach: "",
    internet: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const houses = useFetchFilteredHouses({
    distance: "",
    priceMin: "",
    priceMax: "",
    distanceBeach: "",
    internet: "",
  });

  return (
    <div>
      <Header>
        <Nav>
          <Link
            className="icon-TipoFlechaAtras"
            onClick={history.goBack}
          ></Link>
          <Searcher />
          <span className="icon-TipoMenuHamb falseClick"></span>
        </Nav>
      </Header>
      <div className="houseRoomContainer">
        <span className="housesLink falseClick">Viviendas</span>

        <span className="roomsLink falseClick">Habitaciones</span>
      </div>
      <section className="filterContainer">
        <div>
          <span className="icon-TipoFiltros"></span>
          <Link className="filters" to="/cities/valencia/houses/filters">
            Fitros
          </Link>
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
      <section className="catalogueContainer">
        {houses.map((house, i) => {
          return <HouseCard key={i} {...house} />;
        })}
      </section>
    </div>
  );
};

export default SearchedHouse;
