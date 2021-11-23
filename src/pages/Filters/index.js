import { Link, useHistory } from "react-router-dom";
import context from "store/context";

import Nav from "Components/Nav";
import Slider from "Components/Slider";
import Select from "react-select";
import "./filters.scss";
import { useContext } from "react";

const Filters = () => {
  const { filterValues, updateFilterValues } = useContext(context);
  const history = useHistory();

  const sizes = [
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 40, label: "40" },
    { value: 50, label: "50" },
    { value: 60, label: "60" },
    { value: 70, label: "70" },
    { value: 80, label: "80" },
    { value: 90, label: "90" },
    { value: 100, label: "100" },
    { value: 110, label: "110" },
    { value: 120, label: "120" },
  ];
  const prices = [
    { value: 100, label: "100" },
    { value: 200, label: "200" },
    { value: 300, label: "300" },
    { value: 400, label: "400" },
    { value: 500, label: "500" },
    { value: 600, label: "600" },
    { value: 700, label: "700" },
    { value: 800, label: "800" },
    { value: 900, label: "900" },
    { value: 1000, label: "1000" },
    { value: 1100, label: "1100" },
    { value: 1200, label: "1200" },
    { value: 1300, label: "1300" },
    { value: 1400, label: "1400" },
    { value: 1500, label: "1500" },
    { value: 1600, label: "1600" },
    { value: 1700, label: "1700" },
    { value: 1800, label: "1800" },
    { value: 1900, label: "1900" },
    { value: 2000, label: "2000" },
  ];
  return (
    <div>
      <Nav>
        <a className="icon-TipoFlechaAtras" onClick={history.goBack}></a>
        <span className="filterPageTitle">FILTROS</span>
        <span className="icon-TipoMenuHamb falseClick"></span>
      </Nav>
      <div>
        <div className="distanceCenterFP">
          <p className="filterTitles">Distancia max. al centro</p>
          <div className="slideAndMeasure">
            <Slider
              handler={(e) => updateFilterValues(e.target.value, e.target.name)}
              max="15"
              name="distance"
              inputValue={filterValues.distance}
            />
            <p className="measureFilters">km</p>
          </div>
        </div>

        <div className="priceFP">
          <p className="filterTitles">Precio</p>
          <div className="dropDown">
            <Select
              options={prices}
              className="select-container"
              classNamePrefix="select"
              maxMenuHeight={100}
              placeholder="Min."
              name="priceMin"
              onChange={(option, action) =>
                updateFilterValues(option.value, action.name)
              }
              defaultValue={
                filterValues.priceMin
                  ? prices.filter(
                      (option) => option.value === filterValues.priceMin
                    )
                  : ""
              }
            />
            <Select
              options={prices}
              className="select-container"
              classNamePrefix="select"
              maxMenuHeight={100}
              placeholder="Max."
              name="priceMax"
              onChange={(option, action) =>
                updateFilterValues(option.value, action.name)
              }
              defaultValue={
                filterValues.priceMax
                  ? prices.filter(
                      (option) => option.value === filterValues.priceMax
                    )
                  : ""
              }
            />
          </div>
        </div>
        <div className="sizeFP">
          <p className="filterTitles">Tamaño</p>
          <div className="dropDown">
            <Select
              options={sizes}
              className="select-container"
              classNamePrefix="select"
              maxMenuHeight={100}
              placeholder="Min."
              name="sizeMin"
              onChange={(option, action) =>
                updateFilterValues(option.value, action.name)
              }
              defaultValue={
                filterValues.sizeMin
                  ? sizes.filter(
                      (option) => option.value === filterValues.sizeMin
                    )
                  : ""
              }
            />
            <Select
              options={sizes}
              className="select-container"
              classNamePrefix="select"
              maxMenuHeight={100}
              placeholder="Max."
              name="sizeMax"
              onChange={(option, action) =>
                updateFilterValues(option.value, action.name)
              }
              defaultValue={
                filterValues.sizeMax
                  ? sizes.filter(
                      (option) => option.value === filterValues.sizeMax
                    )
                  : ""
              }
            />
          </div>
        </div>
        <div className="internetFP">
          <p className="filterTitles">Velocidad mínima de internet</p>
          <div className="slideAndMeasure">
            <Slider
              handler={(e) => updateFilterValues(e.target.value, e.target.name)}
              max="800"
              name="internet"
              inputValue={filterValues.internet}
            />
            <p className="measureFilters">Mbps</p>
          </div>
        </div>
        <div className="distanceBeachFP">
          <p className="filterTitles">Distancia a la playa</p>
          <div className="slideAndMeasure">
            <Slider
              handler={(e) => updateFilterValues(e.target.value, e.target.name)}
              max="15"
              name="distanceBeach"
              inputValue={filterValues.distanceBeach}
            />
            <p className="measureFilters">km</p>
          </div>
        </div>
        <div className="distanceCoworkingFP">
          <p className="filterTitles">Distancia a Coworking</p>
          <div className="slideAndMeasure">
            <Slider
              handler={(e) => updateFilterValues(e.target.value, e.target.name)}
              max="15"
              name="distanceCoworking"
              inputValue={filterValues.distanceCoworking}
            />
            <p className="measureFilters">km</p>
          </div>
        </div>
        <div className="showResults">
          <Link to="/cities/valencia/houses" className="showResultsLink">
            Mostrar resultados
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filters;
