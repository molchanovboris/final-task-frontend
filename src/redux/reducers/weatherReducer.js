import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
} from "../actionTypes";

const initialState = {
  weatherLoading: false,
  weatherError: null,
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
    
    default:
      return state;
  }
};