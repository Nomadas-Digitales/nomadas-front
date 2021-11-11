export const getByFilters = ({ get }) => async (
  distance,
  priceMin,
  priceMax,
  distanceBeach,
  internet
) => {
  try {
    return (
      await get(
        `/house?distance=${distance}&priceMin=${priceMin}&priceMax=${priceMax}&distanceBeach=${distanceBeach}&internet=${internet}`
      )
    ).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};
