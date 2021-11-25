import Nav from "Components/Nav";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";

import "./login.scss";
import context from "store/context";

import fondo from "../../static/Fondo-Inicio-Sesion.png";

const Login = () => {
  const { login } = useContext(context);
  const [loginResult, setLoginResult] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await login(data);
    setLoginResult(result);
  };

  return (
    <div className="loginPage">
      <img src={fondo} className="loginPageImg" />
      <Nav>
        <a className="icon-TipoFlechaAtras" onClick={history.goBack}></a>
        <p className="loginTitle">Accede a tu cuenta</p>
        <span className="icon-TipoMenuHamb falseClick"></span>
      </Nav>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="emailLabel">Email</label>
        <input
          className="inputSpace"
          {...register("email", {
            required: true,
            pattern: {
              value: /^\S+@\S+$/i,
            },
          })}
        />
        <label className="passwordLabel">Contraseña</label>
        <input
          className="inputSpace"
          type="password"
          {...register("password", { required: true })}
        />
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
