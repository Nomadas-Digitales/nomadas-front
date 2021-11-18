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
}) => {
  return (
    <div className="homeContainer">
      <div className="homeImg">
        <img className="img" src={thumbnail} />
      </div>
      <div className="homeInfo">
        <div className="titleContainer">
          <Link className="title">{address}</Link>
          <span className="icon-TipoCorazon falseClick"></span>
        </div>

        <div className="description">
          <p className="price">{price}€/mes</p>
          <p className="rooms">{rooms} dormitorios</p>
          <p className="bathrooms">{bathrooms} baños</p>
        </div>

        <div className="homeValoration">
          <div>
            <span>{score}</span>
            <span className="icon-Tipofavoritos"></span>
          </div>
          <div className="internet">
            <span>{internet}Mbps</span>
            <span className="icon-TipoWIFI"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
