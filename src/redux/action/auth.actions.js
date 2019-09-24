
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
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