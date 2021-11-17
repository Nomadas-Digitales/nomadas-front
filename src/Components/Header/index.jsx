import { Link } from "react-router-dom";

import Searcher from "Components/Searcher";
import Nav from "Components/Nav";
import "./header.scss";

const Header = (props) => {
  return (
    <section className="header">
      {props.children}
      <h1 className="title">VALENCIA</h1>
    </section>
  );
};

export default Header;
