import context from "./context";
import { useFilters } from "hooks/useFilters";

const Provider = (props) => {
  const { filterValues, updateFilterValues } = useFilters();
  console.log("filters", filterValues);
  return (
    <context.Provider value={{ filterValues, updateFilterValues }}>
      {props.children}
    </context.Provider>
  );
};

export default Provider;
