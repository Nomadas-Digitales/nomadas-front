import { useState, useEffect } from "react";
import { auth } from "services";
import { toLocalStorage, fromLocalStorage } from "utils";

export const useAuth = () => {
  const [userToken, setUserToken] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    const token = fromLocalStorage("token");
    const id = fromLocalStorage("id");
    setUserToken(token);
    setId(id);
  }, []);

  const login = async ({ email, password }) => {
    const result = await auth.login({ email, password });
    if (result) {
      toLocalStorage("token", result.data.access_token);
      toLocalStorage("id", result.data.id);
      setUserToken(result.data.access_token);
      setId(result.data.id);
    }
    return result;
  };

  return { userToken, login, id };
};
