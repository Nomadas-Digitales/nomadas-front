import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchFilteredHouses } from "hooks/useFetchFilteredHouses";

import HouseCard from "Components/HouseCard";
import Searcher from "Components/Searcher";
import Nav from "Components/Nav";
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
      <section className="header">
        <Nav>
          <Link className="icon-TipoFlechaAtras"></Link>
          <Searcher />
          <span className="icon-TipoMenuHamb"></span>
        </Nav>
        <h1 className="title">VALENCIA</h1>
      </section>{" "}
      <div className="houseRoomContainer">
        <Link className="housesLink">VIVIENDAS</Link>

        <Link className="roomsLink">HABITACIÓN</Link>
      </div>
      <section className="filterContainer">
        <div>
          <Link className="link" to="/cities/valencia/houses/filters">
            FILTROS
          </Link>
        </div>
        <div>
          <Link className="link">VER EN MAPA</Link>
        </div>
        <div>
          <Link className="link">ORDENAR</Link>
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
