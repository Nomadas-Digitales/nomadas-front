import { useState, useEffect } from "react";
import { houses } from "services";

const useFetchOneHouse = (id) => {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getHouse(id);
      setHouse(results.data);
    };
    fetchData();
  }, [id]);
  return house;
};

export default useFetchOneHouse;
