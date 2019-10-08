import { 
    GETHISTORYLIST_REQUEST,
    GETHISTORYLIST_SUCCESS,
    GETHISTORYLIST_FAILURE,

   } from "../actionTypes";
  
  
  const initialState = {
   loading: false,
   error: null,
   data: null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case GETHISTORYLIST_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case GETHISTORYLIST_SUCCESS: {
  
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      }
      case GETHISTORYLIST_FAILURE: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
  
      default:
        return state;
    }
  };