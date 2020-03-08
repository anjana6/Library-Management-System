import { GETALLBOOKS,ADDBOOK,BOOKDETAILS } from "../actions/Type";

const initialState = {
   allBooks : [] ,
   addbook : '',
   loading: true,
   bookDetails: null
}

// export default (state = [],action) => {
//     const {type,payload} = action;

//     switch(type){
//         case GETALLBOOKS :
//             return({...state,...payload,});
//         default:
//             return state;
//     }
// } 

export default (state= initialState,action) => {
    const {type,payload} = action;

    switch(type){
        case GETALLBOOKS :
            return({...state,allBooks:payload});
        case ADDBOOK:
            return({...state,addbook:payload});
        case BOOKDETAILS:
            return({...state,bookDetails:payload,loading:false});
        default:
            return state;
    }
}