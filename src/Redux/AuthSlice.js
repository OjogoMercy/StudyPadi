import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    firstname: null,
    lastname: null,
    password: null,
    email: null,
  },
  token: null,
  isAuthenticated: false,
  error: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const {user,token} = action.payload
            state.user = {
                id: user.id,
                email: user.email,
                password: user.password,
                firstname: user.firstname,
                lastname:user.lastname
            }
            state.token = token;
            state.isAuthenticated = true;
            state.error = null
        },
        logout: (state) => {
            state.user = null,
                state.token = null,
                state.isAuthenticated = false
        },
        loginError: (state, action) =>{
            state.error = action.payload
        },
        clearError: (state) =>{
            state.error = null
        }
    }
})
export default authSlice.reducer;
export const { loginSuccess, logout ,loginError,clearError} = authSlice.actions;