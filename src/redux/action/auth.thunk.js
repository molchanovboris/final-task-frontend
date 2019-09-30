
import * as actions from './auth.actions';
import history from "../../history";

import axiosInstance from '../../api';
import weatherMap from "../../api/weatherMap";
import { async } from 'q';


export const createSignup = formValues => async dispatch => {
    dispatch(actions.signupRequest());

    try {
        const result = await axiosInstance.post('/auth/signup', formValues)
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
        history.push('/weather');
        
    } catch (error) {
        dispatch(actions.loginFailure({ message: error.message }));
    }

};



export const editUser = (id, formValues) => async dispatch => {
    dispatch(actions.loginRequest());

    try {
        const result = await axiosInstance.post('/auth/login', formValues)
        dispatch(actions.loginSuccess(result.data));
        history.push('/weather');
        
    } catch (error) {
        dispatch(actions.loginFailure({ message: error.message }));
    }

};

export const fetchWeather = ({lat,lng}) => async dispatch => {
    const response = await weatherMap.$get(`/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=7552cb9f95f273b6eaa304fc8b5f5e8f`);
    dispatch({ type: 'FETCH_WEATHER', payload: response.data })
};
