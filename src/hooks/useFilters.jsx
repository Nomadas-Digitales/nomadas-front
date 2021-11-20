import { useState } from "react";

export const useFilters = () => {
  const [filterValues, setFilterValues] = useState({});

  const updateFilterValues = ({ target: { name, value } }) => {
    setFilterValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return { filterValues, updateFilterValues };
};
