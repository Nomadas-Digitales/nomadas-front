import { Link } from "react-router-dom";

const InterFavorites = (props) => {
  return (
    <h1>
      InterFavorites
      <Link
        to={{
          pathname: "/login",
          state: {
            prevPath: props.location.state.prevPath,
            propertycode: props.location.state.propertycode,
          },
        }}
      >
        login
      </Link>
    </h1>
  );
};

export default InterFavorites;
