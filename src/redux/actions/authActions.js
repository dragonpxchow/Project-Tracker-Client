import * as api from "../../api/authServices";
//import axios from "axios";
import http from "../../api/httpServices";

import { setErrors, clearErrors } from "./errorAction";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CLEAR_ERRORS,
} from "./actionTypes";

// check token and load user data
export const loadUser = () => async (dispatch, getState) => {
  //try {
  // User loading
  dispatch({ type: USER_LOADING });

  // same with axios.defaults.headers.common["x-auth-token"] = jwt;
  const token = getState().auth.token;
  http.setJwt(token); // fixing bi-directional dependencies
  console.log("authActions loadUser token >>>>", token);
  await http
    .get("/users/me")
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log("authActions error >>>>>>>", error.response);
      dispatch(setErrors(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

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
    console.log("authActions signOut >>>>>>>");
    // also remove token from local storage
    dispatch({ type: SIGNOUT_SUCCESS });

    // clean any error after signout
    dispatch(clearErrors());
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (signUpData) => async (dispatch) => {
  console.log("authActions signUp >>>>>>>");
  await http
    .post("/users/register", signUpData)
    .then((res) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
      // clear any error here
      dispatch(clearErrors());
    })
    .catch((error) => {
      console.log("authAction expect error >>>>>>", error.response.data);
      dispatch(
        setErrors(error.response.data, error.response.status, SIGNUP_FAIL)
      );
      dispatch({
        type: SIGNUP_FAIL,
      });
    });
};

/*
// Logout User
export const logout = () => async (dispatch) => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};
*/
