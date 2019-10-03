import * as actions from './weather.actions';
import weatherMap from "../../api/weatherMap";

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