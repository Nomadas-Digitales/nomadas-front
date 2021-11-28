import useFavorites from "hooks/useFavorites";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import context from "store/context";

const FavoriteHeart = ({ propertycode }) => {
  const { updateFavorites, deleteFavorites, favorites } = useFavorites();
  const location = useLocation();
  const { id } = useContext(context);

  const onClick = () => {
    const isFavorite = favorites.includes(propertycode);
    console.log("detail propertyCode", propertycode);
    console.log("detail favorities", favorites);
    if (isFavorite) {
      deleteFavorites(propertycode, id);
    } else {
      updateFavorites(propertycode, id);
    }
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
          <span
            className={
              favorites.includes(propertycode)
                ? "icon-TipoCorazon1"
                : "icon-TipoCorazon"
            }
          ></span>
        </a>
      )}
    </div>
  );
};

export default FavoriteHeart;
