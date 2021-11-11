import { useState } from "react";
import useFetchFilteredHouses from "hooks/useFetchFilteredHouses";

const SearchedHouse = () => {
  const [filters, setFilters] = useState({
    distance: "",
    priceMin: "",
    priceMax: "",
    distanceBeach: "",
    internet: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const houses = useFetchFilteredHouses(filters);
  console.log("houses", houses);
  return (
    <div>
      <h1>SearchedHouse</h1>
    </div>
  );
};

export default SearchedHouse;
