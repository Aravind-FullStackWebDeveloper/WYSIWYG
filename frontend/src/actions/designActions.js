import axios from 'axios';
import { DESIGN_SAVE, DESIGN_LOAD } from '../constants/designConstants';

export const saveDesign = (design) => async (dispatch, getState) => {
  const { userLogin: { userInfo } } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.post('/api/designs', design, config);
    dispatch({ type: DESIGN_SAVE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const loadDesigns = () => async (dispatch, getState) => {
  const { userLogin: { userInfo } } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.get('/api/designs', config);
    dispatch({ type: DESIGN_LOAD, payload: data });
  } catch (error) {
    console.error(error);
  }
};
