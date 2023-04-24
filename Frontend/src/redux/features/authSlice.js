import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoading(state, action) {
      state.isLoading = true
    },
    userLoaded(state, action) {
      state.isAuthenticated = true
      state.isLoading = false
      state.user = action.payload.user
    },
    loginSuccess(state, action) {
      state.isLoading = false
      state.isAuthenticated = true
      state.token= action.payload.token
    },
    registerSuccess(state, action) {
      state.isAuthenticated = true
      state.isLoading = false
      state.user = action.payload;
    }
  }
})

export const { userLoading, userLoaded, loginSuccess, registerSuccess } = authSlice.actions
export default authSlice.reducer;


