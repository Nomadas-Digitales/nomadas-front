import { useState, useContext, useEffect } from "react";
import { toLocalStorage, fromLocalStorage } from "utils";
import context from "store/context";

const useFavorites = () => {
  const { id } = useContext(context);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const jsonValue = fromLocalStorage(`user${id}`);
    const houses = jsonValue ? JSON.parse(jsonValue) : [];
    setFavorites(() => houses);
  }, [id]);

  const updateFavorites = (propertycode, userId) => {
    propertycode = parseInt(propertycode);
    const houses = readFavorites(userId);
    houses.push(propertycode);
    toLocalStorage(`user${userId}`, JSON.stringify(houses));
    setFavorites(() => houses);
  };

  const deleteFavorites = (propertycode, userId) => {
    propertycode = parseInt(propertycode);
    const houses = readFavorites(userId);
    const houseIndex = houses.indexOf(propertycode);
    houses.splice(houseIndex, 1);
    toLocalStorage(`user${userId}`, JSON.stringify(houses));
    setFavorites(() => houses);
  };

  const readFavorites = (userId) => {
    const jsonValue = fromLocalStorage(`user${userId}`);
    return jsonValue ? JSON.parse(jsonValue) : [];
  };
  return { updateFavorites, deleteFavorites, readFavorites, favorites };
};

export default useFavorites;
