import { useState, useContext, useEffect } from "react";
import { toLocalStorage, fromLocalStorage } from "utils";
import context from "store/context";

const useFavorites = () => {
  const { id } = useContext(context);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const jsonValue = fromLocalStorage(`user${id}`);
    const houses = jsonValue ? JSON.parse(jsonValue) : [];
    setFavorites(() => [...houses]);
    console.log("hook useEffect", {
      id,
      favorites,
      houses,
    });
  }, [id]);

  const updateFavorites = (propertycode, userId) => {
    const jsonValue = fromLocalStorage(`user${userId}`);
    const houses = jsonValue ? JSON.parse(jsonValue) : [];
    houses.push(propertycode);
    toLocalStorage(`user${userId}`, JSON.stringify(houses));
    setFavorites((prevState) => [...prevState, propertycode]);
    console.log("hook update", {
      propertycode,
      userId,
      houses,
    });
  };

  const deleteFavorites = (propertycode, userId) => {
    const jsonValue = fromLocalStorage(`user${userId}`);
    const houses = jsonValue ? JSON.parse(jsonValue) : [];
    const houseIndex = houses.indexOf(propertycode);
    houses.splice(houseIndex, 1);
    toLocalStorage(`user${userId}`, JSON.stringify(houses));
    setFavorites(() => houses);
    console.log("hook delete", {
      propertycode,
      userId,
      houses,
      houseIndex,
    });
  };
  return { updateFavorites, deleteFavorites, favorites };
};

export default useFavorites;
