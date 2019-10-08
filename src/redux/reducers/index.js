import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers"; // TODO: split it
import editReducer from "./authReducers"; // TODO: split it
import historyListReducer from "./historyListReducer";
import historyDetailsReducer from "./historyDetailsReducer";
import weatherReducer from "./weatherReducer";


export default combineReducers({ 
    auth: authReducers,
    form: formReducer,
    weather: weatherReducer,
    historyList: historyListReducer,
    historyDetails: historyDetailsReducer,
    edit: editReducer
 });
