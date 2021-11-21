const getByFilters = ({ get }) => async (filters) => {
  const queryFilters = Object.keys(filters).map((key) => {
    return `${key}=${filters[key]}`;
  });

  try {
    return (await get(`/house?${queryFilters.join("&")}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};

const getAllHouses = ({ get }) => async (id) => {
  try {
    return (await get(`/house/list?id=${id}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};

export { getAllHouses, getByFilters };
