import axios from 'axios';
import {endPoint} from '../config';
import {GETALLBOOKS,ADDBOOK,BOOKDETAILS, SEARCHBOOKS,DELETE_BOOK,SEARCHBOOKSID} from './Type';

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
};

export const addBooks = (formdata) => async dispatch => {
    //console.log(formdata);
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.post(`${endPoint}/api/book/add`,formdata,config);
        //console.log(res.data);
        dispatch({
            type:ADDBOOK,
           // payload:res.data
        })
    }catch(err){
        const errors = err.response.data.errors;
        console.log(errors);
    }
};

export const getBook = (id) =>async dispatch => {
    try {
        const res = await axios.get(`${endPoint}/api/book/details/${id}`);
        console.log(res.data)
        dispatch({
            type:BOOKDETAILS,
            payload:res.data
        })
       // console.log(res);
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
    }
};


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
        console.log(res.data);
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
    }

    

    
};

export const searchAuther = (searchName) => async dispatch => {
     //console.log(searchName);
    const autherName = searchName.search;

      const config = {
        headers:{
          'Content-Type' : 'application/json'
        }
      }
      const body = {
        autherName
      };
     // console.log(body);

    try {
        const res = await axios.post(`${endPoint}/api/book/searchAuther`,body,config);
        //console.log(res.data);

        dispatch({
            type: SEARCHBOOKS,
            payload: res.data
        })
      } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
        
      }
};

export const deleteBook = (Id) => async dispatch =>{
    console.log(Id);
    try {
        await axios.delete(`${endPoint}/api/book/delete/${Id}`);

       dispatch({
               type: DELETE_BOOK,
               payload: Id
           });
       //console.log(res.data);
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors)
        
    }
};

export const searchBookId = (searchBook) => async dispatch => {
    console.log(searchBook);
   const bookId = searchBook.search;

     const config = {
       headers:{
         'Content-Type' : 'application/json'
       }
     }
     const body = {
       bookId
     };
    // console.log(body);

   try {
       const res = await axios.post(`${endPoint}/api/book/searchBookId`,body,config);
       console.log(res.data);

       dispatch({
           type: SEARCHBOOKSID,
           payload: res.data
       })
     } catch (err) {
       const errors = err.response.data.errors;
       console.log(errors);
       
     }
};


// export const deleteBook = () => dispatch => {

//     dispatch({
//         type:DELETE_BOOK,
//         payload: 'haii'
//     })
// }