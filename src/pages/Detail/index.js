import { Link, useHistory } from "react-router-dom";

import Header from "Components/Header";
import Nav from "Components/Nav";

const Detail = () => {
  const url = new URLSearchParams(window.location.search);
  const propertycode = url.get("propertycode");

  const history = useHistory();

  return (
    <div>
      <Header>
        <Nav>
          <a className="icon-TipoFlechaAtras" onClick={history.goBack}></a>
          <Link className="icon-TipoMenuHamb"></Link>
        </Nav>
      </Header>
    </div>
  );
};

export default Detail;
