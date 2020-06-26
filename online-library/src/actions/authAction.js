import axios from 'axios';
import { USERREGISTER_SUCCESS, USERREGISTER_FAIL,USERLOGIN_SUCCESS,USERLOGIN_FAIL,ADMINLOGIN_SUCCESS,ADMINLOGIN_FAIL,LOGOUT,ADMINREGISTER_SUCCESS,ADMINREGISTER_FAIL } from './Type';
import { endPoint } from '../config';

export const userRegister = (data) => async dispatch => {
  console.log(data.comPassword);
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
  console.log(body);

  try {
    const res = await axios.post(`${endPoint}/api/user/singUp`, body, config);
    // console.log(res);

    dispatch({
      type: USERREGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);
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
    console.log(errors);

    dispatch({
      type: USERLOGIN_FAIL,
      payload:errors
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
      const token = res.data.token;
      axios.defaults.headers.common['x-auth-token'] = token;
      dispatch({
        type: ADMINLOGIN_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.error;
      console.log(errors);
  
      dispatch({
        type: ADMINLOGIN_FAIL,
        payload:errors
      });
    }
  };

  export const adminRegister = ({name,nic,email,mobileNo,password,comPassword}) => async dispatch => {
    console.log({
      name,
      nic,
      email,
      mobileNo,
      password,
      comPassword
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
      password,
      comPassword
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
      const errors = err.response.data.error;
      console.log(errors);
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
