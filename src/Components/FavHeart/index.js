import useFavorites from "hooks/useFavorites";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import context from "store/context";

const FavoriteHeart = ({ propertycode }) => {
  const { updateFavorites, deleteFavorites, readFavorites } = useFavorites();
  const location = useLocation();
  const { id } = useContext(context);

  const onClick = () => {
    const propertyCode = parseInt(propertycode);
    const houses = readFavorites(id);
    const isFavorite = houses.includes(propertyCode);
    if (isFavorite) {
      deleteFavorites(propertyCode, id);
    } else {
      updateFavorites(propertyCode, id);
    }
  };

  const heartClassName = () => {
    const propertyCode = parseInt(propertycode);
    const houses = readFavorites(id);
    return houses.includes(propertyCode)
      ? "icon-TipoCorazon1"
      : "icon-TipoCorazon";
  };

  return (
    <div>
      {!id ? (
        <Link
          to={{
            pathname: "/cities/valencia/houses/favorite",
            state: {
              prevPath: location.pathname,
              propertycode,
            },
          }}
        >
          <span className="icon-TipoCorazon"></span>
        </Link>
      ) : (
        <a onClick={onClick}>
          <span className={heartClassName()}></span>
        </a>
      )}
    </div>
  );
};

export default FavoriteHeart;
