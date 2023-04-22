import axios from "axios";

const url = "https://marin-forum.herokuapp.com/auth";

export const authUser = (email, password) => {
  return axios.post(`${url}/login`, { email, password });
};

export const registerUser = () => {
  return axios.post(`${url}/auth/register`);
};

export const authLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("authenticated");
};
