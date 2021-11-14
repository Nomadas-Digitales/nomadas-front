import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const ComboBox = () => {
    const city = ["Madrid", "Barcelona", "Valencia", "Cadiz", "Málaga"];
  return (
    <div>
      <Combobox aria-label="Buscador de ciudades">
        <ComboboxInput />
        <ComboboxPopover>
          <ComboboxList>
            {city.map((city, index) => (
              <ComboboxOption value={city} key={index} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default ComboBox;
