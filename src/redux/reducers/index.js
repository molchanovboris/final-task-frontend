import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import weatherReducer from "./weatherReducer";

export default combineReducers({ 
    auth: authReducers,
    form: formReducer,
    weather: weatherReducer
 });
