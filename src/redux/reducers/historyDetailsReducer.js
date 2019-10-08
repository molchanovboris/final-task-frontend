import { 
    GETHISTORYDETAILS_REQUEST,
    GETHISTORYDETAILS_SUCCESS,
    GETHISTORYDETAILS_FAILURE

} from "../actionTypes";
  
  
  const initialState = {
   loading: false,
   error: null,
   data: null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case GETHISTORYDETAILS_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case GETHISTORYDETAILS_SUCCESS: {
  
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      }
      case GETHISTORYDETAILS_FAILURE: {
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