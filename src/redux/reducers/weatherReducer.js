import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
  WEATHERS_REQUEST,
  WEATHERS_SUCCESS,
  WEATHERS_FAILURE,
} from "../actionTypes";

const initialState = {
  weatherLoading: false,
  weatherError: null,
  weathersLoading: false,
  weathersError: null,
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

    case WEATHERS_REQUEST: {
      return {
        ...state,
        weathersLoading: true
      };
    }
    case WEATHERS_SUCCESS: {

      return {
        ...state,
        data: action.payload,
        weatherLoading: false
      };
    }
    case WEATHERS_FAILURE: {
      return {
        ...state,
        weathersLoading: false,
        weathersError: action.payload,
      };
    }
    
    default:
      return state;
  }
};