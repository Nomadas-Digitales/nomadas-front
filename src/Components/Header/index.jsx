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
