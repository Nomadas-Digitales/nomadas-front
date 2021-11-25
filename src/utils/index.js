export const toLocalStorage = (token) => {
  console.log("token");
  localStorage.setItem("token", token);
};

export const fromLocalStorage = () => {
  return localStorage.getItem("token");
};
