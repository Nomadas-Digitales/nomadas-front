import context from "./context";
import { useFilters } from "hooks/useFilters";

const Provider = (props) => {
  const { filterValues, updateFilterValues, deleteFilters } = useFilters();

  return (
    <context.Provider
      value={{ filterValues, updateFilterValues, deleteFilters }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Provider;
