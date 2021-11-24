import { useState, useEffect } from "react";
import { houses } from "services";

const useFetchOneHouse = (id) => {
  const [house, setHouse] = useState([]);
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getHouse(id);
      setHouse(results.data);
      const resultsSimilars = await houses.getHousesByPrice(results.data.price);
      setSimilars(resultsSimilars.data);
    };
    fetchData();
  }, [id]);
  return { house, similars };
};

export default useFetchOneHouse;
