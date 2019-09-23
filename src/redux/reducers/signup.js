import { SIGNUP } from "../actionTypes";

const initialState = {
  username: '',
  email: '',
  password: ''
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export default signup;
