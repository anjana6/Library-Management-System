import {USERREGISTER_SUCCESS,USERREGISTER_FAIL, USERLOGIN_SUCCESS, USERLOGIN_FAIL, ADMINLOGIN_SUCCESS, ADMINLOGIN_FAIL,LOGOUT,ADMINREGISTER_SUCCESS,ADMINREGISTER_FAIL} from '../actions/Type';

const initialState = {
    token:localStorage.getItem('token'),
    isRegister:false,
    isAuthenticated:false,
    loading:true,
    errors:null
}

export default (state = initialState,action) => {
    const {type,payload} = action;
    console.log(type);
    switch(type){
        case USERREGISTER_SUCCESS:
        case ADMINREGISTER_SUCCESS:    
            return { ...state,token:null,isRegister:payload,isAuthenticated:null,loading:false,errors:null};
        case USERLOGIN_SUCCESS:
        case ADMINLOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return{ ...state,token:payload.token,isAuthenticated:true,loading:false,errors:null}

        case USERREGISTER_FAIL:
        case ADMINREGISTER_FAIL:    
            return {...state,toekn:null,isRegister:false,isAuthenticated:false,loading:false,errors:payload};
        case USERLOGIN_FAIL:
        case ADMINLOGIN_FAIL:
            return {...state,toekn:null,isAuthenticated:false,loading:false,errors:payload};
        case LOGOUT:
            localStorage.removeItem('token');
            return {...state,toekn:null,isAuthenticated:false,loading:true,errors:null};
        default:
            return state;

    }
}