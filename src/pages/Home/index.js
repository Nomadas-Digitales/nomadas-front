import { Link } from "react-router-dom";
import "./home.scss";
import logo from "../../static/LOGO/PNG/WorkAbroad-13.png";
import textLogo from "../../static/LOGO/PNG/WorkAbroad-12.png";
import fondo from "../../static/Fondo.png";

const Home = () => {
  return (
    <section>
      {/* <div class="imgFondo">
        <section className="backGround">
          <img className="logo" src={logo} />
          <img className="textLogo" src={textLogo} />
          <button className="buttonGreen">Iniciar sesión</button>
          <button className="buttonWhite">Registraste</button>
          <Link to="/cities">Continuar como invitado</Link>
       </section>
      </div> */}
      <div className="wrap">
        <section className="backGround">
          <img className="logo" src={logo} />
          <img className="textLogo" src={textLogo} />
          <button className="buttonGreen">Iniciar sesión</button>
          <button className="buttonWhite">Registraste</button>
          <Link to="/cities">Continuar como invitado </Link>
          <a href="/cities">Continuar como invitado {'>'}</a>
        </section>
        <div class="imgFondo"><img src={fondo}/></div>
      </div>
    </section>
  );
};

export default Home;
