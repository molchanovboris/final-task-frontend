import { 
    EDIT_REQUEST,
    EDIT_SUCCESS,
    EDIT_FAILURE,
    GETUSER_REQUEST,
    GETUSER_SUCCESS,
    GETUSER_FAILURE
} from "../actionTypes";

export const editRequest = () => ({
    type: EDIT_REQUEST
})

export const editSuccess = (data) => ({
    type: EDIT_SUCCESS,
    payload: data,

})

export const editFailure = (err) => ({
    type: EDIT_FAILURE,
    payload: err
})
export const getuserRequest = () => ({
    type: GETUSER_REQUEST
})

export const getuserSuccess = (data) => ({
    type: GETUSER_SUCCESS,
    payload: data,

})

export const getuserFailure = (err) => ({
    type: GETUSER_FAILURE,
    payload: err
})