import {useFetchAllHouses} from "hooks/useFetchFilteredHouses";

const AllHouses = () => {
  const id = 1;
  const houses = useFetchAllHouses(id);
  console.log("All houses", houses);
  return <h1>AllHouses</h1>;
};

export default AllHouses;
