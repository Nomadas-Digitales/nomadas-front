import { useState, useEffect } from "react";
import { houses } from "services";

const useFetchFilteredHouses = (filters) => {
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getByFilters(filters);
      setFilteredHouses(results.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { houses: filteredHouses, loading };
};

export { useFetchFilteredHouses };
