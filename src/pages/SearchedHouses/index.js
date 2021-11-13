import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchFilteredHouses from "hooks/useFetchFilteredHouses";

import Button from "Components/Button";
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

  const houses = useFetchFilteredHouses(filters);
  console.log("houses", houses);
  return (
    <section>
      <section className="header">
        <section className="navContainer">
          <div className="goBack">&lt;</div>
          <div className="searchContainer">
            <img alt="0" />
            <input type="text" className="searchInput" placeholder="Buscar" />
          </div>
        </section>
        <h1 className="title">VALENCIA</h1>
        <section className="houseRoomContainer">
          <button className="housesButton">
            <Link className="link">Viviendas</Link>
          </button>
          <button className="roomsButton">
            <Link classname="link">Habitaciones</Link>
          </button>
        </section>
      </section>
      <section className="filterContainer">
        <Link className="link">Filters</Link>
        <Link className="link">Map</Link>
        <Link className="link">Order</Link>
      </section>
      <section className="catalogueContainer"></section>
    </section>
  );
};

export default SearchedHouse;
