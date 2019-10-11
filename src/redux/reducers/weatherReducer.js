import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
  GETHISTORYLIST_REQUEST,
  GETHISTORYLIST_SUCCESS,
  GETHISTORYLIST_FAILURE
} from "../actionTypes";

const initialState = {
  weatherLoading: false,
  weatherError: null,
  getweatherLoading: false,
  getweatherError: null,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_REQUEST: {
      return {
        ...state,
        weatherLoading: true
      };
    }
    case WEATHER_SUCCESS: {

      return {
        ...state,
        data: action.payload,
        weatherLoading: false
      };
    }
    case WEATHER_FAILURE: {
      return {
        ...state,
        weatherLoading: false,
        weatherError: action.payload,
      };
    }
    case GETHISTORYLIST_REQUEST: {
      return {
        ...state,
        weatherLoading: true
      };
    }
    case GETHISTORYLIST_SUCCESS: {

      return {
        ...state,
        data: action.payload,
        getweatherLoading: false
      };
    }
    case GETHISTORYLIST_FAILURE: {
      return {
        ...state,
        getweatherLoading: false,
        getweatherError: action.payload,
      };
    }
    default:
      return state;
  }
};