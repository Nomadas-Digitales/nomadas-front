import { Link } from "react-router-dom";

import Header from "Components/Header";
import Nav from "Components/Nav";

const Detail = () => {
  return (
    <div>
      <Header>
        <Nav>
          <Link className="icon-TipoFlechaAtras"></Link>
          <Link className="icon-TipoMenuHamb"></Link>
        </Nav>
      </Header>
    </div>
  );
};

export default Detail;
