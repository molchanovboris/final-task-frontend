import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
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


