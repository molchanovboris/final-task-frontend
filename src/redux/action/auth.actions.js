
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHECKAUTH_REQUEST,
  CHECKAUTH_SUCCESS,
  CHECKAUTH_FAILURE,
  LOGOUT

} from '../actionTypes';

export const signupRequest = () => ({
  type: SIGNUP_REQUEST
})

export const signupSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
})

export const signupFailure = (err) => ({
  type: SIGNUP_FAILURE,
  payload: err
})

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
})

export const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  payload: err
})
export const checkauthRequest = () => ({
  type: CHECKAUTH_REQUEST
})

export const checkauthSuccess = (data) => ({
  type: CHECKAUTH_SUCCESS,
  payload: data
})

export const checkauthFailure = (err) => ({
  type: CHECKAUTH_FAILURE,
  payload: err
})
export const logOut = () => ({
  type: LOGOUT,
  
})


