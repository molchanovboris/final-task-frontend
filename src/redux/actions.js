import { SIGNUP } from "./actionTypes";
import { LOGIN } from "./actionTypes";


export const { signup, login} = params => ({
  type: { SIGNUP, LOGIN },
  payload: params
});