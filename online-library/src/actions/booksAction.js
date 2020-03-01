import axios from 'axios';
import {endPoint} from '../config';
import {GETALLBOOKS} from './Type';

export const getBooks = () =>async dispatch =>{
    

    try {
        const res = await axios.get(`${endPoint}/api/book`);
        console.log(res.data);
       
        dispatch({
            type: GETALLBOOKS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
    }
}