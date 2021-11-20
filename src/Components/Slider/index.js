import { useState } from "react";

const Slider = ({ handler, max, name }) => {
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
        defaultValue="0"
      />
      <input type="number" value={value || 0} readOnly />
    </div>
  );
};

export default Slider;
