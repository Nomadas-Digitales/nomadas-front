import "./houseCard.scss";
import { Link, useLocation } from "react-router-dom";
import FavoriteHeart from "Components/FavHeart";

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
        <Link
          to={{
            pathname: `/cities/valencia/houses/detail/${propertycode}`,
            state: {
              goBackPath: location.pathname,
            },
          }}
        >
          <img className="img" src={thumbnail} />
        </Link>
      </div>
      <div className="homeInfo">
        <div className="titleContainer">
          <Link
            className="title"
            to={{
              pathname: `/cities/valencia/houses/detail/${propertycode}`,
              state: {
                goBackPath: location.pathname,
              },
            }}
          >
            {address}
          </Link>
          <FavoriteHeart propertycode={propertycode} />
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
