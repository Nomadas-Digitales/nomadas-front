import "./houseCard.scss";
import { Link } from "react-router-dom";

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
          <span className="icon-TipoCorazon falseClick"></span>
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
