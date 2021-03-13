import axios from 'axios';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/ProductConstants';

export const listProducts = () => async (
    dispatch,
  ) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
  
      const { data } = await axios.get('http://6e8d903b1731.ngrok.io/auth/items');
  
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload: error,
        });
      }
  };