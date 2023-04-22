import { combineReducers } from "redux";
import authReducers from "./authReducer";
import errorAuthReducer from "./errorAuthReducer";
import postsReducer from "./postsReducer";

const reducers = combineReducers({
  auth: authReducers,
  authError: errorAuthReducer,
  posts: postsReducer,
});

export default reducers;
