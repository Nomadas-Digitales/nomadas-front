import axios from "axios";

import { login, register } from "./auth";
import {
  getByFilters,
  getAllHouses,
  getHouse,
  getHousesByPrice,
} from "./houses";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const auth = {
  login: login(client),
  register: register(client),
};

const houses = {
  getByFilters: getByFilters(client),
  getAllHouses: getAllHouses(client),
  getHouse: getHouse(client),
  getHousesByPrice: getHousesByPrice(client),
};

export { auth, houses };
