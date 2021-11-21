import axios from "axios";

import { login, register } from "./auth";
import { getByFilters, getAllHouses } from "./houses";

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
};

export { auth, houses };
