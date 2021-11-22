import { useState } from "react";

export const useFilters = () => {
  const [filterValues, setFilterValues] = useState({});

  const updateFilterValues = (value, name) => {
    setFilterValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return { filterValues, updateFilterValues };
};
