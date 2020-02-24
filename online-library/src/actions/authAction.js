import axios from 'axios';
import {USERREGISTER_SUCCESS,USERREGISTER_FAIL} from './Type';

export const userRegister = ({Fname,Lname,studentNo,nic,email,telNo,mobileNo,password}) =>async dispatch  => {
  
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({Fname,Lname,studentNo,nic,email,telNo,mobileNo,password});
    console.log(body);

    try {
        const res = await axios.post('http://localhost:5000/api/user/singUp',body,config);
        console.log(res);

        dispatch({
            type:USERREGISTER_SUCCESS,
            payload:res.data
        })
    } catch (err) {
        const errors = err.response.data.errors
        console.log(errors);
        // const errors = err.response.data.errors;
        // console.log(errors);

        dispatch({
            type:USERREGISTER_FAIL,

        })
    }
}