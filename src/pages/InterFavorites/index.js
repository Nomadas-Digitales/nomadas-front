// import { Link } from "react-router-dom";

// const InterFavorites = (props) => {
//   return (
//     <h1>
//       InterFavorites
//       <Link
//         to={{
//           pathname: "/login",
//           state: { prevPath: props.location.state.prevPath },
//         }}
//       >
//         login
//       </Link>
//     </h1>
import "./interFavorites.scss";
import imgFavoritos from "../../static/Fondo-Favoritos.jpg";

import { Link, useHistory } from "react-router-dom";

import Nav from "Components/Nav";

const InterFavorites = (props) => {
  const history = useHistory();

  return (
    <section className="wrapper">
      <Nav>
        <a
          aria-label="Volver a la página anterior"
          className="icon-TipoFlechaAtras"
          onClick={history.goBack}
        ></a>
        <span className="icon-TipoMenuHamb falseClick"></span>
      </Nav>
      <div className="contentFav">
        <h1 className="header1">Lleva tus favoritos contigo</h1>
        <Link to={{
          pathname: "/login",
          state: { prevPath: props.location.state.prevPath },
        }} className="linkGreen">
          Iniciar sesión
        </Link>
        <Link to="#" className="linkGreen linkWhite">
          Registrate
        </Link>
      </div>
      <div className="imgFondoFav">
        <img src={imgFavoritos} alt="" />
      </div>
    </section>
  );
};

export default InterFavorites;
