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
    loginUser(state, action) {
      state.isAuthenticated = true
      state.token = action.payload.token
      state.user = action.payload.user
    },
    userLoaded(state, action) {
      state.isAuthenticated = true
      state.isLoading = false
      state.user = action.payload.user
    },
    loginSuccess(state, action) {
      state.isLoading = false
    },
    registerSuccess(state, action) {
      state.isAuthenticated = true
      state.isLoading = false
    }
  }
})

export const { userLoading, loginUser, userLoaded, loginSuccess, registerSuccess } = authSlice.actions
export default authSlice.reducer;


