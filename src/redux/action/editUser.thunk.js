import * as actions from './edit.actions';
import axiosInstance from '../../api';

// export const editUser = (_id, formValues) => async (dispatch, getState) => {

//     const response = await axiosInstance.put(`/auth/update/{_id}`, formValues);
//     dispatch ({type: EDIT_USER, payload: response.data});

//     // dispatch(actions.weatherRequest());
//     // try {
//     //     // const { _id } = getUser();
//     //     const result = await weatherMap.get(`/data/2.5/forecast?lat=${ lat}&lon=${lng}&appid=7552cb9f95f273b6eaa304fc8b5f5e8f`);
//     //     dispatch(actions.weatherSuccess(result.data.list));

//     // } catch (error) {
//     //     dispatch(actions.weatherFailure({ message: error.message }));
//     // }

// };

export const getUser = (_id) => async (dispatch) => {
    dispatch(actions.getuserRequest());

    try {
        
        const result = await axiosInstance.post('/auth/getUser', {_id})
        dispatch(actions.getuserSuccess(result.user));

    } catch (error) {
        dispatch(actions.getuserFailure({ message: error.message }));
    }

};


export const editUser = (username, password) => async dispatch  => {
    dispatch(actions.editRequest());

    try {

        const result = await axiosInstance.put('/auth/update', {username, password})
        dispatch(actions.editSuccess(result.user));

    } catch (error) {
        dispatch(actions.editFailure({ message: error.user }));
    }

};