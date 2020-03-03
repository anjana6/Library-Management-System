import {USERREGISTER_SUCCESS,USERREGISTER_FAIL, USERLOGIN_SUCCESS, USERLOGIN_FAIL, ADMINLOGIN_SUCCESS, ADMINLOGIN_FAIL} from '../actions/Type';

const initialState = {
    token:localStorage.getItem('token'),
    isRegister:false,
    isAuthenticated:null,
    loading:false
}

export default (state = initialState,action) => {
    const {type,payload} = action;
    switch(type){
        case USERREGISTER_SUCCESS:
            
            return { ...state,token:null,isRegister:payload,isAuthenticated:null,loading:false};
        case USERLOGIN_SUCCESS:
        case ADMINLOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return{ ...state,token:payload.token,isAuthenticated:true,loading:false}

        case USERREGISTER_FAIL:
            
            return {...state,toekn:null,isRegister:false,isAuthenticated:false,loading:true};
        case USERLOGIN_FAIL:
        case ADMINLOGIN_FAIL:
            localStorage.removeItem('token');
            return {...state,toekn:null,isRegister:false,isAuthenticated:false,loading:true};
        default:
            return state;

    }
}