import {
    GETHISTORYDETAILS_REQUEST,
    GETHISTORYDETAILS_SUCCESS,
    GETHISTORYDETAILS_FAILURE
} from '../actionTypes';


export const getHistoryDetailsRequest = () => ({
    type: GETHISTORYDETAILS_REQUEST
})

export const getHistoryDetailsSuccess = (data) => ({
    type: GETHISTORYDETAILS_SUCCESS,
    payload: data,

})

export const getHistoryDetailsFailure = (err) => ({
    type: GETHISTORYDETAILS_FAILURE,
    payload: err
})
