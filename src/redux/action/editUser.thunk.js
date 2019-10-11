import * as actions from './edit.actions';
import axiosInstance from '../../api';

export const getUser = (_id) => async (dispatch) => {
  dispatch(actions.getuserRequest());
  try {
    const result = await axiosInstance.post('/auth/getUser', { _id })
    dispatch(actions.getuserSuccess(result.user));

  } catch (error) {
    dispatch(actions.getuserFailure({ message: error.message }));
  }
};

export const editUser = (username, password) => async dispatch => {
  dispatch(actions.editRequest());
  try {
    const result = await axiosInstance.put('/auth/update', password ? { username, password } : { username })
    dispatch(actions.editSuccess(result.user));
  } catch (error) {
    dispatch(actions.editFailure({ message: error.user }));
  }
};