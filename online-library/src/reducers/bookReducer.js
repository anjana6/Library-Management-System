import { GETALLBOOKS } from "../actions/Type";

export default (state = [],action) => {
    const {type,payload} = action;

    switch(type){
        case GETALLBOOKS :
            return({...state,...payload,});
        default:
            return state;
    }
} 