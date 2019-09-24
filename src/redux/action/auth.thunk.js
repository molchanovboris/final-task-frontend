
import * as actions from './auth.actions';

import axiosInstance from '../../api';

export const createSignup = formValues => async dispatch => {
    dispatch(actions.signupRequest());

    try {
        const result = await axiosInstance.post('/auth/register', formValues)
        dispatch(actions.signupSuccess(result.data));

    } catch (error) {
        dispatch(actions.signupFailure({ message: error.message }));
    }

};
