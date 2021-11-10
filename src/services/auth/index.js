import { catcher } from "../helpers";

export const login = ({ post }) => async (params) =>
  await catcher(post)("/auth/login", params);

export const register = ({ post }) => async (params) =>
  await catcher(post)("/auth/register", params);
