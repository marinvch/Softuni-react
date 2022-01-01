import {
  GET_POSTS,
  EDIT_POST,
  CREATE_POST,
  DELETE_POST,
} from "../actions/postActions";
const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        posts: action.payload,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
