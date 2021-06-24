import axios from 'axios';

export const url = "https://marin-forum.herokuapp.com";


export const fetchPosts = () => axios.get(`${url}/posts/`);
export const createPost = (newPost) => axios.post(`${url}/posts/createpost`, newPost)




