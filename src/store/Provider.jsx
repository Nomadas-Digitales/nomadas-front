import context from "./context";
import { useFilters } from "hooks/useFilters";
import { useAuth } from "hooks/useAuth";

const Provider = (props) => {
  const { filterValues, updateFilterValues, deleteFilters } = useFilters();
  const { userToken, login, id } = useAuth();
  console.log("context user id", id);

  return (
    <context.Provider
      value={{
        filterValues,
        updateFilterValues,
        deleteFilters,
        userToken,
        login,
        id,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Provider;
