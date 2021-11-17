import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchFilteredHouses } from "hooks/useFetchFilteredHouses";

import HouseCard from "Components/HouseCard";
import Header from "Components/Header";
import "./catalogue.scss";

const SearchedHouse = () => {
  const [filters, setFilters] = useState({
    distance: "",
    priceMin: "",
    priceMax: "",
    distanceBeach: "",
    internet: "",
  });

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
  console.log("houses", houses);
  return (
    <div>
      <Header />
      <div className="houseRoomContainer">
        <Link className="housesLink" to="/cities/valencia/searchedhouses">
          Viviendas
        </Link>

        <Link className="roomsLink">Habitaciones</Link>
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
          <Link className="map">Ver mapa</Link>
        </div>
        <div>
          <span className="icon-TipoOrden"></span>
          <Link className="order">Ordenar</Link>
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
