import { useState, useEffect } from "react";
import { houses } from "services";

const useFetchFilteredHouses = (filters) => {
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getByFilters(
        filters.distance,
        filters.priceMin,
        filters.priceMax,
        filters.distanceBeach,
        filters.internet
      );
      console.log("resultsOfFetch", results);
      setFilteredHouses(results.data);
      console.log("fileteredHouses", filteredHouses);
    };
    fetchData();
  }, []);
  return filteredHouses;
};

/**Lo mío */

const useFetchAllHouses = (id) => {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getAllHouses(
        id,
      );
      console.log("resultsOfFetch", results);
      setAllHouses(results.data);
    };
    fetchData();
  }, [id]);
  return allHouses;
};

export  {useFetchFilteredHouses, useFetchAllHouses};