import { SIGNUP } from "../actionTypes";
import { LOGIN } from "../actionTypes";


const initialState = {
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
  isAuthenticated: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP: {
      return {
        ...state,
        ...action.payload
      };
    }
    case LOGIN: {
      return {
        ...state,
        ...action.payload
      };
    }
    
    default:
      return state;
  }
};
