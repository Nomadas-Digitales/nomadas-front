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
            <Link className="houses">Viviendas</Link>
          </button>
          <button className="roomsButton">
            <Link classname="rooms">Habitaciones</Link>
          </button>
        </section>
      </section>
      <section className="filterContainer">
        <button>Filters</button>
        <button>Map</button>
        <button>Order</button>
      </section>
      <section className="catalogueContainer"></section>
    </section>
  );
};

export default SearchedHouse;
