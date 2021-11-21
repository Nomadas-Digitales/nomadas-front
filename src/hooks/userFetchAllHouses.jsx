import {
  useState,
  useEffect
} from "react";
import {
  houses
} from "services";

const useFetchAllHouses = (id) => {
  const [allHouses, setAllHouses] = useState([0]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await houses.getAllHouses(
        id,
      );
      setAllHouses(results.data);
    };
    fetchData();
  }, []);
  return allHouses;
};

export default useFetchAllHouses;