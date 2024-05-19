import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/authConstants';

export const login = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/users/login', { username, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
