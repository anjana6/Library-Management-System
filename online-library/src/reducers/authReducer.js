import {USERREGISTER_SUCCESS,USERREGISTER_FAIL} from '../actions/Type';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:false
}

export default (state = initialState,action) => {
    const {type,payload} = action;
    switch(type){
        case USERREGISTER_SUCCESS:
            localStorage.setItem('token',payload.token)
            return { ...state,...payload,isAuthenticated:true,loading:false};

        case USERREGISTER_FAIL:
            localStorage.removeItem('token');
            return {...state,toekn:null,isAuthenticated:false,loading:true};
        default:
            return state;

    }
}