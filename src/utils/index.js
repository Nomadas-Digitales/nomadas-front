export const toLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const fromLocalStorage = (name) => {
  return localStorage.getItem(name);
};
