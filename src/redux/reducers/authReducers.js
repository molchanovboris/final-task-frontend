import { 
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
 } from "../actionTypes";


const initialState = {
  signupLoading: false,
  signupError: null,
  loginLoading: false,
  loginError: null,
  isAuthenticated: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        signupLoading: true
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        signupLoading: false
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        signupLoading: false,
        signupError: action.payload,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginLoading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginLoading: false,
        isAuthenticated: true,
        user: action.payload.user
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload,
        isAuthenticated: false
      };
    }
    
    default:
      return state;
  }
};
