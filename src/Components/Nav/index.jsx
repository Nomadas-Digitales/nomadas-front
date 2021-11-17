import "./nav.scss";

const Nav = (props) => {
  console.log("lengh", props.children.length);
  return (
    <section className={`nav ${props.children.length === 3 ? "three" : "two"}`}>
      {props.children}
    </section>
  );
};

export default Nav;
