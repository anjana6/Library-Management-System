import axios from 'axios';
import {endPoint} from '../config';
import {GETALLBOOKS,ADDBOOK,BOOKDETAILS} from './Type';

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


export const editBooks = () => async dispatch =>{
    // console.log({Id});

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify();

    const res = await axios.put(`${endPoint}/api/book/update`,body,config);

    console.log(res.data);
}