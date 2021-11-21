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

const useFetchAllHouses = (id) => {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getAllHouses(id);
      console.log("resultsOfFetch", results);
      setAllHouses(results.data);
    };
    fetchData();
  }, [id]);
  return allHouses;
};

export { useFetchFilteredHouses, useFetchAllHouses };
