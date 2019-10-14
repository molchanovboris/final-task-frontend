import * as actions from './weather.actions';
import weatherMap from "../../api/weatherMap";
import axiosInstance from "../../api/index";

export const fetchWeather = (lat, lng) => async dispatch => {
  dispatch(actions.weatherRequest());
  try {
    const response = await weatherMap.get(`/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=7552cb9f95f273b6eaa304fc8b5f5e8f`);
    await axiosInstance.post('/history', {
      formatted_address: response.data.city.name,
      date: new Date(),
      weather:
        response.data.list,
    });
    dispatch(actions.weatherSuccess(response.data.list));
  } catch (error) {
    dispatch(actions.weatherFailure({ message: error.message }));
  }
};
