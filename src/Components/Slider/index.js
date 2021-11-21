import { useState } from "react";
import "./slider.scss";

const Slider = ({ handler, max, name, inputValue }) => {
  const [value, setValue] = useState(0);

  const _onChange = (e) => {
    setValue(e.target.value);
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
        defaultValue={inputValue || "0"}
      />
      <input
        className="valueBox"
        type="number"
        value={value || inputValue || 0}
        readOnly
      />
    </div>
  );
};

export default Slider;
