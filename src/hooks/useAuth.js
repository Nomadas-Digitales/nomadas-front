import { useState, useEffect } from "react";
import { auth } from "services";
import { toLocalStorage, fromLocalStorage } from "utils";

export const useAuth = () => {
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    const token = fromLocalStorage();
    setUserToken(token);
  }, []);

  const login = async ({ email, password }) => {
    const result = await auth.login({ email, password });
    if (result) {
      toLocalStorage(result.data.access_token);
    }
    return result;
  };

  return { userToken, login };
};
