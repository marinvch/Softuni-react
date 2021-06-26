import axios from 'axios';

export const url = "https://marin-forum.herokuapp.com";

const API = axios.create({ baseURL: "https://marin-forum.herokuapp.com" })

//REGISTRATION AND LOGIN

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);

//POST CRUD
export const fetchPosts = () => API.get(`/posts/`);
export const createPost = (newPost) => API.post(`/posts/createpost`, newPost)
// export const likePost = (id,likes) => API.put(`/posts/like/${id}`, likes);
// export const updatePost = (id,updatedPost) => API.put(`/posts/like/${id}`, updatedPost);
// export const deletePost = (id) => API.put(`/posts/like/${id}`);


//COMMENTS CRUD

// axios.post(`${url}/comments/add`, data, {
//     headers: {
//       "x-auth-token": userData.token,
//     },
//   });



// const getPost = async () => {
//     await axios.all([
//       await axios.get(`${url}/posts/${id}`).then((res) => {
//         setPost(res.data);
//       }),
//     ]);
//   };

// await axios.put(`${url}/posts/${id}`, data, {
//     headers: {
//       "x-auth-token": userData.token,
//     },
//   });
//   history.push("/");



