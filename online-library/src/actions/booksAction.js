import axios from 'axios';
import {endPoint} from '../config';
import {GETALLBOOKS,ADDBOOK,BOOKDETAILS, SEARCHBOOKS} from './Type';

export const getBooks = () =>async dispatch =>{
    

    try {
        const res = await axios.get(`${endPoint}/api/book`);
        // console.log(res.data);
       
        dispatch({
            type: GETALLBOOKS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
    }
};

export const addBooks = (formdata) => async dispatch => {
    console.log(formdata);
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.post(`${endPoint}/api/book/add`,formdata,config);
        console.log(res.data);
        dispatch({
            type:ADDBOOK,
            payload:res.data
        })
    }catch(err){
        const errors = err.response.data.errors;
        console.log(errors);
    }
};

export const getDetails = (id) =>async dispatch => {
    try {
        const res = await axios.get(`${endPoint}/api/book/details/${id}`);
        dispatch({
            type:BOOKDETAILS,
            payload:res.data
        })
       // console.log(res);
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
    }
}


export const editBooks = (id,formData) => async dispatch =>{
    // console.log(id,formData);
  

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(formData);
    // console.log(body);
    try {
        const res = await axios.put(`${endPoint}/api/book/update/${id}`,body,config);
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
    }

    

    
};

export const searchAuther = (autherN) => async dispatch => {
    // console.log(autherN);
    const autherName = autherN.search;

    const body = {
        autherName
      };

      const config = {
        headers:{
          'Content-Type' : 'application/json'
        }
      }
     // console.log(body);

    try {
        // setAutherName(value);
        // console.log(body);
        const res = await axios.post(`${endPoint}/api/book/searchAuther`,body,config);

        dispatch({
            type: SEARCHBOOKS,
            payload: res.data
        })
        //console.log(res.data);
      } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
        
      }
}