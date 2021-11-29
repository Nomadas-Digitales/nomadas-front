import { useHistory } from "react-router-dom";
import "./home.scss";
import logo from "../../static/LOGO/PNG/WorkAbroad-13.png";
import textLogo from "../../static/LOGO/PNG/WorkAbroad-12.png";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <section>
      <div className="wrap">
        <section className="backGround">
          <img className="logo" alt="Logotipo Nomadas digitales" src={logo} />
          <img className="textLogo" alt="Work Abroad" src={textLogo} />
          <button className="buttonGreen" onClick={handleClick}>
            Iniciar sesión
          </button>
          <button className="buttonWhite">Registraste</button>
          <a href="/cities">Continuar como invitado {">"}</a>
        </section>
      </div>
    </section>
  );
};

export default Home;
