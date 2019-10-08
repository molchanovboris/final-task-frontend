import * as actions from './history.actions';
import axiosInstance from "../../api/index";

export const getHistoryList = () => async dispatch => {

    dispatch(actions.getHistoryListRequest());
    try {
        const response = await axiosInstance.get('/history');
        dispatch(actions.getHistoryListSuccess(response.data));
    } catch (error) {
        dispatch(actions.getHistoryListFailure({ message: error.message }));
    }
};

