import {
    WEATHER_REQUEST,
    WEATHER_SUCCESS,
    WEATHER_FAILURE,
    WEATHERS_REQUEST,
    WEATHERS_SUCCESS,
    WEATHERS_FAILURE,
} from '../actionTypes';

export const weatherRequest = () => ({
    type: WEATHER_REQUEST
})

export const weatherSuccess = (data) => ({
    type: WEATHER_SUCCESS,
    payload: data,

})

export const weatherFailure = (err) => ({
    type: WEATHER_FAILURE,
    payload: err
})

export const weathersRequest = () => ({
    type: WEATHERS_REQUEST
})

export const weathersSuccess = (data) => ({
    type: WEATHERS_SUCCESS,
    payload: data,

})

export const weathersFailure = (err) => ({
    type: WEATHERS_FAILURE,
    payload: err
})