
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actionTypes';

export const signupRequest = () => ({
    type: SIGNUP_REQUEST
})

export const signupSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data
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