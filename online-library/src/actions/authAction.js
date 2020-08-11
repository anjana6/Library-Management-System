import axios from 'axios';
import { USERREGISTER_SUCCESS, USERREGISTER_FAIL,USERLOGIN_SUCCESS,USERLOGIN_FAIL,ADMINLOGIN_SUCCESS,ADMINLOGIN_FAIL,LOGOUT,ADMINREGISTER_SUCCESS,ADMINREGISTER_FAIL } from './Type';
import { endPoint } from '../config';

export const userRegister = (data) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    Fname:data.Fname,
    Lname:data.Lname,
    studentNo:data.studentNo,
    nic:data.nic,
    email:data.email,
    telNo:data.telNo,
    mobileNo:data.mobileNo,
    password:data.password,
    comPassword:data.comPassword
  });

  try {
    const res = await axios.post(`${endPoint}/api/user/singUp`, body, config);

    dispatch({
      type: USERREGISTER_SUCCESS,
      payload: res.data
    });

  } catch (err) {
    const errors = err.response.data.error;
  
    dispatch({
      type: USERREGISTER_FAIL,
      payload:errors
    });
  }
};

export const userLogin = ({ email, password }) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${endPoint}/api/user/singIn`,body,config);
    const token = res.data.token;
    axios.defaults.headers.common['x-auth-token'] = token;

    dispatch({
      type: USERLOGIN_SUCCESS,
      payload: res.data
    });

  } catch (err) {
    const errors = err.response.data.error;

    dispatch({
      type: USERLOGIN_FAIL,
      payload:errors
    });
  }
};

export const adminLogin = ({ email, password }) => async dispatch => {
 
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post(`${endPoint}/api/admin/singIn`,body,config);
      const token = res.data.token;
      axios.defaults.headers.common['x-auth-token'] = token;

      dispatch({
        type: ADMINLOGIN_SUCCESS,
        payload: res.data
      });

    } catch (err) {
      const errors = err.response.data.error;
  
      dispatch({
        type: ADMINLOGIN_FAIL,
        payload:errors
      });
    }
  };

  export const adminRegister = ({name,nic,email,mobileNo,password,comPassword}) => async dispatch => {
   
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({
      name,
      nic,
      email,
      mobileNo,
      password,
      comPassword
    });
  
    try {
      const res = await axios.post(`${endPoint}/api/admin/singUp`, body, config);
  
      dispatch({
        type: ADMINREGISTER_SUCCESS,
        payload: res.data
      });

    } catch (err) {
      const errors = err.response.data.error;

      dispatch({
        type: ADMINREGISTER_FAIL,
        payload: errors
      });
    }
  };
  
  
  export const logOut = () => dispatch =>{
    
    dispatch({
      type: LOGOUT
    });

  } 
