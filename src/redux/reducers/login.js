import { LOGIN } from "../actionTypes";

const initialState = {
  email: '',
  password: ''
};

const login = (state = initialState, action) => {
  switch (action.type) {
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

export default login;
