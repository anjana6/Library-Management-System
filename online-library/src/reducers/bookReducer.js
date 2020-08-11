import { GETALLBOOKS,ADDBOOK,BOOKDETAILS, SEARCHBOOKS, DELETE_BOOK,SEARCHBOOKSID,ADDBOOK_FAIL} from "../actions/Type";

const initialState = {
   allBooks : [] ,
   isBookAdd : false,
   loading: true,
   book: null,
   editdetail:true,
   errors:null
}

export default (state = initialState,action) => {
    const {type,payload} = action;

    switch(type){

        case GETALLBOOKS :
        case SEARCHBOOKS:
        case SEARCHBOOKSID:
            return({...state,allBooks:payload,loading:false,isBookAdd:false});

        case ADDBOOK:
            return({...state,isBookAdd:true,loading:false,errors:null});

        case BOOKDETAILS:
            return({...state,book:payload,loading:false,editdetail:false});

        case DELETE_BOOK:
            return({...state,allBooks:state.allBooks.filter(book => book._id !== payload)});

        case ADDBOOK_FAIL:
            return({...state,errors: payload})

        default:
            return state;
    }
}