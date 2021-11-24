import Nav from "Components/Nav";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import "./login.scss";

import fondo from "../../static/fondo-inicio-sesión.png";

const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="loginPage">
      <img src={fondo} className="loginPageImg" />
      <Nav>
        <a className="icon-TipoFlechaAtras" onClick={history.goBack}></a>
        <p className="loginTitle">Accede a tu cuenta</p>
        <span className="icon-TipoMenuHamb falseClick"></span>
      </Nav>
      <form className="loginForm">
        <label className="emailLabel">Email</label>
        <input className="inputSpace" />
        <label className="passwordLabel">Contraseña</label>
        <input className="inputSpace" />
        <p className="passForgotten">¿Has olvidado contraseña?</p>
        <input
          className="loginSubmitButton"
          type="submit"
          value="Iniciar sesión"
        />
      </form>
      <div className="line">o</div>
      <div className="oauthButtons">
        <div className="oauthButton1">
          <span className="icon-TipoGoogle"></span>
          <p>Continuar con Google</p>
        </div>
        <div className="oauthButton2">
          <span className="icon-TipoFacebook"></span>
          <p>Continuar con Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
