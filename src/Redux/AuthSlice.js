import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    error:null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null
        },
        logout: (state) => {
            state.user = null,
                state.token = null,
                state.isAuthenticated = false
        },
        loginError: (state, action){
            state.error = action.payload
        },
        clearError: (state){
            state.error = null
        }
    }
})
export default authSlice.reducer;
export const { loginSuccess, logout ,loginError,clearError} = authSlice.actions;