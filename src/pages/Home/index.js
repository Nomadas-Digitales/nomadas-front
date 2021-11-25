import { Link } from "react-router-dom";
import "./home.scss";
import logo from "../../static/LOGO/PNG/WorkAbroad-13.png";
import textLogo from "../../static/LOGO/PNG/WorkAbroad-12.png";
import fondo from "../../static/fondo-home.png";

const Home = () => {
  return (
    <section>
       <div className="wrap">
        <section className="backGround">
          <img className="logo" src={logo} />
          <img className="textLogo" src={textLogo} />
          <button className="buttonGreen">Iniciar sesión</button>
          <button className="buttonWhite">Registraste</button>
          <a href="/cities">Continuar como invitado {'>'}</a>
        </section>
        <div class="imgFondo"><img src={fondo}/></div>
      </div>
    </section>
  );
};

export default Home;
