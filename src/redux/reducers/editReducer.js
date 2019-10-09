import { 
    EDIT_REQUEST,
    EDIT_SUCCESS,
    EDIT_FAILURE,
    GETUSER_REQUEST,
    GETUSER_SUCCESS,
    GETUSER_FAILURE
   } from "../actionTypes";
  
  
  const initialState = {
    
    editLoading: false,
    editError: null,
    getUserLoading: false,
    getUserError: null,
    user: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      
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
          editLoading: false
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
          getUserLoading: true
        };
      }
      case GETUSER_SUCCESS: {
  
        return {
          ...state,
          user: action.payload,
          getUserLoading: false
        };
      }
      case GETUSER_FAILURE: {
        return {
          ...state,
          getUserLoading: false,
          getUserError: action.payload,
        };
      }
      default:
        return state;
    }
  };
  