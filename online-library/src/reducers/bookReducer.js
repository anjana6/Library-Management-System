import { GETALLBOOKS,ADDBOOK,BOOKDETAILS, SEARCHBOOKS, DELETE_BOOK,SEARCHBOOKSID } from "../actions/Type";

const initialState = {
   allBooks : [] ,
   isBookAdd : false,
   loading: true,
   bookDetails: null
}

export default (state= initialState,action) => {
    const {type,payload} = action;
console.log(type,payload);
    switch(type){
        case GETALLBOOKS :
        case SEARCHBOOKS:
        case SEARCHBOOKSID:
            return({...state,allBooks:payload,loading:false,isBookAdd:false});
        case ADDBOOK:
            return({...state,isBookAdd:true,loading:false});
        case BOOKDETAILS:
            return({...state,bookDetails:payload,loading:false});
        case  DELETE_BOOK:
            return({...state,allBooks:state.allBooks.filter(book => book._id !== payload)})
        default:
            return state;
    }
}