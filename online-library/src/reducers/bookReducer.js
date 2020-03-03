import { GETALLBOOKS,ADDBOOK } from "../actions/Type";

const initialState = {
   allBooks : [] ,
   addbook : ''
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
        default:
            return state;
    }
}