import "./houseCard.scss";

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
          <span className="title">{address}</span>
          <span>X</span>
        </div>

        <div className="description">
          <p className="price">{price}€/mes</p>
          <p className="rooms">{rooms} dormitorios</p>
          <p className="bathrooms">{bathrooms} baños</p>
        </div>

        <div className="homeValoration">
          <p>{score} *</p>
          <p>{internet}Mbps ))</p>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
