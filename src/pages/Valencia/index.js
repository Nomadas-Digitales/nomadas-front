import { Link } from "react-router-dom";

import Header from "Components/Header";
import Nav from "Components/Nav";
import Searcher from "Components/Searcher";

const Valencia = () => {
  return (
    <div>
      <Header>
        <Nav>
          <Link className="icon-TipoFlechaAtras"></Link>
          <Searcher />
          <Link className="icon-TipoMenuHamb"></Link>
        </Nav>
      </Header>
    </div>
  );
};

export default Valencia;
