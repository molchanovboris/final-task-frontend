import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  GETUSER_REQUEST,
  GETUSER_SUCCESS,
  GETUSER_FAILURE
} from "../actionTypes";


const initialState = {
  signupLoading: false,
  signupError: null,
  loginLoading: false,
  loginError: null,
  isAuthenticated: false,
  editLoading: false,
  editError: null,
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
    case EDIT_REQUEST: {
      return {
        ...state,
        editLoading: true
      };
    }
    case EDIT_SUCCESS: {

      return {
        ...state,
        user: action.payload,
        weatherLoading: false
      };
    }
    case EDIT_FAILURE: {
      return {
        ...state,
        editLoading: false,
        editError: action.payload,
      };
    }
    case GETUSER_REQUEST: {
      return {
        ...state,
        editLoading: true
      };
    }
    case GETUSER_SUCCESS: {

      return {
        ...state,
        user: action.payload,
        weatherLoading: false
      };
    }
    case GETUSER_FAILURE: {
      return {
        ...state,
        editLoading: false,
        editError: action.payload,
      };
    }
    default:
      return state;
  }
};
