import axios from "axios";

const isProduction = process.env.NODE_ENV === 'production';

const url = isProduction ? 'https://marin-forum.herokuapp.com' : 'http://localhost:5000';

export const authUser = (email, password) => {
  return axios.post(`${url}/login`, { email, password });
};
export const registerUser = async (userData) => {
  console.log(userData)
  const response = await axios.post(`${url}/users/register`, userData);
  return response;
};

export const authLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("authenticated");
};
