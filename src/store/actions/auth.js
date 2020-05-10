import axios from "axios";

import * as actionTypes from "./actionTypes";
import { loadingStart, loadingEnd } from "./loading";

// Show Spinner
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};


export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(loadingStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBANP6NDoUZujTuYiwC8CT74QhkKSp3E0o";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBANP6NDoUZujTuYiwC8CT74QhkKSp3E0o";
    }

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
        dispatch(loadingEnd());
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
        console.log(err);
        dispatch(loadingEnd());
      });
  };
};
