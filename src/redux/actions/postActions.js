import { GET_ERRORS } from "../types/errorTypes";
import { getAllPosts } from "../services/postService";

export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POSTS";
export const DELETE_POST = "DELETE_POSTS";

export const getPosts = () => async (dispatch) => {
  await getAllPosts()
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

// export const deletePost = (id) => {
//   return {
//     type: DELETE_POST,
//     payload: id,
//   };
// };

// export const edit = (id) => {
//   return {
//     type: EDIT_POST,
//     payload: id,
//   };
// };npm
