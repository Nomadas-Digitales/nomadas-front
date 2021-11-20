import { Link, useHistory } from "react-router-dom";
import { set, useForm } from "react-hook-form";
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
        <span>FILTROS</span>
        <span className="icon-TipoMenuHamb falseClick"></span>
      </Nav>
      <form>
        <div className="distanceCenter">
          <p>Distancia max. al centro</p>
          <Slider handler={updateFilterValues} max="15" name="distance" />
        </div>
        <div className="price">
          <p>Precio</p>
          <div className="dropDown">
            <select name="priceMin" onChange={updateFilterValues}>
              <option hidden selected>
                Min
              </option>
              {prices.map((price) => {
                return <option value={price}>{price}</option>;
              })}
            </select>
            <select name="priceMax" onChange={updateFilterValues}>
              <option hidden selected>
                Max
              </option>
              {prices.map((price) => {
                return <option value={price}>{price}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="size">
          <p>Tamaño</p>
        </div>
        <div className="internet">
          <p>Internet</p>
          <Slider handler={updateFilterValues} max="15" name="internet" />
        </div>
        <div className="distanceBeach">
          <p>Distancia a la playa</p>
          <Slider handler={updateFilterValues} max="15" name="distanceBeach" />
        </div>
      </form>
    </div>
  );
};

export default Filters;
