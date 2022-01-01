import {
  REGISTER_USER,
  LOGIN_USER,
  USER_LOADING,
  USER_LOADED,
  LOGOUT_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../types/authTypes";

import { AUTH_ERROR, LOGIN_FAILED, REGISTER_FAILED } from "../types/errorTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    }

    case AUTH_ERROR:
    case LOGIN_FAILED:
    case LOGOUT_SUCCESS:
    case REGISTER_FAILED: {
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
