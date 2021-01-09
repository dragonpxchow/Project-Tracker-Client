import * as api from "../../api/authServices";
//import axios from "axios";
import http from "../../api/httpServices";

import { returnErrors } from "./errorAction";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./actionTypes";

// check token and load user data
export const loadUser = () => async (dispatch, getState) => {
  //try {
  // User loading
  dispatch({ type: USER_LOADING });

  // same with axios.defaults.headers.common["x-auth-token"] = jwt;
  const token = getState().auth.token;
  http.setJwt(token); // fixing bi-directional dependencies
  await http
    .get("/users/me")
    .then((res) => {
      console.log("AuthActions data >>>>>>", res);
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log("authActions error >>>>>>>", error.response);
      dispatch(returnErrors(error.response.data.msg, error.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });

  /*
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
    */
};
/*
// Setup config/headers and token
export const tokenConfig = (getState: Function) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config: IConfigHeaders = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
*/
// action creators
export const signIn = (loginData) => async (dispatch) => {
  try {
    // fetch auth data from backend
    const { email, password } = loginData;
    const data = await api.login(email, password);
    return dispatch({ type: SIGNIN_SUCCESS, payload: data.user });
  } catch (error) {
    //return dispatch({ type: LOGIN_FAILED, payload: data });
    console.log(error.message);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    // remove token from local storage
    await api.logout();
    return dispatch({ type: SIGNOUT_SUCCESS });
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = () => async (dispatch) => {
  try {
    return dispatch({ type: SIGNUP_SUCCESS });
  } catch (error) {
    console.log(error.message);
  }
};

// Logout User
export const logout = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};
