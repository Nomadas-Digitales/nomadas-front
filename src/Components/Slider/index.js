import "./slider.scss";

const Slider = ({ handler, max, name, inputValue }) => {
  const _onChange = (e) => {
    handler(e);
  };

  return (
    <div className="slidecontainer">
      <input
        name={name}
        type="range"
        min="1"
        max={max}
        className="slider"
        onChange={_onChange}
        value={inputValue || 0}
      />
      <input
        className="valueBox"
        type="number"
        value={inputValue || 0}
        readOnly
      />
    </div>
  );
};

export default Slider;
