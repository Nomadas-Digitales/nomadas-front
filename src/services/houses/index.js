const getByFilters = ({ get }) => async (filters) => {
  const queryFilters = Object.keys(filters).map((key) => {
    if (
      key === "distance" ||
      key === "distanceBeach" ||
      key === "distanceCoworking"
    ) {
      return `${key}=${filters[key] * 1000}`;
    }
    return `${key}=${filters[key]}`;
  });

  try {
    return (await get(`/house?${queryFilters.join("&")}&pageSize=200`)).data;
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

const getHouse = ({ get }) => async (id) => {
  try {
    return (await get(`/house/list/home?id=${id}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};

const getHousesByPrice = ({ get }) => async (price) => {
  try {
    return (await get(`/house/list/by_price?price=${price}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};

export { getAllHouses, getByFilters, getHouse, getHousesByPrice };
