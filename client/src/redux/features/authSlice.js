import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  errors: null,
  isLoading: false,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart(state) {
      return {
        ...state,
        isLoading: true
      };
    },
    signInSuccess(state, action) { 
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        errors: null // Clear any previous errors
      };
    },
    signInError(state, action) {
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };
    },
    signUpStart(state) {
      return {
        ...state,
        isLoading: true
      };
    },
    signUpSuccess(state) {
      return {
        ...state,
        isLoading: false,
        errors: null // Clear any previous errors
      };
    },
    signUpError(state, action) {
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };
    },
    logoutStart(state) {
      return {
        ...state,
        isLoading: true
      };
    },
    logoutSuccess(state) {
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        errors: null // Clear any previous errors
      };
    },
    logoutError(state, action) {
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };
    },
    profileStart(state) {  
      return {
        ...state,
        isLoading: true
      };
    },
    profileSuccess(state, action) {
      return {
        ...state,
        user: action.payload, 
        isAuthenticated: true,
        isLoading: false,
        errors: null
      };
    },
    profileError(state, action) {
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };
    }
  }
});

export const {
  signInError,
  signInStart,
  signInSuccess,
  signUpError,
  signUpStart,
  signUpSuccess,
  logoutError,
  logoutStart,
  logoutSuccess,
  profileError,
  profileStart,
  profileSuccess
} = authSlice.actions;

export default authSlice.reducer;
