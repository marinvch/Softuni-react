import axios from "axios";

export const url = "http://localhost:5000";

//Posts Requests to the API
export const getPosts = async () => {
  return await axios.get(`${url}/posts/allposts`);
};

export const createPost = async () => {
  return await axios.post(`${url}/posts/createpost`,);
};

//User Requests to the API

export const fetchUsers = async () => {
  return axios.get(`${url}/auth/allusers`);
};
