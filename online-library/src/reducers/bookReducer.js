import { GETALLBOOKS } from "../actions/Type";

const initialState = {
   allBooks : [] ,
   addbooks : ''
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
        default:
            return state;
    }
}