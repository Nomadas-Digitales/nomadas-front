import { Link, useHistory } from "react-router-dom";
import context from "store/context";

import Nav from "Components/Nav";
import Slider from "Components/Slider";
import "./filters.scss";
import { useContext } from "react";

const Filters = () => {
  const { updateFilterValues } = useContext(context);
  const history = useHistory();

  const prices = [
    100,
    150,
    200,
    250,
    300,
    350,
    400,
    450,
    500,
    550,
    600,
    650,
    700,
    750,
    800,
    850,
    900,
    950,
    1000,
    1050,
    1100,
    1150,
    1200,
    1250,
    1300,
    1350,
    1400,
    1450,
    1500,
    1550,
    1600,
    1650,
    1700,
    1750,
    1800,
    1850,
    1900,
    1950,
    2000,
  ];

  return (
    <div>
      <Nav>
        <Link className="icon-TipoFlechaAtras" onClick={history.goBack}></Link>
        <span className="filterPageTitle">FILTROS</span>
        <span className="icon-TipoMenuHamb falseClick"></span>
      </Nav>
      <div>
        <div className="distanceCenterFP">
          <p className="filterTitles">Distancia max. al centro</p>
          <div className="slideAndMeasure">
            <Slider handler={updateFilterValues} max="15" name="distance" />
            <p className="measureFilters">km</p>
          </div>
        </div>
        <div className="priceFP">
          <p className="filterTitles">Precio</p>
          <div className="dropDown">
            <select
              name="priceMin"
              className="min"
              onChange={updateFilterValues}
            >
              <option hidden selected>
                Min.
              </option>
              {prices.map((price) => {
                return <option value={price}>{price}</option>;
              })}
            </select>
            <select
              name="priceMax"
              className="max"
              onChange={updateFilterValues}
            >
              <option hidden selected>
                Max.
              </option>
              {prices.map((price) => {
                return <option value={price}>{price}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="sizeFP">
          <p className="filterTitles">Tamaño</p>
          <div className="dropDown">
            <select
              name="priceMin"
              className="min"
              onChange={updateFilterValues}
            >
              <option hidden selected>
                Min.
              </option>
              {prices.map((price) => {
                return <option value={price}>{price}</option>;
              })}
            </select>
            <select
              name="priceMax"
              className="max"
              onChange={updateFilterValues}
            >
              <option hidden selected>
                Max.
              </option>
              {prices.map((price) => {
                return <option value={price}>{price}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="internetFP">
          <p className="filterTitles">Internet</p>
          <div className="slideAndMeasure">
            <Slider handler={updateFilterValues} max="800" name="internet" />
            <p className="measureFilters">Mbps</p>
          </div>
        </div>
        <div className="distanceBeachFP">
          <p className="filterTitles">Distancia a la playa</p>
          <div className="slideAndMeasure">
            <Slider
              handler={updateFilterValues}
              max="15"
              name="distanceBeach"
            />
            <p className="measureFilters">km</p>
          </div>
        </div>
        <div className="distanceCoworkingFP">
          <p className="filterTitles">Distancia a Coworking</p>
          <div className="slideAndMeasure">
            <Slider
              handler={updateFilterValues}
              max="15"
              name="distanceCoworking"
            />
            <p className="measureFilters">km</p>
          </div>
        </div>
        <div className="showResults">
          <Link
            to="/cities/valencia/searchedhouses"
            className="showResultsLink"
          >
            Mostrar resultados
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filters;
