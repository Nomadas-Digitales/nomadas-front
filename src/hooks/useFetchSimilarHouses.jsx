import { useState, useEffect } from "react";
import { houses } from "services";

const useFetchSimilarHouses = (price) => {
  const [homes, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getHousesByPrice(price);
      setHouses(results.data);
    };
    fetchData();
  }, [price]);
  return homes;
};

export default useFetchSimilarHouses;
