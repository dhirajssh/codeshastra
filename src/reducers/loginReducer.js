import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type){
    case USER_LOGIN_REQUEST:
      console.log(action.payload)
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      console.log(action.payload);
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      console.log(action.payload);
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};