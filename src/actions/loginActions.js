import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants';

const url = 'http://3ada48da9e41.ngrok.io/api/token/';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const data = await axios({
      method: "post",
      url: 'http://47e6d1ed231c.ngrok.io/api/token/',
      
        headers: {
          'Content-Type':'application/json',
        },
        data:JSON.stringify({
          "email":email,
          "password":password
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

    const data = await axios({
      method: "post",
      url: 'http://47e6d1ed231c.ngrok.io/auth/register/',
      headers: {
        'Content-Type':'application/json',
      },
      data:JSON.stringify({
        "emailid": values.email,
        "password": values.password,
        "firstname": values.name,
        "phonenumber": values.mobile,
        "state":values.state,
        "district": values.district,
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
export const tokenPost = (token) => async (dispatch) => {
  const data = await axios({
    method: 'post',
    url: 'http://6e8d903b1731.ngrok.io/auth/verify-account/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      "token": token,
    })
  })
  console.log(data);
}
