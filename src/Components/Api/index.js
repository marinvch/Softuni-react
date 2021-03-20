import axios from "axios";

export const url = "http://localhost:5000";

//ValidateToken
export const getToken = async () => {
  return await axios.post(`${url}/auth/validtoken`, null, {});
};

//Posts Requests to the API
export const getPosts = async () => {
  return await axios.get(`${url}/posts/allposts`);
};

export const createPost = async (data) => {
  return await axios.post(`${url}/posts/createpost`, data);
};

//User Requests to the API

export const registerUser = async (data) => {
  return await axios.post(`${url}/auth/register`, data);
};
export const loginUser = async (data) => {
  return await axios.post(`${url}/auth/login`, data);
};

export const fetchUsers = async () => {
  return axios.get(`${url}/auth/allusers`);
};
