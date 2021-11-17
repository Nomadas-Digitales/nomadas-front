import { Link } from "react-router-dom";

import Searcher from "Components/Searcher";
import Nav from "Components/Nav";
import "./header.scss";

const Header = () => {
  return (
    <section className="header">
      <Nav>
        <Link className="icon-TipoFlechaAtras"></Link>
        <Searcher />
        <Link className="icon-TipoMenuHamb"></Link>
      </Nav>
      <h1 className="title">VALENCIA</h1>
    </section>
  );
};

export default Header;
