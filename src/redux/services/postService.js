import axios from "axios";

const url = "https://marin-forum.herokuapp.com";

export const getAllPosts = () => {
  return axios.get(`${url}/posts`);
};

export const getPost = (id) => {
  return axios.get(`${url}/posts/${id}`);
};
