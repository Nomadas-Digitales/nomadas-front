import "./houseCard.scss";
import { Link, useLocation } from "react-router-dom";

const HouseCard = ({
  address,
  price,
  rooms,
  bathrooms,
  score,
  internet,
  thumbnail,
  propertycode,
}) => {
  const location = useLocation();
  return (
    <div className="homeContainer">
      <div className="homeImg">
        <Link to={`/cities/valencia/houses/detail/${propertycode}`}>
          <img className="img" src={thumbnail} />
        </Link>
      </div>
      <div className="homeInfo">
        <div className="titleContainer">
          <Link
            className="title"
            to={`/cities/valencia/houses/detail/${propertycode}`}
          >
            {address}
          </Link>
          <Link
            to={{
              pathname: "/cities/valencia/houses/favorite",
              state: { prevPath: location.pathname },
            }}
            className="icon-TipoCorazon"
          ></Link>
        </div>

        <div className="description">
          <p>{price}€/mes</p>
          <p className="rooms">{rooms} dormitorios</p>
          <p className="bathrooms">{bathrooms} baños</p>
        </div>

        <div className="homeValoration">
          <div>
            <span>{score}</span>
            <span className="icon-Tipofavoritos"></span>
          </div>
          <div>
            <span>{internet}Mbps</span>
            <span className="icon-TipoWIFI"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
