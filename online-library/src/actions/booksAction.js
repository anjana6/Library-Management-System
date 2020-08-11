import axios from 'axios';
import {endPoint} from '../config';
import {GETALLBOOKS,ADDBOOK,BOOKDETAILS, SEARCHBOOKS,DELETE_BOOK,SEARCHBOOKSID,ADDBOOK_FAIL} from './Type';

export const getBooks = () =>async dispatch =>{
    try {
        const res = await axios.get(`${endPoint}/api/book`);
    
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

    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try{
        await axios.post(`${endPoint}/api/book/add`,formdata,config);
        
        dispatch({
            type:ADDBOOK,
        })

    }catch(err){
        const errors = err.response.data.error;
       
        dispatch({
            type:ADDBOOK_FAIL,
            payload:errors
        })
        
    }
};

export const getBook = (id) =>async dispatch => {
    try {
        const res = await axios.get(`${endPoint}/api/book/details/${id}`);
        
        dispatch({
            type:BOOKDETAILS,
            payload:res.data
        })
       
    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors);
    }
};


export const editBooks = (id,formData) => async dispatch =>{
   
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(formData);
    
    try {
         await axios.put(`${endPoint}/api/book/update/${id}`,body,config);

         dispatch({
            type:ADDBOOK,
        })
        
    } catch (err) {
        const errors = err.response.data.error;
        
        dispatch({
            type:ADDBOOK_FAIL,
            payload:errors
        })
    }

    

    
};

export const searchAuther = (searchName) => async dispatch => {
     
    const autherName = searchName.search;

      const config = {
        headers:{
          'Content-Type' : 'application/json'
        }
      }
      const body = {
        autherName
      };

    try {
        const res = await axios.post(`${endPoint}/api/book/searchAuther`,body,config);

        dispatch({
            type: SEARCHBOOKS,
            payload: res.data
        })
      } catch (err) {
        const errors = err.response.data.error;
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
       
    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors)
        
    }
};

export const searchBookId = (searchBook) => async dispatch => {
    
   const bookId = searchBook.search;

     const config = {
       headers:{
         'Content-Type' : 'application/json'
       }
     }
     const body = {
       bookId
     };
    

   try {
       const res = await axios.post(`${endPoint}/api/book/searchBookId`,body,config);
       

       dispatch({
           type: SEARCHBOOKSID,
           payload: res.data
       })
     } catch (err) {
       const errors = err.response.data.errors; 
       console.log(errors);
     }
};


