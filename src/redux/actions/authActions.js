import { GET_ERRORS } from "../types/errorTypes";

import { authUser, authLogout } from "../services/authService";
import { LOGIN_USER } from "../types/authTypes";

export const loginUser = (email, password) => async (dispatch) => {
  return await authUser(email, password)
    .then((res) => {
      localStorage.setItem("user", `${res.data.token}`);
      localStorage.setItem("authenticated", JSON.stringify(res.data.user));
      dispatch({
        type: LOGIN_USER,
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

export const logoutUser = () => async (dispatch) => {
  try {
    authLogout();
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};
