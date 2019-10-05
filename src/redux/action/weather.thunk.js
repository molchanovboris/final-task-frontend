import * as actions from './weather.actions';
import weatherMap from "../../api/weatherMap";
import axiosInstance from "../../api/index";



export const fetchWeather = (lat,lng) => async (dispatch, getState) => {

    dispatch(actions.weatherRequest());
    try {
        // const { _id } = getState().auth.user;
        const result = await weatherMap.get(`/data/2.5/forecast?lat=${ lat}&lon=${lng}&appid=7552cb9f95f273b6eaa304fc8b5f5e8f`);
        dispatch(actions.weatherSuccess(result.data.list));
    } catch (error) {
        dispatch(actions.weatherFailure({ message: error.message }));
    }

};

export const createWeather = formValues => async dispatch => {
    dispatch(actions.weathersRequest());

    try {
        const result = await axiosInstance.post('/weather', formValues);
        console.log(formValues);
        dispatch(actions.weathersSuccess(result.data.list));
        

    } catch (error) {
        dispatch(actions.weathersFailure({ message: error.message }));
    }

};