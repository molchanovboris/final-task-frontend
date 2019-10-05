
import * as actions from './auth.actions';
import history from "../../history";

import axiosInstance from '../../api';


export const createSignup = formValues => async dispatch => {
    dispatch(actions.signupRequest());

    try {
        const result = await axiosInstance.post('/auth/signup', formValues);
        dispatch(actions.signupSuccess(result.data));
        history.push('/login');

    } catch (error) {
        dispatch(actions.signupFailure({ message: error.message }));
    }

};

export const createLogin = formValues => async dispatch => {
    dispatch(actions.loginRequest());

    try {
        const result = await axiosInstance.post('/auth/login', formValues)

        dispatch(actions.loginSuccess(result.data));
        localStorage.setItem('token', result.data.token);
        history.push('/weather');
        
    } catch (error) {
        dispatch(actions.loginFailure({ message: error.message }));
    }

};





