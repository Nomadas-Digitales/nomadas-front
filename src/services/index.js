import axios from "axios";

import { login, register } from "./auth";
import { getByFilters } from "./houses";

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
};

export { auth, houses };
