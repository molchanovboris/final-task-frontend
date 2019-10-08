import {
    GETHISTORYLIST_REQUEST,
    GETHISTORYLIST_SUCCESS,
    GETHISTORYLIST_FAILURE
} from '../actionTypes';


export const getHistoryListRequest = () => ({
    type: GETHISTORYLIST_REQUEST
})

export const getHistoryListSuccess = (data) => ({
    type: GETHISTORYLIST_SUCCESS,
    payload: data,

})

export const getHistoryListFailure = (err) => ({
    type: GETHISTORYLIST_FAILURE,
    payload: err
})
