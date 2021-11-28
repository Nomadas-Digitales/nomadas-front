import { useState, useEffect } from "react";
import { auth } from "services";
import { toLocalStorage, fromLocalStorage } from "utils";

export const useAuth = () => {
  const [userToken, setUserToken] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    const token = fromLocalStorage("token");
    setUserToken(token);
  }, []);

  const login = async ({ email, password }) => {
    const result = await auth.login({ email, password });
    if (result) {
      toLocalStorage("token", result.data.access_token);
    }
    console.log("login result", result);
    setId(() => result.data.id);
    return result;
  };

  return { userToken, login, id };
};
