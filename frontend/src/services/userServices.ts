import api from "./api";

// ejemplo

export const loginUser = <T>(data: T) => {
  return api.post("/loginUser", data);
};
