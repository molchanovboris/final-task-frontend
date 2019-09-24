import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signup from "./signup";
import login from "./login";

export default combineReducers({ 
    signup, 
    login,
    form: formReducer
 });
