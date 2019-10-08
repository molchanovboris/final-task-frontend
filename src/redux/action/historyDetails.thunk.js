import * as actions from './historyDetails.action';
import axiosInstance from "../../api/index";

export const getHistoryDetails = () => async dispatch => {

    dispatch(actions.getHistoryDetailsRequest());
    try {
        const response = await axiosInstance.get('/history/:id');
        dispatch(actions.getHistoryDetailsSuccess(response.data));
    } catch (error) {
        dispatch(actions.getHistoryDetailsFailure({ message: error.message }));
    }
};

