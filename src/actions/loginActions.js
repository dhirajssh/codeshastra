import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants';

const url = 'http://00666518765b.ngrok.io/api/token/';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const data = await axios.post(
      url,
      {
        headers: {
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          email:email,
          password:password
        })
      });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
}

export const register = (values) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const data = await axios.post(
      'http://djodhawat.pythonanywhere.com/auth/register/',
      {
        headers: {
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          emailid: values.email,
          password: values.password,
          firstname: values.name,
          phonenumber: values.number,
          state:values.state,
          district: values.district,
        })
      });
    
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error,
      })
    }

  }
