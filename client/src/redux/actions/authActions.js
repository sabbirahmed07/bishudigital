import * as actionTypes from "./actionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//Register User
export const registeruser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//login - get user token
export const loginuser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //save to local storage
      const { token } = res.data;
      //set token to local storage
      localStorage.setItem("jwtToken", token);
      //set token to auth header
      setAuthToken(token);
      //decode toke to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};

//log user out

export const logoutuser = () => dispatch => {
  //remove token from local storage
  localStorage.removeItem("jwtToken");
  //remove the auth header for future req
  setAuthToken(false);
  //set the current user {} which is set authenticated to false
  dispatch(setCurrentUser({}));
};
