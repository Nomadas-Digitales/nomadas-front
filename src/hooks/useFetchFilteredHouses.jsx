import { useState, useEffect } from "react";
import { houses } from "services";

const useFetchFilteredHouses = (filters) => {
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getByFilters(filters);
      setFilteredHouses(results.data);
    };
    fetchData();
  }, []);
  return filteredHouses;
};

export { useFetchFilteredHouses };
