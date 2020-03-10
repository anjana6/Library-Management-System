import axios from 'axios';
import { USERREGISTER_SUCCESS, USERREGISTER_FAIL,USERLOGIN_SUCCESS,USERLOGIN_FAIL,ADMINLOGIN_SUCCESS,ADMINLOGIN_FAIL,LOGOUT,ADMINREGISTER_SUCCESS,ADMINREGISTER_FAIL } from './Type';
import { endPoint } from '../config';

export const userRegister = ({
  Fname,
  Lname,
  studentNo,
  nic,
  email,
  telNo,
  mobileNo,
  password
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    Fname,
    Lname,
    studentNo,
    nic,
    email,
    telNo,
    mobileNo,
    password
  });
  console.log(body);

  try {
    const res = await axios.post(`${endPoint}/api/user/singUp`, body, config);
    // console.log(res);

    dispatch({
      type: USERREGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch({
      type: USERREGISTER_FAIL
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
    // console.log(res.data);
    dispatch({
      type: USERLOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);

    dispatch({
      type: USERLOGIN_FAIL
    });
  }
};

export const adminLogin = ({ email, password }) => async dispatch => {
  // console.log({ email, password });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ email, password });
    //console.log(body);
  
    try {
      const res = await axios.post(`${endPoint}/api/admin/singIn`,body,config);
      // console.log(res.data);
      dispatch({
        type: ADMINLOGIN_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
  
      dispatch({
        type: ADMINLOGIN_FAIL
      });
    }
  };

  export const adminRegister = ({name,nic,email,mobileNo,password}) => async dispatch => {
    console.log({
      name,
      nic,
      email,
      mobileNo,
      password
    })
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
      password
    });
    console.log(body);
  
    try {
      const res = await axios.post(`${endPoint}/api/admin/singUp`, body, config);
      console.log(res);
  
      dispatch({
        type: ADMINREGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      dispatch({
        type: ADMINREGISTER_FAIL
      });
    }
  };
  
  
  export const logOut = () => dispatch =>{
    //console.log('hii');
    dispatch({
      type: LOGOUT
    });

  } 
