import Home from "../pages/Home";
import AllHouses from "../pages/AllHouses";
import Cities from "../pages/Cities";
import Detail from "../pages/Detail";
import Filters from "../pages/Filters";
import InterFavorites from "../pages/InterFavorites";
import Login from "../pages/Login";
import SearchedHouses from "../pages/SearchedHouses";
import Valencia from "../pages/Valencia";

export default [
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/cities",
    component: Cities,
    exact: true,
  },
  {
    path: "/cities/valencia",
    component: Valencia,
    exact: true,
  },
  {
    path: "/cities/valencia/houses",
    component: AllHouses,
    exact: true,
  },
  {
    path: "/cities/valencia/houses/filters",
    component: Filters,
    exact: true,
  },
  {
    path: "/cities/valencia/searchedhouses",
    component: SearchedHouses,
    exact: true,
  },
  {
    path: "/cities/valencia/houses/detail/:propertycode",
    component: Detail,
    exact: true,
  },
  {
    path: "/prelogin",
    component: InterFavorites,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];
